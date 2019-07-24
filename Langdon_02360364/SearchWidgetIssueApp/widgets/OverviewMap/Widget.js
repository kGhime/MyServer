// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/OverviewMap":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/html dojo/has dojo/dom-class dojo/dom-style dojo/dnd/Moveable dijit/_Widget dijit/_Templated ../map ../geometry/Point ../geometry/ScreenPoint ../layers/TiledMapServiceLayer ../layers/DynamicMapServiceLayer ../layers/VectorTileLayer ../layers/ArcGISTiledMapServiceLayer ../layers/ArcGISDynamicMapServiceLayer ../layers/ArcGISImageServiceLayer ../layers/OpenStreetMapLayer ../virtualearth/VETiledLayer ../kernel ../config ../domUtils dojo/text!./templates/OverviewMap.html dojo/i18n!../nls/jsapi".split(" "),
function(l,d,f,n,m,g,p,z,A,w,y,t,u,h,b,c,a,k,x,B,q,D,C,r,E,F){l=l([A,w],{declaredClass:"esri.dijit.OverviewMap",widgetsInTemplate:!0,templateString:E,constructor:function(e,a){d.mixin(this,F.widgets.overviewMap);e=e||{};if(e.map){var c={};a&&(this._detached=!0,c=n.coords(a,!0));this.map=e.map;this.baseLayer=e.baseLayer;this.width=e.width||c.w||this.map.width/4;this.height=e.height||c.h||this.map.height/4;this.attachTo=e.attachTo||"top-right";this.expandFactor=e.expandFactor||2;this.color=e.color||
"#000000";this.opacity=e.opacity||.5;this.maximizeButton=!!e.maximizeButton;this.visible=!!e.visible;if(this.map.loaded)this._initialSetup();else var b=f.connect(this.map,"onLoad",this,function(){f.disconnect(b);b=null;this._initialSetup()});this._detached&&(this.visible=!0);this._maximized=!1}else console.error("esri.dijit.OverviewMap: "+this.NLS_noMap)},startup:function(){this.inherited(arguments);(!this.domNode.parentNode||9>m("ie")&&"DIV"!==this.domNode.parentNode.nodeName)&&this.map.container.appendChild(this.domNode);
this._detached?(p.set(this._body,"display","block"),p.set(this._controllerDiv,"display","none"),p.set(this._maximizerDiv,"display","none"),this.map.loaded?this._initialize():f.connect(this.map,"onLoad",this,this._initialize)):("bottom"===this.attachTo.split("-")[0]&&this.domNode.insertBefore(this._maximizerDiv,this._controllerDiv),this.maximizeButton||g.add(this._maximizerDiv,"ovwDisabledButton"),g.add(this.domNode,{"top-left":"ovwTL","top-right":"ovwTR","bottom-left":"ovwBL","bottom-right":"ovwBR"}[this.attachTo]),
g.add(this._controllerDiv,"ovwShow"),g.add(this._maximizerDiv,"ovwMaximize"),this.visible&&this.map.loaded&&(this.visible=!1,this.show()));p.set(this._focusDiv,"opacity",this.opacity)},destroy:function(){this._deactivate();this.overviewMap&&this.overviewMap.destroy();this.overviewMap=this.baseLayer=null;this.inherited(arguments)},resize:function(e){!e||0>=e.w||0>=e.h||this._resize(e.w,e.h)},show:function(){if(!this.visible){var e=this._controllerDiv;e.title=this.NLS_hide;g.remove(e,"ovwShow");g.add(e,
"ovwHide");r.show(this._body);r.show(this._maximizerDiv);this._initialize();this.visible=!0}},hide:function(){if(this.visible){var e=this._controllerDiv;e.title=this.NLS_show;g.remove(e,"ovwHide");g.add(e,"ovwShow");this._maximized&&this._maximizeHandler();r.hide(this._body);r.hide(this._maximizerDiv);this._deactivate();this.visible=!1}},_initialSetup:function(){if(this._mainMapLayer=this.map.getLayer(this.map.layerIds[0])){var e=this.baseLayer||this._mainMapLayer,v=this.map.spatialReference,r=e.spatialReference;
if(r.wkid!==v.wkid&&r.wkt!==v.wkt)console.error("esri.dijit.OverviewMap: "+this.NLS_invalidSR);else{v=e.declaredClass;if(e instanceof h)if(-1!==v.indexOf("VETiledLayer"))this.baseLayer=new q({resourceInfo:e.getResourceInfo(),culture:e.culture,mapStyle:e.mapStyle,bingMapsKey:e.bingMapsKey});else if(-1!==v.indexOf("OpenStreetMapLayer"))this.baseLayer=new B({tileServers:e.tileServers});else if(-1!==v.indexOf("WebTiledLayer")){var v=e.initialExtent,r=e.fullExtent,d=e.tileInfo;this.baseLayer=new e.constructor(e.urlTemplate,
{initialExtent:v&&new v.constructor(v.toJson()),fullExtent:r&&new r.constructor(r.toJson()),tileInfo:d&&new d.constructor(d.toJson()),tileServers:e.tileServers&&e.tileServers.slice(0)})}else this.baseLayer=new a(e.url,{resourceInfo:e.getResourceInfo()});else if(e instanceof b)-1!==v.indexOf("ArcGISImageServiceLayer")?this.baseLayer=new x(e.url):(this.baseLayer=new k(e.url),this.baseLayer.setImageFormat("png24"));else if(e instanceof c)this.baseLayer=new a("https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
{});else{console.error("esri.dijit.OverviewMap: "+this.NLS_invalidType);return}!this._detached&&this.visible&&this._controllerDiv&&(e=function(){this.visible=!1;this.show()},this.baseLayer.loaded?e.call(this):f.connect(this.baseLayer,"onLoad",this,e))}}else console.error("esri.dijit.OverviewMap: "+this.NLS_noLayer)},_visibilityHandler:function(){this.visible?this.hide():this.show()},_maximizeHandler:function(){var e=this._maximizerDiv;this._maximized?(e.title=this.NLS_maximize,g.remove(e,"ovwRestore"),
g.add(e,"ovwMaximize"),this._resize(this.width,this.height)):(e.title=this.NLS_restore,g.remove(e,"ovwMaximize"),g.add(e,"ovwRestore"),this._resize(this.map.width,this.map.height));this._maximized=!this._maximized},_resize:function(e,a){p.set(this._body,{width:e+"px",height:a+"px"});e=C.defaults.map.panDuration;a=this.overviewMap;C.defaults.map.panDuration=0;a&&(a.resize(!0),a.centerAt(this._focusExtent.getCenter()));C.defaults.map.panDuration=e},_initialize:function(){if(this.overviewMap)this._activate();
else{var a,c;c=9>m("ie")?this._body.firstChild:this._body.firstElementChild;this.overviewMap=a=new y(c,{slider:!1,showAttribution:!1,logo:!1,lods:this._overviewLods,wrapAround180:this.map.wrapAround180});f.connect(a,"onLoad",this,function(){this._map_resize_override=d.hitch(a,this._map_resize_override);a.disableMapNavigation();this._activate()});a.addLayer(this.baseLayer)}},_activate:function(){var a=this.map,c=this.overviewMap;this._moveableHandle=new z(this._focusDiv);this._soeConnect=f.connect(a,
"onExtentChange",this,this._syncOverviewMap);this._ufoConnect=f.connect(a,"onPan",this,this._updateFocus);this._oecConnect=f.connect(c,"onExtentChange",this,this._ovwExtentChangeHandler);this._opaConnect=f.connect(c,"onPan",this,this._ovwPanHandler);this._ozsConnect=f.connect(c,"onZoomStart",this,function(){r.hide(this._focusDiv)});this._ozeConnect=f.connect(c,"onZoomEnd",this,function(){r.show(this._focusDiv)});this._omsConnect=f.connect(this._moveableHandle,"onMoveStop",this,this._moveStopHandler);
this._syncOverviewMap(a.extent,null,null,null)},_deactivate:function(){f.disconnect(this._soeConnect);f.disconnect(this._ufoConnect);f.disconnect(this._oecConnect);f.disconnect(this._opaConnect);f.disconnect(this._ozsConnect);f.disconnect(this._ozeConnect);f.disconnect(this._omsConnect);this._moveableHandle&&(this._moveableHandle.destroy(),this._moveableHandle=null)},_syncOverviewMap:function(a,c,b,k){this._suspendPanHandling?this._suspendPanHandling=!1:(this._focusExtent=a,this.overviewMap.setExtent(a.expand(this.expandFactor),
!0))},_updateFocus:function(a){this._suspendPanHandling||(this._focusExtent=a,this._drawFocusDiv(a))},_drawFocusDiv:function(a,c){var b=this.overviewMap,e=b.toScreen(new t(a.xmin,a.ymax,b.spatialReference)),b=b.toScreen(new t(a.xmax,a.ymin,b.spatialReference));a=b.x-e.x;var b=b.y-e.y,k=!0;a>this.overviewMap.width&&b>this.overviewMap.height&&(k=!1);p.set(this._focusDiv,{left:e.x+(c?c.x:0)+"px",top:e.y+(c?c.y:0)+"px",width:a+"px",height:b+"px",display:k?"block":"none"})},_moveStopHandler:function(a){var c=
this._moveableHandle.node.style;a=this._focusExtent;var b=this.overviewMap,c=b.toMap(new u(parseInt(c.left,10),parseInt(c.top,10))),e=new t(a.xmin,a.ymax,b.spatialReference);this._focusExtent=a.offset(c.x-e.x,c.y-e.y);this._maximized?this._maximizeHandler():b.centerAt(this._focusExtent.getCenter());this._suspendPanHandling=!0;this.map.setExtent(this._focusExtent)},_ovwExtentChangeHandler:function(){this._drawFocusDiv(this._focusExtent)},_ovwPanHandler:function(a,c){this._drawFocusDiv(this._focusExtent,
c)}});m("extend-esri")&&d.setObject("dijit.OverviewMap",l,D);return l})},"esri/virtualearth/VETiledLayer":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/_base/array dojo/_base/config dojo/has dojo/string dojo/_base/Deferred ../kernel ../urlUtils ../SpatialReference ../layers/TileInfo ../layers/TiledMapServiceLayer ../geometry/Extent ../request".split(" "),function(l,d,f,n,m,g,p,z,A,w,y,t,u,h,b){l=l(u,{declaredClass:"esri.virtualearth.VETiledLayer",constructor:function(c){try{if(c=
d.mixin({bingMapsKey:null,culture:"en-US"},c||{}),this.url=w.getProtocolForWebResource()+"//dev.virtualearth.net/REST/v1",this._url=w.urlToObject(this.url),this.spatialReference=new y({wkid:102100}),this.tileInfo=new t({rows:256,cols:256,dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},
{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,
scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.initialExtent=
this.fullExtent=new h(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new y({wkid:102100})),d.mixin(this,c),this.hasAttributionData=this.showAttribution,this._initLayer=d.hitch(this,this._initLayer),this._errorHandler=d.hitch(this,this._errorHandler),this._getTileInfo=d.hitch(this,this._getTileInfo),this.bingMapsKey)this._getTileInfo();else throw Error("BingMapsKey must be provided.");}catch(a){throw this.onError(a),a;}},_unsetMap:function(c,a){this.inherited("_unsetMap",arguments)},
_getTileInfo:function(){if(this.mapStyle){var c=this._url.path+"/Imagery/Metadata/"+this.mapStyle,a=window.location.protocol;if(this.bingMapsKey){var k=this.resourceInfo;!this.loaded&&k?this._initLayer(k):b({url:c,content:d.mixin({},{uriScheme:"https:"===a?"https":"http",key:this.bingMapsKey,ss:!0,c:this.culture,include:this.hasAttributionData?"imageryProviders":null}),callbackParamName:"jsonp",load:this._initLayer,error:this._errorHandler})}}},_initLayer:function(c,a){if(200!==c.statusCode)a=Error(),
a.code=c.statusCode,a.message=c.statusDescription,a.details=c.errorDetails,a.authenticationResultCode=c.authenticationResultCode,this.onError(a);else try{this.resourceInfo=f.toJson(c);var b=c.resourceSets[0].resources[0],h=b.imageUrl.replace("{","${");this.tileServers=n.map(b.imageUrlSubdomains,function(a){var c=w.getProtocolForWebResource();return p.substitute(h,{subdomain:a}).replace("http:",c)});this._tsLength=this.tileServers.length;if(this.loaded)this.refresh(),this.onMapStyleChange();else{this.copyright=
this.copyright||"\x26copy; 2017 Microsoft Corporation and its data suppliers";this.loaded=!0;this.onLoad(this);var B=this.loadCallback;B&&(delete this.loadCallback,B(this))}}catch(q){this.onError(q)}},getAttributionData:function(){var c=new z,a=f.fromJson(this.resourceInfo),b;this.hasAttributionData&&a&&(b=d.getObject("resourceSets.0.resources.0.imageryProviders",!1,a));b?c.callback({contributors:b}):(a=Error("Layer does not have attribution data"),a.log=m.isDebug,c.errback(a));return c},getTileUrl:function(c,
a,b){return p.substitute(this.tileServers[a%this._tsLength].replace(/\{/g,"${"),{quadkey:this._getQuadKey(c,a,b),culture:this.culture,token:this.bingMapsKey})},_getQuadKey:function(c,a,b){var k="",h,f;for(f=c;0<f;f--)c="0",h=1<<f-1,0!=(b&h)&&c++,0!=(a&h)&&(c++,c++),k+=c;return k},setMapStyle:function(c){this.mapStyle=c;this._getTileInfo()},setCulture:function(c){this.culture=c;this._getTileInfo()},setBingMapsKey:function(c){this.bingMapsKey=c},onMapStyleChange:function(){}});d.mixin(l,{MAP_STYLE_AERIAL:"aerial",
MAP_STYLE_AERIAL_WITH_LABELS:"aerialWithLabelsOnDemand",MAP_STYLE_ROAD:"roadOnDemand"});g("extend-esri")&&d.setObject("virtualearth.VETiledLayer",l,A);return l})},"widgets/OverviewMap/utils":function(){define("dojo/_base/lang dojo/_base/array dojo/string dojo/Deferred esri/lang esri/request dojo/_base/url esri/layers/TileInfo jimu/portalUtils esri/layers/ArcGISTiledMapServiceLayer esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/virtualearth/VETiledLayer esri/layers/OpenStreetMapLayer esri/layers/ImageParameters".split(" "),
function(l,d,f,n,m,g,p,z,A,w,y,t,u,h,b){var c={TYPE:{BASE_MAP:"baseMap",ARCGIS_TILED_MAP:"tiledMapService",ARCGIS_DYNAMIC_MAP_SERVICE:"dynamicMapService",ARCGIS_IMAGE_SERVICE:"imageService",OSM:"openStreetMap",BING_ROAD:"bingMapsRoad",BING_AERIAL:"bingMapsAerial",BING_HYBRID:"bingMapsHybrid"},createBaseLayer:function(a,k,f){var d=new n,q=null,x=a.url,g=a.type;a=a.veLayerInfo;g===c.TYPE.BASE_MAP?d.resolve({layer:"BaseMap"}):g===c.TYPE.ARCGIS_TILED_MAP?c.valid.isArcGISLayersValid(x,k,g).then(function(a){a&&
!0===a.res?(q=new w(x),d.resolve({layer:q})):d.resolve({layer:null,err:a.err})},function(a){d.resolve({res:!1,err:a})}):g===c.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?c.valid.isArcGISLayersValid(x,k,g).then(function(a){if(a&&!0===a.res){a=a.info;var c={};a&&a.supportedImageFormatTypes&&-1!==a.supportedImageFormatTypes.indexOf("PNG24")&&(c.imageParameters=new b,c.imageParameters.format="png24");q=new y(x,c);d.resolve({layer:q})}else d.resolve({layer:null,err:a.err})},function(a){d.resolve({res:!1,err:a})}):
g===c.TYPE.ARCGIS_IMAGE_SERVICE?c.valid.isArcGISLayersValid(x,k,g).then(function(a){a&&!0===a.res?(q=new t(x,{}),d.resolve({layer:q})):d.resolve({layer:null,err:a.err})},function(a){d.resolve({res:!1,err:a})}):g===c.TYPE.OSM?(q=new h(x,{}),d.resolve({layer:q})):g!==c.TYPE.BING_ROAD&&g!==c.TYPE.BING_AERIAL&&g!==c.TYPE.BING_HYBRID||!a?d.resolve({layer:null}):(k=c.layers.getBingMapKey(f),k&&a.isKeyInPortal||(k="__invalidKey",console.error("OverviewMap Error: BingMapsKey must be provided")),q=new u({bingMapsKey:k,
mapStyle:c.layers._getVEStyle(g)}),d.resolve({layer:q}));return d},layers:{_getLayerInfoSR:function(a){return a.spatialReference||a.extent&&a.extent.spatialReference},_getTileServers:function(a){var c=[],b=new p(a.url);if(a.subDomains&&0<a.subDomains.length&&1<b.authority.split(".").length){var h;d.forEach(a.subDomains,function(a){-1<b.authority.indexOf("${subDomain}")?h=b.scheme+"://"+f.substitute(b.authority,{subDomain:a})+"/":-1<b.authority.indexOf("{subDomain}")&&(h=b.scheme+"://"+b.authority.replace(/\{subDomain\}/gi,
a)+"/");c.push(h)},this)}return c&&0<c.length?c:null},_getVEStyle:function(a){switch(a){case c.TYPE.BING_AERIAL:return u.MAP_STYLE_AERIAL;case c.TYPE.BING_HYBRID:return u.MAP_STYLE_AERIAL_WITH_LABELS;case c.TYPE.BING_ROAD:return u.MAP_STYLE_ROAD;default:return u.MAP_STYLE_AERIAL}},fetchLayerInfo:function(a){var c=new n;g({url:a,handleAs:"json",callbackParamName:"callback",timeout:15E3,content:{f:"json"}}).then(l.hitch(this,function(a){c.resolve(a)}),function(a){c.reject(a)});return c},getBingMapKey:function(a){return(a=
window.portalSelf||a&&A.getPortal(a.appConfig.portalUrl))&&a.bingKey?a.bingKey:""}},valid:{baseLayerVerification:function(a,b){var h=new n,d=b.spatialReference;c.createBaseLayer(a,b).then(function(a){if(a.layer){var b=c.layers._getLayerInfoSR(a.layer);c.valid.sameSpatialReference(d,b)||"BaseMap"===a.layer?h.resolve({res:!0}):h.resolve({res:!1})}else h.resolve({res:!1,err:a.err})},function(a){h.resolve({res:!1,err:a})});return h},ArcGISLayersTypeVerification:function(a,b,h){a=a.toLowerCase();if(0<
a.indexOf("/featureserver")||0<a.indexOf("/mapserver"))if(!b||"string"!==typeof b.type||"Feature Layer"!==b.type&&"Table"!==b.type){if(0<a.indexOf("/featureserver"))return!1;if(0<a.indexOf("/mapserver"))return b.tileInfo?h===c.TYPE.ARCGIS_TILED_MAP||h===c.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1:h===c.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1}else return!1;else if(0<a.indexOf("/imageserver"))return h===c.TYPE.ARCGIS_IMAGE_SERVICE?!0:!1},isArcGISLayersValid:function(a,b,h){var d=new n;c.layers.fetchLayerInfo(a).then(function(f){var g=
null,k=null,g=c.layers._getLayerInfoSR(f),k=b&&b.spatialReference;g&&k&&c.valid.sameSpatialReference(k,g)?!0===c.valid.ArcGISLayersTypeVerification(a,f,h)?d.resolve({res:!0,info:f}):d.resolve({res:!1,err:"layerType"}):g&&k&&!c.valid.sameSpatialReference(k,g)?d.resolve({res:!1,err:"wkid"}):d.resolve({res:!1})},function(a){d.resolve({res:!1,err:a})});return d},tileInfoStr:function(a){try{return new z(JSON.parse(a)),!0}catch(k){return k}},isHaveBingKey:function(){return c.layers.getBingMapKey()?!0:!1},
sameSpatialReference:function(a,b){var c=[102113,102100,3857,4326];return a&&b&&m.isDefined(a.wkid)&&m.isDefined(b.wkid)&&-1!==c.indexOf(a.wkid)&&-1!==c.indexOf(b.wkid)||a&&b&&(m.isDefined(a.wkid)&&m.isDefined(b.wkid)&&a.wkid===b.wkid||m.isDefined(a.latestWkid)&&m.isDefined(b.wkid)&&a.latestWkid===b.wkid||m.isDefined(a.wkid)&&m.isDefined(b.latestWkid)&&a.wkid===b.latestWkid||m.isDefined(a.latestWkid)&&m.isDefined(b.latestWkid)&&a.latestWkid===b.latestWkid)||a&&b&&m.isDefined(a.wkt)&&m.isDefined(b.wkt)&&
a.wkt===b.wkt?!0:!1}}};return c})},"widgets/OverviewMap/a11y/Widget":function(){define(["dojo/_base/lang","dojo/on","dojo/_base/html","jimu/utils","dojo/keys"],function(l,d,f,n,m){return{a11y_init:function(){f.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);f.setAttr(this.overviewMapDijit._controllerDiv,"tabindex",0);f.setAttr(this.overviewMapDijit._maximizerDiv,"tabindex",0);n.initFirstFocusNode(this.domNode,this.overviewMapDijit._controllerDiv);n.initLastFocusNode(this.domNode,this.overviewMapDijit._maximizerDiv)},
a11y_initEvents:function(){this._closedBy508Controller=this._openedBy508Enter=!1;this._initToShow=!!this.config.overviewMap.visible;this.own(d(this.domNode,"keydown",l.hitch(this,function(d){var g=d.target;!1===this._initToShow&&d.keyCode===m.ENTER&&f.hasClass(g,this.baseClass)&&(this._openedBy508Enter=!0);d.keyCode!==m.TAB||f.hasClass(g,this.baseClass)||(d.preventDefault(),f.hasClass(g,"ovwController")?this.overviewMapDijit._maximizerDiv.focus():f.hasClass(g,"ovwMaximizer")&&this.overviewMapDijit._controllerDiv.focus())})));
this.own(d(this.domNode,"focus",l.hitch(this,function(){!0!==this._closedBy508Controller&&!1===this._initToShow&&n.isInNavMode()&&!this._openedBy508Enter&&10>f.getStyle(this.domNode,"height")&&this.overviewMapDijit.show()})));this.own(d(this.domNode,"blur",l.hitch(this,function(){!1===this._initToShow&&n.isInNavMode()&&!this._openedBy508Enter&&setTimeout(l.hitch(this,function(){f.isDescendant(document.activeElement,this.domNode)||this.overviewMapDijit.hide()}),10)})));this.own(d(this.overviewMapDijit._controllerDiv,
"keydown",l.hitch(this,function(d){d.keyCode===m.ENTER&&(this.overviewMapDijit.visible?(this.overviewMapDijit.hide(),this._openedBy508Enter=!1,this._closedBy508Controller=!0,this.domNode.focus()):(this.overviewMapDijit.show(),!1===this._initToShow&&(this._openedBy508Enter=!0,this._closedBy508Controller=!1)))})));this.own(d(this.overviewMapDijit._maximizerDiv,"keydown",l.hitch(this,function(d){d.keyCode===m.ENTER&&this.overviewMapDijit._maximizeHandler()})))}}})},"widgets/OverviewMap/_build-generate_module":function(){define(["dojo/i18n!./nls/strings"],
function(){})},"url:esri/dijit/templates/OverviewMap.html":'\x3cdiv class\x3d"esriOverviewMap"\x3e\r\n  \x3cdiv class\x3d"ovwContainer" dojoattachpoint\x3d"_body" style\x3d"width: ${width}px; height: ${height}px;"\x3e\r\n    \x3cdiv id\x3d"${id}-map" style\x3d"width: 100%; height: 100%;"\x3e\r\n      \x3cdiv class\x3d"ovwHighlight" dojoattachpoint\x3d"_focusDiv" title\x3d"${NLS_drag}" style\x3d"border: 1px solid ${color}; background-color: ${color};"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwController" title\x3d"${NLS_show}" dojoattachpoint\x3d"_controllerDiv" dojoattachevent\x3d"onclick: _visibilityHandler"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwMaximizer" title\x3d"${NLS_maximize}" dojoattachpoint\x3d"_maximizerDiv" dojoattachevent\x3d"onclick: _maximizeHandler"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"*now":function(l){l(['dojo/i18n!*preload*widgets/OverviewMap/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/Deferred dojo/aspect jimu/BaseWidget esri/dijit/OverviewMap jimu/utils ./utils dojo/dom-style ./a11y/Widget".split(" "),function(l,d,f,n,m,g,p,z,A,w,y,t,u){l=l([z],{baseClass:"jimu-widget-overview",overviewMapDijit:null,_showDijit:!1,_handles:null,startup:function(){this._handles=[];this.inherited(arguments);this.createOverviewMap();this.map&&this.own(m(this.map,"layer-add",d.hitch(this,this._onMainMapBasemapChange)))},
setPosition:function(d){this.position=d;f.place(this.domNode,this.map.id);this._processAttachTo(this.config,d);this.started&&this._updateDomPosition(this.config.overviewMap.attachTo)},_processAttachTo:function(d,b){"undefined"===typeof d.overviewMap&&(d.overviewMap={});"undefined"===typeof d.overviewMap.attachTo&&b&&(void 0!==b.top&&void 0!==b.left?d.overviewMap.attachTo=window.isRTL?"top-right":"top-left":void 0!==b.top&&void 0!==b.right?d.overviewMap.attachTo=window.isRTL?"top-left":"top-right":
void 0!==b.bottom&&void 0!==b.left?d.overviewMap.attachTo=window.isRTL?"bottom-right":"bottom-left":void 0!==b.bottom&&void 0!==b.right&&(d.overviewMap.attachTo=window.isRTL?"bottom-left":"bottom-right"))},_updateDomPosition:function(h){if(this.overviewMapDijit){var b={left:"auto",right:"auto",top:"auto",bottom:"auto",width:"auto",zIndex:this.position&&this.position.zIndex||0},c=this._getOverviewPositionByAttach(h);d.mixin(b,c);b=w.getPositionStyle(b);b.position="absolute";t.set(this.domNode,b);t.set(this.overviewMapDijit.domNode,
b);if(this.overviewMapDijit.domNode){f.removeClass(this.overviewMapDijit.domNode,["ovwTL","ovwTR","ovwBL","ovwBR"]);b="";switch(h){case "top-left":b="ovwTL";break;case "top-right":b="ovwTR";break;case "bottom-left":b="ovwBL";break;case "bottom-right":b="ovwBR";break;default:b="ovwTL"}f.addClass(this.overviewMapDijit.domNode,b)}}},createOverviewMap:function(h){var b=d.clone(this.config.overviewMap);b.map=this.map;void 0!==h&&(b.visible=h);var c=b.visible;b.visible=!1;b.maximizeButton="maximizeButton"in
b?b.maximizeButton:!0;b.width=200;b.height=200;b.expandFactor=2;b.attachTo=this.config.overviewMap.attachTo;this._getBaseLayerMap().then(d.hitch(this,function(a){a&&a.layer&&"string"!==typeof a.layer?b.baseLayer=a.layer:b.baseLayer&&delete b.baseLayer;this.overviewMapDijit=new A(b);this._handles.push(p.after(this.overviewMapDijit,"show",d.hitch(this,"_afterOverviewShow")));this._handles.push(p.after(this.overviewMapDijit,"hide",d.hitch(this,"_afterOverviewHide")));this.overviewMapDijit.startup();
this._updateDomPosition(b.attachTo);this.domNode.appendChild(this.overviewMapDijit.domNode);this.a11y_init();this.a11y_initEvents();c&&this.overviewMapDijit.show()}))},_getOverviewPositionByAttach:function(d){var b={};"top-left"===d?(b.left=0,b.top=0):"top-right"===d?(b.right=0,b.top=0):"bottom-left"===d?(b.bottom=0,b.left=0):"bottom-right"===d&&(b.bottom=0,b.right=0);window.isRTL&&(isFinite(b.left)?(b.right=b.left,delete b.left):(b.left=b.right,delete b.right));return b},_onMainMapBasemapChange:function(d){d.layer&&
d.layer._basemapGalleryLayerType&&(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},onPositionChange:function(d){this.position=d;this.config.overviewMap.attachTo||(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},_destroyOverviewMap:function(){n.forEach(this._handles,function(d){d&&"function"===typeof d.remove&&d.remove()});this.overviewMapDijit&&this.overviewMapDijit.destroy&&(this.overviewMapDijit.destroy(),this.overviewMapDijit=null,f.empty(this.domNode))},
onReceiveData:function(d){"BasemapGallery"===d&&(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},onOpen:function(){this._destroyOverviewMap();this.createOverviewMap(this._showDijit)},onClose:function(){this._destroyOverviewMap()},_afterOverviewHide:function(){this._showDijit=!1;t.set(this.domNode,{width:"auto",height:"auto"})},_afterOverviewShow:function(){this._showDijit=!0;t.set(this.domNode,{width:this.overviewMapDijit.width+"px",height:this.overviewMapDijit.height+"px"})},
_getBaseLayerMap:function(){var d=new g;this.config.overviewMap&&this.config.overviewMap.baseLayer?y.createBaseLayer(this.config.overviewMap.baseLayer,this.map,this).then(function(b){d.resolve(b)}):d.resolve(null);return d}});l.extend(u);return l});