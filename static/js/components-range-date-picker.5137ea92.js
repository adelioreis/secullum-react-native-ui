(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./docs/components/RangeDatePicker.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./node_modules/react-native-web/dist/exports/View/index.js"),c=n("./node_modules/react-native-vector-icons/FontAwesome.js"),l=n("./src/modules/format.ts"),u=n("./src/modules/theme.ts"),d=n("./node_modules/react-date-range/dist/index.js"),p=n("./node_modules/react-dom/index.js"),f=n("./src/modules/layout.ts"),m=(n("./node_modules/react-date-range/dist/styles.css"),n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),y=n("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),D=n("./node_modules/react-native-web/dist/exports/Text/index.js");n("./styles/RangeDatePicker.css");function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=g(this,(e=w(t)).call.apply(e,[this].concat(o)))).state={showStartDateModal:!1,count:0},n.calendarRef=a.createRef(),n.handleClick=function(e){n.calendarRef.current&&!n.calendarRef.current.contains(e.target)&&n.setState({showStartDateModal:!1,count:0})},n.handleDatePickerPress=function(){n.setState({showStartDateModal:!0})},n.handleRangeDateConfirm=function(e){if(1==n.state.count)return n.props.onStartDateChange(e.selection.startDate),setTimeout(function(){return n.props.onEndDateChange(e.selection.endDate)},1),void n.setState({showStartDateModal:!1,count:0});n.props.onStartDateChange(e.selection.startDate),n.setState({count:1})},n.getStyles=function(){var e=Object(u.a)();return m.a.create({container:{paddingHorizontal:16,paddingVertical:8,borderWidth:1,borderColor:e.borderColor1,borderRadius:3,flexDirection:"row",alignItems:"center"},label:{color:e.textColor2,fontFamily:"Lato-Regular",fontSize:Object(f.a)()?15:12,lineHeight:16},value:{color:e.textColor1,fontFamily:"Lato-Bold",fontSize:16,lineHeight:22},icon:{marginLeft:"auto",color:e.textColor2,fontSize:22}})},n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick,!1)}},{key:"render",value:function(){var e=this.props,t=e.label,n=e.startDate,r=e.endDate,o=e.style,i=this.state.showStartDateModal,u=Object(l.a)(n,"MMM D, YYYY")+" - "+Object(l.a)(r,"MMM D, YYYY"),f=this.getStyles();return a.createElement(y.a,{onPress:this.handleDatePickerPress},a.createElement(s.a,{style:[f.container,o]},a.createElement(s.a,{ref:function(e){return e&&e.setNativeProps({id:"range-date-picker"})}},a.createElement(D.a,{style:f.label},t),a.createElement(D.a,{style:f.value},u)),a.createElement(c.a,{name:"calendar",style:f.icon}),i&&p.createPortal(a.createElement("div",{ref:this.calendarRef,style:{position:"absolute",paddingTop:"50px",marginLeft:"-10px"}},a.createElement(d.DateRange,{locale:Object(l.b)(),showDateDisplay:!1,showMonthAndYearPickers:!1,ranges:[{startDate:n,endDate:r,key:"selection"}],onChange:this.handleRangeDateConfirm})),document.getElementById("range-date-picker"))))}}])&&b(n.prototype,r),o&&b(n,o),t}();try{v.displayName="RangeDatePicker",v.__docgenInfo={description:"",displayName:"RangeDatePicker",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"Date"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!0,type:{name:"Date"}},onStartDateChange:{defaultValue:null,description:"",name:"onStartDateChange",required:!0,type:{name:"(date: Date) => void"}},onEndDateChange:{defaultValue:null,description:"",name:"onEndDateChange",required:!0,type:{name:"(date: Date) => void"}},onEndDateCancel:{defaultValue:null,description:"",name:"onEndDateCancel",required:!1,type:{name:"() => void"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RangeDatePicker.web.tsx#RangeDatePicker"]={docgenInfo:v.__docgenInfo,name:"RangeDatePicker",path:"src/components/RangeDatePicker.web.tsx#RangeDatePicker"})}catch(e){}function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=x(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"rangedatepicker"}},"RangeDatePicker"),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(i.PropsTable,{of:v}),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(i.Playground,{__position:1,__code:'{() => {\n  class RangeDatePickerExample extends React.Component {\n    constructor() {\n      this.state = {\n        startDate: new Date(1990, 9, 1),\n        endDate: new Date(1990, 9, 31),\n      }\n    }\n    render() {\n      return (\n        <View style={{ height: 350 }}>\n          <RangeDatePicker\n            label="label"\n            startDate={this.state.startDate}\n            endDate={this.state.endDate}\n            onStartDateChange={startDate => this.setState({ startDate })}\n            onEndDateChange={endDate => this.setState({ endDate })}\n          />\n        </View>\n      )\n    }\n  }\n\n  return <RangeDatePickerExample />\n}}',__scope:{props:n,View:s.a,RangeDatePicker:v}},function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(void 0).state={startDate:new Date(1990,9,1),endDate:new Date(1990,9,31)},P(void 0)}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this;return r.a.createElement(s.a,{style:{height:350}},r.a.createElement(v,{label:"label",startDate:this.state.startDate,endDate:this.state.endDate,onStartDateChange:function(t){return e.setState({startDate:t})},onEndDateChange:function(t){return e.setState({endDate:t})}}))}}])&&_(n.prototype,a),o&&_(n,o),t}();return r.a.createElement(e,null)}))}},"./styles/RangeDatePicker.css":function(e,t,n){}}]);