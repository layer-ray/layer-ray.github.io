(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{170:function(e,t,i){var a=i(25).f,s=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in s||i(18)&&a(s,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},171:function(e,t,i){"use strict";var a=i(8);t.__esModule=!0,t.default=void 0;var s,r=a(i(7)),n=a(i(35)),o=a(i(76)),l=a(i(77)),d=a(i(0)),c=a(i(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),i=t.fluid?t.fluid.src:t.fixed.src;return f[i]||!1},h=new WeakMap;var g=function(e,t){var i=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),s);return i&&(i.observe(e),h.set(e,t)),function(){i.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+i+"/>":"",s=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+a+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+i+s+t+n+r+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var i=e.sizes,a=e.srcSet,s=e.src,r=e.style,n=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:i,srcSet:a,src:s},u,{onLoad:n,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var i;i=e.call(this,t)||this;var a=!0,s=!1,r=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,s=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,s=!1);var l=!(t.critical&&!t.fadeIn);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,IOSupported:s,fadeIn:r,hasNoScript:l,seenBefore:o},i.imageRef=d.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)((0,n.default)(i))),i.handleRef=i.handleRef.bind((0,n.default)((0,n.default)(i))),i}(0,r.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),i=t.fluid?t.fluid.src:t.fixed.src,f[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,s=e.style,r=void 0===s?{}:s,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,S=e.durationFadeIn,v=e.Tag,w=e.itemProp,L=this.state.imgLoaded||!1===this.state.fadeIn,E=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:L?1:0,transition:E?"opacity "+S+"ms":"none"},o),R="boolean"==typeof y?"lightgray":y,z={transitionDelay:S+"ms"},O=(0,l.default)({opacity:this.state.imgLoaded?0:1},E&&z,o,f),N={title:t,alt:this.state.isVisible?"":i,style:O,className:p};if(h){var V=h;return d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},E&&z)}),V.base64&&d.default.createElement(b,(0,l.default)({src:V.base64},N)),V.tracedSVG&&d.default.createElement(b,(0,l.default)({src:V.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,V.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:V.srcSetWebp,sizes:V.sizes}),d.default.createElement(b,{alt:i,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:i,title:t},V))}}))}if(g){var C=g,W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},r);return"inherit"===r.display&&delete W.display,d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},E&&z)}),C.base64&&d.default.createElement(b,(0,l.default)({src:C.base64},N)),C.tracedSVG&&d.default.createElement(b,(0,l.default)({src:C.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(b,{alt:i,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:i,title:t},C))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:S,sizes:v,fixed:S,fluid:v,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=y;t.default=w},174:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var a=i(154),s=function(e){return Object(a.a)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M7.73 9.828c0 3.552 0.097 6.459 0.226 6.459 0.097 0 1.776-0.517 3.746-1.13 2.68-0.904 3.972-1.13 5.361-1.066l1.808 0.097 0.097 7.492 0.065 7.524h3.875v-7.88c0-7.653-0.032-7.879-0.743-8.945-1.292-1.938-4.618-2.358-8.752-1.13l-1.486 0.452v-8.332h-4.198v6.459zM18.872 5.727c-0.711 1.26-1.324 2.422-1.389 2.551-0.065 0.161 0.807 0.258 1.938 0.258h2.034l1.162-1.873c2.228-3.488 2.261-3.294-0.258-3.294h-2.196l-1.292 2.357zM7.73 25.167c0 2.034 0.129 3.714 0.258 3.714s1.066-0.839 2.099-1.873l1.841-1.873-1.873-1.841c-1.033-1.001-1.97-1.841-2.099-1.841s-0.226 1.679-0.226 3.714z"}}]})(e)};s.displayName="DiHeroku"}}]);
//# sourceMappingURL=9-dacf60df95fa5e3bc735.js.map