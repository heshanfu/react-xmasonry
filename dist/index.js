!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports["react-xmasonry"]=t(require("React")):e["react-xmasonry"]=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),l=r(c),d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e={"data-key":this.props["data-key"],"data-width":this.props["data-width"]};return this.props["data-xkey"]&&(e["data-xkey"]=this.props["data-xkey"]),l.default.createElement("div",u({},e,{style:u({},this.props.style,t.defaultStyle),className:this.props.measured?"xblock":""}),this.props.children)}}]),t}(l.default.Component);d.defaultProps={width:1,measured:!1},d.defaultStyle={position:"absolute"},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),d=r(l),f=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={blocks:{},containerHeight:0,columns:3,containerWidth:0},n.container=null,n.mounted=!1,n.resizeListener=null,n.debouncedResizeTimeout=0,n.debounceRate=50,n.fixedHeight=0,n.containerWidth=n.state.containerWidth,n.columns=n.state.columns,n.props.responsive&&window.addEventListener("resize",n.resizeListener=n.onResize.bind(n)),n.onResize(),n}return a(t,e),c(t,[{key:"getColumns",value:function(e){return Math.max(1,Math.round(e/this.props.targetBlockWidth))}},{key:"updateContainerWidth",value:function(){var e=this.container.getBoundingClientRect().width;return e===this.containerWidth||(this.setState({columns:this.columns=this.getColumns(e),containerWidth:this.containerWidth=e,blocks:{}}),!1)}},{key:"componentDidMount",value:function(){this.mounted=!0,this.updateContainerWidth()&&this.measureChildren()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.resizeListener&&window.removeEventListener("resize",this.resizeListener)}},{key:"componentDidUpdate",value:function(){this.updateContainerWidth()&&this.measureChildren()}},{key:"measureChildren",value:function(){for(var e={},t=0;t<this.container.children.length;t++){var n=this.container.children[t];if(void 0!==n.dataset.xkey){var r=n.getBoundingClientRect(),o=r.height;e[n.dataset.xkey]={height:Math.ceil(o)}}}Object.keys(e).length>0&&this.recalculatePositions(e)}},{key:"recalculatePositions",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=s({},this.state.blocks,e),r=Array.from({length:this.columns},function(){return 0}),o=0;o<this.container.children.length;o++){var i=this.container.children[o];if(n.hasOwnProperty(i.dataset.key)){var a=+i.dataset.width||1,u=t.getBestFitColumn(r,a),c=u.col,l=u.height,d=l+n[i.dataset.key].height;n[i.dataset.key].left=c*Math.floor(1e4/this.columns)/100+"%",n[i.dataset.key].top=l+"px";for(var f=0;f<a;++f)r[c+f]=d}}this.setState({blocks:n,containerHeight:Math.max.apply(null,r)})}},{key:"onResize",value:function(){var e=this;if(this.mounted){if(this.debouncedResizeTimeout)return clearTimeout(this.debouncedResizeTimeout),void(this.debouncedResizeTimeout=setTimeout(function(){e.debouncedResizeTimeout=null,e.updateContainerWidth(e)},this.debounceRate));this.updateContainerWidth(),this.debouncedResizeTimeout=setTimeout(function(){return e.debouncedResizeTimeout=0},this.debounceRate)}}},{key:"render",value:function(){var e=this,n=Math.floor(1e4/this.columns)/100,r=d.default.Children.toArray(this.props.children).reduce(function(t,r){var o=e.state.blocks[r.key],i=Math.min(r.props.width,e.columns);return t[o?0:1].push(o?d.default.cloneElement(r,{"data-key":r.key,"data-width":i,style:s({width:n*i+"%"},o),measured:!0,width:i}):d.default.cloneElement(r,{"data-key":r.key,"data-width":i,"data-xkey":r.key,style:{width:n*i+"%",visibility:"hidden"},width:i})),t},[[],[]]),o=u(r,2),i=o[0],a=o[1],c=a.length?this.fixedHeight:this.fixedHeight=this.state.containerHeight;return d.default.createElement("div",{className:"xmasonry",style:s({},t.containerStyle,{height:c}),ref:function(t){return e.container=t}},i,a)}}],[{key:"getBestFitColumn",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,r=1/0,o=0;o<e.length-t+1;++o){var i=Math.max.apply(null,e.slice(o,o+t));i<r&&(r=i,n=o)}return{col:n,height:r}}}]),t}(d.default.Component);f.defaultProps={responsive:!0,targetBlockWidth:300},f.containerStyle={position:"relative"},t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.XBlock=t.XMasonry=void 0;var o=n(2),i=r(o),a=n(1),u=r(a);t.XMasonry=i.default,t.XBlock=u.default,"undefined"!=typeof window&&(window.XMasonry=i.default,window.XBlock=u.default)}])});