import{S as T,b as U,a as W,G as F,H as G,q as v,k as h,u as l,f as X,I as g,n as J,J as B,m as w,C as Y,c as C,p as E,D as x,d as L,L as O,v as P,E as tt,N as M,O as N,P as Z,j as k,g as D,F as et,Q as q}from"./index.32c220d4.mjs";import{g as Q,s as st,a as ot,x as nt}from"./view.4966b5c6.mjs";function at(s){let e,n;return{c(){e=F("svg"),n=F("path"),this.h()},l(o){e=G(o,"svg",{fill:!0,xmlns:!0,height:!0,width:!0});var a=v(e);n=G(a,"path",{d:!0}),v(n).forEach(h),a.forEach(h),this.h()},h(){l(n,"d","M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"),l(e,"fill",s[0]),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"height","24"),l(e,"width","24")},m(o,a){X(o,e,a),g(e,n)},p(o,[a]){a&1&&l(e,"fill",o[0])},i:J,o:J,d(o){o&&h(e)}}}function rt(s,e,n){let{color:o="black"}=e;return s.$$set=a=>{"color"in a&&n(0,o=a.color)},[o]}class lt extends T{constructor(e){super(),U(this,e,rt,at,W,{color:0})}}const it=s=>({}),z=s=>({}),ct=s=>({}),K=s=>({}),_t=s=>({}),R=s=>({});function ut(s){let e,n,o,a,b,p,d,m,u,y,f;a=new lt({props:{color:"white"}});const $=s[5]["left-buttons"],i=B($,s,s[4],R),I=s[5].center,c=B(I,s,s[4],K),V=s[5]["right-buttons"],_=B(V,s,s[4],z);return{c(){e=w("div"),n=w("div"),o=w("label"),Y(a.$$.fragment),b=C(),i&&i.c(),p=C(),d=w("div"),c&&c.c(),u=C(),y=w("div"),_&&_.c(),this.h()},l(t){e=E(t,"DIV",{class:!0});var r=v(e);n=E(r,"DIV",{class:!0});var S=v(n);o=E(S,"LABEL",{for:!0,class:!0});var H=v(o);x(a.$$.fragment,H),H.forEach(h),b=L(S),i&&i.l(S),S.forEach(h),p=L(r),d=E(r,"DIV",{class:!0,style:!0});var j=v(d);c&&c.l(j),j.forEach(h),u=L(r),y=E(r,"DIV",{class:!0});var A=v(y);_&&_.l(A),A.forEach(h),r.forEach(h),this.h()},h(){l(o,"for","sidebar"),l(o,"class","dy-btn dy-btn-ghost dy-btn-circle p-1 dy-drawer-button"),O(o,"lg:hidden",s[2]&&s[3]!=="Side By Side"),l(n,"class","dy-navbar-start"),l(d,"class","dy-navbar-center"),l(d,"style",m=Q(s[0]["ui.screen-title"])),l(y,"class","dy-navbar-end fill-base-content"),l(e,"class","dy-navbar"),P(e,"background-color",s[1])},m(t,r){X(t,e,r),g(e,n),g(n,o),tt(a,o,null),g(n,b),i&&i.m(n,null),g(e,p),g(e,d),c&&c.m(d,null),g(e,u),g(e,y),_&&_.m(y,null),f=!0},p(t,[r]){(!f||r&12)&&O(o,"lg:hidden",t[2]&&t[3]!=="Side By Side"),i&&i.p&&(!f||r&16)&&M(i,$,t,t[4],f?Z($,t[4],r,_t):N(t[4]),R),c&&c.p&&(!f||r&16)&&M(c,I,t,t[4],f?Z(I,t[4],r,ct):N(t[4]),K),(!f||r&1&&m!==(m=Q(t[0]["ui.screen-title"])))&&l(d,"style",m),_&&_.p&&(!f||r&16)&&M(_,V,t,t[4],f?Z(V,t[4],r,it):N(t[4]),z),r&2&&P(e,"background-color",t[1])},i(t){f||(k(a.$$.fragment,t),k(i,t),k(c,t),k(_,t),f=!0)},o(t){D(a.$$.fragment,t),D(i,t),D(c,t),D(_,t),f=!1},d(t){t&&h(e),et(a),i&&i.d(t),c&&c.d(t),_&&_.d(t)}}}function ft(s,e,n){let o,a,b,p;q(s,st,u=>n(0,a=u)),q(s,ot,u=>n(2,b=u)),q(s,nt,u=>n(3,p=u));let{$$slots:d={},$$scope:m}=e;return s.$$set=u=>{"$$scope"in u&&n(4,m=u.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&n(1,o=a["ui.bar.action"]["background-color"])},[a,o,b,p,m,d]}class gt extends T{constructor(e){super(),U(this,e,ft,ut,W,{})}}export{gt as N};
