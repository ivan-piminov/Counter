(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{13:function(e,n,a){e.exports=a(29)},18:function(e,n,a){},25:function(e,n,a){},26:function(e,n,a){},27:function(e,n,a){},28:function(e,n,a){},29:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(5),u=a.n(i);a(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(7),l=a(1),c=a(6),o={maxNumber:0,displayNumber:"",minNumber:0,disableClick:!0,disableReset:!0,disableSettings:!0},m=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ON-MAX-VALUE":return n.onNewMaxValue>0&&n.onNewMaxValue!==e.minNumber&&e.minNumber<e.maxNumber+1?Object(l.a)({},e,{maxNumber:n.onNewMaxValue,displayNumber:"enter values and press Set",disableSettings:!1,disableClick:!0,disableReset:!0}):Object(l.a)({},e,{maxNumber:n.onNewMaxValue,disableSettings:!0,disableClick:!0,disableReset:!0});case"ON-MIN-VALUE":return n.onNewMinValue>=0&&n.onNewMinValue!==e.maxNumber&&e.minNumber<e.maxNumber?Object(l.a)({},e,{minNumber:n.onNewMinValue,displayNumber:"enter values and press SET",disableSettings:!1,disableClick:!0,disableReset:!0}):Object(l.a)({},e,{minNumber:n.onNewMinValue,disableSettings:!0,disableClick:!0,disableReset:!0});case" SETTINGS-VALUE":return Object(l.a)({},e,{displayNumber:e.minNumber,disableClick:!1,disableReset:!1,disableSettings:!0});case"FUNCTION-UP-NUMBER":return e.displayNumber<e.maxNumber&&e.displayNumber+1!==e.maxNumber?Object(l.a)({},e,{displayNumber:e.displayNumber+1}):Object(l.a)({},e,{displayNumber:e.displayNumber+1,disableClick:!0});case"FUNCTION-RESET-NUMBER":return Object(l.a)({},e,{disableClick:!1,displayNumber:e.minNumber})}return e})),p=a(2),b=a(3),N=a(4),d=(a(25),a(26),function(e){Object(N.a)(a,e);var n=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var t=arguments.length,i=new Array(t),u=0;u<t;u++)i[u]=arguments[u];return(e=n.call.apply(n,[this].concat(i))).render=function(){return r.a.createElement("div",{className:"Buttons"},r.a.createElement("button",{className:"styleButtons",onClick:e.props.onClickFunc,disabled:e.props.checkDisabled},e.props.title))},e}return a}(r.a.Component)),v=(a(27),function(e){Object(N.a)(a,e);var n=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var t=arguments.length,i=new Array(t),u=0;u<t;u++)i[u]=arguments[u];return(e=n.call.apply(n,[this].concat(i))).render=function(){if(e.props.MaxNumber<=e.props.MinNumber||e.props.MinNumber<0||e.props.MaxNumber<0)return r.a.createElement("div",{className:"incorrect"},r.a.createElement("div",null,r.a.createElement("div",null,"incorrect value")));var n=e.props.displayNumber===e.props.MaxNumber?"Max":"Normal";return r.a.createElement("div",{className:"Display"},r.a.createElement("div",{className:n},r.a.createElement("div",null,e.props.displayNumber)))},e}return a}(r.a.Component)),f=(a(28),function(e){Object(N.a)(a,e);var n=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var t=arguments.length,i=new Array(t),u=0;u<t;u++)i[u]=arguments[u];return(e=n.call.apply(n,[this].concat(i))).render=function(){var n=e.props.maxNumber<=e.props.minNumber||e.props.maxNumber<0||e.props.minNumber<0?"error":"";return r.a.createElement("div",{className:"Settings"},r.a.createElement("div",{className:"Visual"},r.a.createElement("span",null,"max value:"),r.a.createElement("input",{className:n,onChange:e.props.onMaxValue,type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",value:e.props.maxNumber})),r.a.createElement("div",{className:"Visual"},r.a.createElement("span",null,"start value:"),r.a.createElement("input",{className:n,onChange:e.props.onMinValue,type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",value:e.props.minNumber})),r.a.createElement(d,{onClickFunc:e.props.SettingsValue,title:"Set",checkDisabled:e.props.checkDisabled}))},e}return a}(r.a.Component)),E=function(e){Object(N.a)(a,e);var n=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var t=arguments.length,i=new Array(t),u=0;u<t;u++)i[u]=arguments[u];return(e=n.call.apply(n,[this].concat(i))).onMaxValue=function(n){e.props.onMaxValue(n)},e.onMinValue=function(n){e.props.onMinValue(n)},e.SettingsValue=function(n){e.props.SettingsValue(n)},e.FunctionUpNumber=function(n){e.props.FunctionUpNumber(n)},e.FunctionResetNumber=function(n){e.props.FunctionResetNumber(n)},e.render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{onMaxValue:e.onMaxValue,onMinValue:e.onMinValue,maxNumber:e.props.state.maxNumber,minNumber:e.props.state.minNumber,SettingsValue:e.SettingsValue,checkDisabled:e.props.state.disableSettings}),r.a.createElement("div",{className:"Counter"},r.a.createElement(v,{displayNumber:e.props.state.displayNumber,MaxNumber:e.props.state.maxNumber,MinNumber:e.props.state.minNumber}),r.a.createElement("div",{className:"LocationButtons"},r.a.createElement(d,{onClickFunc:e.FunctionUpNumber,title:"Inc",checkDisabled:e.props.state.disableClick}),r.a.createElement(d,{onClickFunc:e.FunctionResetNumber,title:"Reset",checkDisabled:e.props.state.disableReset}))))},e}return a}(r.a.Component),M=Object(s.b)((function(e){return{state:e}}),(function(e){return{onMaxValue:function(n){var a=function(e){return{type:"ON-MAX-VALUE",onNewMaxValue:+e.currentTarget.value}}(n);e(a)},onMinValue:function(n){var a=function(e){return{type:"ON-MIN-VALUE",onNewMinValue:+e.currentTarget.value}}(n);e(a)},SettingsValue:function(n){var a=function(e){return{type:" SETTINGS-VALUE",SettingsValue:e}}(n);e(a)},FunctionUpNumber:function(n){var a=function(e){return{type:"FUNCTION-UP-NUMBER",FunctionUpNumber:e}}(n);e(a)},FunctionResetNumber:function(n){var a=function(e){return{type:"FUNCTION-RESET-NUMBER",FunctionResetNumber:e}}(n);e(a)}}}))(E);u.a.render(r.a.createElement(s.a,{store:m},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.c01a4b16.chunk.js.map