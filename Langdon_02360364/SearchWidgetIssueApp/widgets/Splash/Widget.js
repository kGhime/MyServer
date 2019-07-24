// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Splash/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Splash/Widget.html":'\x3cdiv class\x3d"jimu-widget-splash-desktop" data-dojo-attach-point\x3d"splashDesktop"\x3e\r\n  \x3cdiv class\x3d"overlay" data-dojo-attach-point\x3d"overlayNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"envelope buried" data-dojo-attach-point\x3d"envelopeNode"\x3e\r\n    \x3cdiv class\x3d"splash-container splash-bg" data-dojo-attach-point\x3d"splashContainerBackground"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"splash-container" data-dojo-attach-point\x3d"splashContainerNode"\x3e\r\n      \x3cdiv class\x3d"custom-content" data-dojo-attach-point\x3d"customContentNode" tabindex\x3d"0" role\x3d"document" style\x3d"font-family: \'Verdana\',\'Avenir Light\'"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"footer" data-dojo-attach-point\x3d"footerNode"\x3e\r\n        \x3cdiv class\x3d"confirmcheck-container" data-dojo-attach-point\x3d"confirmCheckContainer"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"confirmCheck"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cbutton class\x3d"jimu-btn jimu-float-trailing" data-dojo-attach-point\x3d"okNode" data-dojo-attach-event\x3d"onclick:onOkClick, onkeydown:onOkKeydown" tabindex\x3d"0"\x3e\x3c/button\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Splash/css/style.css":".jimu-widget-splash{position: absolute !important; top: 0 !important; bottom: 0 !important; left: 0 !important; right: 0 !important; margin: auto !important; z-index: 130 !important;}.jimu-widget-splash .jimu-loading-shelter{z-index: 131;}.jimu-widget-splash .buried{visibility: hidden;}.jimu-widget-splash .overlay{top: 0; left: 0; width: 100%; height: 100%; position: absolute; background-color:rgba(0,0,0,0.5);}.jimu-widget-splash-desktop .splash-container .jimu-checkbox,.jimu-widget-splash-mobile .splash-container .jimu-checkbox{font-size: 14px; color: #fff; overflow: auto; max-height: 50px; min-height: 25px; margin-top: 20px; margin-bottom: 10px; display: block;}.jimu-widget-splash-desktop .splash-container .jimu-checkbox .label,.jimu-widget-splash-mobile .splash-container .jimu-checkbox .label{white-space: normal; text-indent: 5px; margin-left: 5px; color: #fff; float: none !important; display: inline; vertical-align: middle;}.jimu-rtl .jimu-widget-splash-desktop .splash-container .jimu-checkbox .label,.jimu-rtl .jimu-widget-splash-mobile .splash-container .jimu-checkbox .label{margin-left: auto; margin-right: 5px;}.jimu-widget-splash-desktop .envelope{}.jimu-widget-splash-desktop .envelope,.jimu-widget-splash-mobile .envelope{position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;}.jimu-widget-splash-desktop .splash-container .jimu-btn,.jimu-widget-splash-mobile .splash-container .jimu-btn{height: 33px; padding: 0; width: 60px; line-height: 33px;}.jimu-rtl .jimu-widget-splash-desktop .splash-container .jimu-btn,.jimu-rtl .jimu-widget-splash-mobile .splash-container .jimu-btn{left: 0; right: auto;}.jimu-widget-splash-desktop .splash-container .enable-btn,.jimu-widget-splash-mobile .splash-container .enable-btn{background-color: #518dca;}.jimu-widget-splash-desktop .splash-container .disable-btn,.jimu-widget-splash-mobile .splash-container .disable-btn{background-color: #a0acbf !important; color: rgb(255, 255, 255) !important;}.jimu-widget-splash-desktop .splash-container .jimu-checkbox .checkbox,.jimu-widget-splash-mobile .splash-container .jimu-checkbox .checkbox{background-color: #fff;}.jimu-widget-splash-desktop .envelope{border: 1px solid rgba(255,255,255,0.3);}.jimu-widget-splash-desktop .splash-container,.jimu-widget-splash-desktop .splash-bg{position: absolute; display: inline-block; margin: auto; top: 0; left: 0; bottom: 0; right: 0; overflow:auto;}.jimu-widget-splash-desktop .splash-container{z-index: 1; overflow: hidden;}.jimu-widget-splash .norepeat{background: no-repeat;}.jimu-widget-splash .fill {background-size: cover !important;}.jimu-widget-splash .fit {background-size: contain !important;}.jimu-widget-splash .stretch {background-size: 100% 100% !important;}.jimu-widget-splash .center {background-size: initial !important;}.jimu-widget-splash .tile {background-size: initial !important;}.jimu-widget-splash-desktop .splash-bg{z-index: 0;}.jimu-widget-splash-desktop .custom-content{margin: 20px; color: #fff; overflow-x: hidden; overflow-y: auto;}.jimu-widget-splash-desktop .splash-container .footer{position: absolute; bottom: 10px; width: 100%;}.jimu-widget-splash .footer .confirmcheck-container{margin: 0 20px;}.jimu-widget-splash .footer .confirmcheck-container .jimu-checkbox .checkbox{margin: 2px;}.jimu-widget-splash .footer .confirmcheck-container .jimu-checkbox .dijitCheckBoxFocused{box-shadow: 0 0 0px 2px rgba(136, 176, 245, 1);}.jimu-widget-splash .footer .jimu-btn {margin: 0 20px 2px 20px;}.jimu-widget-splash .footer .jimu-btn:focus {box-shadow: 0 0 0px 2px rgba(136, 176, 245, 1);}",
"*now":function(l){l(['dojo/i18n!*preload*widgets/Splash/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/keys dojo/query dojo/cookie dijit/_WidgetsInTemplateMixin jimu/BaseWidget dojo/topic jimu/dijit/CheckBox jimu/utils esri/lang jimu/dijit/LoadingShelter dojo/Deferred".split(" "),function(l,e,b,k,g,m,h,q,r,n,t,d,p,u,v){return l([r,q],{baseClass:"jimu-widget-splash",_hasContent:null,_requireConfirm:null,_isClosed:!1,postCreate:function(){this.inherited(arguments);b.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);this.shelter=
new u({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();this._hasContent=this.config.splash&&this.config.splash.splashContent;this._requireConfirm=this.config.splash&&this.config.splash.requireConfirm;this._showOption=this.config.splash&&this.config.splash.showOption;this._confirmEverytime=this.config.splash&&this.config.splash.confirmEverytime;this._hasContent&&(this.customContentNode.innerHTML=this.config.splash.splashContent);if(this._requireConfirm||this._showOption){var a=
"";this._requireConfirm?(a=this.config.splash.confirm.text,b.addClass(this.okNode,"disable-btn")):(a=this.nls.notShowAgain,b.addClass(this.okNode,"enable-btn"));this.confirmCheck=new t({label:d.stripHTML(a),checked:!1},this.confirmCheck);this.own(k(this.confirmCheck,"change",e.hitch(this,this.onCheckBoxClick)));this.confirmCheck.startup()}else b.setStyle(this.confirmCheck,"display","none"),b.addClass(this.okNode,"enable-btn")},onOpen:function(){if(!d.isInConfigOrPreviewWindow()){var a=this._getCookieKey(),
a=h(a);p.isDefined(a)&&"false"===a.toString()&&this.close()}this._requireConfirm||this._showOption?this.confirmCheck.focus():this.okNode.focus();this._eventShow()},startup:function(){this.inherited(arguments);this.shelter.show();this._normalizeDomNodePosition();this._setConfig();this.own(k(this.domNode,"keydown",e.hitch(this,function(a){b.hasClass(a.target,this.baseClass)&&a.keyCode===g.ESCAPE&&(this._requireConfirm||this.close())})));this.own(k(this.splashDesktop,"keydown",e.hitch(this,function(a){b.hasClass(a.target,
"jimu-widget-splash-desktop")&&(a.keyCode===g.TAB&&a.preventDefault(),(a.keyCode===g.ENTER||!a.shiftKey&&a.keyCode===g.TAB)&&d.focusFirstFocusNode(this.domNode))})));var a=d.getFocusNodesInDom(this.domNode);d.initFirstFocusNode(this.domNode,a[0]);d.initLastFocusNode(this.domNode,this.okNode);this._onlyFocus=!0;this.own(k(this.customContentNode,"focus",e.hitch(this,function(){this._onlyFocus?this._onlyFocus=!1:(this.customContentNode.scrollTop=0,b.setStyle(this.customContentNode,"display","none"),
this.customContentNode.blur(),b.setStyle(this.customContentNode,"display","block"),setTimeout(e.hitch(this,function(){this._onlyFocus=!0;this.customContentNode.focus()}),30))})));d.setWABLogoDefaultAlt(this.customContentNode)},_setOkNodeAriaLabel:function(){var a=this.okNode.innerHTML;this._requireConfirm&&!this.confirmCheck.getValue()&&(a=a+" "+window.jimuNls.common.disabled);b.attr(this.okNode,"aria-label",a)},_setConfig:function(){this._setWidthForOldVersion().then(e.hitch(this,function(){this._setSizeFromConfig();
var a=this.config.splash.button;"undefined"!==typeof a&&("undefined"!==typeof a.color&&(b.setStyle(this.okNode,"backgroundColor",a.color),b.setStyle(this.okNode,"color",d.invertColor(a.color))),"undefined"!==typeof a.transparency&&b.setStyle(this.okNode,"opacity",1-a.transparency));this.okNode.innerHTML=this.config.splash.button.text||this.nls.ok;b.attr(this.okNode,"title",this.config.splash.button.text||this.nls.ok);this._setOkNodeAriaLabel();var c=this.config.splash.background;if("undefined"!==
typeof c)if("image"===c.mode&&"undefined"!==typeof c.image){var f=a="",a="url("+d.processUrlInWidgetConfig(c.image,this.folderUrl)+") center center ",f="no-repeat",c=c.type;"undefined"!==typeof c&&(b.addClass(this.splashContainerNode,c),"tile"===c&&(f="repeat"));b.setStyle(this.splashContainerNode,"background",a+f)}else"color"===c.mode&&"undefined"!==typeof c.color&&("undefined"!==typeof c.color&&b.setStyle(this.splashContainerBackground,"backgroundColor",c.color),"undefined"!==typeof c.transparency&&
b.setStyle(this.splashContainerBackground,"opacity",1-c.transparency));a=this.config.splash.confirm;"undefined"!==typeof a&&this.domNode&&(f=m(".label",this.domNode)[0],"undefined"!==typeof a.color&&f&&b.setStyle(f,"color",a.color),"undefined"!==typeof a.transparency&&f&&b.setStyle(f,"opacity",1-a.transparency));this.contentVertical="undefined"!==typeof this.config.splash.contentVertical?this.config.splash.contentVertical:"top";d.isInConfigOrPreviewWindow()||(a=this._getCookieKey(),a=h(a),p.isDefined(a)&&
"false"===a.toString()&&this.close());this.resize();this.own(k(window,"resize",e.hitch(this,function(){this.resize()})));this._resizeContentImg();b.removeClass(this.envelopeNode,"buried");this.shelter.hide()}))},_normalizeDomNodePosition:function(){b.setStyle(this.domNode,"top",0);b.setStyle(this.domNode,"left",0);b.setStyle(this.domNode,"right",0);b.setStyle(this.domNode,"bottom",0)},setPosition:function(a){this.position=a;b.place(this.domNode,window.jimuConfig.layoutId);this._normalizeDomNodePosition();
this.started&&this.resize()},resize:function(){this._changeStatus()},_resizeContentImg:function(){if(this._hasContent&&!this._isClosed){var a=b.getContentBox(this.envelopeNode);b.empty(this.customContentNode);var c=b.toDom(this.config.splash.splashContent);b.place(c,this.customContentNode);this.customContentNode.nodeType&&1===this.customContentNode.nodeType&&(c=m("img",this.customContentNode))&&c.length&&c.style({maxWidth:a.w-40-20+"px",maxHeight:a.h-40+"px"})}},_changeStatus:function(){window.appInfo.isRunInMobile?
(b.setStyle(this.envelopeNode,"height","100%"),b.setStyle(this.envelopeNode,"width","100%")):this._setSizeFromConfig();this._resizeCustomContent();this._resizeContentImg()},_getNodeStylePx:function(a,c){return a&&c?parseInt(b.getStyle(a,c),10):0},_resizeCustomContent:function(){var a=b.getContentBox(this.splashContainerNode),c=this.customContentNode.scrollHeight,f=b.getMarginBox(this.footerNode),d=this._getNodeStylePx(this.customContentNode,"margin-bottom"),e=this._getNodeStylePx(this.footerNode,
"bottom"),a=a.h-(f.h+e);!0===c>=a||window.appInfo.isRunInMobile?b.setStyle(this.customContentNode,"height",a-d+"px"):(b.setStyle(this.customContentNode,"height","auto"),this._moveContentToMiddle({contentSpace:a,customContentScrollheight:c}))},_moveContentToMiddle:function(a){var c=(a.contentSpace-10)/2;"middle"===this.contentVertical&&(a=a.customContentScrollheight/2-c,0>a?b.setStyle(this.customContentNode,"marginTop",Math.abs(a)+10+"px"):b.setStyle(this.customContentNode,"marginTop","10px"))},onCheckBoxClick:function(){this._requireConfirm&&
(this.confirmCheck.getValue()?(b.addClass(this.okNode,"enable-btn"),b.removeClass(this.okNode,"disable-btn")):(b.addClass(this.okNode,"disable-btn"),b.removeClass(this.okNode,"enable-btn")),this._setOkNodeAriaLabel())},_getCookieKey:function(){return"isfirst_"+encodeURIComponent(d.getAppIdFromUrl())},onOkClick:function(){var a=this._getCookieKey();this._requireConfirm?this.confirmCheck.getValue()&&(d.isInConfigOrPreviewWindow()||this._confirmEverytime?h(a,null,{expires:-1}):h(a,!1,{expires:1E3,path:"/"}),
this.close()):(this._showOption?!d.isInConfigOrPreviewWindow()&&this.confirmCheck.getValue()&&h(a,!1,{expires:1E3,path:"/"}):h(a,null,{expires:-1}),this.close())},onOkKeydown:function(a){if(a.keyCode===g.ENTER||a.keyCode===g.SPACE)this.onOkClick(),!this._requireConfirm||this._requireConfirm&&this.confirmCheck.getValue()?d.trapToNextFocusContainer(this.domNode,!0):a.preventDefault()},close:function(){this._isClosed=!0;this._eventHide();this.widgetManager.closeWidget(this)},_setSizeFromConfig:function(){var a=
this.config.splash.size;if("undefined"!==typeof a&&"object"===typeof a){var c=a.percent,d=a.wh;"percent"===a.mode&&"undefined"!==typeof c?(b.setStyle(this.envelopeNode,"width",c),b.setStyle(this.envelopeNode,"height",c)):"wh"===a.mode&&"undefined"!==typeof d&&(this._setWidthInCurrentScreen(d),this._setHeightInCurrentScreen(d))}},_setWidthInCurrentScreen:function(a){var c=window.innerWidth;!window.appInfo.isRunInMobile&&a.w<=c?b.setStyle(this.envelopeNode,"width",a.w+"px"):b.setStyle(this.envelopeNode,
"width","100%")},_setHeightInCurrentScreen:function(a){var c=window.innerHeight;!window.appInfo.isRunInMobile&&a.h<=c?b.setStyle(this.envelopeNode,"height",a.h+"px"):b.setStyle(this.envelopeNode,"height","100%")},_setWidthForOldVersion:function(){var a=new v,b=this.config.splash.size;if(!0===("wh"===b.mode&&"undefined"!==typeof b.wh&&null===b.wh.h))return d.getEditorContentHeight(this.config.splash.splashContent,this.domNode,{contentWidth:560,contentMarginTop:20,footerHeight:98}).then(e.hitch(this,
function(a){return b.wh.h=a}));a.resolve();return a},_eventShow:function(){setTimeout(e.hitch(this,function(){n.publish("splashPopupShow")}),800)},_eventHide:function(){n.publish("splashPopupHide")}})});