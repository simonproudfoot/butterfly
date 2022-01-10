/*!
 * VERSION: 0.1.0
 * DATE: 2018-05-04
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is only for use by Club GreenSock members ("Shockingly Green" or higher) and is
 * subject to the software agreement that was issued with the membership. See https://greensock.com/club/
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(l){"use strict";function c(t,e,i){var s,n=P.createElementNS("http://www.w3.org/2000/svg",t),h=/([a-z])([A-Z])/g;for(s in(i=i||{}).class=i.class||"path-editor",i)n.setAttributeNS(null,s.replace(h,"$1-$2").toLowerCase(),i[s]);return e.appendChild(n),n}function k(t){return(1e3*t|0)/1e3}function d(t,e,i,s){var n;t.addEventListener?(n=G[e],s=s||{passive:!1},t.addEventListener(n||e,i,s),n&&e!==n&&t.addEventListener(e,i,s)):t.attachEvent&&t.attachEvent("on"+e,i)}function o(t,e,i){t.removeEventListener?(t.removeEventListener(G[e],i),e!==G[e]&&t.removeEventListener(e,i)):t.detachEvent&&t.detachEvent("on"+e,i)}function _(t){Y=t.touches&&_dragCount<t.touches.length,d(t.target,"touchend",s)}function S(t){l.console&&console.log(t)}function u(t){var e,i,s,n,h,a,r,o,l,c,d,_,g,u=(t+"").replace(y,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(M)||[],f=[],p=0,v=0,m=u.length,b=2,A=0;if(!t||!isNaN(u[0])||isNaN(u[1]))return S("ERROR: malformed path data: "+t),f;for(e=0;e<m;e++)if(g=h,isNaN(u[e])?a=(h=u[e].toUpperCase())!==u[e]:e--,s=+u[e+1],n=+u[e+2],a&&(s+=p,n+=v),0===e&&(o=s,l=n),"M"===h)r&&r.length<8&&(--f.length,b=0),r=[p=o=s,v=l=n],A+=b,b=2,f.push(r),e+=2,h="L";else if("C"===h)(r=r||[0,0])[b++]=s,r[b++]=n,a||(p=v=0),r[b++]=p+ +u[e+3],r[b++]=v+ +u[e+4],r[b++]=p+=+u[e+5],r[b++]=v+=+u[e+6],e+=6;else if("S"===h)"C"===g||"S"===g?(c=p-r[b-4],d=v-r[b-3],r[b++]=p+c,r[b++]=v+d):(r[b++]=p,r[b++]=v),r[b++]=s,r[b++]=n,a||(p=v=0),r[b++]=p+=+u[e+3],r[b++]=v+=+u[e+4],e+=4;else if("Q"===h)c=s-p,d=n-v,r[b++]=p+2*c/3,r[b++]=v+2*d/3,a||(p=v=0),c=s-(p+=+u[e+3]),d=n-(v+=+u[e+4]),r[b++]=p+2*c/3,r[b++]=v+2*d/3,r[b++]=p,r[b++]=v,e+=4;else if("T"===h)c=p-r[b-4],d=v-r[b-3],r[b++]=p+c,r[b++]=v+d,c=p+1.5*c-s,d=v+1.5*d-n,r[b++]=s+2*c/3,r[b++]=n+2*d/3,r[b++]=p=s,r[b++]=v=n,e+=2;else if("H"===h)n=v,r[b++]=p+(s-p)/3,r[b++]=v+(n-v)/3,r[b++]=p+2*(s-p)/3,r[b++]=v+2*(n-v)/3,r[b++]=p=s,r[b++]=n,e+=1;else if("V"===h)n=s,s=p,a&&(n+=v-p),r[b++]=s,r[b++]=v+(n-v)/3,r[b++]=s,r[b++]=v+2*(n-v)/3,r[b++]=s,r[b++]=v=n,e+=1;else if("L"===h||"Z"===h)"Z"===h&&(s=o,n=l,r.closed=!0),("L"===h||.5<Math.abs(p-s)||.5<Math.abs(v-n))&&(r[b++]=p+(s-p)/3,r[b++]=v+(n-v)/3,r[b++]=p+2*(s-p)/3,r[b++]=v+2*(n-v)/3,r[b++]=s,r[b++]=n,"L"===h&&(e+=2)),p=s,v=n;else if("A"===h){if(_=function(t,e,i,s,n,h,a,r,o){if(t!==r||e!==o){i=Math.abs(i),s=Math.abs(s);var l=Math.sqrt,c=2*Math.PI,d=n%360*F,_=Math.cos(d),g=Math.sin(d),u=(t-r)/2,f=(e-o)/2,p=_*u+g*f,v=-g*u+_*f,m=p*p,b=v*v,A=m/(i*i)+b/(s*s);1<A&&(i=l(A)*i,s=l(A)*s);var S=i*i,C=s*s,M=(S*C-S*b-C*m)/(S*b+C*m);M<0&&(M=0);var y=(h===a?-1:1)*l(M),P=i*v/s*y,E=-s*p/i*y,k=_*P-g*E+(t+r)/2,D=g*P+_*E+(e+o)/2,w=(p-P)/i,x=(v-E)/s,H=(-p-P)/i,R=(-v-E)/s,X=w*w+x*x,I=(x<0?-1:1)*Math.acos(w/l(X)),T=(w*R-x*H<0?-1:1)*Math.acos((w*H+x*R)/l(X*(H*H+R*R)));!a&&0<T?T-=c:a&&T<0&&(T+=c),I%=c,T%=c;for(var q=Math.ceil(Math.abs(T)/(c/4)),N=[],L=T/q,Y=4/3*Math.sin(L/2)/(1+Math.cos(L/2)),G=_*i,V=g*i,j=g*-s,O=_*s,z=0;z<q;z++)n=I+z*L,p=Math.cos(n),v=Math.sin(n),N.push(p-Y*v,v+Y*p),p=Math.cos(n+=L),v=Math.sin(n),N.push(p+Y*v,v-Y*p,p,v);for(z=0;z<N.length;z+=2)p=N[z],v=N[z+1],N[z]=p*G+v*j+k,N[z+1]=p*V+v*O+D;return N.splice(-2,2,r,o),N}}(p,v,+u[e+1],+u[e+2],+u[e+3],+u[e+4],+u[e+5],(a?p:0)+ +u[e+6],(a?v:0)+ +u[e+7])){for(i=0;i<_.length;i++)r[b++]=_[i];p=r[b-2],v=r[b-1]}e+=7}else S("Error: malformed path data: "+t);return f.totalPoints=A+b,f}function f(t,e,i,s){var n,h,a,r,o,l,c,d,_,g,u,f,p,v,m=(t=O(t,e)).length-2,b=+t[0],A=+t[1],S=+t[2],C=+t[3],M=[b,A,b,A],y=S-b,P=C-A,E=1e3;for(isNaN(i)&&(i=Math.PI/10),s=s||0===s?.4*s:.4,o=2;o<m;o+=2)n=b,h=A,b=S,A=C,f=(l=y)*l+(d=P)*d,p=(y=(S=+t[o+2])-b)*y+(P=(C=+t[o+3])-A)*P,v=(c=S-n)*c+(_=C-h)*_,u=(a=Math.acos((f+p-v)/Math.sqrt(4*f*p)))/Math.PI*s,g=Math.sqrt(f)*u,u*=Math.sqrt(p),i<a?(r=Math.atan2(_,c),M.push(((b-Math.cos(r)*g)*E|0)/E,((A-Math.sin(r)*g)*E|0)/E,(b*E|0)/E,(A*E|0)/E,((b+Math.cos(r)*u)*E|0)/E,((A+Math.sin(r)*u)*E|0)/E)):(r=Math.atan2(d,l),M.push(((b-Math.cos(r)*g)*E|0)/E,((A-Math.sin(r)*g)*E|0)/E),r=Math.atan2(P,y),M.push((b*E|0)/E,(A*E|0)/E,((b+Math.cos(r)*u)*E|0)/E,((A+Math.sin(r)*u)*E|0)/E));return M.push(k(S),k(C),k(S),k(C)),M}function g(t,e,i){var s,n,h=1e3,a=t[e],r=t[e+1],o=t[e+2],l=t[e+3],c=t[e+4],d=t[e+5],_=t[e+6],g=t[e+7],u=a+(o-a)*i,f=o+(c-o)*i;return u+=(f-u)*i,f+=(c+(_-c)*i-f)*i,s=r+(l-r)*i,s+=((n=l+(d-l)*i)-s)*i,n+=(d+(g-d)*i-n)*i,t.splice(e+2,4,((a+(o-a)*i)*h|0)/h,((r+(l-r)*i)*h|0)/h,(u*h|0)/h,(s*h|0)/h,((u+(f-u)*i)*h|0)/h,((s+(n-s)*i)*h|0)/h,(f*h|0)/h,(n*h|0)/h,((c+(_-c)*i)*h|0)/h,((d+(g-d)*i)*h|0)/h),t}function p(e,i){return function(t){e.call(i,t)}}var h,v,m,a,b,C,t,e=_gsScope.GreenSockGlobals||_gsScope,M=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,A=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,y=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,P=document,E="#4e7fff",F=Math.PI/180,D=(Math.PI,Date.now||function(){return(new Date).getTime()}),w=0,x=0,i={},r=[],H={},R=[],X=",",I="PathEditor",T=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),q=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),N=function(t){for(var e=-1!==(l?l.location.href:"").indexOf(String.fromCharCode(103,114,101,101,110,115,111,99,107))&&-1!==t.indexOf(String.fromCharCode(108,111,99,97,108,104,111,115,116)),i=[T,String.fromCharCode(99,111,100,101,112,101,110,46,105,111),String.fromCharCode(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),String.fromCharCode(99,111,100,101,112,101,110,46,100,101,118),String.fromCharCode(99,111,100,101,112,101,110,46,97,112,112),String.fromCharCode(112,101,110,115,46,99,108,111,117,100),String.fromCharCode(112,101,110,115,46,105,111),String.fromCharCode(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,115,115,45,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,100,112,110,46,105,111),String.fromCharCode(103,97,110,110,111,110,46,116,118),String.fromCharCode(99,111,100,101,99,97,110,121,111,110,46,110,101,116),String.fromCharCode(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),String.fromCharCode(99,101,114,101,98,114,97,120,46,99,111,46,117,107),String.fromCharCode(116,121,109,112,97,110,117,115,46,110,101,116),String.fromCharCode(116,119,101,101,110,109,97,120,46,99,111,109),String.fromCharCode(116,119,101,101,110,108,105,116,101,46,99,111,109),String.fromCharCode(112,108,110,107,114,46,99,111),String.fromCharCode(104,111,116,106,97,114,46,99,111,109),String.fromCharCode(119,101,98,112,97,99,107,98,105,110,46,99,111,109),String.fromCharCode(97,114,99,104,105,118,101,46,111,114,103),String.fromCharCode(99,111,100,101,115,97,110,100,98,111,120,46,105,111),String.fromCharCode(115,116,97,99,107,98,108,105,116,122,46,99,111,109),String.fromCharCode(99,111,100,105,101,114,46,105,111),String.fromCharCode(106,115,102,105,100,100,108,101,46,110,101,116)],s=i.length;-1<--s;)if(-1!==t.indexOf(i[s]))return!0;return e&&l&&l.console&&console.log(String.fromCharCode(87,65,82,78,73,78,71,58,32,97,32,115,112,101,99,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+I+String.fromCharCode(32,105,115,32,114,117,110,110,105,110,103,32,108,111,99,97,108,108,121,44,32,98,117,116,32,105,116,32,119,105,108,108,32,110,111,116,32,119,111,114,107,32,111,110,32,97,32,108,105,118,101,32,100,111,109,97,105,110,32,98,101,99,97,117,115,101,32,105,116,32,105,115,32,97,32,109,101,109,98,101,114,115,104,105,112,32,98,101,110,101,102,105,116,32,111,102,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,46,32,80,108,101,97,115,101,32,115,105,103,110,32,117,112,32,97,116,32,104,116,116,112,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98,47,32,97,110,100,32,116,104,101,110,32,100,111,119,110,108,111,97,100,32,116,104,101,32,39,114,101,97,108,39,32,118,101,114,115,105,111,110,32,102,114,111,109,32,121,111,117,114,32,71,114,101,101,110,83,111,99,107,32,97,99,99,111,117,110,116,32,119,104,105,99,104,32,104,97,115,32,110,111,32,115,117,99,104,32,108,105,109,105,116,97,116,105,111,110,115,46,32,84,104,101,32,102,105,108,101,32,121,111,117,39,114,101,32,117,115,105,110,103,32,119,97,115,32,108,105,107,101,108,121,32,100,111,119,110,108,111,97,100,101,100,32,102,114,111,109,32,101,108,115,101,119,104,101,114,101,32,111,110,32,116,104,101,32,119,101,98,32,97,110,100,32,105,115,32,114,101,115,116,114,105,99,116,101,100,32,116,111,32,108,111,99,97,108,32,117,115,101,32,111,114,32,111,110,32,115,105,116,101,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,46)),e}(l?l.location.host:""),L=(t="div",P.createElementNS?P.createElementNS("http://www.w3.org/1999/xhtml",t):P.createElement(t)),Y=!1,G=function(t){for(var e=t.split(","),i=(void 0!==L.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==L.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":t).split(","),s={},n=4;-1<--n;)s[e[n]]=i[n],s[i[n]]=e[n];return s}("touchstart,touchmove,touchend,touchcancel"),s=function(t){Y=t.touches&&_dragCount<t.touches.length,o(t.target,"touchend",s)},V=function(t,e,i,s,n,h,a,r,o,l,c){var d,_=(t+i)/2,g=(e+s)/2,u=(i+n)/2,f=(s+h)/2,p=(n+a)/2,v=(h+r)/2,m=(_+u)/2,b=(g+f)/2,A=(u+p)/2,S=(f+v)/2,C=(m+A)/2,M=(b+S)/2,y=a-t,P=r-e,E=Math.abs((i-a)*P-(s-r)*y),k=Math.abs((n-a)*P-(h-r)*y);return l||(l=[t,e,a,r],c=2),l.splice(c||l.length-2,0,C,M),o*(y*y+P*P)<(E+k)*(E+k)&&(d=l.length,V(t,e,_,g,m,b,C,M,o,l,c),V(C,M,A,S,p,v,a,r,o,l,c+2+(l.length-d))),l},j=function(t,e,i,s,n){for(var h,a,r,o,l,c,d,_,g,u,f,p=s,v=t[e],m=t[e+1],b=t[i],A=t[i+1],S=e+2;S<i;S+=2)r=t[S],o=t[S+1],f=u=g=void 0,f=(_=A)-(c=m),((u=(d=b)-(l=v))||f)&&(1<(g=((r-l)*u+(o-c)*f)/(u*u+f*f))?(l=d,c=_):0<g&&(l+=u*g,c+=f*g)),p<(a=(u=r-l)*u+(f=o-c)*f)&&(h=S,p=a);s<p&&(2<h-e&&j(t,e,h,s,n),n.push(t[h],t[h+1]),2<i-h&&j(t,h,i,s,n))},O=function(t,e){var i,s,n,h,a,r,o,l=parseFloat(t[0]),c=parseFloat(t[1]),d=[l,c],_=t.length-2;for(e=e||1,e*=e,i=2;i<_;i+=2)e<(h=l-(s=parseFloat(t[i])))*h+(a=c-(n=parseFloat(t[i+1])))*a&&(d.push(s,n),l=s,c=n);return d.push(parseFloat(t[_]),parseFloat(t[1+_])),o=d.length-2,r=[d[0],d[1]],j(d,0,o,e,r),r.push(d[o],d[1+o]),r},z=9999999999,W=function(t,e,i,s,n,h,a,r,o,l,c,d,_,g){var u,f,p,v,m=(n-s)/h,b=0,A=s;for(C=z;A<=n;)(u=(f=(v=1-A)*v*v*a+3*v*v*A*o+3*v*A*A*c+A*A*A*_-e)*f+(p=v*v*v*r+3*v*v*A*l+3*v*A*A*d+A*A*A*g-i)*p)<C&&(C=u,b=A),A+=m;return 1<t?W(t-1,e,i,Math.max(b-m,0),Math.min(b+m,1),h,a,r,o,l,c,d,_,g):b};SVGElement.prototype.getTransformToElement=SVGElement.prototype.getTransformToElement||function(t){return t.getScreenCTM().inverse().multiply(this.getScreenCTM())};function n(t){var e,i,s=this,n=s.target.parentNode.getScreenCTM();this._matrix=this.target.transform.baseVal.getItem(0).matrix,this._ctm=n.inverse(),G[t.type]?(e=-1!==t.type.indexOf("touch")?t.currentTarget||t.target:P,d(e,"touchend",s._onRelease),d(e,"touchmove",s._onMove),d(e,"touchcancel",s._onRelease),d(P,"touchstart",_)):(e=null,d(P,"mousemove",s._onMove)),d(P,"mouseup",s._onRelease),t.preventDefault(),t.preventManipulation&&t.preventManipulation(),t.changedTouches?(t=s.touch=t.changedTouches[0],s.touchID=t.identifier):t.pointerId?s.touchID=t.pointerId:s.touch=s.touchID=null,s._startPointerY=s.pointerY=t.pageY,s._startPointerX=s.pointerX=t.pageX,s._startElementX=s._matrix.e,s._startElementY=s._matrix.f,1===this._ctm.a&&0===this._ctm.b&&0===this._ctm.c&&1===this._ctm.d?this._ctm=null:(i=s._startPointerX*this._ctm.a+s._startPointerY*this._ctm.c+this._ctm.e,s._startPointerY=s._startPointerX*this._ctm.b+s._startPointerY*this._ctm.d+this._ctm.f,s._startPointerX=i),s.isPressed=x=!0,s.touchEventTarget=e,s.vars.onPress&&s.vars.onPress.call(s.vars.callbackScope||s,s.pointerEvent)}function U(t){var e,i,s=this,n=t;if(s._enabled&&!Y&&s.isPressed&&t){if(e=(s.pointerEvent=t).changedTouches){if((t=e[0])!==s.touch&&t.identifier!==s.touchID){for(i=e.length;-1<--i&&(t=e[i]).identifier!==s.touchID;);if(i<0)return}}else if(t.pointerId&&s.touchID&&t.pointerId!==s.touchID)return;n.preventDefault(),n.preventManipulation&&n.preventManipulation(),s.setPointerPosition(t.pageX,t.pageY),s.vars.onDrag&&s.vars.onDrag.call(s.vars.callbackScope||s,s.pointerEvent)}}function Z(t,e){var i=this;if(i._enabled&&i.isPressed&&(!t||null==i.touchID||e||!(t.pointerId&&t.pointerId!==i.touchID||t.changedTouches&&!function(t,e){for(var i=t.length;-1<--i;)if(t[i].identifier===e)return!0;return!1}(t.changedTouches,i.touchID)))){w=D(),i.isPressed=x=!1;var s,n,h=t,a=i.isDragging,r=i.touchEventTarget;if(r?(o(r,"touchend",i._onRelease),o(r,"touchmove",i._onMove),o(r,"touchcancel",i._onRelease),o(P,"touchstart",_)):o(P,"mousemove",i._onMove),o(P,"mouseup",i._onRelease),t&&t.target&&o(t.target,"mouseup",i._onRelease),a?i.isDragging=!1:i.vars.onClick&&i.vars.onClick.call(i.vars.callbackScope||i,h),t){if((s=t.changedTouches)&&(t=s[0])!==i.touch&&t.identifier!==i.touchID){for(n=s.length;-1<--n&&(t=s[n]).identifier!==i.touchID;);if(n<0)return}i.pointerEvent=h,i.pointerX=t.pageX,i.pointerY=t.pageY}return h&&!a&&i.vars.onDragRelease?i.vars.onDragRelease.call(i,i.pointerEvent):(h&&(h.preventDefault(),h.preventManipulation&&h.preventManipulation()),i.vars.onRelease&&i.vars.onRelease.call(i.vars.callbackScope||i,i.pointerEvent)),a&&i.vars.onDragEnd&&i.vars.onDragEnd.call(i.vars.callbackScope||i,i.pointerEvent),!0}}function $(t,e){this.target="string"==typeof t?P.querySelectorAll(t)[0]:t,this.vars=e||{},this._onPress=p(n,this),this._onMove=p(U,this),this._onRelease=p(Z,this),this.target.setAttribute("transform",(this.target.getAttribute("transform")||"")+" translate(0,0)"),this._matrix=this.target.transform.baseVal.getItem(0).matrix,this.x=this._matrix.e,this.y=this._matrix.f,this.snap=e.snap,isNaN(e.maxX)&&isNaN(e.minX)?this._bounds=0:(this._bounds=1,this.maxX=+e.maxX,this.minX=+e.minX),this.enabled(!0)}var B=$.prototype;B.setPointerPosition=function(t,e){var i,s,n,h,a;this.pointerX=t,this.pointerY=e,this._ctm&&(a=t*this._ctm.a+e*this._ctm.c+this._ctm.e,e=t*this._ctm.b+e*this._ctm.d+this._ctm.f,t=a),(s=e-this._startPointerY)<1&&-1<s&&(s=0),(i=t-this._startPointerX)<1&&-1<i&&(i=0),n=(1e3*(this._startElementX+i)|0)/1e3,h=(1e3*(this._startElementY+s)|0)/1e3,this.snap&&!m&&(H.x=n,H.y=h,this.snap.call(this,H),n=H.x,h=H.y),this.x===n&&this.y===h||(this._matrix.f=this.y=h,this._matrix.e=this.x=n,!this.isDragging&&this.isPressed&&(this.isDragging=!0,this.vars.onDragStart&&this.vars.onDragStart.call(this.vars.callbackScope||this,this.pointerEvent)))},B.enabled=function(t){return arguments.length?((this._enabled=t)?(d(this.target,"mousedown",this._onPress),d(this.target,"touchstart",this._onPress),d(this.target,"click",this._onClick,!0)):(e=this.isDragging,o(this.target,"mousedown",this._onPress),o(this.target,"touchstart",this._onPress),o(this.target,"click",this._onClick),this.touchEventTarget&&(o(this.touchEventTarget,"touchcancel",this._onRelease),o(this.touchEventTarget,"touchend",this._onRelease),o(this.touchEventTarget,"touchmove",this._onMove)),o(P,"mouseup",this._onRelease),o(P,"mousemove",this._onMove),this.isDragging=this.isPressed=!1,e&&this.vars.onDragEnd&&this.vars.onDragEnd.call(this.vars.callbackScope||this,this.pointerEvent)),this):this._enabled;var e},B.endDrag=function(t){this._onRelease(t)};function Q(t,e,i,s,n){this.editor=t,this.element=c("path",t._selection,{fill:E,stroke:E,strokeWidth:2,vectorEffect:"non-scaling-stroke"}),this.update(e,i,s),this.element._gsSelection=!0,this.vars=n||{},this._draggable=new $(this.element,{callbackScope:this,onDrag:this.onDrag,snap:this.vars.snap,onPress:this.onPress,onRelease:this.onRelease,onClick:this.onClick,onDragEnd:this.onDragEnd})}function J(t,e,i,s){for(var n=t[e].length,h=[],a=0;a<n;a+=6)h.push(new Q(i,t,e,a,s));return h}function K(t,e,i){var s=t[i]-t[e],n=t[i+1]-t[e+1];return Math.sqrt(s*s+n*n)}(B=Q.prototype).onPress=function(){this.vars.onPress.call(this.vars.callbackScope||this,this)},B.onClick=function(){this.vars.onClick.call(this.vars.callbackScope||this,this)},B.onDrag=function(){var t=this.segment;this.vars.onDrag.call(this.vars.callbackScope||this,this,this._draggable.x-t[this.i],this._draggable.y-t[this.i+1])},B.onDragEnd=function(){this.vars.onDragEnd.call(this.vars.callbackScope||this,this)},B.onRelease=function(){this.vars.onRelease.call(this.vars.callbackScope||this,this)},B.update=function(t,e,i){t&&(this.rawPath=t),arguments.length<=1?(e=this.j,i=this.i):(this.j=e,this.i=i);var s=this.smooth,n=this.rawPath[e];this.segment=n,this.smooth=i&&i<n.length-2&&Math.abs(Math.atan2(n[i+1]-n[i-1],n[i]-n[i-2])-Math.atan2(n[i+3]-n[i+1],n[i+2]-n[i]))<.09?2:0,this.smooth!==s&&this.element.setAttribute("d",this.smooth?this.editor._circleHandle:this.editor._squareHandle),this.element.setAttribute("transform","translate("+n[i]+","+n[i+1]+")")};var tt=e.PathEditor=function(t,e){if(e=e||{},!N)return l.location.href="http://"+T+q+"?plugin="+I+"&source=codepen",!1;this.vars=e,this.path="string"==typeof t?P.querySelectorAll(t)[0]:t,this._selectionHittest=c("path",this.path.ownerSVGElement,{stroke:"transparent",strokeWidth:14,fill:"none",vectorEffect:"non-scaling-stroke"}),this._selection=e._selection||c("g",this.path.ownerSVGElement,{class:"path-editor-selection path-editor"}),this._selectionPath=c("path",this._selection,{stroke:E,strokeWidth:2,fill:"none",vectorEffect:"non-scaling-stroke"}),this._selectedAnchors=[],this._line1=c("polyline",this._selection,{stroke:E,strokeWidth:2,vectorEffect:"non-scaling-stroke"}),this._line2=c("polyline",this._selection,{stroke:E,strokeWidth:2,vectorEffect:"non-scaling-stroke"}),this._line1.style.pointerEvents=this._line2.style.pointerEvents=this._selectionPath.style.pointerEvents="none",this._enabled=!0;var i,s,n,h=this.path.parentNode.getScreenCTM().inverse(),a=(h.a+h.d)/2*(e.handleSize||4);this._squareHandle=["M-"+(i=k(i=a)),-i,i,-i,i,i,-i,i+"z"].join(X),this._circleHandle=(n=k(.552284749831*(s=1.15*a)),"M"+(s=k(s))+",0C"+[s,n,n,s,0,s,-n,s,-s,n,-s,0,-s,-n,-n,-s,0,-s,n,-s,s,-n,s,0].join(X)+"z"),this._handle1=c("path",this._selection,{d:this._squareHandle,fill:E,stroke:"transparent",strokeWidth:2}),this._handle2=c("path",this._selection,{d:this._squareHandle,fill:E,stroke:"transparent",strokeWidth:2}),this._handle1._draggable=new $(this._handle1,{onDrag:this._onDragHandle1,callbackScope:this,onPress:this._onPressHandle1,onRelease:this._onReleaseHandle,onClick:this._onClickHandle1,snap:e.handleSnap}),this._handle2._draggable=new $(this._handle2,{onDrag:this._onDragHandle2,callbackScope:this,onPress:this._onPressHandle2,onRelease:this._onReleaseHandle,onClick:this._onClickHandle2,snap:e.handleSnap}),this._handle1.style.visibility=this._handle2.style.visibility="hidden";for(var r=[this._handle1,this._handle2,this._line1,this._line2,this._selection,this._selectionPath,this._selectionHittest],o=r.length;-1<--o;)r[o]._gsSelection=!0;if(!1!==e.draggable&&(this._draggable=new $(this._selectionHittest,{callbackScope:this,onPress:this.select,onRelease:this._onRelease,onDrag:this._onDragPath,onDragEnd:this._saveState,maxX:this.vars.maxX,minX:this.vars.minX})),!N)return!1;this.init(),this._selection.style.visibility=!1===e.selected?"hidden":"visible",!1!==e.selected&&(this.path._gsSelection=!0,et.push(this)),this._saveState(),d(this._selectionHittest,"mousedown",p(this._onClickSelectionPath,this)),d(this._selectionHittest,"touchstart",p(this._onClickSelectionPath,this)),d(this._selectionHittest,"mouseup",p(this._onRelease,this)),d(this._selectionHittest,"touchend",p(this._onRelease,this))},et=[];(B=tt.prototype)._onRelease=function(t){var e=this._editingAnchor;e&&(i.x=e.segment[e.i],i.y=e.segment[e.i+1]),this.vars.onRelease&&this.vars.onRelease.call(this,t)},B.init=function(){var t,e,i=this.path.getAttribute("d"),s=u(i),n=!this._rawPath||s.totalPoints!==this._rawPath.totalPoints||s.length!==this._rawPath.length,h={callbackScope:this,snap:this.vars.anchorSnap,onDrag:this._onDragAnchor,onPress:this._onPressAnchor,onRelease:this._onRelease,onClick:this._onClickAnchor,onDragEnd:this._onDragEndAnchor,maxX:this.vars.maxX,minX:this.vars.minX};if(n&&this._anchors&&this._anchors.length){for(e=0;e<this._anchors.length;e++)this._anchors[e].element.parentNode.removeChild(this._anchors[e].element),this._anchors[e]._draggable.enabled(!1);this._selectedAnchors.length=0}if(this._rawPath=s,n){if(this._anchors=J(s,0,this,h),1<(t=s.length))for(e=1;e<t;e++)this._anchors=this._anchors.concat(J(s,e,this,h))}else for(e=this._anchors.length;-1<--e;)this._anchors[e].update(s);return this._selection.appendChild(this._handle1),this._selection.appendChild(this._handle2),this._selectionPath.setAttribute("d",i),this._selectionHittest.setAttribute("d",i),this._selection.setAttribute("transform",this.path.getAttribute("transform")||"translate(0,0)"),this._selectionHittest.setAttribute("transform",this._selection.getAttribute("transform")),this._updateAnchors(),this},B._saveState=function(){!function(t){for(var e=[],i=t._selectedAnchors,s=0;s<i.length;s++)e[s]=i[s].i;r.unshift({path:t,d:t.path.getAttribute("d"),transform:t.path.getAttribute("transform")||"",selectedIndexes:e}),30<r.length&&(r.length=30)}(this)},B._onClickSelectionPath=function(t){if("hidden"===this._selection.style.visibility)this.select();else if(v){var e,i,s,n,h,a,r={callbackScope:this,snap:this.vars.anchorSnap,onDrag:this._onDragAnchor,onPress:this._onPressAnchor,onRelease:this._onRelease,onClick:this._onClickAnchor,onDragEnd:this._onDragEndAnchor,maxX:this.vars.maxX,minX:this.vars.minX},o=this._selection.getScreenCTM().inverse();for(this._draggable&&this._draggable._onRelease(t),o&&(n=t.clientX*o.a+t.clientY*o.c+o.e,h=t.clientX*o.b+t.clientY*o.d+o.f),a=function(t,e,i,s){for(var n,h,a,r={j:0,i:0,t:0},o=z,l=0;l<t.length;l++)for(a=t[l],n=0;n<a.length;n+=6)h=W(1,e,i,0,1,s||20,a[n],a[n+1],a[n+2],a[n+3],a[n+4],a[n+5],a[n+6],a[n+7]),C<o&&(o=C,r.j=l,r.i=n,r.t=h);return r}(this._rawPath,n,h),g(this._rawPath[a.j],a.i,a.t),e=a.i+6,i=0;i<this._anchors.length;i++)this._anchors[i].i>=e&&(this._anchors[i].i+=6);s=new Q(this,this._rawPath,a.j,e,r),this._selection.appendChild(this._handle1),this._selection.appendChild(this._handle2),s._draggable._onPress(t),b=s,this._anchors.push(s),this._selectedAnchors.length=0,this._selectedAnchors.push(s),this._updateAnchors(),this.update(),this._saveState()}},B._onClickHandle1=function(){var t=this._editingAnchor,e=t.i,i=t.segment;v&&Math.abs(i[e]-i[e-2])<5&&Math.abs(i[e+1]-i[e-1])<5&&this._onClickAnchor(t)},B._onClickHandle2=function(){var t=this._editingAnchor,e=t.i,i=t.segment;v&&Math.abs(i[e]-i[e+2])<5&&Math.abs(i[e+1]-i[e+3])<5&&this._onClickAnchor(t)},B._onDragEndAnchor=function(t){b=null,this._saveState()},B.isSelected=function(){return 0<this._selectedAnchors.length},B.select=function(t){if(this._selection.style.visibility="visible",this._editingAnchor=null,(this.path._gsSelection=!0)===t)for(var e=this._anchors.length;-1<--e;)this._selectedAnchors[e]=this._anchors[e];return-1===et.indexOf(this)&&et.push(this),this._updateAnchors(),this},B.deselect=function(){return this._selection.style.visibility="hidden",this._selectedAnchors.length=0,this._editingAnchor=null,this.path._gsSelection=!1,et.splice(et.indexOf(this),1),this._updateAnchors(),this},B._onDragPath=function(t){var e=this._selectionHittest.getAttribute("transform")||"translate(0,0)";this._selection.setAttribute("transform",e),this.path.setAttribute("transform",e)},B._onPressAnchor=function(t){-1===this._selectedAnchors.indexOf(t)?(m||(this._selectedAnchors.length=0),this._selectedAnchors.push(t)):m&&(this._selectedAnchors.splice(this._selectedAnchors.indexOf(t),1),t._draggable.endDrag()),i.x=t.segment[t.i],i.y=t.segment[t.i+1],this._updateAnchors()},B._deleteSelectedAnchors=function(){for(var t,e,i,s=this._selectedAnchors,n=s.length;-1<--n;)for((t=s[n]).element.parentNode.removeChild(t.element),t._draggable.enabled(!1),(e=t.i)?e<t.segment.length-2?t.segment.splice(e-2,6):t.segment.splice(e-4,6):t.segment.splice(e,6),s.splice(n,1),this._anchors.splice(this._anchors.indexOf(t),1),i=0;i<this._anchors.length;i++)this._anchors[i].i>=e&&(this._anchors[i].i-=6);this._updateAnchors(),this.update(),this._saveState()},B._onClickAnchor=function(t){var e,i,s,n,h,a,r=t.i,o=t.segment,l=1e3,c=!r||r>=o.length-2;v&&b!==t&&this._editingAnchor?(t.smooth=!t.smooth,c&&(t.smooth=!1),t.element.setAttribute("d",t.smooth?this._circleHandle:this._squareHandle),t.smooth&&!c?(e=((e=Math.atan2(o[r+1]-o[r-1],o[r]-o[r-2]))+(i=Math.atan2(o[r+3]-o[r+1],o[r+2]-o[r])))/2,s=K(o,r-2,r),n=K(o,r,r+2),s<.2&&(s=K(o,r,r-6)/4,e=i||Math.atan2(o[r+7]-o[r-5],o[r+6]-o[r-6])),n<.2&&(n=K(o,r,r+6)/4,i=e||Math.atan2(o[r+7]-o[r-5],o[r+6]-o[r-6])),h=Math.sin(e),a=Math.cos(e),Math.abs(i-e)<Math.PI/2&&(h=-h,a=-a),o[r-2]=((o[r]+a*s)*l|0)/l,o[r-1]=((o[r+1]+h*s)*l|0)/l,o[r+2]=((o[r]-a*n)*l|0)/l,o[r+3]=((o[r+1]-h*n)*l|0)/l,this._updateAnchors(),this.update(),this._saveState()):t.smooth||c||(r&&(o[r-2]=o[r],o[r-1]=o[r+1]),r<o.length-2&&(o[r+2]=o[r],o[r+3]=o[r+1]),this._updateAnchors(),this.update(),this._saveState())):m||(this._selectedAnchors.length=0,this._selectedAnchors.push(t)),b=null,this._updateAnchors()},B._updateAnchors=function(){var t,e,i,s=1===this._selectedAnchors.length?this._selectedAnchors[0]:null,n=s?s.segment:null;for(this._editingAnchor=s,t=0;t<this._anchors.length;t++)this._anchors[t].element.setAttribute("fill",-1!==this._selectedAnchors.indexOf(this._anchors[t])?E:"white");s&&(this._handle1.setAttribute("d",s.smooth?this._circleHandle:this._squareHandle),this._handle2.setAttribute("d",s.smooth?this._circleHandle:this._squareHandle)),t=s?s.i:0,s&&t?(e=n[t-2],i=n[t-1],this._handle1.style.visibility=this._line1.style.visibility=v||e!==n[t]||i!==n[t+1]?"visible":"hidden",this._handle1.setAttribute("transform","translate("+e+X+i+")"),this._line1.setAttribute("points",e+X+i+X+n[t]+X+n[t+1])):this._handle1.style.visibility=this._line1.style.visibility="hidden",s&&t<n.length-2?(e=n[t+2],i=n[t+3],this._handle2.style.visibility=this._line2.style.visibility=v||e!==n[t]||i!==n[t+1]?"visible":"hidden",this._handle2.setAttribute("transform","translate("+e+X+i+")"),this._line2.setAttribute("points",n[t]+X+n[t+1]+X+e+X+i)):this._handle2.style.visibility=this._line2.style.visibility="hidden"},B._onPressAlt=function(){var t=this._editingAnchor;t&&(t.i&&(this._handle1.style.visibility=this._line1.style.visibility="visible"),t.i<t.segment.length-2&&(this._handle2.style.visibility=this._line2.style.visibility="visible"))},B._onReleaseAlt=function(){var t,e,i=this._editingAnchor;i&&((t=i.segment)[e=i.i]===t[e-2]&&t[e+1]===t[e-1]&&(this._handle1.style.visibility=this._line1.style.visibility="hidden"),t[e]===t[e+2]&&t[e+1]===t[e+3]&&(this._handle2.style.visibility=this._line2.style.visibility="hidden"))},B._onPressHandle1=function(){this._editingAnchor.smooth&&(this._oppositeHandleLength=K(this._editingAnchor.segment,this._editingAnchor.i,this._editingAnchor.i+2))},B._onPressHandle2=function(){this._editingAnchor.smooth&&(this._oppositeHandleLength=K(this._editingAnchor.segment,this._editingAnchor.i-2,this._editingAnchor.i))},B._onReleaseHandle=function(t){this._onRelease(t),this._saveState()},B._onDragHandle1=function(){var t,e=this._editingAnchor,i=e.segment,s=e.i,n=1e3,h=this._handle1._draggable.x,a=this._handle1._draggable.y;i[s-2]=h=(h*n|0)/n,i[s-1]=a=(a*n|0)/n,e.smooth&&(v?(e.smooth=!1,e.element.setAttribute("d",this._squareHandle),this._handle1.setAttribute("d",this._squareHandle),this._handle2.setAttribute("d",this._squareHandle)):(t=Math.atan2(i[s+1]-a,i[s]-h),h=this._oppositeHandleLength*Math.cos(t),a=this._oppositeHandleLength*Math.sin(t),i[s+2]=((i[s]+h)*n|0)/n,i[s+3]=((i[s+1]+a)*n|0)/n)),this.update()},B._onDragHandle2=function(){var t,e=this._editingAnchor,i=e.segment,s=e.i,n=1e3,h=this._handle2._draggable.x,a=this._handle2._draggable.y;i[s+2]=h=(h*n|0)/n,i[s+3]=a=(a*n|0)/n,e.smooth&&(v?(e.smooth=!1,e.element.setAttribute("d",this._squareHandle),this._handle1.setAttribute("d",this._squareHandle),this._handle2.setAttribute("d",this._squareHandle)):(t=Math.atan2(i[s+1]-a,i[s]-h),h=this._oppositeHandleLength*Math.cos(t),a=this._oppositeHandleLength*Math.sin(t),i[s-2]=((i[s]+h)*n|0)/n,i[s-1]=((i[s+1]+a)*n|0)/n)),this.update()},B._onDragAnchor=function(t,e,i){for(var s,n,h,a=this._selectedAnchors,r=a.length,o=1e3,l=0;l<r;l++)s=(h=a[l]).i,n=h.segment,s&&(n[s-2]=((n[s-2]+e)*o|0)/o,n[s-1]=((n[s-1]+i)*o|0)/o),n[s]=((n[s]+e)*o|0)/o,n[s+1]=((n[s+1]+i)*o|0)/o,s<n.length-2&&(n[s+2]=((n[s+2]+e)*o|0)/o,n[s+3]=((n[s+3]+i)*o|0)/o),h!==t&&h.element.setAttribute("transform","translate("+n[s]+X+n[s+1]+")");this.update()},B.enabled=function(t){if(!arguments.length)return this._enabled;for(var e=this._anchors.length;-1<--e;)this._anchors[e]._draggable.enabled(t);return this._enabled=t,this._handle1._draggable.enabled(t),this._handle2._draggable.enabled(t),this._draggable&&this._draggable.enabled(t),t?this._selection.parentNode||(this.path.ownerSVGElement.appendChild(this._selectionHittest),this.path.ownerSVGElement.appendChild(this._selection),this.init(),this._saveState()):(this.deselect(),this.path.ownerSVGElement.removeChild(this._selectionHittest),this.path.ownerSVGElement.removeChild(this._selection)),this._updateAnchors(),this.update()},B.update=function(t){var e,i,s,n,h="",a=this._editingAnchor;if(t&&this.init(),a&&(e=a.i,i=a.segment,e&&(s=i[e-2],n=i[e-1],this._handle1.setAttribute("transform","translate("+s+X+n+")"),this._line1.setAttribute("points",s+X+n+X+i[e]+X+i[e+1])),e<i.length-2&&(s=i[e+2],n=i[e+3],this._handle2.setAttribute("transform","translate("+s+X+n+")"),this._line2.setAttribute("points",i[e]+X+i[e+1]+X+s+X+n))),t)h=this.path.getAttribute("d");else{for(e=0;e<this._rawPath.length;e++)7<(i=this._rawPath[e]).length&&(h+="M"+i[0]+X+i[1]+"C"+i.slice(2).join(X));this.path.setAttribute("d",h),this._selectionPath.setAttribute("d",h),this._selectionHittest.setAttribute("d",h)}return this.vars.onUpdate&&this._enabled&&this.vars.onUpdate.call(this,h),this},B.getNormalizedSVG=function(t,e,i,s){var n,h,a,r,o,l,c=this._rawPath[0],d=-1*c[0],_=0===e?0:-(e||c[1]),g=c.length,u=1/(c[g-2]+d),f=(f=-t||c[g-1]+_)?1/f:-u;for(u*=1e3,f*=1e3,h=R.length=0;h<g;h+=2)R[h]=((c[h]+d)*u|0)/1e3,R[h+1]=((c[h+1]+_)*f|0)/1e3;if(s){for(n=[],g=R.length,h=2;h<g;h+=6)a=R[h-2],r=R[h-1],o=R[h+4],l=R[h+5],n.push(a,r,o,l),V(a,r,R[h],R[h+1],R[h+2],R[h+3],o,l,.001,n,n.length-2);for(a=n[0],g=n.length,h=2;h<g;h+=2){if((o=n[h])<a||1<o||o<0){s();break}a=o}}return i&&8===g&&0===R[0]&&0===R[1]&&1===R[g-2]&&1===R[g-1]?R.slice(2,6).join(","):(R[2]="C"+R[2],"M"+R.join(","))};function it(t){if(!t.target._gsSelection&&!x&&100<D()-w){for(var e=et.length;-1<--e;)et[e].deselect();et.length=0}}P.addEventListener("keydown",function(t){var e,i,s,n;if(16===t.which)m=!0;else if(17===t.which)h=!0;else if(91===t.which)a=!0;else if(18===t.which)for(v=!0,e=et.length;-1<--e;)et[e]._onPressAlt();else if(90===t.which&&(h||a)&&1<r.length){if(r.shift(),i=r[0]){for((n=i.path).path.setAttribute("d",i.d),n.path.setAttribute("transform",i.transform),n.init(),s=n._anchors,e=0;e<s.length;e++)-1!==i.selectedIndexes.indexOf(s[e].i)&&n._selectedAnchors.push(s[e]);n._updateAnchors(),n.update(),n.vars.onUndo&&n.vars.onUndo.call(n)}}else if(8===t.which||46===t.which)for(e=et.length;-1<--e;)et[e]._deleteSelectedAnchors();else if(65===t.which&&(a||h))for(e=et.length;-1<--e;)et[e].select(!0)}),P.addEventListener("keyup",function(t){if(16===t.which)m=!1;else if(17===t.which)h=!1;else if(91===t.which)a=!1;else if(18===t.which){v=!1;for(var e=et.length;-1<--e;)et[e]._onReleaseAlt()}}),d(P,"mouseup",it),d(P,"touchend",it),tt.version="0.2.1",tt.simplifyPoints=O,tt.pointsToBezier=f,tt.simplifySVG=function(t,e){var i,s,n,h,a,r,o,l,c,d=(e=e||{}).tolerance||1,_=e.precision||1/d,g=(void 0===e.cornerThreshold?18:+e.cornerThreshold)*F;if("string"!=typeof t&&(t=(i=t).getAttribute("d")),!N)return!1;if("#"!==t.charAt(0)&&"."!==t.charAt(0)||(i=P.querySelector(t))&&(t=i.getAttribute("d")),s=!1!==e.curved||/[achqstvz]/gi.test(t)?u(t)[0]:t.match(A),!1!==e.curved){for(l=s,s=[],c=l.length,n=2;n<c;n+=6)h=+l[n-2],r=+l[n-1],a=+l[n+4],o=+l[n+5],s.push(k(h),k(r),k(a),k(o)),V(h,r,+l[n],+l[n+1],+l[n+2],+l[n+3],a,o,1/(2e5*_),s,s.length-2);(s=f(s,d,g,e.curviness))[2]="C"+s[2]}else s=O(s,d);return t="M"+s.join(","),i&&i.setAttribute("d",t),t},tt.create=function(t,e){return new tt(t,e)},tt.getCubicSVGData=function(t){for(var e,i,s,n="",h=u(t),a=h.length,r=1e3,o=0;o<a;o++){for(n+="M"+(s=h[o])[0]+","+s[1]+" C",e=s.length,i=2;i<e;i++)n+=(s[i++]*r|0)/r+","+(s[i++]*r|0)/r+" "+(s[i++]*r|0)/r+","+(s[i++]*r|0)/r+" "+(s[i++]*r|0)/r+","+(s[i]*r|0)/r+" ";s.closed&&(n+="z")}return n},tt.editingAxis=i,tt.getSnapFunction=function(t){var r=t.radius||2,e=999999999999,o=t.x||0===t.x?t.x:t.width?0:-e,l=t.y||0===t.y?t.y:t.height?0:-e,c=o+(t.width||e*e),d=l+(t.height||e*e),_=!1!==t.containX,g=!1!==t.containY,u=t.axis,f=t.gridSize;return r*=r,function(t){var e,i,s,n,h=t.x,a=t.y;_&&h<o||(s=h-o)*s<r?h=o:(_&&c<h||(s=c-h)*s<r)&&(h=c),g&&a<l||(n=a-l)*n<r?a=l:(g&&d<a||(n=d-a)*n<r)&&(a=d),u&&(s=h-u.x,n=a-u.y,s*s<r&&(h=u.x),n*n<r&&(a=u.y)),f&&(s=(e=o+Math.round((h-o)/f)*f)-h)*s+(n=(i=l+Math.round((a-l)/f)*f)-a)*n<r&&(h=e,a=i),t.x=h,t.y=a}}}(_gsScope),function(){"use strict";function t(){return(_gsScope.GreenSockGlobals||_gsScope).PathEditor}"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define([],t)}();