(this["webpackJsonpra-lifecycle-http-1"]=this["webpackJsonpra-lifecycle-http-1"]||[]).push([[0],{16:function(t,e,c){},17:function(t,e,c){},19:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(10),i=c.n(s),l=(c(16),c(17),c(2)),o=c(11),r=c(3),h=c(4),d=c(6),u=c(5),j=c(8),b=c(0),v=function(t){Object(d.a)(c,t);var e=Object(u.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={hour:-90,minute:-90,second:-90},t}return Object(h.a)(c,[{key:"setClockHands",value:function(){var t=new Date,e={hour:30*((t.getUTCHours()>12?t.getUTCHours()-12:t.getUTCHours())+this.props.hourShift)-90+.5*t.getMinutes(),minute:6*t.getMinutes()-90+.1*t.getSeconds(),second:6*t.getSeconds()-90};this.setState(e)}},{key:"clockDeleteHandler",value:function(t){this.props.deleteClock(this.props.id)}},{key:"componentDidMount",value:function(){this.setClockHands(),this.interval=setInterval(this.setClockHands.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"clock-container",children:[Object(b.jsx)("div",{className:"clock-delete",onClick:this.clockDeleteHandler.bind(this),children:"\u2717"}),Object(b.jsx)("div",{className:"clock-name",children:this.props.city}),Object(b.jsxs)("div",{className:"clock",children:[Object(b.jsxs)("div",{className:"hour-hand",style:{transform:"rotate(".concat(this.state.hour,"deg)")},children:[Object(b.jsx)("div",{className:"hour-hand-invisible"}),Object(b.jsx)("div",{className:"hour-hand-visible"})]}),Object(b.jsxs)("div",{className:"minute-hand",style:{transform:"rotate(".concat(this.state.minute,"deg)")},children:[Object(b.jsx)("div",{className:"minute-hand-invisible"}),Object(b.jsx)("div",{className:"minute-hand-visible"})]}),Object(b.jsxs)("div",{className:"second-hand",style:{transform:"rotate(".concat(this.state.second,"deg)")},children:[Object(b.jsx)("div",{className:"second-hand-invisible"}),Object(b.jsx)("div",{className:"second-hand-visible"})]})]})]})}}]),c}(n.Component),m=c(7),f=function(t){Object(d.a)(c,t);var e=Object(u.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).defaultState={city:"",hourShift:""},t.state=t.defaultState,t}return Object(h.a)(c,[{key:"submitHandler",value:function(t){t.preventDefault(),this.state.city&&!isNaN(this.state.hourShift)&&(this.props.addClock(Object(l.a)(Object(l.a)({},this.state),{},{hourShift:+this.state.hourShift})),this.setState(this.defaultState))}},{key:"inputHandler",value:function(t){this.setState(Object(m.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t=this.state;return Object(b.jsxs)("form",{onSubmit:this.submitHandler.bind(this),className:"clock-form",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"clock-form-label",htmlFor:"name",children:"\u0413\u043e\u0440\u043e\u0434"}),Object(b.jsx)("input",{className:"clock-form-input",type:"text",id:"city",name:"city",onChange:this.inputHandler.bind(this),value:t.city})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"clock-form-label",htmlFor:"timezone",children:"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0437\u043e\u043d\u0430"}),Object(b.jsx)("input",{className:"clock-form-input",type:"text",id:"hourShift",name:"hourShift",onChange:this.inputHandler.bind(this),value:t.hourShift})]}),Object(b.jsx)("button",{className:"clock-form-button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),c}(n.Component),O=function(t){Object(d.a)(c,t);var e=Object(u.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={clocks:[{city:"\u041b\u043e\u043d\u0434\u043e\u043d",hourShift:0,id:Object(j.a)(5)},{city:"\u041c\u043e\u0441\u043a\u0432\u0430",hourShift:3,id:Object(j.a)(5)}]},t}return Object(h.a)(c,[{key:"addClock",value:function(t){t.id=Object(j.a)(5),this.setState({clocks:[].concat(Object(o.a)(this.state.clocks),[t])})}},{key:"deleteClock",value:function(t){var e=Object(l.a)({},this.state),c=e.clocks.findIndex((function(e){return e.id===t}));e.clocks.splice(c,1),this.setState(e)}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{addClock:this.addClock.bind(this)}),Object(b.jsx)("div",{className:"clock-widget-wrapper",children:this.state.clocks.map((function(e){return Object(n.createElement)(v,Object(l.a)(Object(l.a)({},e),{},{deleteClock:t.deleteClock.bind(t),key:e.id}))}))})]})}}]),c}(n.Component);var k=function(){return Object(b.jsx)(O,{})},p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.47fe5d2a.chunk.js.map