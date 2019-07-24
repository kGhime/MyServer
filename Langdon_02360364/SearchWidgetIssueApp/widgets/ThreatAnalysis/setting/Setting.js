// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/ThreatAnalysis/setting/symbologySettings":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/on ./ColorPickerEditor jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!../templates/ThreatAnalysisSettings.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/query dijit/registry dijit/form/Select jimu/dijit/SymbolChooser".split(" "),function(l,g,f,h,d,m,n,p,e,q,c,b,k){return l([m,n,q],{baseClass:"jimu-widget-threatAnalysis-Setting",templateString:p,
selectedSettings:{},colorPickerNodes:[],dropdownNodes:[],constructor:function(a){e.mixin(this,a)},startup:function(){this.colorPickerNodes=b(".colorPicker",this.domNode);this.dropdownNodes=b(".dropdown",this.domNode);g.forEach(this.colorPickerNodes,e.hitch(this,function(a,b){a=new d({nls:this.nls,type:c.contains(a,"Line")?"line":"fill"},a);a.setValues({color:this.config.threatAnalysis.symbology[a.id].color,transparency:this.config.threatAnalysis.symbology[a.id].transparency});a.startup();a.dropdown.set("value",
this.config.threatAnalysis.symbology[a.id].type)}));this.onSettingsChanged();this._openCloseNodes(this.mandatorySettingsButton,this.mandatoryContainer)},postCreate:function(){this.inherited(arguments);c.add(this.domNode,"SettingsContainer FullWidth");this._handleClickEvents()},_handleClickEvents:function(){this.own(h(this.mandatorySettingsButton,"click",e.hitch(this,function(){this._openCloseNodes(this.mandatorySettingsButton,this.mandatoryContainer)})));this.own(h(this.safeSettingsButton,"click",
e.hitch(this,function(){this._openCloseNodes(this.safeSettingsButton,this.safeContainer)})))},validInputs:function(){var a=!0;g.some(this.colorPickerNodes,function(b){if(!k.byId(b.id).validateSpinner())return a=!1,!0},this);return a},_openCloseNodes:function(a,k){var t=b(".container",this.domNode),d=b(".SettingsButtonIcon",this.domNode),r=!1;this.validInputs()&&(a&&c.contains(a,"LabelSettingsRightButton")&&(r=!0),g.forEach(t,e.hitch(this,function(a){f.addClass(a,"controlGroupHidden")})),g.forEach(d,
e.hitch(this,function(a){f.removeClass(a,"LabelSettingsDownButton");f.addClass(a,"LabelSettingsRightButton")})),r&&(f.removeClass(k,"controlGroupHidden"),f.removeClass(a,"LabelSettingsRightButton"),f.addClass(a,"LabelSettingsDownButton")))},onClose:function(){this.onSettingsChanged();this._openCloseNodes()},onSettingsChanged:function(){g.forEach(this.colorPickerNodes,e.hitch(this,function(a,b){b={color:k.byId(a.id).getValues().color,transparency:k.byId(a.id).getValues().transparency,type:k.byId(a.id).dropdown.getValue()};
this.selectedSettings[a.id]=b}));this.emit("settingsChanged",this.selectedSettings)}})})},"widgets/ThreatAnalysis/setting/ColorPickerEditor":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/Color dojo/on dojo/query dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./ColorPickerEditor.html dijit/form/HorizontalSlider jimu/dijit/ColorPickerPopup dijit/form/NumberSpinner".split(" "),function(l,g,f,h,d,m,n,p,e,q,c,b,k){return l([p,
e,q],{_defaultColor:"#485566",templateString:c,nls:null,postCreate:function(){this.colorPicker=new k({color:this._defaultColor},this.colorPicker);this.colorPicker.startup();this.slider=new b({name:"slider",value:100,minimum:0,maximum:100,discreteValues:101,intermediateChanges:!0,showButtons:!1,style:"display: inline-block;"},this.sliderBar);this.slider.startup();var a=[],c,d="esriSLSDash esriSLSDashDot esriSLSDashDotDot esriSLSDot esriSLSLongDash esriSLSLongDashDot esriSLSNull esriSLSShortDash esriSLSShortDashDot esriSLSShortDashDotDot esriSLSShortDot esriSLSSolid".split(" "),
e="esriSFSBackwardDiagonal esriSFSCross esriSFSDiagonalCross esriSFSForwardDiagonal esriSFSHorizontal esriSFSNull esriSFSSolid esriSFSVertical".split(" ");"line"===this.type?g.forEach(d,f.hitch(this,function(b){c={value:b,label:this.nls.lineStyles[b]};a.push(c)})):g.forEach(e,f.hitch(this,function(b){c={value:b,label:this.nls.fillStyles[b]};a.push(c)}));this.dropdown.addOption(a);this.inherited(arguments)},startup:function(){this.own(d(this.slider,"change",f.hitch(this,function(a){isNaN(a)||!1===
this._isSameVal()&&(a>this.spinner.maximum?this.spinner.setValue(this.spinner.maximum):this.spinner.setValue(a))})));this.own(d(this.spinner,"change",f.hitch(this,function(a){isNaN(a)||!1===this._isSameVal()&&a<=this.slider.maximum&&this.slider.setValue(a)})));this._stylePolyfill();this.inherited(arguments)},_isSameVal:function(){return this.slider.getValue()===this.spinner.getValue()},getValues:function(){var a=null,b=null;(b=this.colorPicker.getColor())&&b.toHex&&(a=b.toHex());b=this.spinner.getValue()/
100;return{color:a,transparency:b}},setValues:function(a){if("object"===typeof a||"string"===typeof a)this.colorPicker.setColor(new h(a.color)),a.transparency="undefined"===typeof a.transparency?0:100*a.transparency,this.slider.setValue(a.transparency),this.spinner.setValue(a.transparency)},_stylePolyfill:function(){var a=m(".dijitSliderLeftBumper",this.domNode)[0];a&&a.parentNode&&n.setStyle(a.parentNode,"background-color","#24b5cc")},validateSpinner:function(){var a=!0;this.spinner.isValid()||(this._shake(this.spinner.domNode,
16),this.spinner.focus(),a=!1);return a},_shake:function(a,b){function k(){if(15>c){a.style.transform="translate(0px, 0px)";b-=d;var g=f(-b,b),h=f(-b,b);a.style.transform="translate("+g+"px, "+h+"px)";c+=1;requestAnimationFrame(k)}15<=c&&(a.style.transform="translate(0, 0)",e._shakingElements.splice(e._shakingElements.indexOf(a),1))}var c=1,d=b/15,f=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};this._shakingElements||(this._shakingElements=[]);if(-1===this._shakingElements.indexOf(a)){this._shakingElements.push(a);
var e=this;k()}}})})},"jimu/dijit/ColorPickerPopup":function(){define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/html dojo/on dojo/_base/Color dijit/TooltipDialog dijit/popup jimu/dijit/ColorPalette jimu/utils".split(" "),function(l,g,f,h,d,m,n,p,e,q,c){return l([g,f],{baseClass:"jimu-color-pickerPopup",declaredClass:"jimu.dijit.ColorPickerPopup",templateString:'\x3cdiv class\x3d"jimu-color-picker"\x3e\x3c/div\x3e',_isTooltipDialogOpened:!1,color:null,showLabel:!1,
around:null,_ENABLE:!0,recordUID:"",postCreate:function(){this.inherited(arguments);this._createTooltipDialog(this.domNode);this._hideTooltipDialog()},destroy:function(){e.close(this.tooltipDialog);this.picker.destroy();this.tooltipDialog.destroy();this.inherited(arguments)},enable:function(){this._ENABLE=!0;d.removeClass(this.domNode,"disable")},disable:function(){this._ENABLE=!1;d.addClass(this.domNode,"disable")},isPartOfPopup:function(b){var c=this.tooltipDialog.domNode;return b===c||d.isDescendant(b,
c)},hideTooltipDialog:function(){this._hideTooltipDialog()},showTooltipDialog:function(){this._showTooltipDialog()},initUI:function(){this.picker.initUI()},_showTooltipDialog:function(){e.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.around?this.around:this.domNode,orient:this.orient});this._isTooltipDialogOpened=!0},_hideTooltipDialog:function(){e.hide(this.tooltipDialog);this._isTooltipDialogOpened=!1},_createTooltipDialog:function(){var b=d.create("div");this.tooltipDialog=
new p({content:b});d.addClass(this.tooltipDialog.domNode,"jimu-color-picker-popup-dialog");var c=new q({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showColorPickerOK:!0,showColorPickerApply:!0,showCoustomRecord:!0,closeDialogWhenChange:!0},recordUID:this.recordUID,onChange:h.hitch(this,function(a){a&&(a=new n(a),this.setColor(a),this.onChange(a))})});c.placeAt(b);c.startup();this.own(m(c,"close",h.hitch(this,function(){this._hideTooltipDialog()})));this.own(m(c,"change-style",
h.hitch(this,function(){this._hideTooltipDialog();this._showTooltipDialog()})));this.own(m(this.domNode,"click",h.hitch(this,function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():!1!==this._ENABLE&&this._showTooltipDialog()})));this.own(m(document,"click",h.hitch(this,function(a){this.isPartOfPopup(a.srcElement||a.target)||this._hideTooltipDialog()})));this.picker=c},setColor:function(b){if(b instanceof n){null===this.color&&!0===this.showLabel&&
this._changeLabel(b);var c=b.toHex();this.color=b;d.setStyle(this.domNode,"backgroundColor",c);this.picker&&(this.picker.refreshRecords(),this.picker.setColor(c,!1,!0));this.showLabel&&this._changeLabel(this.color)}},getColor:function(){return this.color},_changeLabel:function(b){d.empty(this.domNode);d.create("span",{innerHTML:b.toHex(),className:"color-label",style:{color:c.invertColor(b.toHex())}},this.domNode)},onChange:function(b){b&&this.showLabel&&this._changeLabel(b)},changeColor:function(){this.picker&&
this.picker.changeColor();this.showLabel&&this._changeLabel(this.color)},setTitle:function(b){this.domNode.title=b},getTooltipDialog:function(){return this.tooltipDialog||null}})})},"widgets/ThreatAnalysis/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ThreatAnalysis/setting/ColorPickerEditor.html":'\x3cdiv class\x3d"colorPickerEditor"\x3e\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPicker"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"sliderWrapper"\x3e\r\n    \x3cdiv class\x3d"sliderbar" data-dojo-attach-point\x3d"sliderBar"\x3e\r\n      \x3col data-dojo-type\x3d"dijit/form/HorizontalRuleLabels" style\x3d"height:2.5em;" container\x3d"topDecoration"\x3e\r\n        \x3cli\x3e${nls.transparencyLabel}\x3c/li\x3e\r\n        \x3cli\x3e\x3c/li\x3e\r\n      \x3c/ol\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0" data-dojo-attach-point\x3d"spinner"\r\n    data-dojo-props\x3d"smallDelta:10,intermediateChanges:true,constraints: {min:0,max:100}"\x3e\r\n  \x3cdiv class\x3d\'styleSelectSection\'\x3e\r\n    \x3clabel for\x3d"${id}_select"\x3e${nls.style}\x3c/label\x3e\r\n    \x3cselect class\x3d"styleSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"dropdown" /\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ThreatAnalysis/templates/ThreatAnalysisSettings.html":'\x3cdiv\x3e\r\n    \x3c!-- Mandatory Evacuation Distance DropDown --\x3e\r\n    \x3cdiv class\x3d"SettingsRow"\x3e\r\n      \x3cdiv class\x3d"LabelSettingsRightButton SettingsButtonIcon Pointer" title\x3d"${nls.mandatoryButtonLabel}" data-dojo-attach-point\x3d"mandatorySettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"InputLabelSettings Ellipsis SubTitle" title\x3d"${nls.mandatoryLabel}"\x3e${nls.mandatoryLabel}\x3c/div\x3e      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Mandatory Evacuation Distance Color Pickers --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"mandatoryContainer"\x3e      \r\n      \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"mandatoryOutlineColor" data-dojo-attach-point\x3d"mandatoryOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"mandatoryFillColor" data-dojo-attach-point\x3d"mandatoryFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Safe Evacuation Distance DropDown --\x3e\r\n    \x3cdiv class\x3d"SettingsRow"\x3e\r\n      \x3cdiv class\x3d"LabelSettingsRightButton SettingsButtonIcon Pointer" title\x3d"${nls.safeButtonLabel}" data-dojo-attach-point\x3d"safeSettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"InputLabelSettings Ellipsis SubTitle" title\x3d"${nls.safeLabel}"\x3e${nls.safeLabel}\x3c/div\x3e      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Safe Evacuation Distance --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"safeContainer"\x3e\r\n      \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"safeOutlineColor" data-dojo-attach-point\x3d"safeOutlineColorPicker"\x3e\x3c/div\x3e \r\n      \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"safeFillColor" data-dojo-attach-point\x3d"safeFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ThreatAnalysis/setting/Setting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"SymbologyContainer" data-dojo-attach-point\x3d"SettingsNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/ThreatAnalysis/setting/css/style.css":'.jimu-widget-threatAnalysis-setting {margin: 0; padding: 0; font-size: 14px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; letter-spacing: 0.38px;}.jimu-widget-threatAnalysis-setting .SettingsRow {width: 100%; display: inline-flex;}.jimu-widget-threatAnalysis-setting .SymbologyContainer {width: 100%; padding-top: 10px; padding-left: 15px;}.jimu-widget-threatAnalysis-setting .HalfWidthContainer {display: flex; width: 50%;}.jimu-widget-threatAnalysis-setting .InputLabel {float: left; line-height: 28px; padding: 5px 5px 0px 0;}.jimu-widget-threatAnalysis-setting .InputLabelSettings {float: left; line-height: 28px; padding: 5px 0px 0px 0px;}.jimu-widget-threatAnalysis-setting .DropdownLabel {line-height: 28px; padding-bottom: 5px; padding-top: 5px;}.jimu-widget-threatAnalysis-setting .Ellipsis {overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}.jimu-widget-threatAnalysis-setting.SubTitle {font-weight: bold;}.jimu-widget-threatAnalysis-setting .SubTitleRed {line-height: 28px; font-weight: bold; color: #ff0000; padding: 5px 0px 0px 10px;}.jimu-widget-threatAnalysis-setting .styleSelectSection {display: inline-grid; vertical-align: bottom;}.jimu-widget-threatAnalysis-setting .styleSelect {width: 100%; background-color: #fff;}.jimu-widget-threatAnalysis-setting .dijitSelectLabel {text-overflow: ellipsis; -ms-text-overflow: ellipsis; text-align: justify; overflow: hidden; width: 100px;}.jimu-widget-threatAnalysis-setting .dijitSelect .dijitArrowButton {background-color: #fff; background-image: none; border-color: #fff;}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none) {.jimu-widget-threatAnalysis-setting .styleSelectSection {display: inline-grid; vertical-align: bottom; margin: 8px 10px 0 10px;}}.jimu-widget-threatAnalysis-setting .Pointer {cursor: pointer;}.jimu-widget-threatAnalysis-setting .SettingsButtonIcon {margin-top: 13px; height: 16px; width: 16px;}.jimu-rtl .jimu-widget-threatAnalysis-setting .SettingsButtonIcon {margin-top: 9px;}.jimu-widget-threatAnalysis-setting .LabelSettingsDownButton {background: url("./images/arrow-down_black.png") no-repeat; margin-top: 15px;}.jimu-widget-threatAnalysis-setting .LabelSettingsDownButton:hover {background: url("./images/arrow-down_black_hover.png") no-repeat;}.jimu-widget-threatAnalysis-setting .LabelSettingsRightButton {background: url("./images/arrow-right_black.png") no-repeat;}.jimu-rtl .jimu-widget-threatAnalysis-setting .LabelSettingsRightButton {transform: rotate(180deg);}.jimu-widget-threatAnalysis-setting .LabelSettingsRightButton:hover {background: url("./images/arrow-right_black_hover.png") no-repeat;}.jimu-widget-threatAnalysis-setting .controlGroupHidden {display: none;}.jimu-widget-threatAnalysis-setting .instruction {margin-bottom: 10px;}.jimu-widget-threatAnalysis-setting .tabs {font-family: "Avenir Light"; color: #000000; height: 100%;}.jimu-widget-threatAnalysis-setting .tabs .tab-description {margin: 10px 0;}.jimu-widget-threatAnalysis-setting .tabs .jimu-radio-checked .jimu-radio-inner {width: 6px; height: 6px; margin: 4px; border-radius: 50%; background-color: #24B5CC;}.jimu-widget-threatAnalysis-setting .tabs .jimu-radio {border: 1px solid #ccc; vertical-align: top;}.jimu-widget-threatAnalysis-setting .jimu-tab\x3e.control\x3e.tab {background-color: #fff; border-top: 0; border-left: 0; border-right: 0; border-bottom: 1px solid #dedede; color: #898989; font-family: "Avenir Medium"; font-size: 14px;}.jimu-widget-threatAnalysis-setting .jimu-tab\x3e.control\x3e.tab.jimu-state-selected {border-bottom: 3px solid #24b5cc; font-family: "Avenir Heavy"; color: #000000;}.jimu-widget-threatAnalysis-setting .tabs .titles {font-weight: bold; font-family: "Avenir Medium"; font-size: 12px; margin: 20px 0 10px 0;}.jimu-widget-threatAnalysis-setting .tabs .hide {display: none;}.jimu-widget-threatAnalysis-setting .tabs .indent {margin-left: 20px; margin-top: 10px;}.jimu-widget-threatAnalysis-setting .tabs .unit-item {margin: 15px 5px 5px 5px; line-height: 18px; height: 18px; vertical-align: middle;}.jimu-widget-threatAnalysis-setting .tabs .jimu-widget-threatAnalysis-settingearFix {*overflow: hidden; *zoom: 1;}.jimu-widget-threatAnalysis-setting .tabs .jimu-widget-threatAnalysis-settingearFix:after {display: table; content: ""; width: 0; clear: both;}.jimu-widget-threatAnalysis-setting .tabs .view {height: 100%; overflow-y: auto;}.jimu-widget-threatAnalysis-setting .tabs .jimu-tab\x3e.jimu-viewstack {padding-bottom: 20px;}.jimu-widget-threatAnalysis-setting .sliderWrapper {width: 235px; display: inline-block; margin: 5px;}.jimu-widget-threatAnalysis-setting .dijitSlider {width: 100%;}.jimu-widget-threatAnalysis-setting .colorPickerEditor {padding-top: 5px; padding-bottom: 8px; width: 100%;}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none) {.jimu-widget-threatAnalysis-setting .colorPickerEditor {padding-top: 5px; padding-bottom: 8px; width: 100%; display: inline-flex;}}.jimu-widget-threatAnalysis-setting .colorPickerEditor .jimu-color-picker {display: inline-block; width: 25px; height: 25px;}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none) {.jimu-widget-threatAnalysis-setting .colorPickerEditor .jimu-color-picker {display: inline-block; width: 25px; height: 25px; margin-top: 26px;}}.jimu-widget-threatAnalysis-setting .colorPickerEditor .dijitSpinner.dijitNumberTextBox.dijitValidationTextBox {width: 66px; height: 30px;}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none) {.jimu-widget-threatAnalysis-setting .colorPickerEditor .dijitSpinner.dijitNumberTextBox.dijitValidationTextBox {width: 66px; height: 30px; margin-top: 25px;}}.jimu-widget-threatAnalysis-setting .dijitSlider .dijitSliderImageHandleH {top: -10px; width: 20px; height: 20px;}.jimu-widget-threatAnalysis-setting .dijitSliderImageHandleH {top: -7px;}.jimu-widget-threatAnalysis-setting .dijitSliderImageHandle.dijitSliderImageHandleH {background-image: url("../../images/sliderball.svg"); background-position: 0 0;}.jimu-widget-threatAnalysis-setting .dijitSliderThumbHover {background-image: url("../../images/sliderball.svg"); background-position: 0 0;}.jimu-widget-threatAnalysis-setting .dijitSlider .dijitSliderProgressBarH,.jimu-widget-threatAnalysis-setting .dijitSlider .dijitSliderLeftBumper {border-color: #000; background-color: #000; background-image: -webkit-linear-gradient(top, #000 0px, #000 1px, rgba(255, 255, 255, 0) 2px); background-image: -o-linear-gradient(top, #000 0px, #000 1px, rgba(255, 255, 255, 0) 2px); background-image: linear-gradient(top, #000 0px, #000 1px, rgba(255, 255, 255, 0) 2px);}.jimu-widget-threatAnalysis-setting .dijitSlider .dijitSliderRemainingBarH,.jimu-widget-threatAnalysis-setting .dijitSlider .dijitSliderRightBumper {border-color: #d7d7d7; background-color: #d7d7d7;}.jimu-widget-threatAnalysis-setting .tabs .colorPickerEditor .trans {font-family: "Avenir Light"; font-size: 12px; padding: 0 10px 0 20px; letter-spacing: 0.33px;}.jimu-widget-threatAnalysis-setting .tabs .sliderbar {width: 60px;}.dijitRuleLabelH {left: -12%;}.jimu-widget-threatAnalysis-setting .layers-tab {}.jimu-widget-threatAnalysis-setting .layers-tab .editor-container {}.jimu-widget-threatAnalysis-setting .layers-tab .editor-container .dijitEditorIFrameContainer textarea {resize: none;}.jimu-widget-threatAnalysis-setting .symbology-tab {overflow-y: auto; height: 490px;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .size-box-container {display: inline-block; text-align: center; margin: 0 10px 0 0; width: 80px; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .size-box {width: 80px; height: 60px; background: no-repeat; margin-bottom: 5px;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .percent25 {background: url("../../images/percent25.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .percent25.selected {background: url("../../images/percent25_selected.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .percent50 {background: url("../../images/percent50.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .percent50.selected {background: url("../../images/percent50_selected.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .percent75 {background: url("../../images/percent75.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .percent75.selected {background: url("../../images/percent75_selected.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .percent100 {background: url("../../images/percent100.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .percent100.selected {background: url("../../images/percent100_selected.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .custom {background: url("../../images/custom.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .custom.selected {background: url("../../images/custom_selected.svg") center center no-repeat; ;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .custom-label {vertical-align: top; line-height: 20px;}.jimu-rtl .jimu-widget-threatAnalysis-setting .symbology-tab .sizes\x3e:first-child {margin-right: 0;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .wh {margin: 0 14px;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .wh .wh-item {display: inline-block; margin-right: 10px;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .wh .wh-item .lable {font-family: "Avenir Medium"; font-size: 12px; color: #353535; margin: 0 0 5px 0; width: 96px; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .wh .inputs {width: 96px; border: 1px solid #d9dde0;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .wh .inputs .text-box {width: 70px; border: none;}.jimu-widget-threatAnalysis-setting .symbology-tab .size-selector .wh .inputs .unit {color: #898989; letter-spacing: 0;}.jimu-widget-threatAnalysis-setting .symbology-tab .align-selector .align-box-container {display: inline-block; text-align: center; margin: 0 10px; width: 50px; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}.jimu-widget-threatAnalysis-setting .symbology-tab .align-selector .align-box {width: 40px; height: 36px; background: no-repeat; margin: 0 5px 5px 5px;}.jimu-widget-threatAnalysis-setting .symbology-tab .align-selector .top {background: url("../../images/top.svg") center center no-repeat; border: none;}.jimu-widget-threatAnalysis-setting .symbology-tab .align-selector .top.selected {background: url("../../images/top_selected.svg") center center no-repeat; border: 1px #24B5CC solid;}.jimu-widget-threatAnalysis-setting .symbology-tab .align-selector .middle {background: url("../../images/middle.svg") center center no-repeat; border: none;}.jimu-widget-threatAnalysis-setting .symbology-tab .align-selector .middle.selected {background: url("../../images/middle_selected.svg") center center no-repeat; border: 1px #24B5CC solid;}.jimu-widget-threatAnalysis-setting .symbology-tab .jimu-image-chooser {height: 30px; width: 124px; background: #24B5CC; border: 1px solid #24B5CC;}.jimu-widget-threatAnalysis-setting .symbology-tab .file-name {font-size: 12px; line-height: 33px; height: 33px; color: #000000; margin: 0 20px 0 20px;}.jimu-widget-threatAnalysis-setting .symbology-tab .types\x3e:first-child {margin-left: 0;}.jimu-rtl .jimu-widget-threatAnalysis-setting .symbology-tab .types\x3e:first-child {margin-right: 0;}.jimu-widget-threatAnalysis-setting .symbology-tab .fillstype {margin: 10px 20px 0 20px;}.jimu-widget-threatAnalysis-setting .symbology-tab .buttonText {width: 290px; margin-bottom: 10px;}.jimu-widget-threatAnalysis-setting .instruction span {color: #596679;}.jimu-widget-threatAnalysis-setting .editor-container {position: absolute; top: 34px; bottom: 165px; left: 0; right: 0; border: 1px solid #d2dae2; background-color: #fafafc;}.jimu-widget-threatAnalysis-setting .editor-container .dijitEditorIFrameContainer {position: relative; width: 100%; overflow: hidden;}.jimu-widget-threatAnalysis-setting .editor-container .dijitEditorIFrameContainer {padding-top: 0;}.jimu-widget-threatAnalysis-setting .editor-container .uploaderInsideNode embed {display: none;}.jimu-widget-threatAnalysis-setting .splash-footer {color: #596679; height: 155px; margin-top: 20px;}.jimu-widget-threatAnalysis-setting .splash-footer .require-continue {position: absolute; top: 0;}.jimu-widget-threatAnalysis-setting .splash-footer .require-item {margin-bottom: 10px;}.jimu-widget-threatAnalysis-setting .splash-footer .option-text {display: none; margin: 10px 0 15px 23px;}.jimu-widget-threatAnalysis-setting .splash-footer .confirm-container {display: none; margin-left: 20px; margin-bottom: 10px;}.jimu-widget-threatAnalysis-setting .splash-footer .confirm-text,.jimu-widget-threatAnalysis-setting .splash-footer .confirm-option {width: 100%; margin-top: 10px;}.jimu-widget-threatAnalysis-setting .splash-footer .spinner-label {line-height: 30px; margin-right: 10px; display: inline-block;}.jimu-widget-threatAnalysis-setting .splash-footer .set-background,.jimu-widget-threatAnalysis-setting .splash-footer .set-background * {vertical-align: middle;}.jimu-widget-threatAnalysis-setting .splash-footer input {width: 755px; color: #7989a0;}.jimu-widget-threatAnalysis-setting .dojoxEditorUploadNorm.dijitButtonDisabled {background: #ccc url(.././images/uploadImageIcon_disabled.gif) no-repeat 2px 2px;}.jimu-widget-threatAnalysis-setting .style-selector .jimu-widget-threatAnalysis-settingearFix {*overflow: hidden; *zoom: 1}.jimu-widget-threatAnalysis-setting .style-selector .jimu-widget-threatAnalysis-settingearFix:after {display: table; content: ""; width: 0; clear: both}.jimu-widget-threatAnalysis-setting .style-selector .hide {display: none}.jimu-widget-threatAnalysis-setting .settings-container {}.jimu-widget-threatAnalysis-setting .settings-container .title {font-size: 14px; color: #000000; letter-spacing: 0.39px; margin-bottom: 20px;}.jimu-widget-threatAnalysis-setting .settings-container .label {font-size: 12px; color: #282828; letter-spacing: 0.33px; line-height: 30px;}.jimu-widget-threatAnalysis-setting .style-selector .label {margin: 0 0; max-width: 160px; line-height: 30px; font-size: 12px; vertical-align: middle; overflow: hidden; text-overflow: ellipsis;}.jimu-widget-threatAnalysis-setting .style-selector .dijitTextBox,.jimu-widget-threatAnalysis-setting .style-selector .dijitSelect {width: 100%; height: 30px; border: 1px solid #D7D7D7;}.jimu-widget-threatAnalysis-setting .style-selector .jimu-color-picker {width: 40px !important; height: 30px !important; border: 1px solid #D7D7D7 !important;}.jimu-widget-threatAnalysis-setting .style-selector .dijitSelect .dijitArrowButtonContainer {border: none;}.jimu-widget-threatAnalysis-setting .style-selector .dijitDownArrowButton .dijitButtonContents,.jimu-widget-threatAnalysis-setting .style-selector .dijitComboBox .dijitDownArrowButton {border: none;}.jimu-widget-threatAnalysis-setting .style-selector .dijitTextBox .dijitInputInner {padding: 1px 0 0 0 !important; font-size: 12px; font-style: normal !important; height: 28px; line-height: 28px !important;}.jimu-widget-threatAnalysis-setting .style-selector .dijitSelectLabel {font-size: 12px;}.jimu-widget-threatAnalysis-setting .style-selector .dijitSelect,.jimu-widget-threatAnalysis-setting .style-selector .dijitSelect .dijitButtonContents,.jimu-widget-threatAnalysis-setting .style-selector .dijitTextBox,.jimu-widget-threatAnalysis-setting .style-selector .dijitTextBox .dijitButtonNode {background-color: transparent;}.jimu-widget-threatAnalysis-setting .style-selector .dijitSelect .dijitArrowButton {background-color: transparent;}.jimu-widget-threatAnalysis-setting .style-selector .dijitSelect .dijitInputField {padding: 0px 10px;}.jimu-widget-threatAnalysis-setting .jimu-image-chooser .display-text {width: 100%; font-size: 12px; color: #4A4A4A; letter-spacing: 0.33px; background-color: #FFF; text-align: center;}.jimu-image-chooser:hover .hint .display-text {color: #FFF;}.jimu-widget-threatAnalysis-setting .dijitTextBoxFocused {border: 1px solid #D7D7D7 !important; box-shadow: 0 0 0 0 !important;}.jimu-widget-threatAnalysis-setting .dijitTextBox .dijitInputField {padding: 0px 10px;}.jimu-widget-threatAnalysis-setting .dijitSelectFocused .dijitArrowButton .dijitArrowButtonInner {background-position: -35px 53%;}.jimu-widget-threatAnalysis-setting .text-size .text-size-group\x3e.dijitComboBox.dijitValidationTextBox {width: 80px;}.jimu-widget-threatAnalysis-setting .text-size .text-size-group\x3etable {width: 140px;}.jimu-widget-threatAnalysis-setting .halo-size .halo-size-group\x3e.dijitComboBox.dijitValidationTextBox {width: 80px;}.jimu-widget-threatAnalysis-setting .text-size .text-size-group\x3etable {width: 140px;}.jimu-widget-threatAnalysis-setting .style-selector .setting-items {height: 30px; width: 100%; margin: 10px 0; vertical-align: middle; white-space: nowrap;}.jimu-widget-threatAnalysis-setting .style-selector .setting-wapper {width: 230px;}.jimu-widget-threatAnalysis-setting .style-selector .background-btn,.jimu-widget-threatAnalysis-setting .style-selector .text-color-btn {width: 40px; height: 30px; overflow: hidden;}.jimu-widget-threatAnalysis-setting .style-selector .halo-color-btn {width: 50px; height: 30px; overflow: hidden; padding-left: 5px; padding-right: 5px;}.jimu-widget-threatAnalysis-setting .style-selector .align-group {margin-right: 8px; margin-left: -3px;}.jimu-rtl .jimu-widget-threatAnalysis-setting .style-selector .align-group {margin-right: -3px; margin-left: 8px;}.jimu-widget-threatAnalysis-setting .style-selector .font-group-btns {margin-left: 6px; margin-right: 6px;}.jimu-widget-threatAnalysis-setting .style-selector .align-btn,.jimu-widget-threatAnalysis-setting .style-selector .font-btn {height: 30px; margin: 0 3px;}.jimu-widget-threatAnalysis-setting .style-selector .font-btn {width: 30px;}.jimu-widget-threatAnalysis-setting .style-selector .align-btn {width: 30px;}.jimu-widget-threatAnalysis-setting .style-selector .image-btn {width: 120px; height: 30px; border: 1px solid #D7D7D7;}.jimu-widget-threatAnalysis-setting .style-selector .bold {background: url("../../images/B.svg") no-repeat;}.jimu-widget-threatAnalysis-setting .style-selector .bold.selected {background: url("../../images/B_selected.svg") no-repeat;}.jimu-widget-threatAnalysis-setting .style-selector .italic {background: url("../../images/I.svg") no-repeat;}.jimu-widget-threatAnalysis-setting .style-selector .italic.selected {background: url("../../images/I_selected.svg") no-repeat;}.jimu-widget-threatAnalysis-setting .style-selector .underline {background: url("../../images/U.svg") no-repeat;}.jimu-widget-threatAnalysis-setting .style-selector .underline.selected {background: url("../../images/U_selected.svg") no-repeat;}.jimu-widget-threatAnalysis-setting .switch-toggle-group {padding: 5px;}.jimu-widget-threatAnalysis-setting .switch-toggle-group .checkbox-inline {padding-left: 36px; vertical-align: top;}.jimu-widget-threatAnalysis-setting .switch-toggle-group .switch-toggle.dijitCheckBox {margin-left: -36px;}.jimu-widget-threatAnalysis-setting .switch-toggle.dijitCheckBox {height: 16px; width: 28px; border: 0 none; background: #e04f1d; position: relative; display: inline-block; cursor: pointer; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px;}.jimu-widget-threatAnalysis-setting .switch-toggle.dijitCheckBox:before {content: ""; background: #f8f8f8; position: absolute; padding: 0; height: 12px; width: 12px; left: auto; right: 2px; top: 2px; z-index: 1; -webkit-transition: right 0.3s; -moz-transition: right 0.3s; -o-transition: right 0.3s; transition: right 0.3s; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;}.jimu-widget-threatAnalysis-setting .switch-toggle.dijitCheckBox input {width: 100%; height: 100%; position: absolute; left: 0; z-index: 2;}.jimu-widget-threatAnalysis-setting .switch-toggle.dijitCheckBox.dijitCheckBoxChecked {background: #50ad4e;}.jimu-widget-threatAnalysis-setting .switch-toggle.dijitCheckBox.dijitCheckBoxChecked:before {right: 14px;}.jimu-widget-threatAnalysis-setting .halo-toggle-group {padding: 5px;}.jimu-widget-threatAnalysis-setting .halo-toggle-group .checkbox-inline {padding-left: 36px; vertical-align: top;}.jimu-widget-threatAnalysis-setting .halo-toggle-group .halo-toggle.dijitCheckBox {margin-left: -36px;}.jimu-widget-threatAnalysis-setting .halo-toggle.dijitCheckBox {height: 16px; width: 28px; border: 0 none; background: #e04f1d; position: relative; display: inline-block; cursor: pointer; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; margin-top: 6px; margin-left: 5px;}.jimu-widget-threatAnalysis-setting .halo-toggle.dijitCheckBox:before {content: ""; background: #f8f8f8; position: absolute; padding: 0; height: 12px; width: 12px; left: auto; right: 2px; top: 2px; z-index: 1; -webkit-transition: right 0.3s; -moz-transition: right 0.3s; -o-transition: right 0.3s; transition: right 0.3s; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;}.jimu-widget-threatAnalysis-setting .halo-toggle.dijitCheckBox input {width: 100%; height: 100%; position: absolute; left: 0; z-index: 2;}.jimu-widget-threatAnalysis-setting .halo-toggle.dijitCheckBox.dijitCheckBoxChecked {background: #50ad4e;}.jimu-widget-threatAnalysis-setting .halo-toggle.dijitCheckBox.dijitCheckBoxChecked:before {right: 14px;}.jimu-widget-threatAnalysis-setting .btn-add-section {display: inline-block; overflow: hidden; height: 24px; margin-left: 1px; margin-bottom: 3px; cursor: pointer; font-size: 13px; color: #538ec8; margin-top: 8px;}.jimu-widget-threatAnalysis-setting .btn-add-section .btn-add-icon {height: 100%; width: 14px; background-repeat: no-repeat; background-position: center center; background-image: url(images/add.png); display: inline-block; vertical-align: top;}.jimu-widget-threatAnalysis-setting .btn-add-section .btn-add-label {height: 100%; line-height: 24px; margin-left: 7px; text-decoration: underline; display: inline-block; vertical-align: top;}',
"*now":function(l){l(['dojo/i18n!*preload*widgets/ThreatAnalysis/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/query dojo/dom-construct dijit/form/Select dijit/_WidgetsInTemplateMixin dijit/registry jimu/BaseWidgetSetting ./symbologySettings".split(" "),function(l,g,f,h,d,m,n,p,e,q){return l([e,n],{baseClass:"jimu-widget-threatAnalysis-setting",_SettingsInstance:null,_currentSettings:null,_shakingElements:[],postMixInProperties:function(){this.nls=f.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments);
this.config.threatAnalysis||(this.config.threatAnalysis={});this._createSettings()},setConfig:function(c){this.config=c},getConfig:function(){if(!this._SettingsInstance.validInputs())return!1;this._SettingsInstance.onSettingsChanged();for(var c in this._currentSettings)this.config.threatAnalysis.symbology[c]=this._currentSettings[c];return this.config},destroy:function(){this.inherited(arguments)},_createSettings:function(){this._SettingsInstance=new q({nls:this.nls,config:this.config,appConfig:this.appConfig},
d.create("div",{},this.SettingsNode));this.own(this._SettingsInstance.on("settingsChanged",f.hitch(this,function(c){this._currentSettings=c})));this._SettingsInstance.startup()},_checkValidValues:function(){var c=h(".dijitSpinner.dijitNumberTextBox.dijitValidationTextBox",this._SettingsInstance.domNode);return g.every(c,function(b){var c=p.byNode(b);if(c){if(c.value>=c.constraints.min&&c.value<=c.constraints.max)return!0;f.hitch(this,this._shake(b,16));return!1}},this)},_shake:function(c,b){function d(){if(15>
a){c.style.transform="translate(0px, 0px)";b-=f;var h=e(-b,b),k=e(-b,b);c.style.transform="translate("+h+"px, "+k+"px)";a+=1;requestAnimationFrame(d)}15<=a&&(c.style.transform="translate(0, 0)",g._shakingElements.splice(g._shakingElements.indexOf(c),1))}var a=1,f=b/15,e=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};if(-1===this._shakingElements.indexOf(c)){this._shakingElements.push(c);var g=this;d()}}})});