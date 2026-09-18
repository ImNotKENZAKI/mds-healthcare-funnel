(()=>{var vc=0,jo=1,yc=2;var Qo=1,Mc=2,sn=3,gn=0,ve=1,rn=2,_n=0,Yn=1,$o=2,tl=3,el=4,Sc=5,Dn=100,_c=101,bc=102,Ec=103,Tc=104,Ac=200,wc=201,Rc=202,Cc=203,Pr=204,Dr=205,Ic=206,Pc=207,Dc=208,Lc=209,Uc=210,Nc=211,Fc=212,Oc=213,Bc=214,la=0,ca=1,ha=2,Jn=3,ua=4,da=5,fa=6,pa=7,ma=0,zc=1,Vc=2,bn=0,kc=1,Hc=2,Gc=3,ga=4,Wc=5,Xc=6,qc=7;var nl=300,ei=301,ni=302,xa=303,va=304,Ys=306,Lr=1e3,Pn=1001,Ur=1002,Ie=1003,Yc=1004;var Js=1005;var Ye=1006,ya=1007;var On=1008;var Ke=1009,il=1010,sl=1011,Gi=1012,Ma=1013,Bn=1014,Ze=1015,Wi=1016,Sa=1017,_a=1018,Xi=1020,rl=35902,al=35899,ol=1021,ll=1022,He=1023,wi=1026,qi=1027,ba=1028,Ea=1029,cl=1030,Ta=1031;var Aa=1033,Ks=33776,Zs=33777,js=33778,Qs=33779,wa=35840,Ra=35841,Ca=35842,Ia=35843,Pa=36196,Da=37492,La=37496,Ua=37808,Na=37809,Fa=37810,Oa=37811,Ba=37812,za=37813,Va=37814,ka=37815,Ha=37816,Ga=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,Ja=36492,Ka=36494,Za=36495,ja=36283,Qa=36284,$a=36285,to=36286;var fs=2300,Nr=2301,Cr=2302,Vo=2400,ko=2401,Ho=2402;var Jc=3200,Kc=3201;var eo=0,Zc=1,En="",_e="srgb",Kn="srgb-linear",ps="linear",te="srgb";var Xn=7680;var Go=519,jc=512,Qc=513,$c=514,hl=515,th=516,eh=517,nh=518,ih=519,Wo=35044;var ul="300 es",qe=2e3,ms=2001;var xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=1234567,Ti=Math.PI/180,Ri=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function dl(i,t){return(i%t+t)%t}function Kh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zh(i,t,e){return i!==t?(e-i)/(t-i):0}function hs(i,t,e){return(1-e)*i+e*t}function jh(i,t,e,n){return hs(i,t,1-Math.exp(-e*n))}function Qh(i,t=1){return t-Math.abs(dl(i,t*2)-t)}function $h(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function eu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nu(i,t){return i+Math.random()*(t-i)}function iu(i){return i*(.5-Math.random())}function su(i){i!==void 0&&(kl=i);let t=kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ru(i){return i*Ti}function au(i){return i*Ri}function ou(i){return(i&i-1)===0&&i!==0}function lu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hu(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Yi={DEG2RAD:Ti,RAD2DEG:Ri,generateUUID:ii,clamp:Xt,euclideanModulo:dl,mapLinear:Kh,inverseLerp:Zh,lerp:hs,damp:jh,pingpong:Qh,smoothstep:$h,smootherstep:tu,randInt:eu,randFloat:nu,randFloatSpread:iu,seededRandom:su,degToRad:ru,radToDeg:au,isPowerOfTwo:ou,ceilPowerOfTwo:lu,floorPowerOfTwo:cu,setQuaternionFromProperEuler:hu,normalize:Ae,denormalize:Ei},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==p||h!==g){let m=1-o,f=c*d+l*p+h*g+u*v,A=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let R=Math.sqrt(_),w=Math.atan2(R,f*A);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}let M=o*A;if(c=c*m+d*M,l=l*m+p*M,h=h*m+g*M,u=u*m+v*M,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-o*p,t[e+2]=l*g+h*p+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uo=new I,Hl=new vn,Vt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],A=s[1],_=s[4],M=s[7],R=s[2],w=s[5],P=s[8];return r[0]=a*v+o*A+c*R,r[3]=a*m+o*_+c*w,r[6]=a*f+o*M+c*P,r[1]=l*v+h*A+u*R,r[4]=l*m+h*_+u*w,r[7]=l*f+h*M+u*P,r[2]=d*v+p*A+g*R,r[5]=d*m+p*_+g*w,r[8]=d*f+p*M+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(fo.makeScale(t,e)),this}rotate(t){return this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fo=new Vt;function fl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ci(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sh(){let i=Ci("canvas");return i.style.display="block",i}var Gl={};function Ii(i){i in Gl||(Gl[i]=!0,console.warn(i))}function rh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uu(){let i={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===En?ps:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ii("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ii("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kn]:{primaries:t,whitePoint:n,transfer:ps,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}}),i}var Kt=uu();function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hi,Fr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hi===void 0&&(hi=Ci("canvas")),hi.width=t.width,hi.height=t.height;let s=hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ci("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mn(e[n]/255)*255):e[n]=mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},du=0,Pi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fu=0,mo=new I,be=class i extends xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=Ye,a=On,o=He,c=Ke,l=i.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=ii(),this.name="",this.source=new Pi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mo).x}get height(){return this.source.getSize(mo).y}get depth(){return this.source.getSize(mo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lr:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Ur:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lr:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Ur:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=nl;be.DEFAULT_ANISOTROPY=1;var $t=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,M=(p+1)/2,R=(f+1)/2,w=(h+d)/4,P=(u+v)/4,U=(g+m)/4;return _>M&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=P/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=U/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-v)/A,this.z=(d-h)/A,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Or=class extends xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new be(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Or{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gs=class extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Br=class extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(r,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),ir.subVectors(this.max,es),ui.subVectors(t.a,es),di.subVectors(t.b,es),fi.subVectors(t.c,es),Tn.subVectors(di,ui),An.subVectors(fi,di),kn.subVectors(ui,fi);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-kn.z,kn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,kn.z,0,-kn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-kn.y,kn.x,0];return!go(e,ui,di,fi,ir)||(e=[1,0,0,0,1,0,0,0,1],!go(e,ui,di,fi,ir))?!1:(sr.crossVectors(Tn,An),e=[sr.x,sr.y,sr.z],go(e,ui,di,fi,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cn=[new I,new I,new I,new I,new I,new I,new I,new I],Ge=new I,nr=new en,ui=new I,di=new I,fi=new I,Tn=new I,An=new I,kn=new I,es=new I,ir=new I,sr=new I,Hn=new I;function go(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);let o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),c=t.dot(Hn),l=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var pu=new en,ns=new I,xo=new I,yn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);let e=ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(xo)),this.expandByPoint(ns.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hn=new I,vo=new I,rr=new I,wn=new I,yo=new I,ar=new I,Mo=new I,xs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vo.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(vo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=wn.dot(this.direction),c=-wn.dot(rr),l=wn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vo).addScaledVector(rr,d),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);let n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){yo.subVectors(e,t),ar.subVectors(n,t),Mo.crossVectors(yo,ar);let a=this.direction.dot(Mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);let c=o*this.direction.dot(ar.crossVectors(wn,ar));if(c<0)return null;let l=o*this.direction.dot(yo.cross(wn));if(l<0||c+l>a)return null;let h=-o*wn.dot(Mo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,v,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,v=l*u;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mu,t,gu)}lookAt(t,e,n){let s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),Rn.crossVectors(n,Le),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),Rn.crossVectors(n,Le)),Rn.normalize(),or.crossVectors(Le,Rn),s[0]=Rn.x,s[4]=or.x,s[8]=Le.x,s[1]=Rn.y,s[5]=or.y,s[9]=Le.y,s[2]=Rn.z,s[6]=or.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],A=n[3],_=n[7],M=n[11],R=n[15],w=s[0],P=s[4],U=s[8],b=s[12],S=s[1],C=s[5],B=s[9],G=s[13],q=s[2],Y=s[6],W=s[10],it=s[14],H=s[3],ht=s[7],pt=s[11],yt=s[15];return r[0]=a*w+o*S+c*q+l*H,r[4]=a*P+o*C+c*Y+l*ht,r[8]=a*U+o*B+c*W+l*pt,r[12]=a*b+o*G+c*it+l*yt,r[1]=h*w+u*S+d*q+p*H,r[5]=h*P+u*C+d*Y+p*ht,r[9]=h*U+u*B+d*W+p*pt,r[13]=h*b+u*G+d*it+p*yt,r[2]=g*w+v*S+m*q+f*H,r[6]=g*P+v*C+m*Y+f*ht,r[10]=g*U+v*B+m*W+f*pt,r[14]=g*b+v*G+m*it+f*yt,r[3]=A*w+_*S+M*q+R*H,r[7]=A*P+_*C+M*Y+R*ht,r[11]=A*U+_*B+M*W+R*pt,r[15]=A*b+_*G+M*it+R*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+v*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],A=u*m*l-v*d*l+v*c*p-o*m*p-u*c*f+o*d*f,_=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,M=h*v*l-g*u*l+g*o*p-a*v*p-h*o*f+a*u*f,R=g*u*c-h*v*c-g*o*d+a*v*d+h*o*m-a*u*m,w=e*A+n*_+s*M+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return t[0]=A*P,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*P,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*f+n*c*f)*P,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*P,t[4]=_*P,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*P,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*f-e*c*f)*P,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*P,t[8]=M*P,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*P,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*f+e*o*f)*P,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*P,t[12]=R*P,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*P,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*P,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,A=c*l,_=c*h,M=c*u,R=n.x,w=n.y,P=n.z;return s[0]=(1-(v+f))*R,s[1]=(p+M)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(d+f))*w,s[6]=(m+A)*w,s[7]=0,s[8]=(g+_)*P,s[9]=(m-A)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);let l=1/r,h=1/a,u=1/o;return We.elements[0]*=l,We.elements[1]*=l,We.elements[2]*=l,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=u,We.elements[9]*=u,We.elements[10]*=u,e.setFromRotationMatrix(We),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=qe,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===qe)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ms)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=qe,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===qe)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ms)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new I,We=new se,mu=new I(0,0,0),gu=new I(1,1,1),Rn=new I,or=new I,Le=new I,ql=new se,Yl=new vn,ke=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ke.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xu=0,Jl=new I,mi=new vn,un=new se,lr=new I,is=new I,vu=new I,yu=new vn,Kl=new I(1,0,0),Zl=new I(0,1,0),jl=new I(0,0,1),Ql={type:"added"},Mu={type:"removed"},gi={type:"childadded",child:null},So={type:"childremoved",child:null},pe=class i extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new ke,n=new vn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Vt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return Jl.copy(t).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(is,lr,this.up):un.lookAt(lr,is,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(un),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mu),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};pe.DEFAULT_UP=new I(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=new I,dn=new I,_o=new I,fn=new I,xi=new I,vi=new I,$l=new I,bo=new I,Eo=new I,To=new I,Ao=new $t,wo=new $t,Ro=new $t,pn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),dn.subVectors(n,e),_o.subVectors(t,e);let a=Xe.dot(Xe),o=Xe.dot(dn),c=Xe.dot(_o),l=dn.dot(dn),h=dn.dot(_o),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ao.setScalar(0),wo.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),Ro.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(wo,r.y),a.addScaledVector(Ro,r.z),a}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),dn.subVectors(t,e),Xe.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Xe.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xi.subVectors(s,n),vi.subVectors(r,n),bo.subVectors(t,n);let c=xi.dot(bo),l=vi.dot(bo);if(c<=0&&l<=0)return e.copy(n);Eo.subVectors(t,s);let h=xi.dot(Eo),u=vi.dot(Eo);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(xi,a);To.subVectors(t,r);let p=xi.dot(To),g=vi.dot(To);if(g>=0&&p<=g)return e.copy(r);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(vi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return $l.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector($l,o);let f=1/(m+v+d);return a=v*f,o=d*f,e.copy(n).addScaledVector(xi,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=dl(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Co(a,r,t+1/3),this.g=Co(a,r,t),this.b=Co(a,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let n=ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return Kt.workingToColorSpace(Se.copy(this),t),Math.round(Xt(Se.r*255,0,255))*65536+Math.round(Xt(Se.g*255,0,255))*256+Math.round(Xt(Se.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Se.copy(this),e);let n=Se.r,s=Se.g,r=Se.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=_e){Kt.workingToColorSpace(Se.copy(this),t);let e=Se.r,n=Se.g,s=Se.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(cr);let n=hs(Cn.h,cr.h,e),s=hs(Cn.s,cr.s,e),r=hs(Cn.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new Ht;Ht.NAMES=ah;var Su=0,nn=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Yn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Dr,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Dr&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Mn=class extends nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new I,hr=new dt,_u=0,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_u++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wo&&(t.usage=this.usage),t}};var ys=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ms=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},bu=0,Ve=new se,Io=new pe,yi=new I,Ue=new en,ss=new en,xe=new I,Ne=class i extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fl(t)?Ms:ys)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ue.min,ss.min),Ue.expandByPoint(xe),xe.addVectors(Ue.max,ss.max),Ue.expandByPoint(xe)):(Ue.expandByPoint(ss.min),Ue.expandByPoint(ss.max))}Ue.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xe.fromBufferAttribute(o,l),c&&(yi.fromBufferAttribute(t,l),xe.add(yi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new I,c[U]=new I;let l=new I,h=new I,u=new I,d=new dt,p=new dt,g=new dt,v=new I,m=new I;function f(U,b,S){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[U].add(v),o[b].add(v),o[S].add(v),c[U].add(m),c[b].add(m),c[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let U=0,b=A.length;U<b;++U){let S=A[U],C=S.start,B=S.count;for(let G=C,q=C+B;G<q;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let _=new I,M=new I,R=new I,w=new I;function P(U){R.fromBufferAttribute(s,U),w.copy(R);let b=o[U];_.copy(b),_.sub(R.multiplyScalar(R.dot(b))).normalize(),M.crossVectors(w,b);let C=M.dot(c[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,C)}for(let U=0,b=A.length;U<b;++U){let S=A[U],C=S.start,B=S.count;for(let G=C,q=C+B;G<q;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tc=new se,Gn=new xs,ur=new yn,ec=new I,dr=new I,fr=new I,pr=new I,Po=new I,mr=new I,nc=new I,gr=new I,ne=class extends pe{constructor(t=new Ne,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){mr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Po.fromBufferAttribute(u,t),a?mr.addScaledVector(Po,h):mr.addScaledVector(Po.sub(e),h))}e.add(mr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(ur.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ur,ec)===null||Gn.origin.distanceToSquared(ec)>(t.far-t.near)**2))&&(tc.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(tc),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],A=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,R=_;M<R;M+=3){let w=o.getX(M),P=o.getX(M+1),U=o.getX(M+2);s=xr(this,f,t,n,l,h,u,w,P,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let A=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);s=xr(this,a,t,n,l,h,u,A,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],A=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,R=_;M<R;M+=3){let w=M,P=M+1,U=M+2;s=xr(this,f,t,n,l,h,u,w,P,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let A=m,_=m+1,M=m+2;s=xr(this,a,t,n,l,h,u,A,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Eu(i,t,e,n,s,r,a,o){let c;if(t.side===ve?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===gn,o),c===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(gr);return l<e.near||l>e.far?null:{distance:l,point:gr.clone(),object:i}}function xr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,dr),i.getVertexPosition(c,fr),i.getVertexPosition(l,pr);let h=Eu(i,t,e,n,dr,fr,pr,nc);if(h){let u=new I;pn.getBarycoord(nc,dr,fr,pr,u),s&&(h.uv=pn.getInterpolatedAttribute(s,o,c,l,u,new dt)),r&&(h.uv1=pn.getInterpolatedAttribute(r,o,c,l,u,new dt)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};pn.getNormal(dr,fr,pr,d.normal),h.face=d,h.barycoord=u}return h}var Ln=class i extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(v,m,f,A,_,M,R,w,P,U,b){let S=M/P,C=R/U,B=M/2,G=R/2,q=w/2,Y=P+1,W=U+1,it=0,H=0,ht=new I;for(let pt=0;pt<W;pt++){let yt=pt*C-G;for(let Ot=0;Ot<Y;Ot++){let Gt=Ot*S-B;ht[v]=Gt*A,ht[m]=yt*_,ht[f]=q,l.push(ht.x,ht.y,ht.z),ht[v]=0,ht[m]=0,ht[f]=w>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Ot/P),u.push(1-pt/U),it+=1}}for(let pt=0;pt<U;pt++)for(let yt=0;yt<P;yt++){let Ot=d+yt+Y*pt,Gt=d+yt+Y*(pt+1),Jt=d+(yt+1)+Y*(pt+1),qt=d+(yt+1)+Y*pt;c.push(Ot,Gt,qt),c.push(Gt,Jt,qt),H+=6}o.addGroup(p,H,b),p+=H,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function si(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){let t={};for(let e=0;e<i.length;e++){let n=si(i[e]);for(let s in n)t[s]=n[s]}return t}function Tu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var oh={clone:si,merge:Ee},Au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Au,this.fragmentShader=wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=si(t.uniforms),this.uniformsGroups=Tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ss=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},In=new I,ic=new dt,sc=new dt,we=class extends Ss{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ri*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ti*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(Ti*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,ic,sc),e.subVectors(sc,ic)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ti*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mi=-90,Si=1,zr=class extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(Mi,Si,t,e);s.layers=this.layers,this.add(s);let r=new we(Mi,Si,t,e);r.layers=this.layers,this.add(r);let a=new we(Mi,Si,t,e);a.layers=this.layers,this.add(a);let o=new we(Mi,Si,t,e);o.layers=this.layers,this.add(o);let c=new we(Mi,Si,t,e);c.layers=this.layers,this.add(c);let l=new we(Mi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===qe)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_s=class extends be{constructor(t=[],e=ei,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vr=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _s(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ln(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ve,blending:_n});r.uniforms.tEquirect.value=e;let a=new ne(s,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Ye),new zr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},$e=class extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ru={type:"move"},Di=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ru)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Zn=class extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ke,this.environmentIntensity=1,this.environmentRotation=new ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var kr=class extends be{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ie,h=Ie,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bs=class extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_i=new se,rc=new se,vr=[],ac=new en,Cu=new se,rs=new ne,as=new yn,Es=class extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new en),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),ac.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union(ac)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),as.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_i),rc.multiplyMatrices(n,_i),rs.matrixWorld=rc,rs.raycast(t,vr);for(let a=0,o=vr.length;a<o;a++){let c=vr[a];c.instanceId=r,c.object=this,e.push(c)}vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(s*this.count),s,this.count,ba,Ze));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Do=new I,Iu=new I,Pu=new Vt,Qe=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Do.subVectors(n,e).cross(Iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Do),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pu.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new yn,Du=new dt(.5,.5),yr=new I,Li=class{constructor(t=new Qe,e=new Qe,n=new Qe,s=new Qe,r=new Qe,a=new Qe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qe,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],A=r[12],_=r[13],M=r[14],R=r[15];if(s[0].setComponents(l-a,p-h,f-g,R-A).normalize(),s[1].setComponents(l+a,p+h,f+g,R+A).normalize(),s[2].setComponents(l+o,p+u,f+v,R+_).normalize(),s[3].setComponents(l-o,p-u,f-v,R-_).normalize(),n)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,p-d,f-m,R-M).normalize();else if(s[4].setComponents(l-c,p-d,f-m,R-M).normalize(),e===qe)s[5].setComponents(l+c,p+d,f+m,R+M).normalize();else if(e===ms)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){Wn.center.set(0,0,0);let e=Du.distanceTo(t.center);return Wn.radius=.7071067811865476+e,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ui=class extends nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Hr=new I,Gr=new I,oc=new se,os=new xs,Mr=new yn,Lo=new I,lc=new I,Wr=class extends pe{constructor(t=new Ne,e=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),Gr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Hr.distanceTo(Gr);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;oc.copy(s).invert(),os.copy(t.ray).applyMatrix4(oc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){let f=h.getX(v),A=h.getX(v+1),_=Sr(this,t,os,c,f,A,v);_&&e.push(_)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(p),f=Sr(this,t,os,c,v,m,g-1);f&&e.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){let f=Sr(this,t,os,c,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){let v=Sr(this,t,os,c,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),Gr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Gr,Lo,lc)>n)return;Lo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Lo);if(!(l<t.near||l>t.far))return{distance:l,point:lc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var cc=new I,hc=new I,Ts=class extends Wr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)cc.fromBufferAttribute(e,s),hc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cc.distanceTo(hc);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var As=class extends be{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ws=class extends be{constructor(t,e,n=Bn,s,r,a,o=Ie,c=Ie,l,h=wi,u=1){if(h!==wi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rs=class extends be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var _r=new I,br=new I,Uo=new I,Er=new pn,Cs=class extends Ne{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Ti*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:v,b:m,c:f}=Er;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Er.getNormal(Uo),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let A=0;A<3;A++){let _=(A+1)%3,M=u[A],R=u[_],w=Er[h[A]],P=Er[h[_]],U=`${M}_${R}`,b=`${R}_${M}`;b in d&&d[b]?(Uo.dot(d[b].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(P.x,P.y,P.z)),d[b]=null):U in d||(d[U]={index0:l[A],index1:l[_],normal:Uo.clone()})}}for(let g in d)if(d[g]){let{index0:v,index1:m}=d[g];_r.fromBufferAttribute(o,v),br.fromBufferAttribute(o,m),p.push(_r.x,_r.y,_r.z),p.push(br.x,br.y,br.z)}this.setAttribute("position",new de(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Fe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new dt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new se;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Xt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Xt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ni=class extends Fe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xr=class extends Ni{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ml(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Tr=new I,No=new ml,Fo=new ml,Oo=new ml,qr=class extends Fe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Tr.subVectors(s[0],s[1]).add(s[0]),l=Tr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Tr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),No.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Fo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),Oo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(No.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Fo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Oo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(No.calc(c),Fo.calc(c),Oo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Lu(i,t){let e=1-i;return e*e*t}function Uu(i,t){return 2*(1-i)*i*t}function Nu(i,t){return i*i*t}function us(i,t,e,n){return Lu(i,t)+Uu(i,e)+Nu(i,n)}function Fu(i,t){let e=1-i;return e*e*e*t}function Ou(i,t){let e=1-i;return 3*e*e*i*t}function Bu(i,t){return 3*(1-i)*i*i*t}function zu(i,t){return i*i*i*t}function ds(i,t,e,n,s){return Fu(i,t)+Ou(i,e)+Bu(i,n)+zu(i,s)}var Is=class extends Fe{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,s.x,r.x,a.x,o.x),ds(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yr=class extends Fe{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,s.x,r.x,a.x,o.x),ds(t,s.y,r.y,a.y,o.y),ds(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ps=class extends Fe{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fi=class extends Fe{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ds=class extends Fe{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(us(t,s.x,r.x,a.x),us(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ls=class extends Fe{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(us(t,s.x,r.x,a.x),us(t,s.y,r.y,a.y),us(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Us=class extends Fe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(uc(o,c.x,l.x,h.x,u.x),uc(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},Jr=Object.freeze({__proto__:null,ArcCurve:Xr,CatmullRomCurve3:qr,CubicBezierCurve:Is,CubicBezierCurve3:Yr,EllipseCurve:Ni,LineCurve:Ps,LineCurve3:Fi,QuadraticBezierCurve:Ds,QuadraticBezierCurve3:Ls,SplineCurve:Us}),Oi=class extends Fe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Jr[s.type]().fromJSON(s))}return this}},Ns=class extends Oi{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ps(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ds(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Is(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Us(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Ni(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bi=class extends Ns{constructor(t){super(t),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ns().fromJSON(s))}return this}};function Vu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Xu(i,t,r,e)),i.length>80*e){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let p=i[d],g=i[d+1];p<o&&(o=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Fs(r,a,e,o,c,l,0),a}function lh(i,t,e,n,s){let r;if(s===nd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=dc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=dc(a/n|0,i[a],i[a+1],r);return r&&zi(r,r.next)&&(Bs(r),r=r.next),r}function jn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zi(e,e.next)||he(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Zu(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Hu(i,n,s,r):ku(i)){t.push(c.i,i.i,l.i),Bs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Gu(jn(i),t),Fs(i,t,e,n,s,r,2)):a===2&&Wu(i,t,e,n,s,r):Fs(jn(i),t,e,n,s,r,1);break}}}function ku(i){let t=i.prev,e=i,n=i.next;if(he(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),p=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&cs(s,o,r,c,a,l,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hu(i,t,e,n){let s=i.prev,r=i,a=i.next;if(he(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,c,l),g=Math.min(h,u,d),v=Math.max(o,c,l),m=Math.max(h,u,d),f=Xo(p,g,t,e,n),A=Xo(v,m,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=f&&M&&M.z<=A;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&cs(o,h,c,u,l,d,_.x,_.y)&&he(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&cs(o,h,c,u,l,d,M.x,M.y)&&he(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&cs(o,h,c,u,l,d,_.x,_.y)&&he(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=A;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&cs(o,h,c,u,l,d,M.x,M.y)&&he(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Gu(i,t){let e=i;do{let n=e.prev,s=e.next.next;!zi(n,s)&&hh(n,e,e.next,s)&&Os(n,s)&&Os(s,n)&&(t.push(n.i,e.i,s.i),Bs(e),Bs(e.next),e=i=s),e=e.next}while(e!==i);return jn(e)}function Wu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$u(a,o)){let c=uh(a,o);a=jn(a,a.next),c=jn(c,c.next),Fs(a,t,e,n,s,r,0),Fs(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xu(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=lh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Qu(l))}s.sort(qu);for(let r=0;r<s.length;r++)e=Yu(s[r],e);return e}function qu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Yu(i,t){let e=Ju(i,t);if(!e)return t;let n=uh(e,i);return jn(n,n.next),jn(e,e.next)}function Ju(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(zi(i,e))return e;do{if(zi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&ch(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Os(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Ku(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Ku(i,t){return he(i.prev,i,t.prev)<0&&he(t.next,i,i.next)<0}function Zu(i,t,e,n){let s=i;do s.z===0&&(s.z=Xo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ju(s)}function ju(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Xo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Qu(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ch(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function cs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&ch(i,t,e,n,s,r,a,o)}function $u(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!td(i,t)&&(Os(i,t)&&Os(t,i)&&ed(i,t)&&(he(i.prev,i,t.prev)||he(i,t.prev,t))||zi(i,t)&&he(i.prev,i,i.next)>0&&he(t.prev,t,t.next)>0)}function he(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zi(i,t){return i.x===t.x&&i.y===t.y}function hh(i,t,e,n){let s=wr(he(i,t,e)),r=wr(he(i,t,n)),a=wr(he(e,n,i)),o=wr(he(e,n,t));return!!(s!==r&&a!==o||s===0&&Ar(i,e,t)||r===0&&Ar(i,n,t)||a===0&&Ar(e,i,n)||o===0&&Ar(e,t,n))}function Ar(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wr(i){return i>0?1:i<0?-1:0}function td(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Os(i,t){return he(i.prev,i,i.next)<0?he(i,t,i.next)>=0&&he(i,i.prev,t)>=0:he(i,t,i.prev)<0||he(i,i.next,t)<0}function ed(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uh(i,t){let e=qo(i.i,i.x,i.y),n=qo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dc(i,t,e,n){let s=qo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Yo=class{static triangulate(t,e,n=2){return Vu(t,e,n)}},qn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];fc(t),pc(n,t);let a=t.length;e.forEach(fc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,pc(n,e[c]);let o=Yo.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function fc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var zs=class i extends Ne{constructor(t=new Bi([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:id,_,M=!1,R,w,P,U;f&&(_=f.getSpacedPoints(h),M=!0,d=!1,R=f.computeFrenetFrames(h,!1),w=new I,P=new I,U=new I),d||(m=0,p=0,g=0,v=0);let b=o.extractPoints(l),S=b.shape,C=b.holes;if(!qn.isClockWise(S)){S=S.reverse();for(let nt=0,j=C.length;nt<j;nt++){let K=C[nt];qn.isClockWise(K)&&(C[nt]=K.reverse())}}function G(nt){let K=10000000000000001e-36,O=nt[0];for(let tt=1;tt<=nt.length;tt++){let Z=tt%nt.length,st=nt[Z],It=st.x-O.x,Ut=st.y-O.y,E=It*It+Ut*Ut,x=Math.max(Math.abs(st.x),Math.abs(st.y),Math.abs(O.x),Math.abs(O.y)),F=K*x*x;if(E<=F){nt.splice(Z,1),tt--;continue}O=st}}G(S),C.forEach(G);let q=C.length,Y=S;for(let nt=0;nt<q;nt++){let j=C[nt];S=S.concat(j)}function W(nt,j,K){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(j,K)}let it=S.length;function H(nt,j,K){let O,tt,Z,st=nt.x-j.x,It=nt.y-j.y,Ut=K.x-nt.x,E=K.y-nt.y,x=st*st+It*It,F=st*E-It*Ut;if(Math.abs(F)>Number.EPSILON){let k=Math.sqrt(x),et=Math.sqrt(Ut*Ut+E*E),X=j.x-It/k,Rt=j.y+st/k,ct=K.x-E/et,Et=K.y+Ut/et,Tt=((ct-X)*E-(Et-Rt)*Ut)/(st*E-It*Ut);O=X+st*Tt-nt.x,tt=Rt+It*Tt-nt.y;let rt=O*O+tt*tt;if(rt<=2)return new dt(O,tt);Z=Math.sqrt(rt/2)}else{let k=!1;st>Number.EPSILON?Ut>Number.EPSILON&&(k=!0):st<-Number.EPSILON?Ut<-Number.EPSILON&&(k=!0):Math.sign(It)===Math.sign(E)&&(k=!0),k?(O=-It,tt=st,Z=Math.sqrt(x)):(O=st,tt=It,Z=Math.sqrt(x/2))}return new dt(O/Z,tt/Z)}let ht=[];for(let nt=0,j=Y.length,K=j-1,O=nt+1;nt<j;nt++,K++,O++)K===j&&(K=0),O===j&&(O=0),ht[nt]=H(Y[nt],Y[K],Y[O]);let pt=[],yt,Ot=ht.concat();for(let nt=0,j=q;nt<j;nt++){let K=C[nt];yt=[];for(let O=0,tt=K.length,Z=tt-1,st=O+1;O<tt;O++,Z++,st++)Z===tt&&(Z=0),st===tt&&(st=0),yt[O]=H(K[O],K[Z],K[st]);pt.push(yt),Ot=Ot.concat(yt)}let Gt;if(m===0)Gt=qn.triangulateShape(Y,C);else{let nt=[],j=[];for(let K=0;K<m;K++){let O=K/m,tt=p*Math.cos(O*Math.PI/2),Z=g*Math.sin(O*Math.PI/2)+v;for(let st=0,It=Y.length;st<It;st++){let Ut=W(Y[st],ht[st],Z);wt(Ut.x,Ut.y,-tt),O===0&&nt.push(Ut)}for(let st=0,It=q;st<It;st++){let Ut=C[st];yt=pt[st];let E=[];for(let x=0,F=Ut.length;x<F;x++){let k=W(Ut[x],yt[x],Z);wt(k.x,k.y,-tt),O===0&&E.push(k)}O===0&&j.push(E)}}Gt=qn.triangulateShape(nt,j)}let Jt=Gt.length,qt=g+v;for(let nt=0;nt<it;nt++){let j=d?W(S[nt],Ot[nt],qt):S[nt];M?(P.copy(R.normals[0]).multiplyScalar(j.x),w.copy(R.binormals[0]).multiplyScalar(j.y),U.copy(_[0]).add(P).add(w),wt(U.x,U.y,U.z)):wt(j.x,j.y,0)}for(let nt=1;nt<=h;nt++)for(let j=0;j<it;j++){let K=d?W(S[j],Ot[j],qt):S[j];M?(P.copy(R.normals[nt]).multiplyScalar(K.x),w.copy(R.binormals[nt]).multiplyScalar(K.y),U.copy(_[nt]).add(P).add(w),wt(U.x,U.y,U.z)):wt(K.x,K.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){let j=nt/m,K=p*Math.cos(j*Math.PI/2),O=g*Math.sin(j*Math.PI/2)+v;for(let tt=0,Z=Y.length;tt<Z;tt++){let st=W(Y[tt],ht[tt],O);wt(st.x,st.y,u+K)}for(let tt=0,Z=C.length;tt<Z;tt++){let st=C[tt];yt=pt[tt];for(let It=0,Ut=st.length;It<Ut;It++){let E=W(st[It],yt[It],O);M?wt(E.x,E.y+_[h-1].y,_[h-1].x+K):wt(E.x,E.y,u+K)}}}J(),$();function J(){let nt=s.length/3;if(d){let j=0,K=it*j;for(let O=0;O<Jt;O++){let tt=Gt[O];St(tt[2]+K,tt[1]+K,tt[0]+K)}j=h+m*2,K=it*j;for(let O=0;O<Jt;O++){let tt=Gt[O];St(tt[0]+K,tt[1]+K,tt[2]+K)}}else{for(let j=0;j<Jt;j++){let K=Gt[j];St(K[2],K[1],K[0])}for(let j=0;j<Jt;j++){let K=Gt[j];St(K[0]+it*h,K[1]+it*h,K[2]+it*h)}}n.addGroup(nt,s.length/3-nt,0)}function $(){let nt=s.length/3,j=0;vt(Y,j),j+=Y.length;for(let K=0,O=C.length;K<O;K++){let tt=C[K];vt(tt,j),j+=tt.length}n.addGroup(nt,s.length/3-nt,1)}function vt(nt,j){let K=nt.length;for(;--K>=0;){let O=K,tt=K-1;tt<0&&(tt=nt.length-1);for(let Z=0,st=h+m*2;Z<st;Z++){let It=it*Z,Ut=it*(Z+1),E=j+O+It,x=j+tt+It,F=j+tt+Ut,k=j+O+Ut;Bt(E,x,F,k)}}}function wt(nt,j,K){c.push(nt),c.push(j),c.push(K)}function St(nt,j,K){Qt(nt),Qt(j),Qt(K);let O=s.length/3,tt=A.generateTopUV(n,s,O-3,O-2,O-1);T(tt[0]),T(tt[1]),T(tt[2])}function Bt(nt,j,K,O){Qt(nt),Qt(j),Qt(O),Qt(j),Qt(K),Qt(O);let tt=s.length/3,Z=A.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);T(Z[0]),T(Z[1]),T(Z[3]),T(Z[1]),T(Z[2]),T(Z[3])}function Qt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function T(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jr[s.type]().fromJSON(s)),new i(n,t.options)}},id={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new dt(r,a),new dt(o,c),new dt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new dt(a,1-c),new dt(l,1-u),new dt(d,1-g),new dt(v,1-f)]:[new dt(o,1-c),new dt(h,1-u),new dt(p,1-g),new dt(m,1-f)]}};function sd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Un=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let A=f*d-a;for(let _=0;_<l;_++){let M=_*u-r;g.push(M,-A,0),v.push(0,0,1),m.push(_/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<o;A++){let _=A+l*f,M=A+l*(f+1),R=A+1+l*(f+1),w=A+1+l*f;p.push(_,M,w),p.push(M,R,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Vs=class i extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){let A=[],_=f/n,M=0;f===0&&a===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+M,1-_),A.push(l++)}h.push(A)}for(let f=0;f<n;f++)for(let A=0;A<e;A++){let _=h[f][A+1],M=h[f][A],R=h[f+1][A],w=h[f+1][A+1];(f!==0||a>0)&&p.push(_,M,w),(f!==n-1||c<Math.PI)&&p.push(M,R,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ks=class i extends Ne{constructor(t=new Ls(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,l=new dt,h=new I,u=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function v(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),A(),f()}function m(_){h=t.getPointAt(_/e,h);let M=a.normals[_],R=a.binormals[_];for(let w=0;w<=s;w++){let P=w/s*Math.PI*2,U=Math.sin(P),b=-Math.cos(P);c.x=b*M.x+U*R.x,c.y=b*M.y+U*R.y,c.z=b*M.z+U*R.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function f(){for(let _=1;_<=e;_++)for(let M=1;M<=s;M++){let R=(s+1)*(_-1)+(M-1),w=(s+1)*_+(M-1),P=(s+1)*_+M,U=(s+1)*(_-1)+M;g.push(R,w,U),g.push(w,P,U)}}function A(){for(let _=0;_<=e;_++)for(let M=0;M<=s;M++)l.x=_/e,l.y=M/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Jr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Sn=class extends nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qn=class extends Sn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Hs=class extends nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Kr=class extends nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zr=class extends nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function rd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $n=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jr=class extends $n{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vo,endingEnd:Vo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ko:r=t,o=2*e-n;break;case Ho:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ko:a=t,c=2*n-e;break;case Ho:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,A=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*v+.5*g,M=p*m-p*v;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+A*a[l+R]+_*a[c+R]+M*a[u+R];return r}},Qr=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},$r=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rr(e,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rr(t.times,Array),values:Rr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $r(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fs:e=this.InterpolantFactoryMethodDiscrete;break;case Nr:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Cr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&rd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Oe.prototype.ValueTypeName="";Oe.prototype.TimeBufferType=Float32Array;Oe.prototype.ValueBufferType=Float32Array;Oe.prototype.DefaultInterpolation=Nr;var Nn=class extends Oe{constructor(t,e,n){super(t,e,n)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=fs;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}};ta.prototype.ValueTypeName="color";var ea=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}};ea.prototype.ValueTypeName="number";var na=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)vn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Gs=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new na(this.times,this.values,this.getValueSize(),t)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends Oe{constructor(t,e,n){super(t,e,n)}};Fn.prototype.ValueTypeName="string";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=fs;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}};ia.prototype.ValueTypeName="vector";var Ir={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},sa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},dh=new sa,Vi=class{constructor(t){this.manager=t!==void 0?t:dh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi=new WeakMap,ra=class extends Vi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ir.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=bi.get(a);u===void 0&&(u=[],bi.set(a,u)),u.push({onLoad:e,onError:s})}return a}let o=Ci("img");function c(){h(),e&&e(this);let u=bi.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}bi.delete(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),Ir.remove(`image:${t}`);let d=bi.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(u)}bi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ir.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Ws=class extends Vi{constructor(t){super(t)}load(t,e,n,s){let r=new be,a=new ra(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ki=class extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Xs=class extends ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Bo=new se,mc=new I,gc=new I,aa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Li,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(mc),gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gc),e.updateMatrixWorld(),Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var xc=new se,ls=new I,zo=new I,Jo=class extends aa{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),zo.copy(n.position),zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zo),n.updateMatrixWorld(),s.makeTranslation(-ls.x,-ls.y,-ls.z),xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc,n.coordinateSystem,n.reversedDepth)}},qs=class extends ki{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ti=class extends Ss{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ko=class extends aa{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hi=class extends ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Ko}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var oa=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gl="\\[\\]\\.:\\/",ad=new RegExp("["+gl+"]","g"),xl="[^"+gl+"]",od="[^"+gl.replace("\\.","")+"]",ld=/((?:WC+[\/:])*)/.source.replace("WC",xl),cd=/(WCOD+)?/.source.replace("WCOD",od),hd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),ud=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),dd=new RegExp("^"+ld+cd+hd+ud+"$"),fd=["material","materials","bones","map"],Zo=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ad,"")}static parseTrackName(t){let e=dd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Zo;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yg=new Float32Array(1);function vl(i,t,e,n){let s=pd(n);switch(e){case ol:return i*t;case ba:return i*t/s.components*s.byteLength;case Ea:return i*t/s.components*s.byteLength;case cl:return i*t*2/s.components*s.byteLength;case Ta:return i*t*2/s.components*s.byteLength;case ll:return i*t*3/s.components*s.byteLength;case He:return i*t*4/s.components*s.byteLength;case Aa:return i*t*4/s.components*s.byteLength;case Ks:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Ia:return Math.max(i,16)*Math.max(t,8)/4;case wa:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case Pa:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ja:case Ka:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $a:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pd(i){switch(i){case Ke:case il:return{byteLength:1,components:1};case Gi:case sl:case Wi:return{byteLength:2,components:1};case Sa:case _a:return{byteLength:2,components:4};case Bn:case Ma:case Ze:return{byteLength:4,components:1};case rl:case al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Fh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gd(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Id=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:xd,alphahash_pars_fragment:vd,alphamap_fragment:yd,alphamap_pars_fragment:Md,alphatest_fragment:Sd,alphatest_pars_fragment:_d,aomap_fragment:bd,aomap_pars_fragment:Ed,batching_pars_vertex:Td,batching_vertex:Ad,begin_vertex:wd,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Id,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Nd,color_fragment:Fd,color_pars_fragment:Od,color_pars_vertex:Bd,color_vertex:zd,common:Vd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:Jd,envmap_fragment:Kd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:hf,envmap_vertex:$d,fog_vertex:tf,fog_pars_vertex:ef,fog_fragment:nf,fog_pars_fragment:sf,gradientmap_pars_fragment:rf,lightmap_pars_fragment:af,lights_lambert_fragment:of,lights_lambert_pars_fragment:lf,lights_pars_begin:cf,lights_toon_fragment:uf,lights_toon_pars_fragment:df,lights_phong_fragment:ff,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:xf,lights_fragment_maps:vf,lights_fragment_end:yf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:Sf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:bf,map_fragment:Ef,map_pars_fragment:Tf,map_particle_fragment:Af,map_particle_pars_fragment:wf,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Cf,morphinstance_vertex:If,morphcolor_vertex:Pf,morphnormal_vertex:Df,morphtarget_pars_vertex:Lf,morphtarget_vertex:Uf,normal_fragment_begin:Nf,normal_fragment_maps:Ff,normal_pars_fragment:Of,normal_pars_vertex:Bf,normal_vertex:zf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:kf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Wf,opaque_fragment:Xf,packing:qf,premultiplied_alpha_fragment:Yf,project_vertex:Jf,dithering_fragment:Kf,dithering_pars_fragment:Zf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:$f,shadowmap_pars_vertex:tp,shadowmap_vertex:ep,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:sp,skinning_vertex:rp,skinnormal_vertex:ap,specularmap_fragment:op,specularmap_pars_fragment:lp,tonemapping_fragment:cp,tonemapping_pars_fragment:hp,transmission_fragment:up,transmission_pars_fragment:dp,uv_pars_fragment:fp,uv_pars_vertex:pp,uv_vertex:mp,worldpos_vertex:gp,background_vert:xp,background_frag:vp,backgroundCube_vert:yp,backgroundCube_frag:Mp,cube_vert:Sp,cube_frag:_p,depth_vert:bp,depth_frag:Ep,distanceRGBA_vert:Tp,distanceRGBA_frag:Ap,equirect_vert:wp,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Ip,meshbasic_vert:Pp,meshbasic_frag:Dp,meshlambert_vert:Lp,meshlambert_frag:Up,meshmatcap_vert:Np,meshmatcap_frag:Fp,meshnormal_vert:Op,meshnormal_frag:Bp,meshphong_vert:zp,meshphong_frag:Vp,meshphysical_vert:kp,meshphysical_frag:Hp,meshtoon_vert:Gp,meshtoon_frag:Wp,points_vert:Xp,points_frag:qp,shadow_vert:Yp,shadow_frag:Jp,sprite_vert:Kp,sprite_frag:Zp},ft={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},an={basic:{uniforms:Ee([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ee([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ee([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ee([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ee([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ee([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ee([ft.points,ft.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ee([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ee([ft.common,ft.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ee([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ee([ft.sprite,ft.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ee([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ee([ft.lights,ft.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};an.physical={uniforms:Ee([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var no={r:0,b:0,g:0},ri=new ke,jp=new se;function Qp(i,t,e,n,s,r,a){let o=new Ht(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function v(_){let M=!1,R=g(_);R===null?f(o,c):R&&R.isColor&&(f(R,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,M){let R=g(M);R&&(R.isCubeTexture||R.mapping===Ys)?(h===void 0&&(h=new ne(new Ln(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:si(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(M.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(ri)),h.material.toneMapped=Kt.getTransfer(R.colorSpace)!==te,(u!==R||d!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new ne(new Un(2,2),new Je({name:"BackgroundMaterial",uniforms:si(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(R.colorSpace)!==te,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function f(_,M){_.getRGB(no,pl(i)),n.buffers.color.setClear(no.r,no.g,no.b,M,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,f(o,c)},render:v,addToRenderList:m,dispose:A}}function $p(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,C,B,G,q){let Y=!1,W=u(G,B,C);r!==W&&(r=W,l(r.object)),Y=p(S,G,B,q),Y&&g(S,G,B,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(S,C,B,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,C,B){let G=B.wireframe===!0,q=n[S.id];q===void 0&&(q={},n[S.id]=q);let Y=q[C.id];Y===void 0&&(Y={},q[C.id]=Y);let W=Y[G];return W===void 0&&(W=d(c()),Y[G]=W),W}function d(S){let C=[],B=[],G=[];for(let q=0;q<e;q++)C[q]=0,B[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:G,object:S,attributes:{},index:null}}function p(S,C,B,G){let q=r.attributes,Y=C.attributes,W=0,it=B.getAttributes();for(let H in it)if(it[H].location>=0){let pt=q[H],yt=Y[H];if(yt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==G}function g(S,C,B,G){let q={},Y=C.attributes,W=0,it=B.getAttributes();for(let H in it)if(it[H].location>=0){let pt=Y[H];pt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));let yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),q[H]=yt,W++}r.attributes=q,r.attributesNum=W,r.index=G}function v(){let S=r.newAttributes;for(let C=0,B=S.length;C<B;C++)S[C]=0}function m(S){f(S,0)}function f(S,C){let B=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;B[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),q[S]!==C&&(i.vertexAttribDivisor(S,C),q[S]=C)}function A(){let S=r.newAttributes,C=r.enabledAttributes;for(let B=0,G=C.length;B<G;B++)C[B]!==S[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function _(S,C,B,G,q,Y,W){W===!0?i.vertexAttribIPointer(S,C,B,q,Y):i.vertexAttribPointer(S,C,B,G,q,Y)}function M(S,C,B,G){v();let q=G.attributes,Y=B.getAttributes(),W=C.defaultAttributeValues;for(let it in Y){let H=Y[it];if(H.location>=0){let ht=q[it];if(ht===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),ht!==void 0){let pt=ht.normalized,yt=ht.itemSize,Ot=t.get(ht);if(Ot===void 0)continue;let Gt=Ot.buffer,Jt=Ot.type,qt=Ot.bytesPerElement,J=Jt===i.INT||Jt===i.UNSIGNED_INT||ht.gpuType===Ma;if(ht.isInterleavedBufferAttribute){let $=ht.data,vt=$.stride,wt=ht.offset;if($.isInstancedInterleavedBuffer){for(let St=0;St<H.locationSize;St++)f(H.location+St,$.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let St=0;St<H.locationSize;St++)m(H.location+St);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let St=0;St<H.locationSize;St++)_(H.location+St,yt/H.locationSize,Jt,pt,vt*qt,(wt+yt/H.locationSize*St)*qt,J)}else{if(ht.isInstancedBufferAttribute){for(let $=0;$<H.locationSize;$++)f(H.location+$,ht.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let $=0;$<H.locationSize;$++)m(H.location+$);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let $=0;$<H.locationSize;$++)_(H.location+$,yt/H.locationSize,Jt,pt,yt*qt,yt/H.locationSize*$*qt,J)}}else if(W!==void 0){let pt=W[it];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(H.location,pt);break;case 3:i.vertexAttrib3fv(H.location,pt);break;case 4:i.vertexAttrib4fv(H.location,pt);break;default:i.vertexAttrib1fv(H.location,pt)}}}}A()}function R(){U();for(let S in n){let C=n[S];for(let B in C){let G=C[B];for(let q in G)h(G[q].object),delete G[q];delete C[B]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let C=n[S.id];for(let B in C){let G=C[B];for(let q in G)h(G[q].object),delete G[q];delete C[B]}delete n[S.id]}function P(S){for(let C in n){let B=n[C];if(B[S.id]===void 0)continue;let G=B[S.id];for(let q in G)h(G[q].object),delete G[q];delete B[S.id]}}function U(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function tm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function em(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==He&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let U=P===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ke&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ze&&!U)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:R,maxSamples:w}}function nm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Qe,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let A=r?0:n,_=A*4,M=f.clippingState||null;c.value=M,M=h(g,d,_,p);for(let R=0;R!==_;++R)M[R]=e[R];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let f=p+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,M=p;_!==v;++_,M+=4)a.copy(u[_]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function im(i){let t=new WeakMap;function e(a,o){return o===xa?a.mapping=ei:o===va&&(a.mapping=ni),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===xa||o===va)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Vr(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ki=4,fh=[.125,.215,.35,.446,.526,.582],li=20,yl=new ti,ph=new Ht,Ml=null,Sl=0,_l=0,bl=!1,oi=(1+Math.sqrt(5))/2,Ji=1/oi,mh=[new I(-oi,Ji,0),new I(oi,Ji,0),new I(-Ji,0,oi),new I(Ji,0,oi),new I(0,oi,-Ji),new I(0,oi,Ji),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],sm=new I,ji=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=sm}=r;Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,Sl,_l),this._renderer.xr.enabled=bl,t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ei||t.mapping===ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Wi,format:He,colorSpace:Kn,depthBuffer:!1},s=gh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(r)),this._blurMaterial=am(r,t,e)}return s}_compileMaterial(t){let e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,yl)}_sceneToCubeUV(t,e,n,s,r){let c=new we(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ph),u.toneMapping=bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new Mn({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),m=new ne(new Ln,v),f=!1,A=t.background;A?A.isColor&&(v.color.copy(A),t.background=null,f=!0):(v.color.copy(ph),f=!0);for(let _=0;_<6;_++){let M=_%3;M===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):M===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let R=this._cubeSize;io(s,M*R,_>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ei||t.mapping===ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;io(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,yl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mh[(s-r-1)%mh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ne(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);let f=[],A=0;for(let P=0;P<li;++P){let U=P/v,b=Math.exp(-U*U/2);f.push(b),P===0?A+=b:P<m&&(A+=2*b)}for(let P=0;P<f.length;P++)f[P]=f[P]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let M=this._sizeLods[s],R=3*M*(s>_-Ki?s-_+Ki:0),w=4*(this._cubeSize-M);io(e,R,w,3*M,2*M),c.setRenderTarget(e),c.render(u,yl)}};function rm(i){let t=[],e=[],n=[],s=i,r=i-Ki+1+fh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ki?c=fh[a-i+Ki-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,A=new Float32Array(v*g*p),_=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let w=0;w<p;w++){let P=w%3*2/3-1,U=w>2?0:-1,b=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(b,v*g*w),_.set(d,m*g*w);let S=[w,w,w,w,w,w];M.set(S,f*g*w)}let R=new Ne;R.setAttribute("position",new Ce(A,v)),R.setAttribute("uv",new Ce(_,m)),R.setAttribute("faceIndex",new Ce(M,f)),t.push(R),s>Ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gh(i,t,e){let n=new tn(i,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function am(i,t,e){let n=new Float32Array(li),s=new I(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function xh(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function vh(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function om(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===xa||c===va,h=c===ei||c===ni;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ji(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ji(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function lm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ii("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cm(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let A=p.array;v=p.version;for(let _=0,M=A.length;_<M;_+=3){let R=A[_+0],w=A[_+1],P=A[_+2];d.push(R,w,w,P,P,R)}}else if(g!==void 0){let A=g.array;v=g.version;for(let _=0,M=A.length/3-1;_<M;_+=3){let R=_+0,w=_+1,P=_+2;d.push(R,w,w,P,P,R)}}else return;let m=new(fl(d)?Ms:ys)(d,1);m.version=v;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function hm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*v[A];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function um(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dm(i,t,e){let n=new WeakMap,s=new $t;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let M=o.attributes.position.count*_,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*R*4*u),P=new gs(w,M,R,u);P.type=Ze,P.needsUpdate=!0;let U=_*4;for(let S=0;S<u;S++){let C=m[S],B=f[S],G=A[S],q=M*R*4*S;for(let Y=0;Y<C.count;Y++){let W=Y*U;p===!0&&(s.fromBufferAttribute(C,Y),w[q+W+0]=s.x,w[q+W+1]=s.y,w[q+W+2]=s.z,w[q+W+3]=0),g===!0&&(s.fromBufferAttribute(B,Y),w[q+W+4]=s.x,w[q+W+5]=s.y,w[q+W+6]=s.z,w[q+W+7]=0),v===!0&&(s.fromBufferAttribute(G,Y),w[q+W+8]=s.x,w[q+W+9]=s.y,w[q+W+10]=s.z,w[q+W+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new dt(M,R)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function fm(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Oh=new be,yh=new ws(1,1),Bh=new gs,zh=new Br,Vh=new _s,Mh=[],Sh=[],_h=new Float32Array(16),bh=new Float32Array(9),Eh=new Float32Array(4);function Qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ao(i,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function vm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),ge(e,n)}}function ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),ge(e,n)}}function Mm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;_h.set(n),i.uniformMatrix4fv(this.addr,!1,_h),ge(e,n)}}function Sm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function Tm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=hl,r=yh):r=Oh,e.setTexture2D(t||r,s)}function Im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zh,s)}function Pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vh,s)}function Dm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bh,s)}function Lm(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return xm;case 35674:return vm;case 35675:return ym;case 35676:return Mm;case 5124:case 35670:return Sm;case 35667:case 35671:return _m;case 35668:case 35672:return bm;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return Am;case 36295:return wm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Dm}}function Um(i,t){i.uniform1fv(this.addr,t)}function Nm(i,t){let e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Fm(i,t){let e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Om(i,t){let e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function Bm(i,t){let e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zm(i,t){let e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vm(i,t){let e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function km(i,t){i.uniform1iv(this.addr,t)}function Hm(i,t){i.uniform2iv(this.addr,t)}function Gm(i,t){i.uniform3iv(this.addr,t)}function Wm(i,t){i.uniform4iv(this.addr,t)}function Xm(i,t){i.uniform1uiv(this.addr,t)}function qm(i,t){i.uniform2uiv(this.addr,t)}function Ym(i,t){i.uniform3uiv(this.addr,t)}function Jm(i,t){i.uniform4uiv(this.addr,t)}function Km(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Oh,r[a])}function Zm(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zh,r[a])}function jm(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Vh,r[a])}function Qm(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bh,r[a])}function $m(i){switch(i){case 5126:return Um;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return zm;case 35676:return Vm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Qm}}var Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lm(e.type)}},Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}},wl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},El=/(\w+)(\])?(\[|\.)?/g;function Th(i,t){i.seq.push(t),i.map[t.id]=t}function tg(i,t,e){let n=i.name,s=n.length;for(El.lastIndex=0;;){let r=El.exec(n),a=El.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Th(e,l===void 0?new Tl(o,i,t):new Al(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new wl(o),Th(e,u)),e=u}}}var Zi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);tg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ah(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var eg=37297,ng=0;function ig(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var wh=new Vt;function sg(i){Kt._getMatrix(wh,Kt.workingColorSpace,i);let t=`mat3( ${wh.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case ps:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ig(i.getShaderSource(t),o)}else return r}function rg(i,t){let e=sg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ag(i,t){let e;switch(t){case kc:e="Linear";break;case Hc:e="Reinhard";break;case Gc:e="Cineon";break;case ga:e="ACESFilmic";break;case Xc:e="AgX";break;case qc:e="Neutral";break;case Wc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var so=new I;function og(){Kt.getLuminanceCoefficients(so);let i=so.x.toFixed(4),t=so.y.toFixed(4),e=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function cg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function $s(i){return i!==""}function Ch(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(ug,fg)}var dg=new Map;function fg(i,t){let e=Wt[t];if(e===void 0){let n=dg.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}var pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(pg,mg)}function mg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function xg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ei:case ni:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ni:t="ENVMAP_MODE_REFRACTION";break}return t}function yg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ma:t="ENVMAP_BLENDING_MULTIPLY";break;case zc:t="ENVMAP_BLENDING_MIX";break;case Vc:t="ENVMAP_BLENDING_ADD";break}return t}function Mg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=gg(e),l=xg(e),h=vg(e),u=yg(e),d=Mg(e),p=lg(e),g=cg(r),v=s.createProgram(),m,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),f.length>0&&(f+=`
`)):(m=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),f=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==bn?ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,rg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),a=Rl(a),a=Ch(a,e),a=Ih(a,e),o=Rl(o),o=Ch(o,e),o=Ih(o,e),a=Ph(a),o=Ph(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=A+m+a,M=A+f+o,R=Ah(s,s.VERTEX_SHADER,_),w=Ah(s,s.FRAGMENT_SHADER,M);s.attachShader(v,R),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(C){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(w)||"",Y=B.trim(),W=G.trim(),it=q.trim(),H=!0,ht=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,w);else{let pt=Rh(s,R,"vertex"),yt=Rh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+pt+`
`+yt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(W===""||it==="")&&(ht=!1);ht&&(C.diagnostics={runnable:H,programLog:Y,vertexShader:{log:W,prefix:m},fragmentShader:{log:it,prefix:f}})}s.deleteShader(R),s.deleteShader(w),U=new Zi(s,v),b=hg(s,v)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,eg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ng++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=w,this}var _g=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Il(t),e.set(t,n)),n}},Il=class{constructor(t){this.id=_g++,this.code=t,this.usedTimes=0}};function bg(i,t,e,n,s,r,a){let o=new vs,c=new Cl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,C,B,G){let q=B.fog,Y=G.geometry,W=b.isMeshStandardMaterial?B.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),H=it&&it.mapping===Ys?it.image.height:null,ht=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yt=pt!==void 0?pt.length:0,Ot=0;Y.morphAttributes.position!==void 0&&(Ot=1),Y.morphAttributes.normal!==void 0&&(Ot=2),Y.morphAttributes.color!==void 0&&(Ot=3);let Gt,Jt,qt,J;if(ht){let jt=an[ht];Gt=jt.vertexShader,Jt=jt.fragmentShader}else Gt=b.vertexShader,Jt=b.fragmentShader,c.update(b),qt=c.getVertexShaderID(b),J=c.getFragmentShaderID(b);let $=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),wt=G.isInstancedMesh===!0,St=G.isBatchedMesh===!0,Bt=!!b.map,Qt=!!b.matcap,T=!!it,nt=!!b.aoMap,j=!!b.lightMap,K=!!b.bumpMap,O=!!b.normalMap,tt=!!b.displacementMap,Z=!!b.emissiveMap,st=!!b.metalnessMap,It=!!b.roughnessMap,Ut=b.anisotropy>0,E=b.clearcoat>0,x=b.dispersion>0,F=b.iridescence>0,k=b.sheen>0,et=b.transmission>0,X=Ut&&!!b.anisotropyMap,Rt=E&&!!b.clearcoatMap,ct=E&&!!b.clearcoatNormalMap,Et=E&&!!b.clearcoatRoughnessMap,Tt=F&&!!b.iridescenceMap,rt=F&&!!b.iridescenceThicknessMap,xt=k&&!!b.sheenColorMap,Nt=k&&!!b.sheenRoughnessMap,Ct=!!b.specularMap,mt=!!b.specularColorMap,kt=!!b.specularIntensityMap,D=et&&!!b.transmissionMap,lt=et&&!!b.thicknessMap,ut=!!b.gradientMap,_t=!!b.alphaMap,at=b.alphaTest>0,Q=!!b.alphaHash,At=!!b.extensions,zt=bn;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(zt=i.toneMapping);let re={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:Gt,fragmentShader:Jt,defines:b.defines,customVertexShaderID:qt,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:St,batchingColor:St&&G._colorsTexture!==null,instancing:wt,instancingColor:wt&&G.instanceColor!==null,instancingMorph:wt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Kn,alphaToCoverage:!!b.alphaToCoverage,map:Bt,matcap:Qt,envMap:T,envMapMode:T&&it.mapping,envMapCubeUVHeight:H,aoMap:nt,lightMap:j,bumpMap:K,normalMap:O,displacementMap:d&&tt,emissiveMap:Z,normalMapObjectSpace:O&&b.normalMapType===Zc,normalMapTangentSpace:O&&b.normalMapType===eo,metalnessMap:st,roughnessMap:It,anisotropy:Ut,anisotropyMap:X,clearcoat:E,clearcoatMap:Rt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Et,dispersion:x,iridescence:F,iridescenceMap:Tt,iridescenceThicknessMap:rt,sheen:k,sheenColorMap:xt,sheenRoughnessMap:Nt,specularMap:Ct,specularColorMap:mt,specularIntensityMap:kt,transmission:et,transmissionMap:D,thicknessMap:lt,gradientMap:ut,opaque:b.transparent===!1&&b.blending===Yn&&b.alphaToCoverage===!1,alphaMap:_t,alphaTest:at,alphaHash:Q,combine:b.combine,mapUv:Bt&&v(b.map.channel),aoMapUv:nt&&v(b.aoMap.channel),lightMapUv:j&&v(b.lightMap.channel),bumpMapUv:K&&v(b.bumpMap.channel),normalMapUv:O&&v(b.normalMap.channel),displacementMapUv:tt&&v(b.displacementMap.channel),emissiveMapUv:Z&&v(b.emissiveMap.channel),metalnessMapUv:st&&v(b.metalnessMap.channel),roughnessMapUv:It&&v(b.roughnessMap.channel),anisotropyMapUv:X&&v(b.anisotropyMap.channel),clearcoatMapUv:Rt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(b.sheenRoughnessMap.channel),specularMapUv:Ct&&v(b.specularMap.channel),specularColorMapUv:mt&&v(b.specularColorMap.channel),specularIntensityMapUv:kt&&v(b.specularIntensityMap.channel),transmissionMapUv:D&&v(b.transmissionMap.channel),thicknessMapUv:lt&&v(b.thicknessMap.channel),alphaMapUv:_t&&v(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(O||Ut),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(Bt||_t),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Bt&&b.map.isVideoTexture===!0&&Kt.getTransfer(b.map.colorSpace)===te,decodeVideoTextureEmissive:Z&&b.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(b.emissiveMap.colorSpace)===te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===rn,flipSided:b.side===ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:At&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&b.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function f(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)S.push(C),S.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(A(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function A(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let S=g[b.type],C;if(S){let B=an[S];C=oh.clone(B.uniforms)}else C=b.uniforms;return C}function R(b,S){let C;for(let B=0,G=h.length;B<G;B++){let q=h[B];if(q.cacheKey===S){C=q,++C.usedTimes;break}}return C===void 0&&(C=new Sg(i,S,b,r),h.push(C)),C}function w(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:U}}function Eg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Tg),n.length>1&&n.sort(d||Lh),s.length>1&&s.sort(d||Lh)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Ag(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Uh,i.set(n,[a])):s>=r.length?(a=new Uh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ht};break;case"SpotLight":e={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Rg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Cg=0;function Ig(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pg(i){let t=new wg,e=Rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new se,a=new se;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,A=0,_=0,M=0,R=0,w=0,P=0;l.sort(Ig);for(let b=0,S=l.length;b<S;b++){let C=l[b],B=C.color,G=C.intensity,q=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*G,u+=B.g*G,d+=B.b*G;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],G);P++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let it=C.shadow,H=e.get(C);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=C.shadow.matrix,A++}n.directional[p]=W,p++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(B).multiplyScalar(G),W.distance=q,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[v]=W;let it=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,it.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=it.matrix,C.castShadow){let H=e.get(C);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=Y,M++}v++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(B).multiplyScalar(G),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let it=C.shadow,H=e.get(C);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,H.shadowCameraNear=it.camera.near,H.shadowCameraFar=it.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,_++}n.point[g]=W,g++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(G),W.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==A||U.numPointShadows!==_||U.numSpotShadows!==M||U.numSpotMaps!==R||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=A,U.numPointShadows=_,U.numSpotShadows=M,U.numSpotMaps=R,U.numLightProbes=P,n.version=Cg++)}function c(l,h){let u=0,d=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){let _=l[f];if(_.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(_.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Nh(i){let t=new Pg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Dg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Nh(i),t.set(s,[o])):r>=a.length?(o=new Nh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ng(i,t,e){let n=new Li,s=new dt,r=new dt,a=new $t,o=new Kr({depthPacking:Kc}),c=new Zr,l={},h=e.maxTextureSize,u={[gn]:ve,[ve]:gn,[rn]:rn},d=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Lg,fragmentShader:Ug}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ne;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let f=this.type;this.render=function(w,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(_n),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=f!==sn&&this.type===sn,q=f===sn&&this.type!==sn;for(let Y=0,W=w.length;Y<W;Y++){let it=w[Y],H=it.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ht=H.getFrameExtents();if(s.multiply(ht),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,H.mapSize.y=r.y)),H.map===null||G===!0||q===!0){let yt=this.type!==sn?{minFilter:Ie,magFilter:Ie}:{};H.map!==null&&H.map.dispose(),H.map=new tn(s.x,s.y,yt),H.map.texture.name=it.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let pt=H.getViewportCount();for(let yt=0;yt<pt;yt++){let Ot=H.getViewport(yt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),B.viewport(a),H.updateMatrices(it,yt),n=H.getFrustum(),M(P,U,H.camera,it,this.type)}H.isPointLightShadow!==!0&&this.type===sn&&A(H,U),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,C)};function A(w,P){let U=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new tn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,U,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,U,p,v,null)}function _(w,P,U,b){let S=null,C=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=U.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=S.uuid,G=P.uuid,q=l[B];q===void 0&&(q={},l[B]=q);let Y=q[G];Y===void 0&&(Y=S.clone(),q[G]=Y,P.addEventListener("dispose",R)),S=Y}if(S.visible=P.visible,S.wireframe=P.wireframe,b===sn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=U}return S}function M(w,P,U,b,S){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);let G=t.update(w),q=w.material;if(Array.isArray(q)){let Y=G.groups;for(let W=0,it=Y.length;W<it;W++){let H=Y[W],ht=q[H.materialIndex];if(ht&&ht.visible){let pt=_(w,ht,b,S);w.onBeforeShadow(i,w,P,U,G,pt,H),i.renderBufferDirect(U,null,G,pt,w,H),w.onAfterShadow(i,w,P,U,G,pt,H)}}}else if(q.visible){let Y=_(w,q,b,S);w.onBeforeShadow(i,w,P,U,G,Y,null),i.renderBufferDirect(U,null,G,Y,w,null),w.onAfterShadow(i,w,P,U,G,Y,null)}}let B=w.children;for(let G=0,q=B.length;G<q;G++)M(B[G],P,U,b,S)}function R(w){w.target.removeEventListener("dispose",R);for(let U in l){let b=l[U],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var Fg={[la]:ca,[ha]:fa,[ua]:pa,[Jn]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:Jn};function Og(i,t){function e(){let D=!1,lt=new $t,ut=null,_t=new $t(0,0,0,0);return{setMask:function(at){ut!==at&&!D&&(i.colorMask(at,at,at,at),ut=at)},setLocked:function(at){D=at},setClear:function(at,Q,At,zt,re){re===!0&&(at*=zt,Q*=zt,At*=zt),lt.set(at,Q,At,zt),_t.equals(lt)===!1&&(i.clearColor(at,Q,At,zt),_t.copy(lt))},reset:function(){D=!1,ut=null,_t.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,ut=null,_t=null,at=null;return{setReversed:function(Q){if(lt!==Q){let At=t.get("EXT_clip_control");Q?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),lt=Q;let zt=at;at=null,this.setClear(zt)}},getReversed:function(){return lt},setTest:function(Q){Q?$(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(Q){ut!==Q&&!D&&(i.depthMask(Q),ut=Q)},setFunc:function(Q){if(lt&&(Q=Fg[Q]),_t!==Q){switch(Q){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case Jn:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Q}},setLocked:function(Q){D=Q},setClear:function(Q){at!==Q&&(lt&&(Q=1-Q),i.clearDepth(Q),at=Q)},reset:function(){D=!1,ut=null,_t=null,at=null,lt=!1}}}function s(){let D=!1,lt=null,ut=null,_t=null,at=null,Q=null,At=null,zt=null,re=null;return{setTest:function(jt){D||(jt?$(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(jt){lt!==jt&&!D&&(i.stencilMask(jt),lt=jt)},setFunc:function(jt,ln,je){(ut!==jt||_t!==ln||at!==je)&&(i.stencilFunc(jt,ln,je),ut=jt,_t=ln,at=je)},setOp:function(jt,ln,je){(Q!==jt||At!==ln||zt!==je)&&(i.stencilOp(jt,ln,je),Q=jt,At=ln,zt=je)},setLocked:function(jt){D=jt},setClear:function(jt){re!==jt&&(i.clearStencil(jt),re=jt)},reset:function(){D=!1,lt=null,ut=null,_t=null,at=null,Q=null,At=null,zt=null,re=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,A=null,_=null,M=null,R=null,w=null,P=new Ht(0,0,0),U=0,b=!1,S=null,C=null,B=null,G=null,q=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=it>=1):H.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=it>=2);let ht=null,pt={},yt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Gt=new $t().fromArray(yt),Jt=new $t().fromArray(Ot);function qt(D,lt,ut,_t){let at=new Uint8Array(4),Q=i.createTexture();i.bindTexture(D,Q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ut;At++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(lt+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Q}let J={};J[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Jn),K(!1),O(jo),$(i.CULL_FACE),nt(_n);function $(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function vt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function wt(D,lt){return u[D]!==lt?(i.bindFramebuffer(D,lt),u[D]=lt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function St(D,lt){let ut=p,_t=!1;if(D){ut=d.get(lt),ut===void 0&&(ut=[],d.set(lt,ut));let at=D.textures;if(ut.length!==at.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,At=at.length;Q<At;Q++)ut[Q]=i.COLOR_ATTACHMENT0+Q;ut.length=at.length,_t=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,_t=!0);_t&&i.drawBuffers(ut)}function Bt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Qt={[Dn]:i.FUNC_ADD,[_c]:i.FUNC_SUBTRACT,[bc]:i.FUNC_REVERSE_SUBTRACT};Qt[Ec]=i.MIN,Qt[Tc]=i.MAX;let T={[Ac]:i.ZERO,[wc]:i.ONE,[Rc]:i.SRC_COLOR,[Pr]:i.SRC_ALPHA,[Uc]:i.SRC_ALPHA_SATURATE,[Dc]:i.DST_COLOR,[Ic]:i.DST_ALPHA,[Cc]:i.ONE_MINUS_SRC_COLOR,[Dr]:i.ONE_MINUS_SRC_ALPHA,[Lc]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Nc]:i.CONSTANT_COLOR,[Fc]:i.ONE_MINUS_CONSTANT_COLOR,[Oc]:i.CONSTANT_ALPHA,[Bc]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(D,lt,ut,_t,at,Q,At,zt,re,jt){if(D===_n){v===!0&&(vt(i.BLEND),v=!1);return}if(v===!1&&($(i.BLEND),v=!0),D!==Sc){if(D!==m||jt!==b){if((f!==Dn||M!==Dn)&&(i.blendEquation(i.FUNC_ADD),f=Dn,M=Dn),jt)switch(D){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,_=null,R=null,w=null,P.set(0,0,0),U=0,m=D,b=jt}return}at=at||lt,Q=Q||ut,At=At||_t,(lt!==f||at!==M)&&(i.blendEquationSeparate(Qt[lt],Qt[at]),f=lt,M=at),(ut!==A||_t!==_||Q!==R||At!==w)&&(i.blendFuncSeparate(T[ut],T[_t],T[Q],T[At]),A=ut,_=_t,R=Q,w=At),(zt.equals(P)===!1||re!==U)&&(i.blendColor(zt.r,zt.g,zt.b,re),P.copy(zt),U=re),m=D,b=!1}function j(D,lt){D.side===rn?vt(i.CULL_FACE):$(i.CULL_FACE);let ut=D.side===ve;lt&&(ut=!ut),K(ut),D.blending===Yn&&D.transparent===!1?nt(_n):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let _t=D.stencilWrite;o.setTest(_t),_t&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function O(D){D!==vc?($(i.CULL_FACE),D!==C&&(D===jo?i.cullFace(i.BACK):D===yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),C=D}function tt(D){D!==B&&(W&&i.lineWidth(D),B=D)}function Z(D,lt,ut){D?($(i.POLYGON_OFFSET_FILL),(G!==lt||q!==ut)&&(i.polygonOffset(lt,ut),G=lt,q=ut)):vt(i.POLYGON_OFFSET_FILL)}function st(D){D?$(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function It(D){D===void 0&&(D=i.TEXTURE0+Y-1),ht!==D&&(i.activeTexture(D),ht=D)}function Ut(D,lt,ut){ut===void 0&&(ht===null?ut=i.TEXTURE0+Y-1:ut=ht);let _t=pt[ut];_t===void 0&&(_t={type:void 0,texture:void 0},pt[ut]=_t),(_t.type!==D||_t.texture!==lt)&&(ht!==ut&&(i.activeTexture(ut),ht=ut),i.bindTexture(D,lt||J[D]),_t.type=D,_t.texture=lt)}function E(){let D=pt[ht];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(D){Gt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Gt.copy(D))}function Nt(D){Jt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Jt.copy(D))}function Ct(D,lt){let ut=l.get(lt);ut===void 0&&(ut=new WeakMap,l.set(lt,ut));let _t=ut.get(D);_t===void 0&&(_t=i.getUniformBlockIndex(lt,D.name),ut.set(D,_t))}function mt(D,lt){let _t=l.get(lt).get(D);c.get(lt)!==_t&&(i.uniformBlockBinding(lt,_t,D.__bindingPointIndex),c.set(lt,_t))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,pt={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,A=null,_=null,M=null,R=null,w=null,P=new Ht(0,0,0),U=0,b=!1,S=null,C=null,B=null,G=null,q=null,Gt.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:vt,bindFramebuffer:wt,drawBuffers:St,useProgram:Bt,setBlending:nt,setMaterial:j,setFlipSided:K,setCullFace:O,setLineWidth:tt,setPolygonOffset:Z,setScissorTest:st,activeTexture:It,bindTexture:Ut,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Tt,texImage3D:rt,updateUBOMapping:Ct,uniformBlockBinding:mt,texStorage2D:ct,texStorage3D:Et,texSubImage2D:k,texSubImage3D:et,compressedTexSubImage2D:X,compressedTexSubImage3D:Rt,scissor:xt,viewport:Nt,reset:kt}}function Bg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):Ci("canvas")}function v(E,x,F){let k=1,et=Ut(E);if((et.width>F||et.height>F)&&(k=F/Math.max(et.width,et.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let X=Math.floor(k*et.width),Rt=Math.floor(k*et.height);u===void 0&&(u=g(X,Rt));let ct=x?g(X,Rt):u;return ct.width=X,ct.height=Rt,ct.getContext("2d").drawImage(E,0,0,X,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+X+"x"+Rt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(E,x,F,k,et=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=x;if(x===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),x===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),x===i.RGBA){let Rt=et?ps:Kt.getTransfer(k);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=Rt===te?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(E,x){let F;return E?x===null||x===Bn||x===Xi?F=i.DEPTH24_STENCIL8:x===Ze?F=i.DEPTH32F_STENCIL8:x===Gi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bn||x===Xi?F=i.DEPTH_COMPONENT24:x===Ze?F=i.DEPTH_COMPONENT32F:x===Gi&&(F=i.DEPTH_COMPONENT16),F}function R(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ie&&E.minFilter!==Ye?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){let x=E.target;x.removeEventListener("dispose",w),U(x),x.isVideoTexture&&h.delete(x)}function P(E){let x=E.target;x.removeEventListener("dispose",P),S(x)}function U(E){let x=n.get(E);if(x.__webglInit===void 0)return;let F=E.source,k=d.get(F);if(k){let et=k[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(E),Object.keys(k).length===0&&d.delete(F)}n.remove(E)}function b(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let F=E.source,k=d.get(F);delete k[x.__cacheKey],a.memory.textures--}function S(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let et=0;et<x.__webglFramebuffer[k].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[k][et]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=E.textures;for(let k=0,et=F.length;k<et;k++){let X=n.get(F[k]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(E)}let C=0;function B(){C=0}function G(){let E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function q(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function Y(E,x){let F=n.get(E);if(E.isVideoTexture&&st(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let k=E.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,E,x);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function W(E,x){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){J(F,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function it(E,x){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){J(F,E,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function H(E,x){let F=n.get(E);if(E.version>0&&F.__version!==E.version){$(F,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let ht={[Lr]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},pt={[Ie]:i.NEAREST,[Yc]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},yt={[jc]:i.NEVER,[ih]:i.ALWAYS,[Qc]:i.LESS,[hl]:i.LEQUAL,[$c]:i.EQUAL,[nh]:i.GEQUAL,[th]:i.GREATER,[eh]:i.NOTEQUAL};function Ot(E,x){if(x.type===Ze&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ye||x.magFilter===ya||x.magFilter===Js||x.magFilter===On||x.minFilter===Ye||x.minFilter===ya||x.minFilter===Js||x.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ht[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ht[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ht[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,pt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ie||x.minFilter!==Js&&x.minFilter!==On||x.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Gt(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",w));let k=x.source,et=d.get(k);et===void 0&&(et={},d.set(k,et));let X=q(x);if(X!==E.__cacheKey){et[X]===void 0&&(et[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),et[X].usedTimes++;let Rt=et[E.__cacheKey];Rt!==void 0&&(et[E.__cacheKey].usedTimes--,Rt.usedTimes===0&&b(x)),E.__cacheKey=X,E.__webglTexture=et[X].texture}return F}function Jt(E,x,F){return Math.floor(Math.floor(E/F)/x)}function qt(E,x,F,k){let X=E.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,k,x.data);else{X.sort((rt,xt)=>rt.start-xt.start);let Rt=0;for(let rt=1;rt<X.length;rt++){let xt=X[Rt],Nt=X[rt],Ct=xt.start+xt.count,mt=Jt(Nt.start,x.width,4),kt=Jt(xt.start,x.width,4);Nt.start<=Ct+1&&mt===kt&&Jt(Nt.start+Nt.count-1,x.width,4)===mt?xt.count=Math.max(xt.count,Nt.start+Nt.count-xt.start):(++Rt,X[Rt]=Nt)}X.length=Rt+1;let ct=i.getParameter(i.UNPACK_ROW_LENGTH),Et=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let rt=0,xt=X.length;rt<xt;rt++){let Nt=X[rt],Ct=Math.floor(Nt.start/4),mt=Math.ceil(Nt.count/4),kt=Ct%x.width,D=Math.floor(Ct/x.width),lt=mt,ut=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,kt,D,lt,ut,F,k,x.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function J(E,x,F){let k=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=i.TEXTURE_3D);let et=Gt(E,x),X=x.source;e.bindTexture(k,E.__webglTexture,i.TEXTURE0+F);let Rt=n.get(X);if(X.version!==Rt.__version||et===!0){e.activeTexture(i.TEXTURE0+F);let ct=Kt.getPrimaries(Kt.workingColorSpace),Et=x.colorSpace===En?null:Kt.getPrimaries(x.colorSpace),Tt=x.colorSpace===En||ct===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let rt=v(x.image,!1,s.maxTextureSize);rt=It(x,rt);let xt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),Ct=_(x.internalFormat,xt,Nt,x.colorSpace,x.isVideoTexture);Ot(k,x);let mt,kt=x.mipmaps,D=x.isVideoTexture!==!0,lt=Rt.__version===void 0||et===!0,ut=X.dataReady,_t=R(x,rt);if(x.isDepthTexture)Ct=M(x.format===qi,x.type),lt&&(D?e.texStorage2D(i.TEXTURE_2D,1,Ct,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,rt.width,rt.height,0,xt,Nt,null));else if(x.isDataTexture)if(kt.length>0){D&&lt&&e.texStorage2D(i.TEXTURE_2D,_t,Ct,kt[0].width,kt[0].height);for(let at=0,Q=kt.length;at<Q;at++)mt=kt[at],D?ut&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,mt.width,mt.height,xt,Nt,mt.data):e.texImage2D(i.TEXTURE_2D,at,Ct,mt.width,mt.height,0,xt,Nt,mt.data);x.generateMipmaps=!1}else D?(lt&&e.texStorage2D(i.TEXTURE_2D,_t,Ct,rt.width,rt.height),ut&&qt(x,rt,xt,Nt)):e.texImage2D(i.TEXTURE_2D,0,Ct,rt.width,rt.height,0,xt,Nt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Ct,kt[0].width,kt[0].height,rt.depth);for(let at=0,Q=kt.length;at<Q;at++)if(mt=kt[at],x.format!==He)if(xt!==null)if(D){if(ut)if(x.layerUpdates.size>0){let At=vl(mt.width,mt.height,x.format,x.type);for(let zt of x.layerUpdates){let re=mt.data.subarray(zt*At/mt.data.BYTES_PER_ELEMENT,(zt+1)*At/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,zt,mt.width,mt.height,1,xt,re)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,mt.width,mt.height,rt.depth,xt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Ct,mt.width,mt.height,rt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,mt.width,mt.height,rt.depth,xt,Nt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Ct,mt.width,mt.height,rt.depth,0,xt,Nt,mt.data)}else{D&&lt&&e.texStorage2D(i.TEXTURE_2D,_t,Ct,kt[0].width,kt[0].height);for(let at=0,Q=kt.length;at<Q;at++)mt=kt[at],x.format!==He?xt!==null?D?ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,mt.width,mt.height,xt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ut&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,mt.width,mt.height,xt,Nt,mt.data):e.texImage2D(i.TEXTURE_2D,at,Ct,mt.width,mt.height,0,xt,Nt,mt.data)}else if(x.isDataArrayTexture)if(D){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Ct,rt.width,rt.height,rt.depth),ut)if(x.layerUpdates.size>0){let at=vl(rt.width,rt.height,x.format,x.type);for(let Q of x.layerUpdates){let At=rt.data.subarray(Q*at/rt.data.BYTES_PER_ELEMENT,(Q+1)*at/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,xt,Nt,At)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Nt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,rt.width,rt.height,rt.depth,0,xt,Nt,rt.data);else if(x.isData3DTexture)D?(lt&&e.texStorage3D(i.TEXTURE_3D,_t,Ct,rt.width,rt.height,rt.depth),ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Nt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,rt.width,rt.height,rt.depth,0,xt,Nt,rt.data);else if(x.isFramebufferTexture){if(lt)if(D)e.texStorage2D(i.TEXTURE_2D,_t,Ct,rt.width,rt.height);else{let at=rt.width,Q=rt.height;for(let At=0;At<_t;At++)e.texImage2D(i.TEXTURE_2D,At,Ct,at,Q,0,xt,Nt,null),at>>=1,Q>>=1}}else if(kt.length>0){if(D&&lt){let at=Ut(kt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Ct,at.width,at.height)}for(let at=0,Q=kt.length;at<Q;at++)mt=kt[at],D?ut&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt,Nt,mt):e.texImage2D(i.TEXTURE_2D,at,Ct,xt,Nt,mt);x.generateMipmaps=!1}else if(D){if(lt){let at=Ut(rt);e.texStorage2D(i.TEXTURE_2D,_t,Ct,at.width,at.height)}ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Nt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,xt,Nt,rt);m(x)&&f(k),Rt.__version=X.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function $(E,x,F){if(x.image.length!==6)return;let k=Gt(E,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let X=n.get(et);if(et.version!==X.__version||k===!0){e.activeTexture(i.TEXTURE0+F);let Rt=Kt.getPrimaries(Kt.workingColorSpace),ct=x.colorSpace===En?null:Kt.getPrimaries(x.colorSpace),Et=x.colorSpace===En||Rt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!Tt&&!rt?xt[Q]=v(x.image[Q],!0,s.maxCubemapSize):xt[Q]=rt?x.image[Q].image:x.image[Q],xt[Q]=It(x,xt[Q]);let Nt=xt[0],Ct=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),kt=_(x.internalFormat,Ct,mt,x.colorSpace),D=x.isVideoTexture!==!0,lt=X.__version===void 0||k===!0,ut=et.dataReady,_t=R(x,Nt);Ot(i.TEXTURE_CUBE_MAP,x);let at;if(Tt){D&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,kt,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){at=xt[Q].mipmaps;for(let At=0;At<at.length;At++){let zt=at[At];x.format!==He?Ct!==null?D?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,0,0,zt.width,zt.height,Ct,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,0,0,zt.width,zt.height,Ct,mt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,kt,zt.width,zt.height,0,Ct,mt,zt.data)}}}else{if(at=x.mipmaps,D&&lt){at.length>0&&_t++;let Q=Ut(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Ct,mt,xt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,kt,xt[Q].width,xt[Q].height,0,Ct,mt,xt[Q].data);for(let At=0;At<at.length;At++){let re=at[At].image[Q].image;D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,0,0,re.width,re.height,Ct,mt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,kt,re.width,re.height,0,Ct,mt,re.data)}}else{D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ct,mt,xt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,kt,Ct,mt,xt[Q]);for(let At=0;At<at.length;At++){let zt=at[At];D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,0,0,Ct,mt,zt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,kt,Ct,mt,zt.image[Q])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),X.__version=et.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function vt(E,x,F,k,et,X){let Rt=r.convert(F.format,F.colorSpace),ct=r.convert(F.type),Et=_(F.internalFormat,Rt,ct,F.colorSpace),Tt=n.get(x),rt=n.get(F);if(rt.__renderTarget=x,!Tt.__hasExternalTextures){let xt=Math.max(1,x.width>>X),Nt=Math.max(1,x.height>>X);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,X,Et,xt,Nt,x.depth,0,Rt,ct,null):e.texImage2D(et,X,Et,xt,Nt,0,Rt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Z(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,et,rt.__webglTexture,0,tt(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,et,rt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(E,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let k=x.depthTexture,et=k&&k.isDepthTexture?k.type:null,X=M(x.stencilBuffer,et),Rt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=tt(x);Z(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,X,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,E)}else{let k=x.textures;for(let et=0;et<k.length;et++){let X=k[et],Rt=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),Et=_(X.internalFormat,Rt,ct,X.colorSpace),Tt=tt(x);F&&Z(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Et,x.width,x.height):Z(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=n.get(x.depthTexture);k.__renderTarget=x,(!k.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);let et=k.__webglTexture,X=tt(x);if(x.depthTexture.format===wi)Z(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===qi)Z(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Bt(E){let x=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let k=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",et)};k.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=k}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let k=E.texture.mipmaps;k&&k.length>0?St(x.__webglFramebuffer[0],E):St(x.__webglFramebuffer,E)}else if(F){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=i.createRenderbuffer(),wt(x.__webglDepthbuffer[k],E,!1);else{let et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,X)}}else{let k=E.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),wt(x.__webglDepthbuffer,E,!1);else{let et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(E,x,F){let k=n.get(E);x!==void 0&&vt(k.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Bt(E)}function T(E){let x=E.texture,F=n.get(E),k=n.get(x);E.addEventListener("dispose",P);let et=E.textures,X=E.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=x.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let Et=0;Et<x.mipmaps.length;Et++)F.__webglFramebuffer[ct][Et]=i.createFramebuffer()}else F.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)F.__webglFramebuffer[ct]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ct=0,Et=et.length;ct<Et;ct++){let Tt=n.get(et[ct]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Z(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){let Et=et[ct];F.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);let Tt=r.convert(Et.format,Et.colorSpace),rt=r.convert(Et.type),xt=_(Et.internalFormat,Tt,rt,Et.colorSpace,E.isXRRenderTarget===!0),Nt=tt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)vt(F.__webglFramebuffer[ct][Et],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et);else vt(F.__webglFramebuffer[ct],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ct=0,Et=et.length;ct<Et;ct++){let Tt=et[ct],rt=n.get(Tt),xt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(xt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,rt.__webglTexture),Ot(xt,Tt),vt(F.__webglFramebuffer,E,Tt,i.COLOR_ATTACHMENT0+ct,xt,0),m(Tt)&&f(xt)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,k.__webglTexture),Ot(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)vt(F.__webglFramebuffer[Et],E,x,i.COLOR_ATTACHMENT0,ct,Et);else vt(F.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ct,0);m(x)&&f(ct),e.unbindTexture()}E.depthBuffer&&Bt(E)}function nt(E){let x=E.textures;for(let F=0,k=x.length;F<k;F++){let et=x[F];if(m(et)){let X=A(E),Rt=n.get(et).__webglTexture;e.bindTexture(X,Rt),f(X),e.unbindTexture()}}}let j=[],K=[];function O(E){if(E.samples>0){if(Z(E)===!1){let x=E.textures,F=E.width,k=E.height,et=i.COLOR_BUFFER_BIT,X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(E),ct=x.length>1;if(ct)for(let Tt=0;Tt<x.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let Et=E.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Tt=0;Tt<x.length;Tt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Tt]);let rt=n.get(x[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,et,i.NEAREST),c===!0&&(j.length=0,K.length=0,j.push(i.COLOR_ATTACHMENT0+Tt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(j.push(X),K.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Tt=0;Tt<x.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Tt]);let rt=n.get(x[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function tt(E){return Math.min(s.maxSamples,E.samples)}function Z(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function st(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function It(E,x){let F=E.colorSpace,k=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Kn&&F!==En&&(Kt.getTransfer(F)===te?(k!==He||et!==Ke)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Ut(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=H,this.rebindTextures=Qt,this.setupRenderTarget=T,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Z}function zg(i,t){function e(n,s=En){let r,a=Kt.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===il)return i.BYTE;if(n===sl)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===Ma)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===Ze)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===ol)return i.ALPHA;if(n===ll)return i.RGB;if(n===He)return i.RGBA;if(n===wi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===ba)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===cl)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===Ks||n===Zs||n===js||n===Qs)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ra||n===Ca||n===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===Da||n===La)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===Da)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Va||n===ka||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===Ka||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ja)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ja||n===Qa||n===$a||n===to)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Rs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:Vg,fragmentShader:kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new Pl,f={},A=e.getContextAttributes(),_=null,M=null,R=[],w=[],P=new dt,U=null,b=new we;b.viewport=new $t;let S=new we;S.viewport=new $t;let C=[b,S],B=new oa,G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let $=R[J];return $===void 0&&($=new Di,R[J]=$),$.getTargetRaySpace()},this.getControllerGrip=function(J){let $=R[J];return $===void 0&&($=new Di,R[J]=$),$.getGripSpace()},this.getHand=function(J){let $=R[J];return $===void 0&&($=new Di,R[J]=$),$.getHandSpace()};function Y(J){let $=w.indexOf(J.inputSource);if($===-1)return;let vt=R[$];vt!==void 0&&(vt.update(J.inputSource,J.frame,l||a),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",it);for(let J=0;J<R.length;J++){let $=w[J];$!==null&&(w[J]=null,R[J].disconnect($))}G=null,q=null,m.reset();for(let J in f)delete f[J];t.setRenderTarget(_),p=null,d=null,u=null,s=null,M=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",it),A.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,wt=null,St=null;A.depth&&(St=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=A.stencil?qi:wi,wt=A.stencil?Xi:Bn);let Bt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new tn(d.textureWidth,d.textureHeight,{format:He,type:Ke,depthTexture:new ws(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let vt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new tn(p.framebufferWidth,p.framebufferHeight,{format:He,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(J){for(let $=0;$<J.removed.length;$++){let vt=J.removed[$],wt=w.indexOf(vt);wt>=0&&(w[wt]=null,R[wt].disconnect(vt))}for(let $=0;$<J.added.length;$++){let vt=J.added[$],wt=w.indexOf(vt);if(wt===-1){for(let Bt=0;Bt<R.length;Bt++)if(Bt>=w.length){w.push(vt),wt=Bt;break}else if(w[Bt]===null){w[Bt]=vt,wt=Bt;break}if(wt===-1)break}let St=R[wt];St&&St.connect(vt)}}let H=new I,ht=new I;function pt(J,$,vt){H.setFromMatrixPosition($.matrixWorld),ht.setFromMatrixPosition(vt.matrixWorld);let wt=H.distanceTo(ht),St=$.projectionMatrix.elements,Bt=vt.projectionMatrix.elements,Qt=St[14]/(St[10]-1),T=St[14]/(St[10]+1),nt=(St[9]+1)/St[5],j=(St[9]-1)/St[5],K=(St[8]-1)/St[0],O=(Bt[8]+1)/Bt[0],tt=Qt*K,Z=Qt*O,st=wt/(-K+O),It=st*-K;if($.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(It),J.translateZ(st),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),St[10]===-1)J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Ut=Qt+st,E=T+st,x=tt-It,F=Z+(wt-It),k=nt*T/E*Ut,et=j*T/E*Ut;J.projectionMatrix.makePerspective(x,F,k,et,Ut,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function yt(J,$){$===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices($.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let $=J.near,vt=J.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),B.near=S.near=b.near=$,B.far=S.far=b.far=vt,(G!==B.near||q!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,q=B.far),B.layers.mask=J.layers.mask|6,b.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;let wt=J.parent,St=B.cameras;yt(B,wt);for(let Bt=0;Bt<St.length;Bt++)yt(St[Bt],wt);St.length===2?pt(B,b,S):B.projectionMatrix.copy(b.projectionMatrix),Ot(J,B,wt)};function Ot(J,$,vt){vt===null?J.matrix.copy($.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply($.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ri*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return f[J]};let Gt=null;function Jt(J,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let wt=!1;vt.length!==B.cameras.length&&(B.cameras.length=0,wt=!0);for(let T=0;T<vt.length;T++){let nt=vt[T],j=null;if(p!==null)j=p.getViewport(nt);else{let O=u.getViewSubImage(d,nt);j=O.viewport,T===0&&(t.setRenderTargetTextures(M,O.colorTexture,O.depthStencilTexture),t.setRenderTarget(M))}let K=C[T];K===void 0&&(K=new we,K.layers.enable(T),K.viewport=new $t,C[T]=K),K.matrix.fromArray(nt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(nt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(j.x,j.y,j.width,j.height),T===0&&(B.matrix.copy(K.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),wt===!0&&B.cameras.push(K)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let T=u.getDepthInformation(vt[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(St&&St.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let T=0;T<vt.length;T++){let nt=vt[T].camera;if(nt){let j=f[nt];j||(j=new Rs,f[nt]=j);let K=u.getCameraImage(nt);j.sourceTexture=K}}}}for(let vt=0;vt<R.length;vt++){let wt=w[vt],St=R[vt];wt!==null&&St!==void 0&&St.update(wt,$,l||a)}Gt&&Gt(J,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let qt=new Fh;qt.setAnimationLoop(Jt),this.setAnimationLoop=function(J){Gt=J},this.dispose=function(){}}},ai=new ke,Hg=new se;function Gg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,pl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,A,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ve&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ve&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let A=t.get(f),_=A.envMap,M=A.envMapRotation;_&&(m.envMap.value=_,ai.copy(M),ai.x*=-1,ai.y*=-1,ai.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(ai)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ve&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let A=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,_){let M=_.program;n.uniformBlockBinding(A,M)}function l(A,_){let M=s[A.id];M===void 0&&(g(A),M=h(A),s[A.id]=M,A.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(A,R);let w=t.render.frame;r[A.id]!==w&&(d(A),r[A.id]=w)}function h(A){let _=u();A.__bindingPointIndex=_;let M=i.createBuffer(),R=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let _=s[A.id],M=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,P=M.length;w<P;w++){let U=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,S=U.length;b<S;b++){let C=U[b];if(p(C,w,b,R)===!0){let B=C.__offset,G=Array.isArray(C.value)?C.value:[C.value],q=0;for(let Y=0;Y<G.length;Y++){let W=G[Y],it=v(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+q,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,q),q+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,_,M,R){let w=A.value,P=_+"_"+M;if(R[P]===void 0)return typeof w=="number"||typeof w=="boolean"?R[P]=w:R[P]=w.clone(),!0;{let U=R[P];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return R[P]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(A){let _=A.uniforms,M=0,R=16;for(let P=0,U=_.length;P<U;P++){let b=Array.isArray(_[P])?_[P]:[_[P]];for(let S=0,C=b.length;S<C;S++){let B=b[S],G=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Y=G.length;q<Y;q++){let W=G[q],it=v(W),H=M%R,ht=H%it.boundary,pt=H+ht;M+=ht,pt!==0&&R-pt<it.storage&&(M+=R-pt),B.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=it.storage}}}let w=M%R;return w>0&&(M+=R-w),A.__size=M,A.__cache={},this}function v(A){let _={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(_.boundary=4,_.storage=4):A.isVector2?(_.boundary=8,_.storage=8):A.isVector3||A.isColor?(_.boundary=16,_.storage=12):A.isVector4?(_.boundary=16,_.storage=16):A.isMatrix3?(_.boundary=48,_.storage=48):A.isMatrix4?(_.boundary=64,_.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),_}function m(A){let _=A.target;_.removeEventListener("dispose",m);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var ro=class{constructor(t={}){let{canvas:e=sh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,A=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,R=!1;this._outputColorSpace=_e;let w=0,P=0,U=null,b=-1,S=null,C=new $t,B=new $t,G=null,q=new Ht(0),Y=0,W=e.width,it=e.height,H=1,ht=null,pt=null,yt=new $t(0,0,W,it),Ot=new $t(0,0,W,it),Gt=!1,Jt=new Li,qt=!1,J=!1,$=new se,vt=new I,wt=new $t,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function Qt(){return U===null?H:1}let T=n;function nt(y,L){return e.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",at,!1),T===null){let L="webgl2";if(T=nt(L,y),T===null)throw nt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let j,K,O,tt,Z,st,It,Ut,E,x,F,k,et,X,Rt,ct,Et,Tt,rt,xt,Nt,Ct,mt,kt;function D(){j=new lm(T),j.init(),Ct=new zg(T,j),K=new em(T,j,t,Ct),O=new Og(T,j),K.reversedDepthBuffer&&d&&O.buffers.depth.setReversed(!0),tt=new um(T),Z=new Eg,st=new Bg(T,j,O,Z,K,Ct,tt),It=new im(M),Ut=new om(M),E=new gd(T),mt=new $p(T,E),x=new cm(T,E,tt,mt),F=new fm(T,x,E,tt),rt=new dm(T,K,st),ct=new nm(Z),k=new bg(M,It,Ut,j,K,mt,ct),et=new Gg(M,Z),X=new Ag,Rt=new Dg(j),Tt=new Qp(M,It,Ut,O,F,p,c),Et=new Ng(M,F,K),kt=new Wg(T,tt,K,O),xt=new tm(T,j,tt),Nt=new hm(T,j,tt),tt.programs=k.programs,M.capabilities=K,M.extensions=j,M.properties=Z,M.renderLists=X,M.shadowMap=Et,M.state=O,M.info=tt}D();let lt=new Dl(M,T);this.xr=lt,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let y=j.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=j.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(W,it,!1))},this.getSize=function(y){return y.set(W,it)},this.setSize=function(y,L,z=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,it=L,e.width=Math.floor(y*H),e.height=Math.floor(L*H),z===!0&&(e.style.width=y+"px",e.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(W*H,it*H).floor()},this.setDrawingBufferSize=function(y,L,z){W=y,it=L,H=z,e.width=Math.floor(y*z),e.height=Math.floor(L*z),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(yt)},this.setViewport=function(y,L,z,V){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,L,z,V),O.viewport(C.copy(yt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Ot)},this.setScissor=function(y,L,z,V){y.isVector4?Ot.set(y.x,y.y,y.z,y.w):Ot.set(y,L,z,V),O.scissor(B.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(y){O.setScissorTest(Gt=y)},this.setOpaqueSort=function(y){ht=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,z=!0){let V=0;if(y){let N=!1;if(U!==null){let ot=U.texture.format;N=ot===Aa||ot===Ta||ot===Ea}if(N){let ot=U.texture.type,gt=ot===Ke||ot===Bn||ot===Gi||ot===Xi||ot===Sa||ot===_a,bt=Tt.getClearColor(),Mt=Tt.getClearAlpha(),Lt=bt.r,Ft=bt.g,Pt=bt.b;gt?(g[0]=Lt,g[1]=Ft,g[2]=Pt,g[3]=Mt,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Lt,v[1]=Ft,v[2]=Pt,v[3]=Mt,T.clearBufferiv(T.COLOR,0,v))}else V|=T.COLOR_BUFFER_BIT}L&&(V|=T.DEPTH_BUFFER_BIT),z&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Tt.dispose(),X.dispose(),Rt.dispose(),Z.dispose(),It.dispose(),Ut.dispose(),F.dispose(),mt.dispose(),kt.dispose(),k.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",je),lt.removeEventListener("sessionend",Nl),zn.stop()};function ut(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=tt.autoReset,L=Et.enabled,z=Et.autoUpdate,V=Et.needsUpdate,N=Et.type;D(),tt.autoReset=y,Et.enabled=L,Et.autoUpdate=z,Et.needsUpdate=V,Et.type=N}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q(y){let L=y.target;L.removeEventListener("dispose",Q),At(L)}function At(y){zt(y),Z.remove(y)}function zt(y){let L=Z.get(y).programs;L!==void 0&&(L.forEach(function(z){k.releaseProgram(z)}),y.isShaderMaterial&&k.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,z,V,N,ot){L===null&&(L=St);let gt=N.isMesh&&N.matrixWorld.determinant()<0,bt=Gh(y,L,z,V,N);O.setMaterial(V,gt);let Mt=z.index,Lt=1;if(V.wireframe===!0){if(Mt=x.getWireframeAttribute(z),Mt===void 0)return;Lt=2}let Ft=z.drawRange,Pt=z.attributes.position,Yt=Ft.start*Lt,ee=(Ft.start+Ft.count)*Lt;ot!==null&&(Yt=Math.max(Yt,ot.start*Lt),ee=Math.min(ee,(ot.start+ot.count)*Lt)),Mt!==null?(Yt=Math.max(Yt,0),ee=Math.min(ee,Mt.count)):Pt!=null&&(Yt=Math.max(Yt,0),ee=Math.min(ee,Pt.count));let ue=ee-Yt;if(ue<0||ue===1/0)return;mt.setup(N,V,bt,z,Mt);let ae,ie=xt;if(Mt!==null&&(ae=E.get(Mt),ie=Nt,ie.setIndex(ae)),N.isMesh)V.wireframe===!0?(O.setLineWidth(V.wireframeLinewidth*Qt()),ie.setMode(T.LINES)):ie.setMode(T.TRIANGLES);else if(N.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),O.setLineWidth(Dt*Qt()),N.isLineSegments?ie.setMode(T.LINES):N.isLineLoop?ie.setMode(T.LINE_LOOP):ie.setMode(T.LINE_STRIP)}else N.isPoints?ie.setMode(T.POINTS):N.isSprite&&ie.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ii("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ie.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Dt=N._multiDrawStarts,le=N._multiDrawCounts,Zt=N._multiDrawCount,Pe=Mt?E.get(Mt).bytesPerElement:1,ci=Z.get(V).currentProgram.getUniforms();for(let De=0;De<Zt;De++)ci.setValue(T,"_gl_DrawID",De),ie.render(Dt[De]/Pe,le[De])}else if(N.isInstancedMesh)ie.renderInstances(Yt,ue,N.count);else if(z.isInstancedBufferGeometry){let Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,le=Math.min(z.instanceCount,Dt);ie.renderInstances(Yt,ue,le)}else ie.render(Yt,ue)};function re(y,L,z){y.transparent===!0&&y.side===rn&&y.forceSinglePass===!1?(y.side=ve,y.needsUpdate=!0,er(y,L,z),y.side=gn,y.needsUpdate=!0,er(y,L,z),y.side=rn):er(y,L,z)}this.compile=function(y,L,z=null){z===null&&(z=y),f=Rt.get(z),f.init(L),_.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==z&&y.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let V=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){let bt=ot[gt];re(bt,z,N),V.add(bt)}else re(ot,z,N),V.add(ot)}),f=_.pop(),V},this.compileAsync=function(y,L,z=null){let V=this.compile(y,L,z);return new Promise(N=>{function ot(){if(V.forEach(function(gt){Z.get(gt).currentProgram.isReady()&&V.delete(gt)}),V.size===0){N(y);return}setTimeout(ot,10)}j.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let jt=null;function ln(y){jt&&jt(y)}function je(){zn.stop()}function Nl(){zn.start()}let zn=new Fh;zn.setAnimationLoop(ln),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(y){jt=y,lt.setAnimationLoop(y),y===null?zn.stop():zn.start()},lt.addEventListener("sessionstart",je),lt.addEventListener("sessionend",Nl),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(L),L=lt.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,L,U),f=Rt.get(y,_.length),f.init(L),_.push(f),$.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Jt.setFromProjectionMatrix($,qe,L.reversedDepth),J=this.localClippingEnabled,qt=ct.init(this.clippingPlanes,J),m=X.get(y,A.length),m.init(),A.push(m),lt.enabled===!0&&lt.isPresenting===!0){let ot=M.xr.getDepthSensingMesh();ot!==null&&co(ot,L,-1/0,M.sortObjects)}co(y,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ht,pt),Bt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Bt&&Tt.addToRenderList(m,y),this.info.render.frame++,qt===!0&&ct.beginShadows();let z=f.state.shadowsArray;Et.render(z,y,L),qt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(f.setupLights(),L.isArrayCamera){let ot=L.cameras;if(N.length>0)for(let gt=0,bt=ot.length;gt<bt;gt++){let Mt=ot[gt];Ol(V,N,y,Mt)}Bt&&Tt.render(y);for(let gt=0,bt=ot.length;gt<bt;gt++){let Mt=ot[gt];Fl(m,y,Mt,Mt.viewport)}}else N.length>0&&Ol(V,N,y,L),Bt&&Tt.render(y),Fl(m,y,L);U!==null&&P===0&&(st.updateMultisampleRenderTarget(U),st.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(M,y,L),mt.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],qt===!0&&ct.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function co(y,L,z,V){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Jt.intersectsSprite(y)){V&&wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4($);let gt=F.update(y),bt=y.material;bt.visible&&m.push(y,gt,bt,z,wt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Jt.intersectsObject(y))){let gt=F.update(y),bt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),wt.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),wt.copy(gt.boundingSphere.center)),wt.applyMatrix4(y.matrixWorld).applyMatrix4($)),Array.isArray(bt)){let Mt=gt.groups;for(let Lt=0,Ft=Mt.length;Lt<Ft;Lt++){let Pt=Mt[Lt],Yt=bt[Pt.materialIndex];Yt&&Yt.visible&&m.push(y,gt,Yt,z,wt.z,Pt)}}else bt.visible&&m.push(y,gt,bt,z,wt.z,null)}}let ot=y.children;for(let gt=0,bt=ot.length;gt<bt;gt++)co(ot[gt],L,z,V)}function Fl(y,L,z,V){let N=y.opaque,ot=y.transmissive,gt=y.transparent;f.setupLightsView(z),qt===!0&&ct.setGlobalState(M.clippingPlanes,z),V&&O.viewport(C.copy(V)),N.length>0&&tr(N,L,z),ot.length>0&&tr(ot,L,z),gt.length>0&&tr(gt,L,z),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ol(y,L,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new tn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Wi:Ke,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let ot=f.state.transmissionRenderTarget[V.id],gt=V.viewport||C;ot.setSize(gt.z*M.transmissionResolutionScale,gt.w*M.transmissionResolutionScale);let bt=M.getRenderTarget(),Mt=M.getActiveCubeFace(),Lt=M.getActiveMipmapLevel();M.setRenderTarget(ot),M.getClearColor(q),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),Bt&&Tt.render(z);let Ft=M.toneMapping;M.toneMapping=bn;let Pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),qt===!0&&ct.setGlobalState(M.clippingPlanes,V),tr(y,z,V),st.updateMultisampleRenderTarget(ot),st.updateRenderTargetMipmap(ot),j.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ee=0,ue=L.length;ee<ue;ee++){let ae=L[ee],ie=ae.object,Dt=ae.geometry,le=ae.material,Zt=ae.group;if(le.side===rn&&ie.layers.test(V.layers)){let Pe=le.side;le.side=ve,le.needsUpdate=!0,Bl(ie,z,V,Dt,le,Zt),le.side=Pe,le.needsUpdate=!0,Yt=!0}}Yt===!0&&(st.updateMultisampleRenderTarget(ot),st.updateRenderTargetMipmap(ot))}M.setRenderTarget(bt,Mt,Lt),M.setClearColor(q,Y),Pt!==void 0&&(V.viewport=Pt),M.toneMapping=Ft}function tr(y,L,z){let V=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ot=y.length;N<ot;N++){let gt=y[N],bt=gt.object,Mt=gt.geometry,Lt=gt.group,Ft=gt.material;Ft.allowOverride===!0&&V!==null&&(Ft=V),bt.layers.test(z.layers)&&Bl(bt,L,z,Mt,Ft,Lt)}}function Bl(y,L,z,V,N,ot){y.onBeforeRender(M,L,z,V,N,ot),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(M,L,z,V,y,ot),N.transparent===!0&&N.side===rn&&N.forceSinglePass===!1?(N.side=ve,N.needsUpdate=!0,M.renderBufferDirect(z,L,V,N,y,ot),N.side=gn,N.needsUpdate=!0,M.renderBufferDirect(z,L,V,N,y,ot),N.side=rn):M.renderBufferDirect(z,L,V,N,y,ot),y.onAfterRender(M,L,z,V,N,ot)}function er(y,L,z){L.isScene!==!0&&(L=St);let V=Z.get(y),N=f.state.lights,ot=f.state.shadowsArray,gt=N.state.version,bt=k.getParameters(y,N.state,ot,L,z),Mt=k.getProgramCacheKey(bt),Lt=V.programs;V.environment=y.isMeshStandardMaterial?L.environment:null,V.fog=L.fog,V.envMap=(y.isMeshStandardMaterial?Ut:It).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Lt===void 0&&(y.addEventListener("dispose",Q),Lt=new Map,V.programs=Lt);let Ft=Lt.get(Mt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===gt)return Vl(y,bt),Ft}else bt.uniforms=k.getUniforms(y),y.onBeforeCompile(bt,M),Ft=k.acquireProgram(bt,Mt),Lt.set(Mt,Ft),V.uniforms=bt.uniforms;let Pt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=ct.uniform),Vl(y,bt),V.needsLights=Xh(y),V.lightsStateVersion=gt,V.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function zl(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Zi.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Vl(y,L){let z=Z.get(y);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Gh(y,L,z,V,N){L.isScene!==!0&&(L=St),st.resetTextureUnits();let ot=L.fog,gt=V.isMeshStandardMaterial?L.environment:null,bt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Kn,Mt=(V.isMeshStandardMaterial?Ut:It).get(V.envMap||gt),Lt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pt=!!z.morphAttributes.position,Yt=!!z.morphAttributes.normal,ee=!!z.morphAttributes.color,ue=bn;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ue=M.toneMapping);let ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=ae!==void 0?ae.length:0,Dt=Z.get(V),le=f.state.lights;if(qt===!0&&(J===!0||y!==S)){let Te=y===S&&V.id===b;ct.setState(V,y,Te)}let Zt=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==le.state.version||Dt.outputColorSpace!==bt||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==Mt||V.fog===!0&&Dt.fog!==ot||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ct.numPlanes||Dt.numIntersection!==ct.numIntersection)||Dt.vertexAlphas!==Lt||Dt.vertexTangents!==Ft||Dt.morphTargets!==Pt||Dt.morphNormals!==Yt||Dt.morphColors!==ee||Dt.toneMapping!==ue||Dt.morphTargetsCount!==ie)&&(Zt=!0):(Zt=!0,Dt.__version=V.version);let Pe=Dt.currentProgram;Zt===!0&&(Pe=er(V,L,N));let ci=!1,De=!1,ts=!1,ce=Pe.getUniforms(),Be=Dt.uniforms;if(O.useProgram(Pe.program)&&(ci=!0,De=!0,ts=!0),V.id!==b&&(b=V.id,De=!0),ci||S!==y){O.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ce.setValue(T,"projectionMatrix",y.projectionMatrix),ce.setValue(T,"viewMatrix",y.matrixWorldInverse);let Re=ce.map.cameraPosition;Re!==void 0&&Re.setValue(T,vt.setFromMatrixPosition(y.matrixWorld)),K.logarithmicDepthBuffer&&ce.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ce.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,De=!0,ts=!0)}if(N.isSkinnedMesh){ce.setOptional(T,N,"bindMatrix"),ce.setOptional(T,N,"bindMatrixInverse");let Te=N.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ce.setValue(T,"boneTexture",Te.boneTexture,st))}N.isBatchedMesh&&(ce.setOptional(T,N,"batchingTexture"),ce.setValue(T,"batchingTexture",N._matricesTexture,st),ce.setOptional(T,N,"batchingIdTexture"),ce.setValue(T,"batchingIdTexture",N._indirectTexture,st),ce.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(T,"batchingColorTexture",N._colorsTexture,st));let ze=z.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&rt.update(N,z,Pe),(De||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,ce.setValue(T,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Be.envMap.value=Mt,Be.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&L.environment!==null&&(Be.envMapIntensity.value=L.environmentIntensity),De&&(ce.setValue(T,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&Wh(Be,ts),ot&&V.fog===!0&&et.refreshFogUniforms(Be,ot),et.refreshMaterialUniforms(Be,V,H,it,f.state.transmissionRenderTarget[y.id]),Zi.upload(T,zl(Dt),Be,st)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zi.upload(T,zl(Dt),Be,st),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ce.setValue(T,"center",N.center),ce.setValue(T,"modelViewMatrix",N.modelViewMatrix),ce.setValue(T,"normalMatrix",N.normalMatrix),ce.setValue(T,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Te=V.uniformsGroups;for(let Re=0,ho=Te.length;Re<ho;Re++){let Vn=Te[Re];kt.update(Vn,Pe),kt.bind(Vn,Pe)}}return Pe}function Wh(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Xh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,L,z){let V=Z.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Z.get(y.texture).__webglTexture=L,Z.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let z=Z.get(y);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0};let qh=T.createFramebuffer();this.setRenderTarget=function(y,L=0,z=0){U=y,w=L,P=z;let V=!0,N=null,ot=!1,gt=!1;if(y){let Mt=Z.get(y);if(Mt.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(Mt.__webglFramebuffer===void 0)st.setupRenderTarget(y);else if(Mt.__hasExternalTextures)st.rebindTextures(y,Z.get(y.texture).__webglTexture,Z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Pt=y.depthTexture;if(Mt.__boundDepthTexture!==Pt){if(Pt!==null&&Z.has(Pt)&&(y.width!==Pt.image.width||y.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(y)}}let Lt=y.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(gt=!0);let Ft=Z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ft[L])?N=Ft[L][z]:N=Ft[L],ot=!0):y.samples>0&&st.useMultisampledRTT(y)===!1?N=Z.get(y).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[z]:N=Ft,C.copy(y.viewport),B.copy(y.scissor),G=y.scissorTest}else C.copy(yt).multiplyScalar(H).floor(),B.copy(Ot).multiplyScalar(H).floor(),G=Gt;if(z!==0&&(N=qh),O.bindFramebuffer(T.FRAMEBUFFER,N)&&V&&O.drawBuffers(y,N),O.viewport(C),O.scissor(B),O.setScissorTest(G),ot){let Mt=Z.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+L,Mt.__webglTexture,z)}else if(gt){let Mt=L;for(let Lt=0;Lt<y.textures.length;Lt++){let Ft=Z.get(y.textures[Lt]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Lt,Ft.__webglTexture,z,Mt)}}else if(y!==null&&z!==0){let Mt=Z.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Mt.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(y,L,z,V,N,ot,gt,bt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){O.bindFramebuffer(T.FRAMEBUFFER,Mt);try{let Lt=y.textures[bt],Ft=Lt.format,Pt=Lt.type;if(!K.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-V&&z>=0&&z<=y.height-N&&(y.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+bt),T.readPixels(L,z,V,N,Ct.convert(Ft),Ct.convert(Pt),ot))}finally{let Lt=U!==null?Z.get(U).__webglFramebuffer:null;O.bindFramebuffer(T.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(y,L,z,V,N,ot,gt,bt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt)if(L>=0&&L<=y.width-V&&z>=0&&z<=y.height-N){O.bindFramebuffer(T.FRAMEBUFFER,Mt);let Lt=y.textures[bt],Ft=Lt.format,Pt=Lt.type;if(!K.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Yt),T.bufferData(T.PIXEL_PACK_BUFFER,ot.byteLength,T.STREAM_READ),y.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+bt),T.readPixels(L,z,V,N,Ct.convert(Ft),Ct.convert(Pt),0);let ee=U!==null?Z.get(U).__webglFramebuffer:null;O.bindFramebuffer(T.FRAMEBUFFER,ee);let ue=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await rh(T,ue,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Yt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ot),T.deleteBuffer(Yt),T.deleteSync(ue),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,z=0){let V=Math.pow(2,-z),N=Math.floor(y.image.width*V),ot=Math.floor(y.image.height*V),gt=L!==null?L.x:0,bt=L!==null?L.y:0;st.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,gt,bt,N,ot),O.unbindTexture()};let Yh=T.createFramebuffer(),Jh=T.createFramebuffer();this.copyTextureToTexture=function(y,L,z=null,V=null,N=0,ot=null){ot===null&&(N!==0?(Ii("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=N,N=0):ot=0);let gt,bt,Mt,Lt,Ft,Pt,Yt,ee,ue,ae=y.isCompressedTexture?y.mipmaps[ot]:y.image;if(z!==null)gt=z.max.x-z.min.x,bt=z.max.y-z.min.y,Mt=z.isBox3?z.max.z-z.min.z:1,Lt=z.min.x,Ft=z.min.y,Pt=z.isBox3?z.min.z:0;else{let ze=Math.pow(2,-N);gt=Math.floor(ae.width*ze),bt=Math.floor(ae.height*ze),y.isDataArrayTexture?Mt=ae.depth:y.isData3DTexture?Mt=Math.floor(ae.depth*ze):Mt=1,Lt=0,Ft=0,Pt=0}V!==null?(Yt=V.x,ee=V.y,ue=V.z):(Yt=0,ee=0,ue=0);let ie=Ct.convert(L.format),Dt=Ct.convert(L.type),le;L.isData3DTexture?(st.setTexture3D(L,0),le=T.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(st.setTexture2DArray(L,0),le=T.TEXTURE_2D_ARRAY):(st.setTexture2D(L,0),le=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);let Zt=T.getParameter(T.UNPACK_ROW_LENGTH),Pe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ci=T.getParameter(T.UNPACK_SKIP_PIXELS),De=T.getParameter(T.UNPACK_SKIP_ROWS),ts=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ae.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ae.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Lt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ft),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Pt);let ce=y.isDataArrayTexture||y.isData3DTexture,Be=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let ze=Z.get(y),Te=Z.get(L),Re=Z.get(ze.__renderTarget),ho=Z.get(Te.__renderTarget);O.bindFramebuffer(T.READ_FRAMEBUFFER,Re.__webglFramebuffer),O.bindFramebuffer(T.DRAW_FRAMEBUFFER,ho.__webglFramebuffer);for(let Vn=0;Vn<Mt;Vn++)ce&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Z.get(y).__webglTexture,N,Pt+Vn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Z.get(L).__webglTexture,ot,ue+Vn)),T.blitFramebuffer(Lt,Ft,gt,bt,Yt,ee,gt,bt,T.DEPTH_BUFFER_BIT,T.NEAREST);O.bindFramebuffer(T.READ_FRAMEBUFFER,null),O.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||Z.has(y)){let ze=Z.get(y),Te=Z.get(L);O.bindFramebuffer(T.READ_FRAMEBUFFER,Yh),O.bindFramebuffer(T.DRAW_FRAMEBUFFER,Jh);for(let Re=0;Re<Mt;Re++)ce?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ze.__webglTexture,N,Pt+Re):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ze.__webglTexture,N),Be?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Te.__webglTexture,ot,ue+Re):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Te.__webglTexture,ot),N!==0?T.blitFramebuffer(Lt,Ft,gt,bt,Yt,ee,gt,bt,T.COLOR_BUFFER_BIT,T.NEAREST):Be?T.copyTexSubImage3D(le,ot,Yt,ee,ue+Re,Lt,Ft,gt,bt):T.copyTexSubImage2D(le,ot,Yt,ee,Lt,Ft,gt,bt);O.bindFramebuffer(T.READ_FRAMEBUFFER,null),O.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Be?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(le,ot,Yt,ee,ue,gt,bt,Mt,ie,Dt,ae.data):L.isCompressedArrayTexture?T.compressedTexSubImage3D(le,ot,Yt,ee,ue,gt,bt,Mt,ie,ae.data):T.texSubImage3D(le,ot,Yt,ee,ue,gt,bt,Mt,ie,Dt,ae):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ot,Yt,ee,gt,bt,ie,Dt,ae.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ot,Yt,ee,ae.width,ae.height,ie,ae.data):T.texSubImage2D(T.TEXTURE_2D,ot,Yt,ee,gt,bt,ie,Dt,ae);T.pixelStorei(T.UNPACK_ROW_LENGTH,Zt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Pe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ci),T.pixelStorei(T.UNPACK_SKIP_ROWS,De),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ts),ot===0&&L.generateMipmaps&&T.generateMipmap(le),O.unbindTexture()},this.initRenderTarget=function(y){Z.get(y).__webglFramebuffer===void 0&&st.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?st.setTextureCube(y,0):y.isData3DTexture?st.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?st.setTexture2DArray(y,0):st.setTexture2D(y,0),O.unbindTexture()},this.resetState=function(){w=0,P=0,U=null,O.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var oo=class extends Zn{constructor(){super();let t=new Ln;t.deleteAttribute("uv");let e=new Sn({side:ve}),n=new Sn,s=new qs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ne(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Es(t,n,6),o=new pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ne(t,$i(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ne(t,$i(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ne(t,$i(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ne(t,$i(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ne(t,$i(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new ne(t,$i(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function $i(i){return new Hs({color:0,emissive:16777215,emissiveIntensity:i})}var kh="data:image/webp;base64,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";var on=document.querySelector("[data-pulse-hero]"),ye=document.querySelector("[data-medical-canvas]"),lo=matchMedia("(prefers-reduced-motion: reduce)"),Ul=Yi.clamp,Hh=(i,t,e)=>Yi.smoothstep(e,i,t);async function qg(){if(!on||!ye)return;let i;try{i=new ro({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{ye.dataset.renderState="fallback";return}i.setPixelRatio(Math.min(devicePixelRatio,innerWidth<700?1.25:1.5)),i.outputColorSpace=_e,i.toneMapping=ga,i.toneMappingExposure=1.15,i.transmissionResolutionScale=.5,i.setClearColor(15331827,1),i.domElement.setAttribute("aria-hidden","true"),ye.append(i.domElement);let t=new Zn,e=new ti(-4,4,2.5,-2.5,.1,40);e.position.set(0,0,9);let n=new ji(i),s=new oo,r=n.fromScene(s,.035);t.environment=r.texture,s.dispose(),n.dispose();let a=new Xs(15925247,7708325,2.1);t.add(a);let o=new Hi(16777215,3.3);o.position.set(-3,6,5),t.add(o);let c=new Hi(4117466,2.6);c.position.set(5,1,-1),t.add(c);let l;try{l=await new Ws().loadAsync(kh)}catch{i.dispose(),ye.dataset.renderState="fallback";return}l.colorSpace=_e;let h=new ne(new Un(1,1),new Mn({map:l,toneMapped:!1}));h.position.z=-5,t.add(h);let u=[[-.43,-1.42],[.43,-1.42],[.43,-.43],[1.42,-.43],[1.42,.43],[.43,.43],[.43,1.42],[-.43,1.42],[-.43,.43],[-1.42,.43],[-1.42,-.43],[-.43,-.43]],d=new Bi;u.forEach(([O,tt],Z)=>Z?d.lineTo(O,tt):d.moveTo(O,tt)),d.closePath();let p=new zs(d,{depth:.2,bevelEnabled:!0,bevelThickness:.065,bevelSize:.055,bevelSegments:5,steps:1,curveSegments:12});p.center();let g=new Cs(p,35),v=new $e;t.add(v);let f=[new Qn({color:3308454,metalness:.5,roughness:.18,clearcoat:1,transmission:.28,thickness:.35,ior:1.48,envMapIntensity:1.2}),new Qn({color:4308142,metalness:.05,roughness:.1,clearcoat:1,transmission:.82,thickness:.6,ior:1.5,attenuationColor:1341550,attenuationDistance:1.2,envMapIntensity:1.6}),new Qn({color:9826016,metalness:.06,roughness:.075,clearcoat:1,clearcoatRoughness:.08,transmission:.92,thickness:.25,ior:1.48,attenuationColor:3781802,attenuationDistance:2.2,envMapIntensity:1.7})].map((O,tt)=>{let Z=new $e,st=new ne(p,O),It=new Ts(g,new Ui({color:tt===0?9550800:12910578,transparent:!0,opacity:.36}));return Z.add(st,It),Z.position.z=(tt-1)*.32,v.add(Z),Z}),A=[[-1.2,0],[-.63,0],[-.47,.07],[-.32,-.07],[-.14,.33],[.02,-.23],[.17,.04],[.28,0],[1.2,0]].map(([O,tt])=>new I(O,tt,.205)),_=new Oi;for(let O=1;O<A.length;O++)_.add(new Fi(A[O-1],A[O]));let M=new Sn({color:14221302,emissive:3587500,emissiveIntensity:1.1,roughness:.25,metalness:.3}),R=new ne(new ks(_,100,.015,6,!1),M);f[2].add(R);let w=new ne(new Vs(.035,10,8),new Mn({color:16777215}));f[2].add(w);let P=document.createElement("canvas");P.width=128,P.height=64;let U=P.getContext("2d"),b=U.createRadialGradient(64,32,3,64,32,62);b.addColorStop(0,"rgba(15,77,78,.22)"),b.addColorStop(1,"rgba(15,77,78,0)"),U.fillStyle=b,U.fillRect(0,0,128,64);let S=new As(P),C=new ne(new Un(3.8,.55),new Mn({map:S,transparent:!0,depthWrite:!1,toneMapped:!1}));C.position.set(0,-1.85,-.7),t.add(C);let B=8,G=4.8,q=!1,Y=!0,W=document.documentElement.classList.contains("scene-paused"),it=Number(on.dataset.sceneProgress||0),H=it,ht=0,pt=0,yt=0,Ot=0,Gt=0,Jt=0,qt=0,J=!1,$=!1,vt=!1;function wt(){if($)return;let O=ye.getBoundingClientRect(),tt=Math.max(1,O.width),Z=Math.max(1,O.height);q=innerWidth<=900,G=q?4.35:4.7,B=G*tt/Z,e.left=-B/2,e.right=B/2,e.top=G/2,e.bottom=-G/2,e.updateProjectionMatrix(),h.scale.set(B,G,1);let st=l.image.width/l.image.height,It=tt/Z;l.repeat.set(It<st?It/st:1,It>st?st/It:1),l.offset.set((1-l.repeat.x)*.7,(1-l.repeat.y)*.5),i.setSize(tt,Z,!1),St(0)}function St(O){if($||vt)return;let tt=O&&Jt?Ul((O-Jt)/1e3,0,.06):0;Jt=O;let Z=!W&&!lo.matches;Z&&(Gt+=tt),H=Z?it:0,yt=Yi.lerp(yt,Z?ht:0,.055),Ot=Yi.lerp(Ot,Z?pt:0,.055);let st=Hh(.12,.58,H),It=Hh(.4,.84,H),Ut=Z?Math.sin(Gt*.6):0,E=q?B*.08:B*.24;v.position.set(E-st*(q?.1:.35),.1+Ut*.055+It*.05,0),v.rotation.set(-.075+Ot*.05,-.38+Ut*.08+yt*.14+st*.65,-.035+Math.sin(Gt*.37)*.018);let x=(q?.88:1.05)*(1+It*.15);v.scale.setScalar(x),f.forEach((k,et)=>{k.position.z=(et-1)*(.32+st*.8),k.position.x=(et-1)*st*.22,k.rotation.y=(et-1)*st*.11}),C.position.x=v.position.x,C.material.opacity=1-st*.45;let F=Z?Gt*.23%1:.55;w.position.copy(_.getPoint(F)),M.emissiveIntensity=Z?.9+Math.pow(Math.max(0,Math.sin(Gt*1.8)),8)*1.4:1,i.render(t,e),qt++,ye.dataset.renderCount=String(qt),ye.dataset.explosion=st.toFixed(3),qt===1&&(ye.dataset.renderState="ready",on.classList.add("has-3d"))}function Bt(){if($||vt)return;let O=Y&&!document.hidden&&!W&&!lo.matches&&it<.97;O!==J&&(J=O,Jt=0,i.setAnimationLoop(J?St:null)),!O&&Y&&!document.hidden&&(H=it,St(0)),ye.dataset.motion=J?"running":"stopped"}function Qt(O){it=O.detail.progress,W=O.detail.paused,Bt()}function T(O){if(O.pointerType!=="mouse"||W)return;let tt=ye.getBoundingClientRect();ht=Ul((O.clientX-tt.left)/tt.width-.5,-.5,.5),pt=Ul((O.clientY-tt.top)/tt.height-.5,-.5,.5)}function nt(){ht=0,pt=0}let j=new ResizeObserver(wt);j.observe(ye);let K=new IntersectionObserver(O=>{Y=O[0].isIntersecting,Bt()},{threshold:.01});K.observe(ye),window.addEventListener("mds:scene",Qt),document.addEventListener("visibilitychange",Bt),lo.addEventListener("change",Bt),on.addEventListener("pointermove",T,{passive:!0}),on.addEventListener("pointerleave",nt),i.domElement.addEventListener("webglcontextlost",O=>{O.preventDefault(),vt=!0,J=!1,i.setAnimationLoop(null),on.classList.remove("has-3d"),ye.dataset.renderState="fallback",ye.dataset.motion="stopped"}),i.domElement.addEventListener("webglcontextrestored",()=>{vt=!1,on.classList.add("has-3d"),ye.dataset.renderState="ready",wt(),Bt()}),window.addEventListener("pagehide",O=>{i.setAnimationLoop(null),J=!1,!O.persisted&&($=!0,j.disconnect(),K.disconnect(),window.removeEventListener("mds:scene",Qt),document.removeEventListener("visibilitychange",Bt),lo.removeEventListener("change",Bt),on.removeEventListener("pointermove",T),on.removeEventListener("pointerleave",nt),t.traverse(tt=>{tt.geometry?.dispose(),tt.material&&(Array.isArray(tt.material)?tt.material:[tt.material]).forEach(Z=>Z.dispose())}),l.dispose(),S.dispose(),r.dispose(),i.dispose())}),window.addEventListener("pageshow",()=>{$||Bt()}),wt(),Bt()}qg().catch(i=>{on?.classList.remove("has-3d"),ye&&(ye.dataset.renderState="fallback"),console.warn("Medical scene is using its static fallback.",i.message)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
