import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import plateUrl from 'medical-background-plate';

const hero = document.querySelector('[data-pulse-hero]');
const host = document.querySelector('[data-medical-canvas]');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = THREE.MathUtils.clamp;
const smooth = (start, end, value) => THREE.MathUtils.smoothstep(value, start, end);

async function createMedicalScene() {
  if (!hero || !host) return;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch {
    host.dataset.renderState = 'fallback';
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 700 ? 1.25 : 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.transmissionResolutionScale = .5;
  renderer.setClearColor(0xe9f1f3, 1);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.append(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-4, 4, 2.5, -2.5, .1, 40);
  camera.position.set(0, 0, 9);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, .035);
  scene.environment = environment.texture;
  room.dispose();
  pmrem.dispose();

  const ambient = new THREE.HemisphereLight(0xf2ffff, 0x759ea5, 2.1);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 3.3);
  key.position.set(-3, 6, 5);
  scene.add(key);
  const edgeLight = new THREE.DirectionalLight(0x3ed3da, 2.6);
  edgeLight.position.set(5, 1, -1);
  scene.add(edgeLight);

  let backgroundTexture;
  try {
    backgroundTexture = await new THREE.TextureLoader().loadAsync(plateUrl);
  } catch {
    renderer.dispose();
    host.dataset.renderState = 'fallback';
    return;
  }
  backgroundTexture.colorSpace = THREE.SRGBColorSpace;
  const backdrop = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: backgroundTexture, toneMapped: false }));
  backdrop.position.z = -5;
  scene.add(backdrop);

  const outline = [
    [-.43,-1.42],[.43,-1.42],[.43,-.43],[1.42,-.43],
    [1.42,.43],[.43,.43],[.43,1.42],[-.43,1.42],
    [-.43,.43],[-1.42,.43],[-1.42,-.43],[-.43,-.43]
  ];
  const shape = new THREE.Shape();
  outline.forEach(([x,y], index) => index ? shape.lineTo(x,y) : shape.moveTo(x,y));
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: .2, bevelEnabled: true, bevelThickness: .065, bevelSize: .055, bevelSegments: 5, steps: 1, curveSegments: 12 });
  geometry.center();
  const rimGeometry = new THREE.EdgesGeometry(geometry, 35);
  const assembly = new THREE.Group();
  scene.add(assembly);
  const materials = [
    new THREE.MeshPhysicalMaterial({ color: 0x327ba6, metalness: .5, roughness: .18, clearcoat: 1, transmission: .28, thickness: .35, ior: 1.48, envMapIntensity: 1.2 }),
    new THREE.MeshPhysicalMaterial({ color: 0x41bcae, metalness: .05, roughness: .1, clearcoat: 1, transmission: .82, thickness: .6, ior: 1.5, attenuationColor: 0x14786e, attenuationDistance: 1.2, envMapIntensity: 1.6 }),
    new THREE.MeshPhysicalMaterial({ color: 0x95eee0, metalness: .06, roughness: .075, clearcoat: 1, clearcoatRoughness: .08, transmission: .92, thickness: .25, ior: 1.48, attenuationColor: 0x39b4aa, attenuationDistance: 2.2, envMapIntensity: 1.7 })
  ];
  const layers = materials.map((material, index) => {
    const layer = new THREE.Group();
    const mesh = new THREE.Mesh(geometry, material);
    const rim = new THREE.LineSegments(rimGeometry, new THREE.LineBasicMaterial({ color: index === 0 ? 0x91bbd0 : 0xc4fff2, transparent: true, opacity: .36 }));
    layer.add(mesh, rim);
    layer.position.z = (index - 1) * .32;
    assembly.add(layer);
    return layer;
  });

  // A physical light trace embedded in the front glass, not a live medical reading.
  const points = [[-1.2,0],[-.63,0],[-.47,.07],[-.32,-.07],[-.14,.33],[.02,-.23],[.17,.04],[.28,0],[1.2,0]].map(([x,y]) => new THREE.Vector3(x,y,.205));
  const pulseCurve = new THREE.CurvePath();
  for (let index = 1; index < points.length; index++) pulseCurve.add(new THREE.LineCurve3(points[index - 1], points[index]));
  const pulseMaterial = new THREE.MeshStandardMaterial({ color: 0xd8fff6, emissive: 0x36bdac, emissiveIntensity: 1.1, roughness: .25, metalness: .3 });
  const pulse = new THREE.Mesh(new THREE.TubeGeometry(pulseCurve, 100, .015, 6, false), pulseMaterial);
  layers[2].add(pulse);
  const signal = new THREE.Mesh(new THREE.SphereGeometry(.035, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  layers[2].add(signal);

  // A soft contact shadow anchors the suspended assembly in the architectural plate.
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 128;
  shadowCanvas.height = 64;
  const context = shadowCanvas.getContext('2d');
  const shadowFade = context.createRadialGradient(64,32,3,64,32,62);
  shadowFade.addColorStop(0, 'rgba(15,77,78,.22)');
  shadowFade.addColorStop(1, 'rgba(15,77,78,0)');
  context.fillStyle = shadowFade;
  context.fillRect(0,0,128,64);
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(3.8,.55), new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false, toneMapped: false }));
  shadow.position.set(0,-1.85,-.7);
  scene.add(shadow);

  let viewWidth = 8;
  let viewHeight = 4.8;
  let mobile = false;
  let inView = true;
  let paused = document.documentElement.classList.contains('scene-paused');
  let targetProgress = Number(hero.dataset.sceneProgress || 0);
  let progress = targetProgress;
  let targetX = 0, targetY = 0, pointerX = 0, pointerY = 0;
  let clock = 0, lastTime = 0, frames = 0;
  let running = false, destroyed = false, lost = false;

  function resize() {
    if (destroyed) return;
    const bounds = host.getBoundingClientRect();
    const width = Math.max(1, bounds.width), height = Math.max(1, bounds.height);
    mobile = innerWidth <= 900;
    viewHeight = mobile ? 4.35 : 4.7;
    viewWidth = viewHeight * width / height;
    camera.left = -viewWidth / 2;
    camera.right = viewWidth / 2;
    camera.top = viewHeight / 2;
    camera.bottom = -viewHeight / 2;
    camera.updateProjectionMatrix();
    backdrop.scale.set(viewWidth,viewHeight,1);
    const imageAspect = backgroundTexture.image.width / backgroundTexture.image.height;
    const screenAspect = width / height;
    backgroundTexture.repeat.set(screenAspect < imageAspect ? screenAspect / imageAspect : 1, screenAspect > imageAspect ? imageAspect / screenAspect : 1);
    backgroundTexture.offset.set((1-backgroundTexture.repeat.x)*.7,(1-backgroundTexture.repeat.y)*.5);
    renderer.setSize(width,height,false);
    draw(0);
  }

  function draw(time) {
    if (destroyed || lost) return;
    const dt = time && lastTime ? clamp((time - lastTime) / 1000, 0, .06) : 0;
    lastTime = time;
    const animate = !paused && !reduced.matches;
    if (animate) clock += dt;
    progress = animate ? targetProgress : 0;
    pointerX = THREE.MathUtils.lerp(pointerX,animate ? targetX : 0,.055);
    pointerY = THREE.MathUtils.lerp(pointerY,animate ? targetY : 0,.055);
    const separate = smooth(.12,.58,progress);
    const approach = smooth(.4,.84,progress);
    const idle = animate ? Math.sin(clock*.6) : 0;
    const baseX = mobile ? viewWidth*.08 : viewWidth*.24;
    assembly.position.set(baseX - separate*(mobile ? .1 : .35), .1 + idle*.055 + approach*.05, 0);
    assembly.rotation.set(-.075+pointerY*.05, -.38+idle*.08+pointerX*.14+separate*.65, -.035+Math.sin(clock*.37)*.018);
    const scale = (mobile ? .88 : 1.05) * (1+approach*.15);
    assembly.scale.setScalar(scale);
    layers.forEach((layer,index) => {
      layer.position.z = (index-1)*(.32+separate*.8);
      layer.position.x = (index-1)*separate*.22;
      layer.rotation.y = (index-1)*separate*.11;
    });
    shadow.position.x = assembly.position.x;
    shadow.material.opacity = 1-separate*.45;
    const phase = animate ? (clock*.23)%1 : .55;
    signal.position.copy(pulseCurve.getPoint(phase));
    pulseMaterial.emissiveIntensity = animate ? .9+Math.pow(Math.max(0,Math.sin(clock*1.8)),8)*1.4 : 1;
    renderer.render(scene,camera);
    frames++;
    host.dataset.renderCount = String(frames);
    host.dataset.explosion = separate.toFixed(3);
    if (frames === 1) {
      host.dataset.renderState = 'ready';
      hero.classList.add('has-3d');
    }
  }

  function syncLoop() {
    if (destroyed || lost) return;
    const shouldRun = inView && !document.hidden && !paused && !reduced.matches && targetProgress < .97;
    if (shouldRun !== running) {
      running = shouldRun;
      lastTime = 0;
      renderer.setAnimationLoop(running ? draw : null);
    }
    if (!shouldRun && inView && !document.hidden) { progress = targetProgress; draw(0); }
    host.dataset.motion = running ? 'running' : 'stopped';
  }
  function onScene(event) {
    targetProgress = event.detail.progress;
    paused = event.detail.paused;
    syncLoop();
  }
  function onPointer(event) {
    if (event.pointerType !== 'mouse' || paused) return;
    const rect = host.getBoundingClientRect();
    targetX = clamp((event.clientX-rect.left)/rect.width-.5,-.5,.5);
    targetY = clamp((event.clientY-rect.top)/rect.height-.5,-.5,.5);
  }
  function resetPointer() { targetX = 0; targetY = 0; }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  const intersectionObserver = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; syncLoop(); }, { threshold: .01 });
  intersectionObserver.observe(host);
  window.addEventListener('mds:scene',onScene);
  document.addEventListener('visibilitychange',syncLoop);
  reduced.addEventListener('change',syncLoop);
  hero.addEventListener('pointermove',onPointer,{ passive:true });
  hero.addEventListener('pointerleave',resetPointer);
  renderer.domElement.addEventListener('webglcontextlost', event => {
    event.preventDefault();
    lost = true;
    running = false;
    renderer.setAnimationLoop(null);
    hero.classList.remove('has-3d');
    host.dataset.renderState = 'fallback';
    host.dataset.motion = 'stopped';
  });
  renderer.domElement.addEventListener('webglcontextrestored', () => {
    lost = false;
    hero.classList.add('has-3d');
    host.dataset.renderState = 'ready';
    resize();
    syncLoop();
  });
  window.addEventListener('pagehide', event => {
    renderer.setAnimationLoop(null);
    running = false;
    if (event.persisted) return;
    destroyed = true;
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    window.removeEventListener('mds:scene',onScene);
    document.removeEventListener('visibilitychange',syncLoop);
    reduced.removeEventListener('change',syncLoop);
    hero.removeEventListener('pointermove',onPointer);
    hero.removeEventListener('pointerleave',resetPointer);
    scene.traverse(object => {
      object.geometry?.dispose();
      if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => material.dispose());
    });
    backgroundTexture.dispose();
    shadowTexture.dispose();
    environment.dispose();
    renderer.dispose();
  });
  window.addEventListener('pageshow', () => { if (!destroyed) syncLoop(); });
  resize();
  syncLoop();
}

createMedicalScene().catch(error => {
  hero?.classList.remove('has-3d');
  if (host) host.dataset.renderState = 'fallback';
  console.warn('Medical scene is using its static fallback.', error.message);
});
