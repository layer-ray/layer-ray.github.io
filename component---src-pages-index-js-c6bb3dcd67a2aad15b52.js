(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(153),i=a(151),c=(a(170),a(74),a(155)),l=a(174),s=a(171),m=a.n(s),d=a(172),u=a.n(d),p=a(173),h="layer-ray.github.io/link-do-not-exists",v=function(e){var t=e.imgs;return r.a.createElement("div",{className:u.a.gridContainer},t.map(function(e,t){var a,n,o=p[e.node.name]||{},i=[u.a.frame,(n=" -webkit- -moz- -o- -ms- ".split(" "),window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)||(a=["(",n.join("touch-enabled),("),"heartz",")"].join(""),window.matchMedia(a).matches)?u.a.touch:u.a.notTouch)].join(" ");return r.a.createElement("figure",{key:t,tabIndex:"0",className:i},r.a.createElement("div",{className:u.a.overlay},r.a.createElement("h2",{className:u.a.title},o.title||"Upcoming app!"),r.a.createElement("p",{className:u.a.description},o.desc||"This will be my next application."),r.a.createElement("footer",{className:u.a.overlayFooter},r.a.createElement("a",{href:o.live||h,target:"_blank",rel:"noopener noreferrer",className:u.a.btn},r.a.createElement(c.d,null),r.a.createElement("span",null," Repo ")),r.a.createElement("a",{href:o.live||h,target:"_blank",rel:"noopener noreferrer",className:u.a.btn},r.a.createElement(l.a,null),r.a.createElement("span",null," Live ")))),r.a.createElement(m.a,{fluid:e.node.childImageSharp.fluid,className:u.a.gatsbyImage}))}))};a.d(t,"pageQuery",function(){return f});t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home",keywords:["portfolio","gatsby","react"]}),r.a.createElement(v,{imgs:t.thumbs.edges}))};var f="3410940855"},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Layer's lair"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){"use strict";var n=a(152),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(161),s=a.n(l);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,l=n.data.site,m=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Layer's lair",description:"Have a look at my portfolio, a site where you can find a showcase of my best projects!",author:"Layer R-"}}}}},153:function(e,t,a){"use strict";var n=a(149),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(33),s=a.n(l),m=(a(148),o.a.createContext({})),d=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};var u=a(156),p=a.n(u),h=function(e){e.siteTitle;return o.a.createElement("header",{className:p.a.header},o.a.createElement("div",{className:p.a.title},o.a.createElement("h2",{className:"hidden"},"Header"),o.a.createElement("h2",null,"LAYER"),o.a.createElement("p",null,"Web developer")),o.a.createElement("nav",{className:p.a.navBar},o.a.createElement("h2",{className:"hidden"},"Navigation elements"),o.a.createElement("li",null,o.a.createElement(s.a,{to:"/about",activeClassName:p.a.active},"About")),o.a.createElement("li",null,o.a.createElement(s.a,{to:"/",activeClassName:p.a.active},"Home"))))};h.propTypes={siteTitle:c.a.string},h.defaultProps={siteTitle:""};var v=h,f=(a(157),a(155)),E=a(154),y=a(158),g=a.n(y),w=function(e){var t=e.link,a=e.className,n=e.children;return o.a.createElement("a",{href:t},o.a.createElement("li",null,o.a.createElement(E.b.Provider,{value:{size:"2em",className:a,style:{verticalAlign:"middle"}}},o.a.createElement("div",null,n))))},b=function(){return o.a.createElement("footer",{className:g.a.footer},o.a.createElement("h2",{className:"hidden"},"Footer - social icons"),o.a.createElement("ul",{className:g.a.navlist},o.a.createElement(w,{link:"www.freecodecamp.org",className:[g.a.fccIcon,g.a.icon].join(" ")},o.a.createElement(f.c,null)),o.a.createElement(w,{link:"www.codepen.org",className:[g.a.codepenIcon,g.a.icon].join(" ")},o.a.createElement(f.a,null)),o.a.createElement(w,{link:"www.facebook.com",className:[g.a.fbIcon,g.a.icon].join(" ")},o.a.createElement(f.b,null))),"Layer © ",(new Date).getFullYear())},N=(a(159),a(160)),k=a.n(N),T=function(e){var t=e.children;return o.a.createElement(d,{query:"755544856",render:function(e){return o.a.createElement("div",{className:k.a.layoutContainer},o.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("main",{className:k.a.content},o.a.createElement("h2",{className:"hidden"},"Projects"),t),o.a.createElement(b,null))},data:n})};T.propTypes={children:c.a.node.isRequired};t.a=T},173:function(e){e.exports={badge_thumb:{title:"QR Badge creator",desc:"This simple application allow users to create and print badges with data codified in a qr code",repo:"https://github.com/layer-ray/badge-generator",live:"https://qr-badge-generator.herokuapp.com/"},json_csv_thumb:{title:"Json|Csv Converter",desc:"This tool do exactly what it is supposed to do: it converts files from json format to csv and viceversa",repo:"https://github.com/layer-ray/JsonCsvConverter",live:"https://json-csv-converter.herokuapp.com"},check_the_vote:{title:"Check the vote",desc:"This is the client used to interact with the data provided from a server created ad-hoc. It collect data about EU Parliament's plenary votations and the client allow users to visualize what each mep voted for each votation",repo:"https://github.com/layer-ray/mepVoteMapper_client",live:"https://check-the-vote.herokuapp.com/"},"mep-vote-mapper":{title:"Mep Vote Mapper",desc:"This is a server that collect and update EU votations data and store them in a database, clean and organized",repo:"https://github.com/layer-ray/mepVoteMapper_client",live:"https://check-the-vote.herokuapp.com/"}}}}]);
//# sourceMappingURL=component---src-pages-index-js-c6bb3dcd67a2aad15b52.js.map