(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"ConstituenciesOfRegion",function(){return s}),n.d(t,"CandidateBlocks",function(){return m}),n.d(t,"CandidateBlock",function(){return d}),n.d(t,"CandidateFinanceBlock",function(){return f});n(35),n(152);var a=n(0),r=n.n(a),i=n(147),c=n(151),l=n(156),o=n(159),u=n.n(o),s=function(e){var t=e.electionSlug,n=e.constituencies,a=e.regionName,c=n.map(function(e){return r.a.createElement(i.a,{to:"elections/"+t+"/regions/"+a+"/constituencies/"+e.name},e.name)});return r.a.createElement("ul",null,c)},m=function(e){var t=e.candidates;if(null===t)return r.a.createElement("div",null,"沒有候選人");var n=t.map(function(e){return r.a.createElement(d,{candidate:e})});return r.a.createElement("div",{className:u.a.candidateBlocks},n)},d=function(e){var t=e.candidate;t.isElected;return r.a.createElement("div",{className:u.a.candidateBlock},r.a.createElement("h6",null,t.partyName),r.a.createElement("h1",{className:u.a.candidateName},t.name),r.a.createElement("h6",null,"得票數:",t.numOfVote," / 得票率: ",t.rateOfVote),r.a.createElement(f,{finance:t.finance}))},f=function(e){var t=e.finance;return t=t||{income:{total:"無資料",items:[]},outcome:{total:"無資料",items:[]}},r.a.createElement("div",{className:u.a.candidateFinanceBlock},r.a.createElement("div",{className:u.a.candidateFinanceDetailBlock},r.a.createElement("div",null),r.a.createElement("div",null,"總收入: ",t.income.total)),r.a.createElement("div",{className:u.a.candidateFinanceDetailBlock},r.a.createElement("div",null),r.a.createElement("div",null,"總支出: ",t.outcome.total)))};t.default=function(e){var t=e.pageContext;return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.election.name),r.a.createElement(l.a,{regions:t.election.regions,urlPrefix:t.urlPrefix}),r.a.createElement(s,{electionSlug:t.election.name.toLowerCase().replace(/\s/g,"-"),constituencies:t.constituenciesOfRegion,regionName:t.regionName}),r.a.createElement("h1",null,t.constituency.name),r.a.createElement(m,{candidates:t.constituency.candidates})))}},147:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(33),o=n.n(l);n.d(t,"a",function(){return o.a});n(148);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},148:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(55),o=n(2),u=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"金流百科"}}}}},151:function(e,t,n){"use strict";var a=n(150),r=n(0),i=n.n(r),c=n(4),l=n.n(c),o=n(147),u=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var s=u,m=(n(155),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})});m.propTypes={children:l.a.node.isRequired};t.a=m},152:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},156:function(e,t,n){"use strict";n(152);var a=n(7),r=n.n(a),i=n(0),c=n.n(i),l=n(147),o=function(e){function t(t){var n;return n=e.call(this,t)||this,console.log(t),n.regionsLinks=n.props.regions.map(function(e){return c.a.createElement("li",null,c.a.createElement(l.a,{to:n.props.urlPrefix+"/regions/"+e.name+"/constituencies/"+e.constituencies[0].name},e.name))}),n}return r()(t,e),t.prototype.render=function(){return c.a.createElement("ul",null,this.regionsLinks)},t}(c.a.Component);t.a=o}}]);
//# sourceMappingURL=component---src-templates-constituencies-show-js-c369b9e10ba6fafcb3c9.js.map