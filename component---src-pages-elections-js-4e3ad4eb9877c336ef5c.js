(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(t,e,n){"use strict";n.r(e);n(84),n(57),n(40),n(87),n(177),n(151),n(36),n(156);var r=n(0),a=n.n(r),i=n(149),o=n(152),c=n.n(o),s=n(155),u=n(7),l=n.n(u),f=n(183),d=n.n(f),p=function(t){function e(e){var n;return(n=t.call(this,e)||this).regionsLinks=n.props.regions.map(function(t){return a.a.createElement(m,{urlPrefix:n.props.urlPrefix,regionName:t.name,constituencyName:t.firstConstituency})}),n}return l()(e,t),e.prototype.render=function(){return a.a.createElement("ul",{className:d.a.regionsLinks},this.regionsLinks)},e}(a.a.Component),m=function(t){var e=t.urlPrefix,n=t.regionName,r=t.constituencyName;return a.a.createElement("li",{className:d.a.regionLink},a.a.createElement(i.a,{to:"/"+e+"/regions/"+n+"/constituencies/"+r},n))},g=p,h=n(159),v=n(184),y=n.n(v);n.d(e,"query",function(){return E}),n.d(e,"YearsList",function(){return b}),n.d(e,"ElectionBlocks",function(){return x});var E="4148637886",A=function(t){switch(this.name=t.name.replace(/\s/g,"-").toLowerCase(),t.name){case"2016 Legislator Election":this.title="立法委員選舉";break;case"2016 President Election":this.title="總統選舉";break;default:t.title=t.name}this.regions=t.regions.map(function(t){return{name:t.name,firstConstituency:"全國"===t.name||"原住民"===t.name?"全國":"第01選區"}})},b=function(t){var e=t.data.allElectionsJsonData.nodes.map(function(t){return t.year}),n=[].concat(new Set(e)).map(function(t){return a.a.createElement("li",null,a.a.createElement("a",{href:"#"},t))});return a.a.createElement("div",null,a.a.createElement("ul",{className:y.a.yearsList},n))},x=function(t){var e=t.data,n=[].concat.apply([],e.allElectionsJsonData.nodes.map(function(t){return new A(t)})).map(function(t){return a.a.createElement("div",null,a.a.createElement("h3",{className:y.a.electionTitle},a.a.createElement(c.a,{fixed:e.flagImage.childImageSharp.fixed,className:y.a.decorationImage}),t.title),a.a.createElement(g,{regions:t.regions,urlPrefix:"elections/"+t.name}))});return a.a.createElement("div",{className:y.a.electionBlocks},n)};e.default=function(t){var e=t.data;return a.a.createElement(s.a,null,a.a.createElement(i.a,{to:"/"},"< 返回"),a.a.createElement(h.a,{title:"選舉金流"}),a.a.createElement(b,{data:e}),a.a.createElement(x,{data:e}),a.a.createElement(c.a,{fixed:e.boxImage.childImageSharp.fixed,style:{float:"right"}}))}},149:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(33),s=n.n(c);n.d(e,"a",function(){return s.a});n(150);var u=a.a.createContext({}),l=function(t){return a.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(t,e,n){var r;t.exports=(r=n(153))&&r.default||r},153:function(t,e,n){"use strict";n.r(e);n(34);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(55),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?a.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},154:function(t){t.exports={data:{logoImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABoElEQVQY0wGVAWr+AAAAAAD/9rgUsohxX6FtXgkAAAAAjpd8IIqSeSCQooM0eHZnP2tiXxKNi5UrjImSP4aCilCLhY05bGJlMrmJiy6Rbm9OnG9xFaN6fEN7YmMhAP/apRzAm35qpYRvZax3ZWSTZFkggYx1JHp6akt9eWmEfHZneXJnXD+YoLMUjYyVYIJ8gnaCeoFNbWpuGKFzdFqBXl+IhGJjLJlydGp9ZWYnAMSjgzWykXdcpYFtj5d1ZWR9XFZEbm9jIXJuY1l2bWFseXRnbWtcTCaZp7grgYGIbo6JkRiCf4Zyc3+HFqh2eFOJZWael3FzJplxc2R5Xl8+AM2mhBLAmXxcpoRvfauQeHNmXlkadG5iMYmVe053d2hod3JlbXB1VRWXo68zhYiQeZmjsCyFhY16iH6EIZ12eGSNbG1so3ByMJxwcn98X19PANy4kCmxi3NhpoRvda+OdmSdhnEwd4JvRXl/bl53e2sydW5iVnN1ZWB+gYkdfn6FYY+apT18foRlWVxfE5pycxmGaGk+AAAAAJl2eD96Y2MiOOCt6xDZ46oAAAAASUVORK5CYII=",width:120,height:32,src:"/static/8d006bbe1534a30b9d5ef21884999881/aeb64/logoImage.png",srcSet:"/static/8d006bbe1534a30b9d5ef21884999881/aeb64/logoImage.png 1x,\n/static/8d006bbe1534a30b9d5ef21884999881/a0798/logoImage.png 1.5x,\n/static/8d006bbe1534a30b9d5ef21884999881/50db9/logoImage.png 2x"}}},site:{siteMetadata:{title:"金流百科"}}}}},155:function(t,e,n){"use strict";n(151);var r=n(154),a=n(0),i=n.n(a),o=n(4),c=n.n(o),s=n(149),u=(n(34),n(152)),l=n.n(u),f=(n(157),function(t){var e=t.siteTitle,n=t.logoImage;return i.a.createElement("header",{style:{background:"#fcfcfc",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"black",textDecoration:"none",height:"44px"}},i.a.createElement(l.a,{fixed:n,alt:e})))))});f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var d=f,p=(n(158),function(t){var e=t.children;return i.a.createElement(s.b,{query:"3090882636",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:t.site.siteMetadata.title,logoImage:t.logoImage.childImageSharp.fixed}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© g0v ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});p.propTypes={children:c.a.node.isRequired};e.a=p},156:function(t,e,n){var r=n(25).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(18)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},159:function(t,e,n){"use strict";var r=n(160),a=n(0),i=n.n(a),o=n(4),c=n.n(o),s=n(165),u=n.n(s);function l(t){var e=t.description,n=t.lang,a=t.meta,o=t.title,c=r.data.site,s=e||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(a)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=l},160:function(t){t.exports={data:{site:{siteMetadata:{title:"金流百科",description:"將全面公開政治獻金、公投募款專戶金流，並與政府標案連結、視覺化，除了清楚的刻畫權力分配外，也利用簡單易理解的圖像，檢視各公職候選人、公投領銜人間的資源差距。",author:"g0v Money Flow Group"}}}}},167:function(t,e,n){var r=n(37)("meta"),a=n(11),i=n(26),o=n(25).f,c=0,s=Object.isExtensible||function(){return!0},u=!n(19)(function(){return s(Object.preventExtensions({}))}),l=function(t){o(t,r,{value:{i:"O"+ ++c,w:{}}})},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";l(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;l(t)}return t[r].w},onFreeze:function(t){return u&&f.NEED&&s(t)&&!i(t,r)&&l(t),t}}},168:function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},177:function(t,e,n){"use strict";var r=n(178),a=n(168);t.exports=n(179)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(a(this,"Set"),t=0===t?0:t,t)}},r)},178:function(t,e,n){"use strict";var r=n(25).f,a=n(86),i=n(76),o=n(20),c=n(74),s=n(75),u=n(58),l=n(85),f=n(82),d=n(18),p=n(167).fastKey,m=n(168),g=d?"_s":"size",h=function(t,e){var n,r=p(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var l=t(function(t,r){c(t,l,e,"_i"),t._t=e,t._i=a(null),t._f=void 0,t._l=void 0,t[g]=0,null!=r&&s(r,n,t[u],t)});return i(l.prototype,{clear:function(){for(var t=m(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var n=m(this,e),r=h(n,t);if(r){var a=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=a),a&&(a.p=i),n._f==r&&(n._f=a),n._l==r&&(n._l=i),n[g]--}return!!r},forEach:function(t){m(this,e);for(var n,r=o(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!h(m(this,e),t)}}),d&&r(l.prototype,"size",{get:function(){return m(this,e)[g]}}),l},def:function(t,e,n){var r,a,i=h(t,e);return i?i.v=n:(t._l=i={i:a=p(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[g]++,"F"!==a&&(t._i[a]=i)),t},getEntry:h,setStrong:function(t,e,n){u(t,e,function(t,n){this._t=m(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?l(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,l(1))},n?"entries":"values",!n,!0),f(e)}}},179:function(t,e,n){"use strict";var r=n(6),a=n(12),i=n(14),o=n(76),c=n(167),s=n(75),u=n(74),l=n(11),f=n(19),d=n(83),p=n(39),m=n(180);t.exports=function(t,e,n,g,h,v){var y=r[t],E=y,A=h?"set":"add",b=E&&E.prototype,x={},_=function(t){var e=b[t];i(b,t,"delete"==t?function(t){return!(v&&!l(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!l(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof E&&(v||b.forEach&&!f(function(){(new E).entries().next()}))){var w=new E,k=w[A](v?{}:-0,1)!=w,F=f(function(){w.has(1)}),I=d(function(t){new E(t)}),S=!v&&f(function(){for(var t=new E,e=5;e--;)t[A](e,e);return!t.has(-0)});I||((E=e(function(e,n){u(e,E,t);var r=m(new y,e,E);return null!=n&&s(n,h,r[A],r),r})).prototype=b,b.constructor=E),(F||S)&&(_("delete"),_("has"),h&&_("get")),(S||k)&&_(A),v&&b.clear&&delete b.clear}else E=g.getConstructor(e,t,h,A),o(E.prototype,n),c.NEED=!0;return p(E,t),x[t]=E,a(a.G+a.W+a.F*(E!=y),x),v||g.setStrong(E,t,h),E}},180:function(t,e,n){var r=n(11),a=n(181).set;t.exports=function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&a&&a(t,i),t}},181:function(t,e,n){var r=n(11),a=n(5),i=function(t,e){if(a(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(20)(Function.call,n(182).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},182:function(t,e,n){var r=n(81),a=n(56),i=n(38),o=n(80),c=n(26),s=n(79),u=Object.getOwnPropertyDescriptor;e.f=n(18)?u:function(t,e){if(t=i(t),e=o(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return a(!r.f.call(t,e),t[e])}}}]);
//# sourceMappingURL=component---src-pages-elections-js-4e3ad4eb9877c336ef5c.js.map