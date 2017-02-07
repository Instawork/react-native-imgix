'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);

var _support=require('./support.js');var _support2=_interopRequireDefault(_support);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var roundToNearest=function roundToNearest(size,precision){return precision*Math.ceil(size/precision);};

var defaultMap={
width:'defaultWidth',
height:'defaultHeight'};


var findSizeForDimension=function findSizeForDimension(dim){var props=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var state=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];
if(props[dim]){
return props[dim];
}else if(props.fluid&&state[dim]){
return roundToNearest(state[dim],props.precision);
}else if(props[defaultMap[dim]]){
return props[defaultMap[dim]];
}else{
return 1;
}
};var

ReactImgix=function(_Component){_inherits(ReactImgix,_Component);function ReactImgix(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ReactImgix);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ReactImgix.__proto__||Object.getPrototypeOf(ReactImgix)).call.apply(_ref,[this].concat(args))),_this),_this.
























state={
width:null,
height:null,
mounted:false},_this.


_findSizeForDimension=function(dim){return findSizeForDimension(dim,_this.props,_this.state);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ReactImgix,[{key:'render',value:function render()

{var _props=











this.props;var aggressiveLoad=_props.aggressiveLoad;var auto=_props.auto;var bg=_props.bg;var customParams=_props.customParams;var entropy=_props.entropy;var faces=_props.faces;var fit=_props.fit;var generateSrcSet=_props.generateSrcSet;var src=_props.src;var other=_objectWithoutProperties(_props,['aggressiveLoad','auto','bg','customParams','entropy','faces','fit','generateSrcSet','src']);
var _src='';
var srcSet='';

var width=this._findSizeForDimension('width');
var height=this._findSizeForDimension('height');

var crop=false;
if(faces)crop='faces';
if(entropy)crop='entropy';

var _fit=false;
if(entropy)_fit='crop';
if(fit)_fit=fit;

if(this.state.mounted||aggressiveLoad){
var srcOptions=_extends({
auto:auto},
customParams,{
crop:crop,
fit:_fit,
width:width,
height:height});


_src=(0,_support2.default)(src,srcOptions);
var dpr2=(0,_support2.default)(src,_extends({},srcOptions,{dpr:2}));
var dpr3=(0,_support2.default)(src,_extends({},srcOptions,{dpr:3}));
srcSet=dpr2+' 2x, '+dpr3+' 3x';
}

var childProps=_extends({},
this.props.imgProps,{
width:other.width<=1?null:other.width,
height:other.height<=1?null:other.height});


return _react2.default.createElement(Image,childProps);
}}]);return ReactImgix;}(_react.Component);ReactImgix.propTypes={src:_react.PropTypes.string.isRequired,className:_react.PropTypes.string,bg:_react.PropTypes.bool,fit:_react.PropTypes.string,auto:_react.PropTypes.array,faces:_react.PropTypes.bool,aggressiveLoad:_react.PropTypes.bool,fluid:_react.PropTypes.bool,customParams:_react.PropTypes.object,entropy:_react.PropTypes.bool,generateSrcSet:_react.PropTypes.bool};ReactImgix.defaultProps={precision:100,bg:false,fluid:true,aggressiveLoad:false,faces:true,fit:'crop',entropy:false,auto:['format'],generateSrcSet:true};exports.default=ReactImgix;