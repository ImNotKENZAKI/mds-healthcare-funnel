# Medical V4: Graphics and Motion

## Scope

Graphics and motion upgrade to the existing V3 funnel. MDS blue, medical teal, mint, white and charcoal remain. Form behavior and real-estate files were not changed.

## Changes

- Three beveled physical-glass cross layers rendered with Three.js, with a moving illustrative pulse trace and gentle pointer response.
- Native scrolling separates the layers, displays the middle chapter and opens a circular reveal into the clinic.
- Generated clean architectural plate replaces the baked-in sculpture behind the live scene.
- Patient-journey record transitions and animated connections between the inquiry, practice record and team actions.
- Static image fallback, motion pause, reduced-motion static frame, capped pixel density and rendering suspended offscreen or in a hidden document.
- Smooth background blending at tablet and mobile sizes.

## Files

Modified: index.html, assets/js/medical-v3.js, START-HERE.html, README-REVIEW.md and GENERATED-ASSETS.md.

Added: assets/css/medical-motion-v4.css, assets/src/medical-scene-v4.js, assets/js/medical-scene-v4.bundle.js, assets/js/medical-motion-v4.js, assets/js/LICENSE-THREE.txt and assets/images/medical/pavilion-clean-v4.webp. The source PNG remains in the authoring workspace.

## Review

Open index.html. Move the pointer across the hero, scroll slowly or select each of its three chapters. The middle chapter should separate the glass layers; the final chapter should reveal the clinic. Try pausing motion, then scroll down to the connected-workflow illustration. On a phone, use native vertical scrolling.

Automated browser evidence is saved in the workspace under tmp/medical-v4-qa. Checks cover nonblank canvas pixels and changing rendered pixels, chapter separation, asset loading, overflow, resize stability, pause and offscreen behavior, reduced motion, missing-bundle fallback and WebGL context recovery. See results.json for the latest completed run.

## Authoring

The deployed pages require no build server or runtime CDN for Three.js. To rebuild the scene in this workspace, use review-tools/build-medical-v4.cjs. Dependencies are pinned to three 0.180.0 and esbuild 0.25.9 in tmp/medical-3d-build; the script also uses the bundled Sharp runtime. Edit the readable source, not the minified bundle.

Rendering references: [Three.js physical materials](https://threejs.org/docs/pages/MeshPhysicalMaterial.html) and [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html).

## Remaining Limits

Headless Chrome checks do not establish frame rate or battery impact on real low-end phones. Review on the target iPhone/Android hardware before launch. No live CRM contact, notification, booking or production redirect is configured by this visual update. The existing forms remain explicitly local previews. The pulse is a brand illustration, not patient telemetry.
