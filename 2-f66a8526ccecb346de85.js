(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{151:function(t,e,r){"use strict";r(162)("fixed",function(t){return function(){return t(this,"tt","","")}})},152:function(t,e,r){"use strict";var o=r(8);e.__esModule=!0,e.default=void 0;var n,a=o(r(7)),i=o(r(35)),s=o(r(74)),l=o(r(75)),u=o(r(0)),c=o(r(4)),d=function(t){var e=(0,l.default)({},t),r=e.resolutions,o=e.sizes,n=e.critical;return r&&(e.fixed=r,delete e.resolutions),o&&(e.fluid=o,delete e.sizes),n&&(e.loading="eager"),e},p=Object.create({}),f=function(t){var e=d(t),r=e.fluid?e.fluid.src:e.fixed.src;return p[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,m=g&&window.IntersectionObserver,v=new WeakMap;var b=function(t,e){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(t){t.forEach(function(t){if(v.has(t.target)){var e=v.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(n.unobserve(t.target),v.delete(t.target),e())}})},{rootMargin:"200px"})),n);return r&&(r.observe(t),v.set(t,e)),function(){r.unobserve(t),v.delete(t)}},y=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',r=t.sizes?'sizes="'+t.sizes+'" ':"",o=t.srcSetWebp?"<source type='image/webp' srcset=\""+t.srcSetWebp+'" '+r+"/>":"",n=t.srcSet?'srcset="'+t.srcSet+'" ':"",a=t.title?'title="'+t.title+'" ':"",i=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",l=t.height?'height="'+t.height+'" ':"",u=t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"";return"<picture>"+o+"<img "+(t.loading?'loading="'+t.loading+'" ':"")+s+l+r+n+e+i+a+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=u.default.forwardRef(function(t,e){var r=t.sizes,o=t.srcSet,n=t.src,a=t.style,i=t.onLoad,c=t.onError,d=t.loading,p=(0,s.default)(t,["sizes","srcSet","src","style","onLoad","onError","loading"]);return u.default.createElement("img",(0,l.default)({sizes:r,srcSet:o,src:n},p,{onLoad:i,onError:c,ref:e,loading:d,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(t){function e(e){var r;(r=t.call(this,e)||this).seenBefore=g&&f(e),r.addNoScript=!(e.critical&&!e.fadeIn),r.useIOSupport=!h&&m&&!e.critical&&!r.seenBefore;var o=e.critical||g&&(h||!r.useIOSupport);return r.state={isVisible:o,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&e.fadeIn},r.imageRef=u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)((0,i.default)(r))),r.handleRef=r.handleRef.bind((0,i.default)((0,i.default)(r))),r}(0,a.default)(e,t);var r=e.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(t){var e=this;this.useIOSupport&&t&&(this.cleanUpListeners=b(t,function(){var t=f(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:t,imgCached:!!e.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var t,e,r;t=this.props,e=d(t),r=e.fluid?e.fluid.src:e.fixed.src,p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var t=d(this.props),e=t.title,r=t.alt,o=t.className,n=t.style,a=void 0===n?{}:n,i=t.imgStyle,s=void 0===i?{}:i,c=t.placeholderStyle,p=void 0===c?{}:c,f=t.placeholderClassName,h=t.fluid,g=t.fixed,m=t.backgroundColor,v=t.durationFadeIn,b=t.Tag,w=t.itemProp,E=t.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:S?1:0,transition:O?"opacity "+v+"ms":"none"},s),T="boolean"==typeof m?"lightgray":m,I={transitionDelay:v+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&I,s,p),D={title:e,alt:this.state.isVisible?"":r,style:z,className:f};if(h){var P=h;return u.default.createElement(b,{className:(o||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},u.default.createElement(b,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),T&&u.default.createElement(b,{title:e,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&I)}),P.base64&&u.default.createElement(C,(0,l.default)({src:P.base64},D)),P.tracedSVG&&u.default.createElement(C,(0,l.default)({src:P.tracedSVG},D)),this.state.isVisible&&u.default.createElement("picture",null,P.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:P.srcSetWebp,sizes:P.sizes}),u.default.createElement(C,{alt:r,title:e,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:e,loading:E},P))}}))}if(g){var j=g,W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},a);return"inherit"===a.display&&delete W.display,u.default.createElement(b,{className:(o||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},T&&u.default.createElement(b,{title:e,style:(0,l.default)({backgroundColor:T,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},O&&I)}),j.base64&&u.default.createElement(C,(0,l.default)({src:j.base64},D)),j.tracedSVG&&u.default.createElement(C,(0,l.default)({src:j.tracedSVG},D)),this.state.isVisible&&u.default.createElement("picture",null,j.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),u.default.createElement(C,{alt:r,title:e,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:e,loading:E},j))}}))}return null},e}(u.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:E,sizes:S,fixed:E,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var O=w;e.default=O},156:function(t,e,r){var o=r(25).f,n=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in n||r(18)&&o(n,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},162:function(t,e,r){var o=r(11),n=r(19),a=r(20),i=/"/g,s=function(t,e,r,o){var n=String(a(t)),s="<"+e;return""!==r&&(s+=" "+r+'="'+String(o).replace(i,"&quot;")+'"'),s+">"+n+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(s),o(o.P+o.F*n(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},164:function(t,e,r){"use strict";var o=r(0),n=r(167),a=r.n(n),i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function s(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var l=function(){return(l=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function u(t,e,r,o){return new(r||(r=Promise))(function(n,a){function i(t){try{l(o.next(t))}catch(e){a(e)}}function s(t){try{l(o.throw(t))}catch(e){a(e)}}function l(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(i,s)}l((o=o.apply(t,e||[])).next())})}function c(t,e){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(s){a=[6,s],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var d={graph_id:null,legend_toggle:!1,graphID:null,options:{colors:null},data:null,rows:null,columns:null,diffdata:null,chartEvents:null,legendToggle:!1,chartActions:null,getChartWrapper:function(t,e){},getChartEditor:null,className:"",style:{},formatters:null,spreadSheetUrl:null,spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{},controls:null,render:null,toolbarItems:null,toolbarID:null},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleGoogleChartsLoaderScriptLoaded=function(t){var r=e.props,o=r.chartVersion,n=r.chartPackages,a=r.chartLanguage,i=r.mapsApiKey,s=r.onLoad;t.charts.load(o||"current",{packages:n||["corechart","controls"],language:a||"en",mapsApiKey:i}),t.charts.setOnLoadCallback(function(){s(t)})},e}return s(e,t),e.prototype.shouldComponentUpdate=function(t){return t.chartPackages===this.props.chartPackages},e.prototype.render=function(){var t=this,e=this.props.onError;return Object(o.createElement)(a.a,{url:"https://www.gstatic.com/charts/loader.js",onError:e,onLoad:function(){var e=window;e.google&&t.handleGoogleChartsLoaderScriptLoaded(e.google)}})},e}(o.Component),f=0,h=function(){return"reactgooglegraph-"+(f+=1)},g=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],m=function(t,e,r){return void 0===r&&(r={}),u(void 0,void 0,void 0,function(){return c(this,function(o){return[2,new Promise(function(o,n){var a=r.headers?"headers="+r.headers:"headers=0",i=r.query?"&tq="+encodeURIComponent(r.query):"",s=r.gid?"&gid="+r.gid:"",l=r.sheet?"&sheet="+r.sheet:"",u=r.access_token?"&access_token="+r.access_token:"",c=e+"/gviz/tq?"+(""+a+s+l+i+u);new t.visualization.Query(c).send(function(t){t.isError()?n("Error in query:  "+t.getMessage()+" "+t.getDetailedMessage()):o(t.getDataTable())})})]})})},v=Object(o.createContext)(d),b=v.Provider,y=v.Consumer,C=function(t){var e=t.children,r=t.value;return Object(o.createElement)(b,{value:r},e)},w=function(t){var e=t.render;return Object(o.createElement)(y,null,function(t){return e(t)})},E="#CCCCCC",S=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={hiddenColumns:[]},e.listenToLegendToggle=function(){var t=e.props,r=t.google,o=t.googleChartWrapper;r.visualization.events.addListener(o,"select",function(){var t=o.getChart().getSelection(),r=o.getDataTable();if(0!==t.length&&null===t[0].row&&null!==r){var n=t[0].column,a=e.getColumnID(r,n);e.state.hiddenColumns.includes(a)?e.setState(function(t){return l({},t,{hiddenColumns:t.hiddenColumns.filter(function(t){return t!==a}).slice()})}):e.setState(function(t){return l({},t,{hiddenColumns:t.hiddenColumns.concat([a])})})}})},e.applyFormatters=function(t,r){for(var o=e.props.google,n=0,a=r;n<a.length;n++){var i=a[n];switch(i.type){case"ArrowFormat":(s=new o.visualization.ArrowFormat(i.options)).format(t,i.column);break;case"BarFormat":(s=new o.visualization.BarFormat(i.options)).format(t,i.column);break;case"ColorFormat":for(var s=new o.visualization.ColorFormat(i.options),l=0,u=i.ranges;l<u.length;l++){var c=u[l];s.addRange.apply(s,c)}s.format(t,i.column);break;case"DateFormat":(s=new o.visualization.DateFormat(i.options)).format(t,i.column);break;case"NumberFormat":(s=new o.visualization.NumberFormat(i.options)).format(t,i.column);break;case"PatternFormat":(s=new o.visualization.PatternFormat(i.options)).format(t,i.column)}}},e.getColumnID=function(t,e){return t.getColumnId(e)||t.getColumnLabel(e)},e.draw=function(t){var r=t.data,o=t.diffdata,n=t.rows,a=t.columns,i=t.options,s=t.legend_toggle,l=t.legendToggle,d=t.chartType,p=t.formatters,f=t.spreadSheetUrl,h=t.spreadSheetQueryParameters;return u(e,void 0,void 0,function(){var t,e,u,g,v,b,y,C,w,E,S,O,L,T;return c(this,function(c){switch(c.label){case 0:return t=this.props,e=t.google,u=t.googleChartWrapper,v=null,null!==o&&(b=e.visualization.arrayToDataTable(o.old),y=e.visualization.arrayToDataTable(o.new),v=e.visualization[d].prototype.computeDiff(b,y)),null===r?[3,1]:(g=Array.isArray(r)?e.visualization.arrayToDataTable(r):new e.visualization.DataTable(r),[3,5]);case 1:return null===n||null===a?[3,2]:(g=e.visualization.arrayToDataTable([a].concat(n)),[3,5]);case 2:return null===f?[3,4]:[4,m(e,f,h)];case 3:return g=c.sent(),[3,5];case 4:g=e.visualization.arrayToDataTable([]),c.label=5;case 5:for(C=g.getNumberOfColumns(),w=0;w<C;w+=1)E=this.getColumnID(g,w),this.state.hiddenColumns.includes(E)&&(S=g.getColumnLabel(w),O=g.getColumnId(w),L=g.getColumnType(w),g.removeColumn(w),g.addColumn({label:S,id:O,type:L}));return T=u.getChart(),"Timeline"===u.getChartType()&&T&&T.clearChart(),u.setOptions(i),u.setDataTable(g),u.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(g),null!==v&&(u.setDataTable(v),u.draw()),null!==p&&(this.applyFormatters(g,p),u.setDataTable(g),u.draw()),!0!==l&&!0!==s||this.grayOutHiddenColumns({options:i}),[2]}})})},e.grayOutHiddenColumns=function(t){var r=t.options,o=e.props.googleChartWrapper,n=o.getDataTable();if(null!==n){var a=n.getNumberOfColumns();if(!1!==e.state.hiddenColumns.length>0){var i=Array.from({length:a-1}).map(function(t,o){var a=e.getColumnID(n,o+1);return e.state.hiddenColumns.includes(a)?E:void 0!==r.colors&&null!==r.colors?r.colors[o]:g[o]});o.setOptions(l({},r,{colors:i})),o.draw()}}},e.onResize=function(){e.props.googleChartWrapper.draw()},e}return s(e,t),e.prototype.componentDidMount=function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()},e.prototype.componentWillUnmount=function(){var t=this.props,e=t.google,r=t.googleChartWrapper;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(r),"Timeline"===r.getChartType()&&r.getChart()&&r.getChart().clearChart()},e.prototype.componentDidUpdate=function(){this.draw(this.props)},e.prototype.render=function(){return null},e}(o.Component),O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.render=function(){var t=this.props,e=t.google,r=t.googleChartWrapper,n=t.googleChartDashboard;return Object(o.createElement)(w,{render:function(t){return Object(o.createElement)(S,l({},t,{google:e,googleChartWrapper:r,googleChartDashboard:n}))}})},e}(o.Component),L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.listenToEvents=function(t){var e=this,r=t.chartEvents,o=t.google,n=t.googleChartWrapper;if(null!==r){o.visualization.events.removeAllListeners(n);for(var a=function(t){var r=t.eventName,a=t.callback;o.visualization.events.addListener(n,r,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];a({chartWrapper:n,props:e.props,google:o,eventArgs:t})})},i=0,s=r;i<s.length;i++){a(s[i])}}},e.prototype.render=function(){var t=this,e=this.props,r=e.google,n=e.googleChartWrapper;return Object(o.createElement)(w,{render:function(e){return t.listenToEvents({chartEvents:e.chartEvents||null,google:r,googleChartWrapper:n}),null}})},e}(o.Component),T=0,I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},e.graphID=null,e.dashboard_ref=Object(o.createRef)(),e.toolbar_ref=Object(o.createRef)(),e.getGraphID=function(){var t,r=e.props,o=r.graphID,n=r.graph_id;return t=null===o&&null===n?null===e.graphID?h():e.graphID:null!==o&&null===n?o:null!==n&&null===o?n:o,e.graphID=t,e.graphID},e.getControlID=function(t,e){return T+=1,void 0===t?"googlechart-control-"+e+"-"+T:t},e.addControls=function(t,r){var o=e.props,n=o.google,a=o.controls,i=null===a?null:a.map(function(t,r){var o=t.controlID,a=t.controlType,i=t.options,s=t.controlWrapperParams,u=e.getControlID(o,r);return{controlProp:t,control:new n.visualization.ControlWrapper(l({containerId:u,controlType:a,options:i},s))}});if(null===i)return null;r.bind(i.map(function(t){return t.control}),t);for(var s=function(r){for(var o=r.control,a=r.controlProp.controlEvents,i=function(r){var a=r.callback,i=r.eventName;n.visualization.events.removeListener(o,i,a),n.visualization.events.addListener(o,i,function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];a({chartWrapper:t,controlWrapper:o,props:e.props,google:n,eventArgs:r})})},s=0,l=void 0===a?[]:a;s<l.length;s++){i(l[s])}},u=0,c=i;u<c.length;u++){s(c[u])}return i},e.renderChart=function(){var t=e.props,r=t.width,n=t.height,a=t.options,i=t.style,s=t.className,u=t.rootProps,c=t.google,d=l({height:n||a&&a.height,width:r||a&&a.width},i);return Object(o.createElement)("div",l({id:e.getGraphID(),style:d,className:s},u),e.state.isReady&&null!==e.state.googleChartWrapper?Object(o.createElement)(o.Fragment,null,Object(o.createElement)(O,{googleChartWrapper:e.state.googleChartWrapper,google:c,googleChartDashboard:e.state.googleChartDashboard}),Object(o.createElement)(L,{googleChartWrapper:e.state.googleChartWrapper,google:c})):null)},e.renderControl=function(t){return void 0===t&&(t=function(t){t.control,t.controlProp;return!0}),e.state.isReady&&null!==e.state.googleChartControls?Object(o.createElement)(o.Fragment,null,e.state.googleChartControls.filter(function(e){var r=e.controlProp,o=e.control;return t({control:o,controlProp:r})}).map(function(t){var e=t.control;t.controlProp;return Object(o.createElement)("div",{key:e.getContainerId(),id:e.getContainerId()})})):null},e.renderToolBar=function(){return null===e.props.toolbarItems?null:Object(o.createElement)("div",{ref:e.toolbar_ref})},e}return s(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.options,r=t.google,o=t.chartType,n=t.chartWrapperParams,a=t.toolbarItems,i=t.getChartEditor,s=t.getChartWrapper,u=l({chartType:o,options:e,containerId:this.getGraphID()},n),c=new r.visualization.ChartWrapper(u);c.setOptions(e),s(c,r);var d=new r.visualization.Dashboard(this.dashboard_ref),p=this.addControls(c,d);null!==a&&r.visualization.drawToolbar(this.toolbar_ref.current,a);var f=null;null!==i&&i({chartEditor:f=new r.visualization.ChartEditor,chartWrapper:c,google:r}),this.setState({googleChartEditor:f,googleChartControls:p,googleChartDashboard:d,googleChartWrapper:c,isReady:!0})},e.prototype.componentDidUpdate=function(){if(null!==this.state.googleChartWrapper&&null!==this.state.googleChartDashboard&&null!==this.state.googleChartControls)for(var t=this.props.controls,e=0;e<t.length;e+=1){var r=t[e],o=r.controlType,n=r.options,a=r.controlWrapperParams;a&&"state"in a&&this.state.googleChartControls[e].control.setState(a.state),this.state.googleChartControls[e].control.setOptions(n),this.state.googleChartControls[e].control.setControlType(o)}},e.prototype.shouldComponentUpdate=function(t,e){return this.state.isReady!==e.isReady||t.controls!==this.props.controls},e.prototype.render=function(){var t=this.props,e=t.width,r=t.height,n=t.options,a=t.style,i=l({height:r||n&&n.height,width:e||n&&n.width},a);return null!==this.props.render?Object(o.createElement)("div",{ref:this.dashboard_ref,style:i},Object(o.createElement)("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):Object(o.createElement)("div",{ref:this.dashboard_ref,style:i},this.renderControl(function(t){return"bottom"!==t.controlProp.controlPosition}),this.renderChart(),this.renderControl(function(t){return"bottom"===t.controlProp.controlPosition}),this.renderToolBar())},e}(o.Component),z=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isMounted=!1,e.state={loadingStatus:"loading",google:null},e.onLoad=function(t){if(e.isFullyLoaded(t))e.onSuccess(t);else var r=setInterval(function(){var t=window.google;e._isMounted?t&&e.isFullyLoaded(t)&&(clearInterval(r),e.onSuccess(t)):clearInterval(r)},1e3)},e.onSuccess=function(t){e.setState({loadingStatus:"ready",google:t})},e.onError=function(){e.setState({loadingStatus:"errored"})},e}return s(e,t),e.prototype.render=function(){var t=this.props,e=t.chartLanguage,r=t.chartPackages,n=t.chartVersion,a=t.mapsApiKey,i=t.loader,s=t.errorElement;return Object(o.createElement)(C,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?Object(o.createElement)(I,l({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&s?s:i,Object(o.createElement)(p,l({},{chartLanguage:e,chartPackages:r,chartVersion:n,mapsApiKey:a},{onLoad:this.onLoad,onError:this.onError})))},e.prototype.componentDidMount=function(){this._isMounted=!0},e.prototype.componentWillUnmount=function(){this._isMounted=!1},e.prototype.isFullyLoaded=function(t){var e=this.props,r=e.controls,o=e.toolbarItems,n=e.getChartEditor;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!r||t.visualization.ChartWrapper)&&(!n||t.visualization.ChartEditor)&&(!o||t.visualization.drawToolbar)},e.defaultProps=d,e}(o.Component);e.a=z},167:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),a=r(0),i=(o=a)&&o.__esModule?o:{default:o},s=r(4);var l=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default.Component),n(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.onError,r=t.onLoad,o=t.url;this.constructor.loadedScripts[o]?r():this.constructor.erroredScripts[o]?e():this.constructor.scriptObservers[o]?this.constructor.scriptObservers[o][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[o]=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},this.scriptLoaderId,this.props),this.createScript())}},{key:"componentWillUnmount",value:function(){var t=this.props.url,e=this.constructor.scriptObservers[t];e&&delete e[this.scriptLoaderId]}},{key:"createScript",value:function(){var t=this,e=this.props,r=e.onCreate,o=e.url,n=e.attributes,a=document.createElement("script");r(),n&&Object.keys(n).forEach(function(t){return a.setAttribute(t,n[t])}),a.src=o,a.hasAttribute("async")||(a.async=1);var i=function(e){var r=t.constructor.scriptObservers[o];Object.keys(r).forEach(function(n){e(r[n])&&delete t.constructor.scriptObservers[o][t.scriptLoaderId]})};a.onload=function(){t.constructor.loadedScripts[o]=!0,i(function(t){return t.onLoad(),!0})},a.onerror=function(){t.constructor.erroredScripts[o]=!0,i(function(t){return t.onError(),!0})},document.body.appendChild(a)}},{key:"render",value:function(){return null}}]),e}();l.propTypes={attributes:s.PropTypes.object,onCreate:s.PropTypes.func,onError:s.PropTypes.func.isRequired,onLoad:s.PropTypes.func.isRequired,url:s.PropTypes.string.isRequired},l.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},l.scriptObservers={},l.loadedScripts={},l.erroredScripts={},l.idCount=0,e.default=l,t.exports=e.default}}]);
//# sourceMappingURL=2-f66a8526ccecb346de85.js.map