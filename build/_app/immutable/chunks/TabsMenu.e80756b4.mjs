import{S as R,b as X,a as G,B as y,c as C,m as D,C as k,d as V,p as M,q as T,D as z,k as d,u as v,L as H,f as g,E as $,a1 as L,a2 as N,z as j,g as b,F as w,h as E,j as m,Q as J,X as K,R as P,v as A,I as U,M as W,a3 as Y,$ as Q,w as Z,x,y as ee,n as I,e as S}from"./index.32c220d4.mjs";import{g as F,s as te}from"./view.ee6692fe.mjs";function q(o,e,n){const t=o.slice();return t[8]=e[n],t}function se(o){let e,n,t,f=Object.keys(o[1]),a=[];for(let i=0;i<f.length;i+=1)a[i]=B(q(o,f,i));const _=i=>b(a[i],1,1,()=>{a[i]=null});return{c(){e=D("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=M(i,"DIV",{class:!0,style:!0});var c=T(e);for(let s=0;s<a.length;s+=1)a[s].l(c);c.forEach(d),this.h()},h(){v(e,"class","dy-tabs"),v(e,"style",n=F(o[3]["ui.selector.tabs"]))},m(i,c){g(i,e,c);for(let s=0;s<a.length;s+=1)a[s].m(e,null);t=!0},p(i,c){if(c&7){f=Object.keys(i[1]);let s;for(s=0;s<f.length;s+=1){const l=q(i,f,s);a[s]?(a[s].p(l,c),m(a[s],1)):(a[s]=B(l),a[s].c(),m(a[s],1),a[s].m(e,null))}for(j(),s=f.length;s<a.length;s+=1)_(s);E()}(!t||c&8&&n!==(n=F(i[3]["ui.selector.tabs"])))&&v(e,"style",n)},i(i){if(!t){for(let c=0;c<f.length;c+=1)m(a[c]);t=!0}},o(i){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)b(a[c]);t=!1},d(i){i&&d(e),P(a,i)}}}function ne(o){let e=o[8]+"",n;return{c(){n=Z(e)},l(t){n=x(t,e)},m(t,f){g(t,n,f)},p(t,f){f&2&&e!==(e=t[8]+"")&&ee(n,e)},i:I,o:I,d(t){t&&d(n)}}}function le(o){var i,c;let e,n,t;const f=[(i=o[1][o[8]].tab)==null?void 0:i.props];var a=(c=o[1][o[8]].tab)==null?void 0:c.component;function _(s){let l={};for(let r=0;r<f.length;r+=1)l=Q(l,f[r]);return{props:l}}return a&&(e=y(a,_())),{c(){e&&k(e.$$.fragment),n=S()},l(s){e&&z(e.$$.fragment,s),n=S()},m(s,l){e&&$(e,s,l),g(s,n,l),t=!0},p(s,l){var h,u;const r=l&2?L(f,[N((h=s[1][s[8]].tab)==null?void 0:h.props)]):{};if(a!==(a=(u=s[1][s[8]].tab)==null?void 0:u.component)){if(e){j();const p=e;b(p.$$.fragment,1,0,()=>{w(p,1)}),E()}a?(e=y(a,_()),k(e.$$.fragment),m(e.$$.fragment,1),$(e,n.parentNode,n)):e=null}else a&&e.$set(r)},i(s){t||(e&&m(e.$$.fragment,s),t=!0)},o(s){e&&b(e.$$.fragment,s),t=!1},d(s){s&&d(n),e&&w(e,s)}}}function B(o){let e,n,t,f,a,_,i,c;const s=[le,ne],l=[];function r(u,p){return u[1][u[8]].tab?0:1}n=r(o),t=l[n]=s[n](o);function h(){return o[6](o[8])}return{c(){e=D("a"),t.c(),f=C(),this.h()},l(u){e=M(u,"A",{class:!0});var p=T(e);t.l(p),f=V(p),p.forEach(d),this.h()},h(){v(e,"class",a="dy-tab dy-tab-bordered text-white normal-case "+(o[0]===o[8]?"dy-tab-active":"")),A(e,"border-color",o[0]===o[8]?"#FFFFFF":""),A(e,"background","none")},m(u,p){g(u,e,p),l[n].m(e,null),U(e,f),_=!0,i||(c=W(e,"click",Y(h)),i=!0)},p(u,p){o=u;let O=n;n=r(o),n===O?l[n].p(o,p):(j(),b(l[O],1,1,()=>{l[O]=null}),E(),t=l[n],t?t.p(o,p):(t=l[n]=s[n](o),t.c()),m(t,1),t.m(e,f)),(!_||p&3&&a!==(a="dy-tab dy-tab-bordered text-white normal-case "+(o[0]===o[8]?"dy-tab-active":"")))&&v(e,"class",a),p&3&&A(e,"border-color",o[0]===o[8]?"#FFFFFF":"")},i(u){_||(m(t),_=!0)},o(u){b(t),_=!1},d(u){u&&d(e),l[n].d(),i=!1,c()}}}function ae(o){let e,n,t,f,a,_=o[4]&&se(o);const i=[o[1][o[0]].props];var c=o[1][o[0]].component;function s(l){let r={};for(let h=0;h<i.length;h+=1)r=Q(r,i[h]);return{props:r}}return c&&(t=y(c,s()),t.$on("menuaction",o[5])),{c(){_&&_.c(),e=C(),n=D("div"),t&&k(t.$$.fragment),this.h()},l(l){_&&_.l(l),e=V(l),n=M(l,"DIV",{class:!0,style:!0});var r=T(n);t&&z(t.$$.fragment,r),r.forEach(d),this.h()},h(){v(n,"class","tabs-content svelte-1i4vlsb"),v(n,"style",f=F(o[3]["ui.background"])),H(n,"p-2",!o[4])},m(l,r){_&&_.m(l,r),g(l,e,r),g(l,n,r),t&&$(t,n,null),a=!0},p(l,[r]){l[4]&&_.p(l,r);const h=r&3?L(i,[N(l[1][l[0]].props)]):{};if(c!==(c=l[1][l[0]].component)){if(t){j();const u=t;b(u.$$.fragment,1,0,()=>{w(u,1)}),E()}c?(t=y(c,s()),t.$on("menuaction",l[5]),k(t.$$.fragment),m(t.$$.fragment,1),$(t,n,null)):t=null}else c&&t.$set(h);(!a||r&8&&f!==(f=F(l[3]["ui.background"])))&&v(n,"style",f)},i(l){a||(m(_),t&&m(t.$$.fragment,l),a=!0)},o(l){b(_),t&&b(t.$$.fragment,l),a=!1},d(l){_&&_.d(l),l&&d(e),l&&d(n),t&&w(t)}}}function oe(o,e,n){let t;J(o,te,r=>n(3,t=r));let{options:f={"":{component:"",props:{}}}}=e,{active:a=""}=e;const _=K(),i=Object.keys(f).length>1;function c({detail:r}){_("menuaction",{text:r.text,tab:a})}const s=r=>{Object.hasOwn(f,r)&&n(0,a=r)},l=r=>s(r);return o.$$set=r=>{"options"in r&&n(1,f=r.options),"active"in r&&n(0,a=r.active)},[a,f,s,t,i,c,l]}class ce extends R{constructor(e){super(),X(this,e,oe,ae,G,{options:1,active:0,setActive:2})}get setActive(){return this.$$.ctx[2]}}export{ce as T};
