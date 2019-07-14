(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"ElectedLabel",function(){return E}),a.d(t,"CandidateFinanceBlock",function(){return y}),a.d(t,"CandidateBlock",function(){return A});var n=a(35),i=a.n(n),r=a(7),o=a.n(r),l=(a(150),a(0)),c=a.n(l),m=a(148),d=a(153),s=a(164),u=a(170),p=a.n(u),h=a(160),f=a(178),g=["#70add1","#fec58c","#e49ea2","#8b8181","#c6e1c2"],E=function(e){return e.isElected?c.a.createElement("h6",{className:p.a.isElected},"當選"):null},y=function(e){var t=e.finance;t=t||{income:{total:0,items:[{name:"無資料",amount:0}]},outcome:{total:0,items:[{name:"無資料",amount:0}]}};var a=new h.b(t);return c.a.createElement("div",{className:p.a.candidateFinanceBlock},c.a.createElement("div",{className:p.a.candidateFinanceDetailBlock},c.a.createElement(s.a,{height:"100px",chartType:"BarChart",loader:c.a.createElement("div",null,"Loading Chart"),data:[a.incomeTitles,a.incomeAmounts],options:{title:null,isStacked:"relative",hAxis:{textPosition:"none",minValue:0},legend:{position:"none"},colors:h.d}}),c.a.createElement("h6",null,"總收入: ",a.incomeTotal)),c.a.createElement("div",{className:p.a.candidateFinanceDetailBlock},c.a.createElement(s.a,{height:"100px",chartType:"BarChart",loader:c.a.createElement("div",null,"Loading Chart"),data:[a.outcomeTitles,a.outcomeAmounts],options:{title:null,isStacked:"relative",hAxis:{textPosition:"none",minValue:0},legend:{position:"none"},colors:h.e}}),c.a.createElement("h6",null,"總支出: ",a.outcomeTotal)))},A=function(e){var t=e.candidate;return c.a.createElement("div",{className:p.a.candidateBlockWrapper},c.a.createElement("div",{className:p.a.candidateBlock},c.a.createElement("div",{className:p.a.candidateInfo},c.a.createElement("div",{className:p.a.candidateNameWrapper},c.a.createElement("h6",{className:p.a.partyName},t.partyName||t.party),c.a.createElement("h1",{className:p.a.candidateName},c.a.createElement(m.a,{to:"/candidates/"+t.alternative_id,className:p.a.candidateName},t.name))),c.a.createElement("div",{className:p.a.votingData},c.a.createElement("h6",null,"得票數:",t.numOfVote||t.num_of_vote),c.a.createElement("h6",null,"得票率: ",(t.rateOfVote||t.rate_of_vote)+"%"," "),c.a.createElement(E,{isElected:t.is_elected})))),c.a.createElement(y,{finance:t.finance_data}))},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).tenders=a.props.tenders,a.tendersTables=a.tenders.map(function(e){var t=new Intl.NumberFormat("zh-Hans-TW",{style:"currency",currency:"TWD",minimumFractionDigits:0}).format(e.total_amount),a=e.item.length;return c.a.createElement(b,{tender:e,rowSpan:a,totalAmount:t})}),a}return o()(t,e),t.prototype.render=function(){return c.a.createElement("div",null,0===this.tenders.length?c.a.createElement("h6",null,"無標案資料"):this.tendersTables)},t}(c.a.Component),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={displayTenderList:!1},a.toggleTenderList=a.toggleTenderList.bind(i()(a)),a}o()(t,e);var a=t.prototype;return a.toggleTenderList=function(){this.setState(function(e){return{displayTenderList:!e.displayTenderList}})},a.render=function(){return c.a.createElement("table",{className:p.a.tendersTable},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{width:"35%"},this.props.tender.name," "),c.a.createElement("th",{width:"35%"},"總金額: ",this.props.totalAmount," 元"),c.a.createElement("th",{width:"15%"},this.props.rowSpan," 件標案"),c.a.createElement("th",{width:"15%",className:p.a.dropdownToggler,onClick:this.toggleTenderList},c.a.createElement(f.a,null)))),c.a.createElement(T,{tendersList:this.props.tender.item,display:this.state.displayTenderList}))},t}(c.a.Component),T=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={display:a.props.display},a.tendersList=a.props.tendersList.map(function(e){var t=new Intl.NumberFormat("zh-Hans-TW",{style:"currency",currency:"TWD",minimumFractionDigits:0}).format(e.amount);return c.a.createElement("tr",null,c.a.createElement("td",null,e.unit_name),c.a.createElement("td",null,e.title),c.a.createElement("td",null,t),c.a.createElement("td",{className:p.a.decisionDate},e.decisionDate))}),a}return o()(t,e),t.prototype.render=function(){return c.a.createElement("tbody",null,this.props.display?this.tendersList:null)},t}(c.a.Component);t.default=function(e){var t,a,n=e.pageContext;null!==n.candidate.finance_data?(t=n.candidate.finance_data.income.top100,a=n.candidate.finance_data.outcome.top100):(t=[],a=[]);var i=t.map(function(e){return[e.type,e.object,e.amount]}),r=a.map(function(e){return[e.object,e.type,e.amount]});return i.unshift(["From","To","金額"]),r.unshift(["To","From","金額"]),c.a.createElement(d.a,null,c.a.createElement(m.a,{to:n.prevPath},"< 返回"),c.a.createElement(A,{candidate:n.candidate}),c.a.createElement("div",{style:{display:"flex",margin:"0 auto",maxWidth:1280,padding:"0px 1.0875rem 1.45rem",paddingTop:0,justifyContent:"space-around"}},1===i.length?c.a.createElement("h6",null,"沒有資料"):c.a.createElement(s.a,{forceIFrame:!1,width:640,height:"2000px",chartType:"Sankey",loader:c.a.createElement("div",null,"Loading Chart"),data:i,options:{sankey:{node:{labelPadding:0,nodePadding:5,width:20,colors:["#70add1","#fec58c","#e49ea2","#8b8181","#c6e1c2"]},link:{colorMode:"gradient"}}}}),1===r.length?c.a.createElement("h6",null,"沒有資料"):c.a.createElement(s.a,{forceIFrame:!1,width:640,height:"2000px",chartType:"Sankey",loader:c.a.createElement("div",null,"Loading Chart"),data:r,options:{sankey:{node:{labelPadding:0,nodePadding:5,width:20,colors:g},link:{colorMode:"gradient"}}}})),c.a.createElement("h3",null,"標案資料"),c.a.createElement(v,{tenders:n.candidate.tenders}),c.a.createElement("hr",null),c.a.createElement(h.c,{candidates:n.constituency.candidates}))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(149);var m=i.a.createContext({}),d=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(55),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},152:function(e){e.exports={data:{logoImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABoElEQVQY0wGVAWr+AAAAAAD/9rgUsohxX6FtXgkAAAAAjpd8IIqSeSCQooM0eHZnP2tiXxKNi5UrjImSP4aCilCLhY05bGJlMrmJiy6Rbm9OnG9xFaN6fEN7YmMhAP/apRzAm35qpYRvZax3ZWSTZFkggYx1JHp6akt9eWmEfHZneXJnXD+YoLMUjYyVYIJ8gnaCeoFNbWpuGKFzdFqBXl+IhGJjLJlydGp9ZWYnAMSjgzWykXdcpYFtj5d1ZWR9XFZEbm9jIXJuY1l2bWFseXRnbWtcTCaZp7grgYGIbo6JkRiCf4Zyc3+HFqh2eFOJZWael3FzJplxc2R5Xl8+AM2mhBLAmXxcpoRvfauQeHNmXlkadG5iMYmVe053d2hod3JlbXB1VRWXo68zhYiQeZmjsCyFhY16iH6EIZ12eGSNbG1so3ByMJxwcn98X19PANy4kCmxi3NhpoRvda+OdmSdhnEwd4JvRXl/bl53e2sydW5iVnN1ZWB+gYkdfn6FYY+apT18foRlWVxfE5pycxmGaGk+AAAAAJl2eD96Y2MiOOCt6xDZ46oAAAAASUVORK5CYII=",width:120,height:32,src:"/static/8d006bbe1534a30b9d5ef21884999881/aeb64/logoImage.png",srcSet:"/static/8d006bbe1534a30b9d5ef21884999881/aeb64/logoImage.png 1x,\n/static/8d006bbe1534a30b9d5ef21884999881/a0798/logoImage.png 1.5x,\n/static/8d006bbe1534a30b9d5ef21884999881/50db9/logoImage.png 2x"}}},site:{siteMetadata:{title:"金流百科"}}}}},153:function(e,t,a){"use strict";a(155);var n=a(152),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(148),m=(a(34),a(154)),d=a.n(m),s=(a(156),function(e){var t=e.siteTitle,a=e.logoImage;return r.a.createElement("header",{style:{background:"#fcfcfc",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(c.a,{to:"/",style:{color:"black",textDecoration:"none",height:"44px"}},r.a.createElement(d.a,{fixed:a,alt:t})))))});s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var u=s,p=(a(157),function(e){var t=e.children;return r.a.createElement(c.b,{query:"3090882636",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{siteTitle:e.site.siteMetadata.title,logoImage:e.logoImage.childImageSharp.fixed}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© g0v ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p},160:function(e,t,a){"use strict";a.d(t,"d",function(){return c}),a.d(t,"e",function(){return m}),a.d(t,"b",function(){return d}),a.d(t,"a",function(){return s}),a.d(t,"c",function(){return u});a(150);var n=a(0),i=a.n(n),r=a(163),o=a.n(r),l=a(164),c=["#70add1","#fec58c","#e49ea2","#8b8181","#c6e1c2"],m=["#70add1","#b4cedf","#fec58c","#ffe7cf","#e49ea2","#f0cacd","#8b8181","#cbcbcb","#c6e1c2","#eaf4e9"],d=function(e,t){var a=e.income.items.map(function(e){return e.name}),n=e.income.items.map(function(e){return e.amount});t=t||"",a.unshift("收入分佈"),n.unshift(t),this.incomeTitles=a,this.incomeAmounts=n;var i=e.outcome.items.map(function(e){return e.name}),r=e.outcome.items.map(function(e){return e.amount});i.unshift("支出分佈"),r.unshift(t),this.outcomeTitles=i,this.outcomeAmounts=r,this.incomeTotal=new Intl.NumberFormat("zh-Hans-TW",{style:"currency",currency:"TWD",minimumFractionDigits:0}).format(e.income.total),this.outcomeTotal=new Intl.NumberFormat("zh-Hans-TW",{style:"currency",currency:"TWD",minimumFractionDigits:0}).format(e.outcome.total)},s=function(e){var t=e.finance,a=new d(t=t||{income:{total:0,items:[{name:"無資料",amount:0}]},outcome:{total:0,items:[{name:"無資料",amount:0}]}});return i.a.createElement("div",{className:o.a.candidateFinanceBlock},i.a.createElement("div",{className:o.a.candidateFinanceDetailBlock},i.a.createElement(l.a,{height:"100px",chartType:"BarChart",loader:i.a.createElement("div",null,"Loading Chart"),data:[a.incomeTitles,a.incomeAmounts],options:{title:null,isStacked:"relative",hAxis:{textPosition:"none",minValue:0},legend:{position:"none"},colors:c}}),i.a.createElement("h6",null,"總收入: ",a.incomeTotal)),i.a.createElement("div",{className:o.a.candidateFinanceDetailBlock},i.a.createElement(l.a,{height:"100px",chartType:"BarChart",loader:i.a.createElement("div",null,"Loading Chart"),data:[a.outcomeTitles,a.outcomeAmounts],options:{title:null,isStacked:"relative",hAxis:{textPosition:"none",minValue:0},legend:{position:"none"},colors:m}}),i.a.createElement("h6",null,"總支出: ",a.outcomeTotal)))},u=function(e){var t=e.candidates.map(function(e){var t=e.finance||{income:{total:0,items:[{name:"個人捐贈收入",amount:0},{name:"營利事業捐贈收入",amount:0},{name:"政黨捐贈收入",amount:0},{name:"人民團體捐贈收入",amount:0},{name:"匿名捐贈",amount:0},{name:"其他收入",amount:0}]},outcome:{total:0,items:[{name:"人事費用支出",amount:0},{name:"宣傳支出",amount:0},{name:"租用宣傳車輛支出",amount:0},{name:"租用競選辦事處支",amount:0},{name:"集會支出",amount:0},{name:"交通旅運支出",amount:0},{name:"雜支支出",amount:0},{name:"返還支出",amount:0},{name:"繳庫支出",amount:0},{name:"公共關係費用支出",amount:0}]}};return new d(t,e.name)}),a=t[1].incomeTitles,n=t[1].outcomeTitles,r=t.map(function(e){return e.incomeAmounts}),s=t.map(function(e){return e.outcomeAmounts});return r.unshift(a),s.unshift(n),i.a.createElement("div",{className:o.a.candidatesFinanceCompareChart},i.a.createElement("div",{className:o.a.candidatesFinanceCompareChartWrapper},i.a.createElement("h3",null,"收入比較"),i.a.createElement(l.a,{chartType:"ColumnChart",height:"600px",loader:i.a.createElement("div",null,"Loading Chart"),data:r,options:{title:null,isStacked:!0,vAxis:{textPosition:"left",minValue:0},legend:{position:"none"},colors:c}})),i.a.createElement("div",{className:o.a.candidatesFinanceCompareChartWrapper},i.a.createElement("h3",null,"支出比較"),i.a.createElement(l.a,{chartType:"ColumnChart",height:"600px",loader:i.a.createElement("div",null,"Loading Chart"),data:s,options:{title:null,isStacked:!0,vAxis:{textPosition:"left",minValue:0},legend:{position:"none"},colors:m}})))}}}]);
//# sourceMappingURL=component---src-templates-candidates-show-js-bf7c1872c3576c8ae6af.js.map