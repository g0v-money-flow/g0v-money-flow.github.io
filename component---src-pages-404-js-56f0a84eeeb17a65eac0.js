(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(153),o=a(158);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(149);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},152:function(e){e.exports={data:{logoImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABoElEQVQY0wGVAWr+AAAAAAD/9rgUsohxX6FtXgkAAAAAjpd8IIqSeSCQooM0eHZnP2tiXxKNi5UrjImSP4aCilCLhY05bGJlMrmJiy6Rbm9OnG9xFaN6fEN7YmMhAP/apRzAm35qpYRvZax3ZWSTZFkggYx1JHp6akt9eWmEfHZneXJnXD+YoLMUjYyVYIJ8gnaCeoFNbWpuGKFzdFqBXl+IhGJjLJlydGp9ZWYnAMSjgzWykXdcpYFtj5d1ZWR9XFZEbm9jIXJuY1l2bWFseXRnbWtcTCaZp7grgYGIbo6JkRiCf4Zyc3+HFqh2eFOJZWael3FzJplxc2R5Xl8+AM2mhBLAmXxcpoRvfauQeHNmXlkadG5iMYmVe053d2hod3JlbXB1VRWXo68zhYiQeZmjsCyFhY16iH6EIZ12eGSNbG1so3ByMJxwcn98X19PANy4kCmxi3NhpoRvda+OdmSdhnEwd4JvRXl/bl53e2sydW5iVnN1ZWB+gYkdfn6FYY+apT18foRlWVxfE5pycxmGaGk+AAAAAJl2eD96Y2MiOOCt6xDZ46oAAAAASUVORK5CYII=",width:120,height:32,src:"/static/8d006bbe1534a30b9d5ef21884999881/aeb64/logoImage.png",srcSet:"/static/8d006bbe1534a30b9d5ef21884999881/aeb64/logoImage.png 1x,\n/static/8d006bbe1534a30b9d5ef21884999881/a0798/logoImage.png 1.5x,\n/static/8d006bbe1534a30b9d5ef21884999881/50db9/logoImage.png 2x"}}},site:{siteMetadata:{title:"金流百科"}}}}},153:function(e,t,a){"use strict";a(155);var n=a(152),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(148),c=(a(34),a(154)),d=a.n(c),u=(a(156),function(e){var t=e.siteTitle,a=e.logoImage;return i.a.createElement("header",{style:{background:"#fcfcfc",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"black",textDecoration:"none",height:"44px"}},i.a.createElement(d.a,{fixed:a,alt:t})))))});u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var m=u,p=(a(157),function(e){var t=e.children;return i.a.createElement(s.b,{query:"3090882636",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title,logoImage:e.logoImage.childImageSharp.fixed}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© g0v ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(165),c=a.n(s);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,s=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=d},159:function(e){e.exports={data:{site:{siteMetadata:{title:"金流百科",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-56f0a84eeeb17a65eac0.js.map