(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),o=r(a("VbXa")),l=r(a("8OQS")),s=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=z([].concat(t.fluid))),t.fixed&&(t.fixed=z([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return h(t||a).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,w=b&&window.IntersectionObserver,E=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function z(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var M=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+o+l+a+r+t+n+i+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(V,(0,s.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},V=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,d=e.onError,u=e.loading,p=e.draggable,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,s.default)({sizes:a,srcSet:r,src:i},f,{onLoad:o,onError:d,ref:t,loading:u,draggable:p,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var _=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&w&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=M(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,p=void 0===d?{}:d,f=e.placeholderClassName,m=e.fluid,g=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,E=e.itemProp,z=e.loading,L=e.draggable,M=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,s.default)({opacity:M?1:0,transition:_?"opacity "+b+"ms":"none"},l),j="boolean"==typeof v?"lightgray":v,C={transitionDelay:b+"ms"},N=(0,s.default)({opacity:this.state.imgLoaded?0:1},_&&C,{},l,{},p),R={title:t,alt:this.state.isVisible?"":a,style:N,className:f,itemProp:E};if(m){var P=m,T=h(m);return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),j&&c.default.createElement(w,{title:t,style:(0,s.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&C)}),T.base64&&c.default.createElement(O,{src:T.base64,spreadProps:R,imageVariants:P,generateSources:k}),T.tracedSVG&&c.default.createElement(O,{src:T.tracedSVG,spreadProps:R,imageVariants:P,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(P),c.default.createElement(V,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:z,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:a,title:t,loading:z},T,{imageVariants:P}))}}))}if(g){var G=g,q=h(g),B=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete B.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},j&&c.default.createElement(w,{title:t,style:(0,s.default)({backgroundColor:j,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},_&&C)}),q.base64&&c.default.createElement(O,{src:q.base64,spreadProps:R,imageVariants:G,generateSources:k}),q.tracedSVG&&c.default.createElement(O,{src:q.tracedSVG,spreadProps:R,imageVariants:G,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(G),c.default.createElement(V,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:z,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:a,title:t,loading:z},q,{imageVariants:G}))}}))}return null},t}(c.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),j=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});_.propTypes={resolutions:I,sizes:j,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([j,d.default.arrayOf(j)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var C=_;t.default=C},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("8k0H"),o=a("vrFN"),l=(a("f3/d"),a("KKXr"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Lnxd")),s=function(e){return Object(l.a)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M27.242 12.687c-0.005-0.027-0.010-0.055-0.017-0.081-0.004-0.016-0.010-0.031-0.015-0.047-0.008-0.024-0.015-0.047-0.025-0.070-0.007-0.016-0.014-0.031-0.022-0.047-0.010-0.022-0.021-0.043-0.033-0.064-0.009-0.015-0.018-0.030-0.028-0.045-0.013-0.020-0.026-0.040-0.041-0.059-0.011-0.014-0.022-0.028-0.033-0.042-0.015-0.018-0.031-0.036-0.048-0.053-0.013-0.013-0.025-0.026-0.039-0.038-0.017-0.016-0.036-0.031-0.055-0.046-0.015-0.011-0.029-0.023-0.044-0.033-0.005-0.004-0.010-0.008-0.016-0.012l-10.291-6.86c-0.325-0.217-0.748-0.217-1.073 0l-10.291 6.86c-0.006 0.004-0.010 0.008-0.016 0.012-0.015 0.011-0.029 0.022-0.044 0.033-0.019 0.015-0.037 0.030-0.055 0.046-0.013 0.012-0.026 0.025-0.038 0.038-0.017 0.017-0.033 0.034-0.048 0.053-0.012 0.014-0.022 0.027-0.033 0.042-0.014 0.019-0.028 0.039-0.041 0.059-0.009 0.015-0.019 0.030-0.027 0.045-0.012 0.021-0.023 0.042-0.033 0.064-0.007 0.016-0.015 0.031-0.022 0.047-0.010 0.023-0.018 0.047-0.025 0.070-0.005 0.016-0.011 0.031-0.015 0.047-0.007 0.027-0.012 0.054-0.017 0.081-0.003 0.014-0.006 0.028-0.008 0.042-0.005 0.042-0.009 0.084-0.009 0.126v6.86c0 0.043 0.003 0.085 0.009 0.126 0.002 0.014 0.005 0.028 0.008 0.042 0.005 0.027 0.010 0.054 0.017 0.081 0.004 0.016 0.010 0.031 0.015 0.047 0.008 0.024 0.016 0.047 0.025 0.071 0.006 0.016 0.014 0.031 0.022 0.047 0.010 0.022 0.021 0.043 0.033 0.065 0.009 0.015 0.018 0.030 0.027 0.044 0.013 0.020 0.026 0.040 0.041 0.059 0.011 0.015 0.022 0.028 0.033 0.042 0.015 0.018 0.031 0.035 0.048 0.052 0.012 0.013 0.025 0.026 0.038 0.038 0.017 0.016 0.036 0.031 0.055 0.046 0.014 0.011 0.029 0.023 0.044 0.033 0.006 0.004 0.010 0.008 0.016 0.012l10.29 6.86c0.163 0.108 0.349 0.163 0.537 0.163s0.374-0.054 0.537-0.163l10.29-6.86c0.006-0.004 0.011-0.008 0.016-0.012 0.015-0.011 0.029-0.022 0.044-0.033 0.019-0.015 0.037-0.030 0.055-0.046 0.013-0.012 0.026-0.025 0.039-0.038 0.017-0.017 0.033-0.034 0.048-0.052 0.012-0.014 0.023-0.027 0.033-0.042 0.014-0.019 0.028-0.039 0.041-0.059 0.009-0.015 0.019-0.029 0.028-0.044 0.012-0.021 0.023-0.043 0.033-0.065 0.007-0.015 0.015-0.031 0.022-0.047 0.010-0.023 0.017-0.047 0.025-0.071 0.005-0.016 0.011-0.031 0.015-0.047 0.007-0.027 0.012-0.054 0.017-0.081 0.002-0.014 0.006-0.028 0.008-0.042 0.005-0.042 0.009-0.084 0.009-0.126v-6.86c0-0.043-0.003-0.085-0.009-0.126-0.002-0.014-0.005-0.028-0.008-0.042zM16 18.575l-3.422-2.289 3.422-2.289 3.422 2.289-3.422 2.289zM15.033 12.316l-4.195 2.806-3.386-2.265 7.581-5.054v4.513zM9.098 16.286l-2.42 1.619v-3.238l2.42 1.619zM10.838 17.45l4.195 2.805v4.513l-7.581-5.054 3.386-2.265zM16.967 20.255l4.195-2.805 3.386 2.265-7.581 5.054v-4.513zM22.902 16.286l2.421-1.619v3.238l-2.421-1.619zM21.162 15.122l-4.195-2.806v-4.513l7.581 5.054-3.386 2.265z"}}]})(e)};s.displayName="DiCodepen";var c=function(e){return Object(l.a)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M7.73 9.828c0 3.552 0.097 6.459 0.226 6.459 0.097 0 1.776-0.517 3.746-1.13 2.68-0.904 3.972-1.13 5.361-1.066l1.808 0.097 0.097 7.492 0.065 7.524h3.875v-7.88c0-7.653-0.032-7.879-0.743-8.945-1.292-1.938-4.618-2.358-8.752-1.13l-1.486 0.452v-8.332h-4.198v6.459zM18.872 5.727c-0.711 1.26-1.324 2.422-1.389 2.551-0.065 0.161 0.807 0.258 1.938 0.258h2.034l1.162-1.873c2.228-3.488 2.261-3.294-0.258-3.294h-2.196l-1.292 2.357zM7.73 25.167c0 2.034 0.129 3.714 0.258 3.714s1.066-0.839 2.099-1.873l1.841-1.873-1.873-1.841c-1.033-1.001-1.97-1.841-2.099-1.841s-0.226 1.679-0.226 3.714z"}}]})(e)};c.displayName="DiHeroku";var d=function(e){return Object(l.a)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"}}]})(e)};d.displayName="DiMongodb";var u=a("ma3e"),p=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"256 256 1024 1024"},i.a.createElement("title",null,"logo-on-white-bg"),i.a.createElement("path",{fill:"#FFF",d:"M808 336l387 218.9v437.9l-387 218.9-387-218.9V554.9z"}),i.a.createElement("path",{fill:"#8ED6FB",d:"M1125.9 977.7l-305.1 172.6v-134.4l190.1-104.6 115 66.4zm20.9-18.9V597.9l-111.6 64.5v232l111.6 64.4zm-657.9 18.9L794 1150.3v-134.4L603.8 911.3l-114.9 66.4zM468 958.8V597.9l111.6 64.5v232L468 958.8zm13.1-384.3l312.9-177v129.9L593.5 637.7l-1.6.9-110.8-64.1zm652.6 0l-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z"}),i.a.createElement("path",{fill:"#1C78C0",d:"M794 985.3L606.4 882.1V677.8L794 786.1v199.2zm26.8 0l187.6-103.1V677.8L820.8 786.1v199.2zm-13.4-207zM619.1 654.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z"}))},f=function(){return i.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"-10 -10 116 111"},i.a.createElement("clipPath",{id:"clip"},i.a.createElement("path",{d:"M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75zm36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z"})),i.a.createElement("linearGradient",{id:"gradient-1",gradientUnits:"userSpaceOnUse",x1:"7",y1:"64",x2:"50",y2:"107"},i.a.createElement("stop",{offset:"0","stop-color":"#f9a03c"}),i.a.createElement("stop",{offset:"1","stop-color":"#f7974e"})),i.a.createElement("linearGradient",{id:"gradient-2",gradientUnits:"userSpaceOnUse",x1:"2",y1:"-2",x2:"87",y2:"84"},i.a.createElement("stop",{offset:"0","stop-color":"#f26d58"}),i.a.createElement("stop",{offset:"1","stop-color":"#f9a03c"})),i.a.createElement("linearGradient",{id:"gradient-3",gradientUnits:"userSpaceOnUse",x1:"45",y1:"-10",x2:"108",y2:"53"},i.a.createElement("stop",{offset:"0","stop-color":"#b84e51"}),i.a.createElement("stop",{offset:"1","stop-color":"#f68e48"})),i.a.createElement("g",{"clip-path":"url(#clip)"},i.a.createElement("path",{d:"M-100,-102m-28,0v300h300z",fill:"url(#gradient-1)"}),i.a.createElement("path",{d:"M-100,-102m28,0h300v300z",fill:"url(#gradient-3)"}),i.a.createElement("path",{d:"M-100,-102l300,300",fill:"none",stroke:"url(#gradient-2)","stroke-width":"40"})))},h=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"0 0 100 100"},i.a.createElement("g",{fill:"#764ABC"},i.a.createElement("path",{d:"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"}),i.a.createElement("path",{d:"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"}),i.a.createElement("path",{d:"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"})))},m=a("9eSz"),g=a.n(m),v=a("/Vdk"),b=a.n(v),w="layer-ray.github.io/link-do-not-exists",E=function(e){var t=e.prj,a=e.image,n=Object(r.useRef)([]),o=Object(r.useRef)(t),m=Object(r.useState)(!1),v=m[0],E=m[1];Object(r.useEffect)((function(){t.twosided&&(n.current=Object.keys(t),o.current=t[n[0]])}),[t]),Object(r.useEffect)((function(){o.current=v?t[n.current[1]]:t[n.current[0]]}),[v,t]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:b.a.overlay},i.a.createElement("button",{className:b.a.toggler,onClick:function(){E(!v)}},"test"),i.a.createElement("h2",{className:b.a.title},t.title||"Upcoming app!"),i.a.createElement("p",{className:b.a.description},t.desc||"This will be my next application."),i.a.createElement("p",{className:b.a.linkWrapper},i.a.createElement("a",{href:t.repo&&t.repo.url||w,target:"_blank",rel:"noopener noreferrer",className:b.a.btn},function(){switch(t.repo&&t.repo.host){case"github":return i.a.createElement(u.c,null);case"codepen":return i.a.createElement(s,null);default:return}}(),i.a.createElement("span",null," Repo ")),i.a.createElement("a",{href:t.live&&t.live.url||w,target:"_blank",rel:"noopener noreferrer",className:b.a.btn},function(){switch(t.live&&t.live.host){case"heroku":return i.a.createElement(c,null);case"codepen":return i.a.createElement(s,null);default:return}}(),i.a.createElement("span",null," Live "))),i.a.createElement("footer",{className:b.a.overlayFooter},t.tech&&t.tech.map((function(e){switch(e){case"html5":return i.a.createElement(l.b.Provider,{value:{size:"2em",color:"#f14a29"}},i.a.createElement(u.d,null));case"vanilla_js":return i.a.createElement(l.b.Provider,{value:{size:"2em",color:"#f5e342"}},i.a.createElement(u.e,null));case"vanilla_css":return i.a.createElement(l.b.Provider,{value:{size:"2em",color:"#2062af"}},i.a.createElement(u.a,null));case"sass":return i.a.createElement(l.b.Provider,{value:{size:"2em",color:"#cf649a"}},i.a.createElement(u.h,null));case"react":return i.a.createElement(l.b.Provider,{value:{size:"2em",color:"#61dafb"}},i.a.createElement(u.g,null));case"node":return i.a.createElement(l.b.Provider,{value:{size:"2em",color:"#8cc84b"}},i.a.createElement(u.f,null));case"mongo":return i.a.createElement(l.b.Provider,{value:{size:"2em",color:"#61dafb"}},i.a.createElement(d,null));case"redux":return i.a.createElement(h,null);case"webpack":return i.a.createElement(p,null);case"d3":return i.a.createElement(f,null);default:return i.a.createElement("div",null,"?")}})))),i.a.createElement(g.a,{fluid:a.node.childImageSharp.fluid,className:b.a.gatsbyImage}))},y=a("hthX"),z=a.n(y),S=a("gvu0"),k=function(e){var t=e.imgs,a=Object(r.useState)(!1),n=a[0],o=a[1];return Object(r.useEffect)((function(){var e=" -webkit- -moz- -o- -ms- ".split(" ");if(window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch))return!0;var t=["(",e.join("touch-enabled),("),"heartz",")"].join("");o(function(e){return window&&window.matchMedia(e).matches}(t))}),[]),i.a.createElement("div",{className:z.a.gridContainer},t.map((function(e,t){var a=S[e.node.name]||{},r=[z.a.frame,n?z.a.touch:z.a.notTouch].join(" ");return i.a.createElement("figure",{key:t,className:r},i.a.createElement(E,{prj:a,image:e}))})))};a.d(t,"pageQuery",(function(){return L}));t.default=function(e){var t=e.data;return i.a.createElement(n.a,null,i.a.createElement(o.a,{title:"Home",keywords:["portfolio","gatsby","react"]}),i.a.createElement(k,{imgs:t.thumbs.edges}))};var L="3410940855"},gvu0:function(e){e.exports=JSON.parse('{"0_mep_vote_mapper":{"title":"Mep Vote Mapper","desc":"A web server that collect data about EU Parliament\'s plenary votations and, once clean and organized, store them in a database. It also allows to manage data through a raw interface","tech":["html5","vanilla_js","node","mongo"],"repo":{"url":"https://github.com/layer-ray/mepVoteMapper","host":"github"},"live":{"url":"https://mep-vote-mapper.herokuapp.com","host":"heroku"},"two-sided":"false"},"1_mep_vote_mapper_client":{"title":"Check the vote","desc":"This is the client used to interact with the data provided from Mep Vote Mapper server. it allow users to visualize how each mep voted for each votation","tech":["react","redux","sass","webpack"],"repo":{"url":"https://github.com/layer-ray/mepVoteMapper_client","host":"github"},"live":{"url":"https://check-the-vote.herokuapp.com/","host":"heroku"},"two-sided":"false"},"2_json_csv_thumb":{"title":"Json|Csv Converter","desc":"This tool does exactly what it is supposed to do: it converts files from json format to csv and viceversa","tech":["html5","vanilla_js","vanilla_css","webpack"],"repo":{"url":"https://github.com/layer-ray/JsonCsvConverter","host":"github"},"live":{"url":"https://json-csv-converter.herokuapp.com","host":"heroku"}},"3_badge_thumb":{"title":"QR Badge creator","desc":"This simple application allow users to create and print badges with their data codified in a qr code","tech":["react","sass","webpack"],"repo":{"url":"https://github.com/layer-ray/badge-generator","host":"github"},"live":{"url":"https://qr-badge-generator.herokuapp.com/","host":"heroku"},"two-sided":"false"},"4_global_surface_temp":{"title":"Global Surface Variation","desc":"A data viz project (part of FCC curriculum) that squeeze a lot of data about earth land-surface historical temperature in a very compact and intuitive view","tech":["d3","vanilla_css"],"repo":{"url":"https://codepen.io/LoneKodiak/pen/LdzbGg?editors=0110","host":"codepen"},"live":{"url":"https://codepen.io/LoneKodiak/full/LdzbGg","host":"codepen"},"two-sided":"false"},"5_meteor_landing":{"title":"Meteor Landing map","desc":"A data viz project (part of FCC curriculum) that displays data about biggest meteorite impacts on earth","tech":["d3","vanilla_css"],"repo":{"url":"https://codepen.io/LoneKodiak/pen/ZxrPOy?editors=0110","host":"codepen"},"live":{"url":"https://codepen.io/LoneKodiak/full/ZxrPOy","host":"codepen"},"two-sided":"false"},"6_mep_vote_mapper":{"client":{"title":"Check the vote","desc":"This is the client used to interact with the data provided from Mep Vote Mapper server. it allow users to visualize how each mep voted for each votation","tech":["react","redux","sass","webpack"],"repo":{"url":"https://github.com/layer-ray/mepVoteMapper_client","host":"github"},"live":{"url":"https://check-the-vote.herokuapp.com/","host":"heroku"}},"server":{"title":"Check the vote","desc":"This is the client used to interact with the data provided from Mep Vote Mapper server. it allow users to visualize how each mep voted for each votation","tech":["react","redux","sass","webpack"],"repo":{"url":"https://github.com/layer-ray/mepVoteMapper_client","host":"github"},"live":{"url":"https://check-the-vote.herokuapp.com/","host":"heroku"}},"two-sided":"true"}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-a459058bdd0247adcf2a.js.map