(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(169),c=a.n(l),i=function(){return r.a.createElement("aside",{className:c.a.cardContainer},r.a.createElement("dl",null,r.a.createElement("dt",null,"Personal attitudes"),r.a.createElement("dd",null,"Methodical"),r.a.createElement("dd",null,"Analytical"),r.a.createElement("dd",null,"Organized"),r.a.createElement("dt",null,"Based in"),r.a.createElement("dd",null,"Italy"),r.a.createElement("dt",null,"Interests"),r.a.createElement("dd",null,"Coding"),r.a.createElement("dd",null,"Environment")))},o=a(153),s=a(151);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"About"}),r.a.createElement("p",{style:{textAlign:"center",margin:"4rem"}},"I am Layer, a self-taught fullstack developer."),r.a.createElement(i,null))}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Layer's lair"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){"use strict";var n=a(152),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(161),s=a.n(o);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title,o=n.data.site,d=t||o.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:i},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:d}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=d},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Layer's lair",description:"Have a look at my portfolio, a site where you can find a showcase of my best projects!",author:"Layer R-"}}}}},153:function(e,t,a){"use strict";var n=a(149),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(33),s=a.n(o),d=(a(148),l.a.createContext({})),m=function(e){return l.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};var u=a(155),p=a.n(u),E=function(e){e.siteTitle;return l.a.createElement("header",{className:p.a.header},l.a.createElement("div",{className:p.a.title},l.a.createElement("h2",{className:"hidden"},"Header"),l.a.createElement("h2",null,"LAYER"),l.a.createElement("p",null,"Web developer")),l.a.createElement("nav",{className:p.a.navBar},l.a.createElement("h2",{className:"hidden"},"Navigation elements"),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/about",activeClassName:p.a.active},"About")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",activeClassName:p.a.active},"Home"))))};E.propTypes={siteTitle:i.a.string},E.defaultProps={siteTitle:""};var f=E,y=(a(156),a(158)),h=a(154),v=a(157),g=a.n(v),w=function(e){var t=e.link,a=e.className,n=e.children;return l.a.createElement("a",{href:t},l.a.createElement("li",null,l.a.createElement(h.b.Provider,{value:{size:"2em",className:a,style:{verticalAlign:"middle"}}},l.a.createElement("div",null,n))))},N=function(){return l.a.createElement("footer",{className:g.a.footer},l.a.createElement("h2",{className:"hidden"},"Footer - social icons"),l.a.createElement("ul",{className:g.a.navlist},l.a.createElement(w,{link:"www.freecodecamp.org",className:[g.a.fccIcon,g.a.icon].join(" ")},l.a.createElement(y.c,null)),l.a.createElement(w,{link:"www.codepen.org",className:[g.a.codepenIcon,g.a.icon].join(" ")},l.a.createElement(y.a,null)),l.a.createElement(w,{link:"www.facebook.com",className:[g.a.fbIcon,g.a.icon].join(" ")},l.a.createElement(y.b,null))),"Layer © ",(new Date).getFullYear())},b=(a(159),a(160)),k=a.n(b),j=function(e){var t=e.children;return l.a.createElement(m,{query:"755544856",render:function(e){return l.a.createElement("div",{className:k.a.layoutContainer},l.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",{className:k.a.content},l.a.createElement("h2",{className:"hidden"},"Projects"),t),l.a.createElement(N,null))},data:n})};j.propTypes={children:i.a.node.isRequired};t.a=j}}]);
//# sourceMappingURL=component---src-pages-about-js-fe8be840620cf455afb2.js.map