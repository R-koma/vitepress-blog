import{s as o,a3 as i,a4 as u,a5 as c,a6 as l,a7 as d,a8 as f,a9 as m,aa as h,ab as A,ac as g,X as P,d as v,u as y,j as w,y as C,ad as R,ae as _,af as b,ag as E}from"./chunks/framework.a0e32656.js";import{t as D}from"./chunks/theme.3b7a526e.js";const T={extends:D};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(T),j=v({name:"VitePressApp",setup(){const{site:e}=y();return w(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),_(),b(),s.setup&&s.setup(),()=>E(s.Layout)}});async function x(){const e=S(),a=O();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",d),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function O(){return h(j)}function S(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{x as createApp};