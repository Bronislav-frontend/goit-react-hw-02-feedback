(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),o=n(5),r=n(6),l=n(7),b=n(10),d=n(9),u=n(8),j=n.n(u),h=n(0);var O=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:j.a.section,children:[Object(h.jsx)("h2",{children:t}),n]})},k=n(2),f=n.n(k);var v=function(e){var t=e.options,n=e.onFeedbackClick;return Object(h.jsx)("ul",{className:f.a.list,children:t.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{type:"button",className:"".concat(f.a.btn," ").concat(f.a[e]),onClick:function(){n(e)},children:e})},t)}))})};var p=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positiveFeedbacks;return Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Good: ",t," "]}),Object(h.jsxs)("li",{children:["Neutral: ",n," "]}),Object(h.jsxs)("li",{children:["Bad: ",c," "]}),Object(h.jsxs)("li",{children:["Total: ",a," "]}),Object(h.jsxs)("li",{children:["Positive feedback: ",s,"% "]})]})};var x=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},_=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(l.a)(n,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}),0)}},{key:"countPositivePercentage",value:function(){var e=this.countTotalFeedback(),t=this.state.good;return Math.round(100*t/e)}},{key:"render",value:function(){var e=this.countTotalFeedback();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:Object.keys(this.state),onFeedbackClick:this.handleIncrement})}),Object(h.jsx)(O,{title:"Statistics",children:e?Object(h.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positiveFeedbacks:this.countPositivePercentage()}):Object(h.jsx)(x,{message:"There is no feedback"})})]})}}]),n}(c.Component),g=_;n(16),n(17);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.querySelector("#root"))},2:function(e,t,n){e.exports={list:"FeedbackOptions_list__2a6Fm",btn:"FeedbackOptions_btn__3MIS2",good:"FeedbackOptions_good__28P5t",bad:"FeedbackOptions_bad__IlshL",neutral:"FeedbackOptions_neutral__219w0"}},8:function(e,t,n){e.exports={section:"Section_section__11aGc"}}},[[18,1,2]]]);
//# sourceMappingURL=main.68dc2341.chunk.js.map