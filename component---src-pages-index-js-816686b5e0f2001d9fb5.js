(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});var r=a(0),i=a.n(r),n=a(148),s=a(152),l=a(172),o=a.n(l),d=a(155),c=a(173),u=a.n(c),f="1002750289";t.default=function(e){var t=e.data;return i.a.createElement(s.a,null,i.a.createElement(d.a,{title:"首頁 | 金流百科"}),i.a.createElement("div",{className:u.a.mainContentWrapper},i.a.createElement(o.a,{fluid:t.desktopImage.childImageSharp.fluid,className:u.a.landingImgDesktop}),i.a.createElement(o.a,{fluid:t.mobileImage.childImageSharp.fluid,className:u.a.landingImgMobile}),i.a.createElement("div",{className:u.a.titleBlockWrapper},i.a.createElement("div",{className:u.a.titleWrapper},i.a.createElement("h3",null,"台灣為亞洲民主燈塔，選舉決定著我們的未來!"),i.a.createElement("p",null,"將全面公開政治獻金、公投募款專戶金流，並與政府標案連結、視覺化，除了清楚的刻畫權力分配外，也利用簡單易理解的圖像，檢視各公職候選人、公投領銜人間的資源差距。")),i.a.createElement("div",{className:u.a.navBtnsWrapper},i.a.createElement(n.a,{to:"/elections"},"選舉金流")))))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(149);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,t,a){var r;e.exports=(r=a(150))&&r.default||r},150:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(55),o=a(2),d=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},151:function(e){e.exports={data:{site:{siteMetadata:{title:"金流百科"}}}}},152:function(e,t,a){"use strict";var r=a(151),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(148),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"#fcfcfc",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(o.a,{to:"/",style:{color:"black",textDecoration:"none"}},t))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var c=d,u=(a(154),function(e){var t=e.children;return n.a.createElement(o.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});u.propTypes={children:l.a.node.isRequired};t.a=u},155:function(e,t,a){"use strict";var r=a(156),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(161),d=a.n(o);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,l=r.data.site,o=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=c},156:function(e){e.exports={data:{site:{siteMetadata:{title:"金流百科",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},172:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),l=r(a(75)),o=r(a(76)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,y=new WeakMap;var b=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+i+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});E.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var S=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:L?1:0,transition:I?"opacity "+y+"ms":"none"},l),T="boolean"==typeof h?"lightgray":h,O={transitionDelay:y+"ms"},z=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&O,l,f),q={title:t,alt:this.state.isVisible?"":a,style:z,className:p};if(g){var N=g;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),T&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&O)}),N.base64&&d.default.createElement(E,(0,o.default)({src:N.base64},q)),N.tracedSVG&&d.default.createElement(E,(0,o.default)({src:N.tracedSVG},q)),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement(E,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},N))}}))}if(m){var W=m,j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},T&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:T,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},I&&O)}),W.base64&&d.default.createElement(E,(0,o.default)({src:W.base64},q)),W.tracedSVG&&d.default.createElement(E,(0,o.default)({src:W.tracedSVG},q)),this.state.isVisible&&d.default.createElement("picture",null,W.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:W.srcSetWebp,sizes:W.sizes}),d.default.createElement(E,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},W))}}))}return null},t}(d.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});S.propTypes={resolutions:w,sizes:L,fixed:w,fluid:L,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var I=S;t.default=I}}]);
//# sourceMappingURL=component---src-pages-index-js-816686b5e0f2001d9fb5.js.map