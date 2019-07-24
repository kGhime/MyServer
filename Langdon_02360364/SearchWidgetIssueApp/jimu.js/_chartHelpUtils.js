// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare jimu/utils dojo/_base/lang dojo/_base/config dojo/_base/Color ./_dateFormat moment/moment esri/lang esri/graphic esri/symbols/jsonUtils".split(" "),function(u,h,e,v,p,w,x,r,t,q){return u(null,{constructor:function(a){a&&e.mixin(this,a);this.popupInfo||(this.popupInfo={});this.featureLayer||(this.featureLayer={});this._cachePlaces={}},setLayerFeatureLayer:function(a){this.featureLayer=a},setLayerObject:function(a){this.layerObject=a},setSymbolLayer:function(a){this.symbolLayer=
a},setPopupInfo:function(a){this.popupInfo=a},setMap:function(a){this.map=a},getBestLabelDisplay:function(a,b,c){if("feature"===c)return this.betterDataCategoryForFeatureMode(a,b);if("category"===c||"count"===c)return this.betterDataCategoryForCategoryCountMode(a,b);if("field"===c)return this.betterDataCategoryForFieldMode(a)},betterDataCategoryForFeatureMode:function(a,b){a.forEach(e.hitch(this,function(a){a.label=this.getBestDisplayValue(b,a.label)}));return a},betterDataCategoryForFieldMode:function(a){a.forEach(e.hitch(this,
function(a){a.label=this.getFieldAlias(a.label)}));return a},betterDataCategoryForCategoryCountMode:function(a,b){a.forEach(e.hitch(this,function(a){a.label="undefined"!==typeof a.unit?this.getCategoryDisplayForDateUnit(a.label,a.unit):this.getBestDisplayValue(b,a.label)}));return a},keepStatisticsDataBestDecimalPlace:function(a,b,c){if("count"===c)return b;var d=a.valueFields,f=a.operation;this.cacheDecimalPlace(d,a.features,this.popupInfo);var g=null;"feature"===c||"category"===c?b.forEach(e.hitch(this,
function(a){a.originalValues=e.clone(a.values);d.forEach(e.hitch(this,function(b,c){var d=a.values[c];this.isIntegerNumberField(b)&&"average"===f?d=this.getBestValueForIntegerFieldAverage(d,6):(g=this._getFieldDecimalPlaceFromCache(b),d=this.formatValuePlaces(d,g));a.values[c]=d}))})):"field"===c&&d.forEach(e.hitch(this,function(a){b.some(e.hitch(this,function(b){if(b.label===a){var c=b.values[0];this.isIntegerNumberField(a)&&"average"===f?c=this.getBestValueForIntegerFieldAverage(c,6):(g=this._getFieldDecimalPlaceFromCache(a),
c=this.formatValuePlaces(c,g));b.values[0]=c;return!0}return!1}))}));return b},isIntegerNumberField:function(a){if(!this.featureLayer||!this.featureLayer.fields)return!1;var b=["esriFieldTypeSmallInteger","esriFieldTypeInteger"];return this.featureLayer.fields.some(e.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},formatValuePlaces:function(a,b){return"number"!==typeof b||!a&&0!==a?a:a.toFixed(b)},getBestValueForIntegerFieldAverage:function(a,b){a=Number(a);if("number"!==typeof a)return a;
var c=0,d=a.toString().split(".");1===d.length?c=0:2===d.length&&(c=d[1].length);return 0<c?(c>b&&(c=b),a=a.toFixed(c),parseFloat(a)):a},_getFieldDecimalPlaceFromCache:function(a){var b;this._cachePlaces&&(a=this._cachePlaces[a],"number"===typeof a&&(b=a));return b},cacheDecimalPlace:function(a,b,c){this._cachePlaces={};if(a&&a.length){var d=a.filter(e.hitch(this,function(a){return this.isFloatNumberField(a)})),f={};d.forEach(e.hitch(this,function(a){f[a]=[]}));b&&0<b.length&&b.forEach(e.hitch(this,
function(a){var b=a.attributes;b&&d.forEach(e.hitch(this,function(a){var c=b[a];"number"===typeof c&&f[a].push(c)}))}));d.forEach(e.hitch(this,function(a){var b=this.getFieldInfoFromPopupInfo(c,a);this._cachePlaces[a]=0;var d=f[a];if(0<d.length)try{var g=this.getBestDecimalPlaceForArrayValues(d);this._cachePlaces[a]=g}catch(l){this._cachePlaces[a]=0,console.error(l)}c&&((b=this.getPlacesFromPopupFieldInfo(b))||0===b)&&(this._cachePlaces[a]=b)}))}},getBestDecimalPlaceForArrayValues:function(a){var b=
0,c={};a.forEach(function(a){a=a.toString().split(".");var b=null;1===a.length?b=0:2===a.length&&(b=a[1].length);null!==b&&(c[b]=void 0===c[b]?1:c[b]+1)});a=null;for(var d in c){d=parseInt(d,10);var f=c[d];a?f>a.value&&(a={key:d,value:f}):a={key:d,value:f}}a&&(b=parseInt(a.key,10));return b},getFieldInfoFromPopupInfo:function(a,b){var c=null;return a&&a.fieldInfos?c=a.fieldInfos.filter(function(a){return a.fieldName===b})[0]:c},getPlacesFromPopupFieldInfo:function(a){return a&&a.format&&a.format.places},
getAliasFromPopupInfo:function(a,b){var c=b;if(!a||!a.fieldInfos)return c;(a=a.fieldInfos)&&0<a.length&&a.some(function(a){if(a.fieldName===b)return c=a.label,!0});return c},isFloatNumberField:function(a){if(!this.featureLayer||!this.featureLayer.fields)return!1;var b=["esriFieldTypeSingle","esriFieldTypeDouble"];return this.featureLayer.fields.some(e.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},isNumberField:function(a){if(!this.featureLayer||!this.featureLayer.fields)return!1;
var b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];return this.featureLayer.fields.some(e.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},isDateField:function(a){return(a=this.getFieldInfo(a))?"esriFieldTypeDate"===a.type:!1},getFieldInfo:function(a){if(this.featureLayer)for(var b=this.featureLayer.fields,c=0;c<b.length;c++)if(b[c].name===a)return b[c];return null},getFieldAliasArray:function(a){return a.map(e.hitch(this,function(a){return this.getFieldAlias(a)}))},
getBestDisplayValue:function(a,b){if("_NULL\x26UNDEFINED_"===b)return"null";if(this.isDateField(a))return this.formatedDateByPopupInfoOrLocal(a,b);var c={};c[a]=b;c=h.getDisplayValueForCodedValueOrSubtype(this.layerObject||this.featureLayer,a,c);c.isCodedValueOrSubtype?b=c.displayValue:this.isNumberField(a)&&(a=this.getFieldInfoFromPopupInfo(this.popupInfo,a),b=h.localizeNumberByFieldInfo(b,a));return b},formatedDateByPopupInfoOrLocal:function(a,b,c){c||(c=this.popupInfo);a:{if(c&&r.isDefined(c.fieldInfos))for(var d=
0,f=c.fieldInfos.length;d<f;d++){var g=c.fieldInfos[d];if(g.fieldName===a){a=g.format;break a}}a=null}b=Number(b);return h.fieldFormatter.getFormattedDate(b,a)},getDisplayValForNumberCodedValueSubTypes:function(a,b){var c=this.tryLocaleNumber(b,a);if(this.featureLayer&&this.featureLayer.typeIdField===a){var d=this.featureLayer.types;if(d&&0<d.length&&(d=d.filter(e.hitch(this,function(a){return a.id===b})),0<d.length))return c=d[0].name}(a=this.getFieldInfo(a))&&a.domain&&(a=a.domain.codedValues)&&
0<a.length&&a.some(function(a){return a.code===b?(c=a.name,!0):!1});return c},tryLocaleNumber:function(a,b){var c=a;if(r.isDefined(a)&&isFinite(a))try{var d;if(b&&this.isNumberField(b)){var f=this.popupInfo[b];d=f&&e.exists("format.places",f)?h.localizeNumberByFieldInfo(a,f):h.localizeNumber(a)}else d=a;"string"===typeof d&&(c=d)}catch(g){console.error(g)}return c+""},getCategoryDisplayForDateUnit:function(a,b){if(!b)return a;a=Number(a);return this._getFormatteredDate(a,b)},_getFormatteredDate:function(a,
b){var c=this._getDateTemplate(b);0<=["year","month","day"].indexOf(b)?c=h.localizeDate(new Date(a),{selector:"date",datePattern:c.date}):(b=h.localizeDate(new Date(a),{selector:"date",datePattern:c.date}),a=x(a).format(c.time),c=b+c.connector+a);return c},_getDateTemplate:function(a){var b=w[v.locale];(b=b||{},b.date)||(b.date={"short":"short"});b&&!b.time&&(b.time={medium:"HH:mm:ss a"});b&&!b.connector&&(b.connector=" ");b&&!b.sNoDay&&(b.sNoDay="MMM, y");var c={};"year"===a?c.date="y":"month"===
a?c.date=b.date.sNoDay:"day"===a?c.date=b.date["short"]:"hour"===a?(c.date=b.date["short"],c.time="HH a",c.connector=b.connector):"minute"===a?(c.date=b.date["short"],c.time="HH:mm a",c.connector=b.connector):"second"===a&&(c.date=b.date["short"],c.time=b.time.medium,c.connector=b.connector);return c},_getSymbolLayerGraphics:function(a,b){if(!this.symbolLayer)return null;if(!this.symbolLayer.refreshInterval&&this.symbolGraphics&&!1===this.symbolGraphics.filterByExtent&&!1===this.symbolGraphics.useSelection)return this.symbolGraphics.graphics;
var c=null;this.map&&this.symbolLayer&&(c=h.getClientFeaturesFromMap(this.map,this.symbolLayer,b,!!a));this.symbolGraphics={filterByExtent:a,useSelection:b,graphics:c};return c},_isContainAttr:function(a,b){if("object"!==typeof b||"object"!==typeof b)return!1;var c=!0;Object.keys(b).some(function(d){return b[d]!==a[d]?(c=!1,!0):!1});return c},_getFeaturesByAttr:function(a,b){if(b){var c=null;b.some(function(b){return this._isContainAttr(b.attributes,a)?(c=b,!0):!1}.bind(this));return c}},_getFeaturesByClusterfield:function(a,
b,c,d){var f=this._getSymbolLayerGraphics(c);if(f)return c=null,a=this.clientStatisticsUtils.getCluseringObj(a,f,d),(b=e.mixin(a.notNullLabel,a.nullLabel)[b])&&b.features&&b.features.length&&(c=b.features),c},_getFeatureForSerieData:function(a,b,c){var d=b.clusterField,f=b.mode,g=b.filterByExtent;b=b.useSelection;var e={};e[d]=a.name;if("feature"===f)return this._getFeatureBySerieDataItem(a,d,c,g,b);if("category"===f||"count"===f)return new t(null,null,e)},_getFeatureBySerieDataItem:function(a,b,
c,d,f){var g={};g[b]=a.name;g[c]=Number("undefined"!==typeof a.originValue?a.originValue:a.value);a=this._getSymbolLayerGraphics(d,f);return this._getFeaturesByAttr(g,a)},_getFeatureBycsuDataItem:function(a,b,c,d,f,g){var e={};e[b]=a.label;a=a.originalValues||a.values;e[c]=Number(a&&a[d]);c=this._getSymbolLayerGraphics(f,g);return this._getFeaturesByAttr(e,c)},bindChartEvent:function(a,b,c){var d=b.filterByExtent,f=b.useSelection,g=b.clusterField,y=b.valueFields,m=null;"undefined"!==b.dateConfig&&
(m=b.dateConfig);this.highLightColor=b.highLightColor||"#00ffff";var k=b.mode;if(this.map&&0!==c.length){b=e.hitch(this,function(a){if("series"===a.componentType){var b=null,e=this._getSymbolLayerGraphics(d,f);if("field"===k)b=e;else if(e=c[a.dataIndex])if("feature"===k){var l=a.seriesIndex,n=y[l];if(!n)return;(e=this._getFeatureBycsuDataItem(e,g,n,l,d,f))&&(b=[e])}else e=e.label,"undefined"!==typeof e&&(b=this._getFeaturesByClusterfield(g,e,d,m));b&&"mouseover"===a.type&&(this._mouseoverFeatures=
b,this._mouseOverChartItem(b))}});var l=e.hitch(this,function(){this._mouseoverFeatures&&(this._mouseOutChartItem(this._mouseoverFeatures),this._mouseoverFeatures=null)});[{name:"mouseover",callback:b},{name:"mouseout",callback:l}].forEach(e.hitch(this,function(b){a.chart.off(b.name);a.chart.on(b.name,e.hitch(this,function(a){"mouseover"===a.type?(this._hasTriggerMouseoverEvent||(this._hasTriggerMouseoverEvent=!0,b.callback(a)),setTimeout(e.hitch(this,function(){this._hasTriggerMouseoverEvent=!1},
500))):"mouseout"===a.type&&b.callback(a)}))}))}},_mouseOverChartItem:function(a){if(this.featureLayer&&this.featureLayer.getMap()&&this.featureLayer.visible){var b=h.getTypeByGeometryType(this.featureLayer.geometryType);a.forEach(e.hitch(this,function(a){a._originalSymbol=a.symbol}));var c=null;if("point"===b)c=this._getHighLightMarkerSymbol(),this.tempGraphics=[],a.forEach(e.hitch(this,function(a){a=new t(a.geometry,c);this.tempGraphics.push(a);this.featureLayer.add(a)}));else if("polyline"===b)c=
this._getHighLightLineSymbol(this.highLightColor),a.forEach(e.hitch(this,function(a){a.setSymbol(c)}));else if("polygon"===b){var d=this.featureLayer.getSelectedFeatures()||[];a.forEach(e.hitch(this,function(a){var b=0<=d.indexOf(a),b=this._getHighLightFillSymbol(this.featureLayer,a,b);a.setSymbol(b)}));this._getSymbolLayerGraphics(!1,!1).length!==a.length&&"polygon"===b&&(a.forEach(e.hitch(this,function(a){this.featureLayer.remove(a)})),a.forEach(e.hitch(this,function(a){this.featureLayer.add(a)})))}}},
_mouseOutChartItem:function(a){this._removeTempGraphics();a.forEach(e.hitch(this,function(a){a.setSymbol(a._originalSymbol||null)}))},_removeTempGraphics:function(){if(this.featureLayer&&this.tempGraphics&&0<this.tempGraphics.length)for(;0<this.tempGraphics.length;)this.featureLayer.remove(this.tempGraphics[0]),this.tempGraphics.splice(0,1);this.tempGraphics=null},_getHighLightMarkerSymbol:function(){var a=q.fromJson({color:[255,255,255,0],size:18,angle:0,xoffset:0,yoffset:0,type:"esriSMS",style:"esriSMSSquare",
outline:{color:[0,0,128,255],width:.75,type:"esriSLS",style:"esriSLSSolid"}});a.setSize(30);a.outline.setColor(new p(this.highLightColor));return a},_getHighLightLineSymbol:function(a){var b=q.fromJson({color:[0,255,255,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"});b.setColor(new p(a||this.highLightColor));return b},_getDefaultHighLightFillSymbol:function(){var a=q.fromJson({color:[0,255,255,128],outline:{color:[0,255,255,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"});
a.outline.setColor(new p(this.highLightColor));return a},_getSymbolByRenderer:function(a,b){var c=this._getDefaultHighLightFillSymbol(),d=this.getVisualVariableByType("colorInfo",a.visualVariables);if(d){if(a=a.getColor(b,{colorInfo:d}))a=e.clone(a),c.setColor(a)}else c=a.getSymbol(b);return c},getVisualVariableByType:function(a,b){return b&&(b=b.filter(function(b){return b.type===a&&!b.target}),b.length)?b[0]:null},_getHighLightFillSymbol:function(a,b,c){var d=null,f=b.symbol,d=a.renderer;!f&&d&&
(f=this._getSymbolByRenderer(d,b));f&&"function"===typeof f.setOutline?(d=q.fromJson(f.toJson()),b=1.5,f.outline&&0<f.outline.width&&(b=f.outline.width+1),c=this._getHighLightLineSymbol(c?"#ff0000":"#00ffff"),c.setWidth(b),d.setOutline(c)):d=this._getDefaultHighLightFillSymbol();return d},_isNumberField:function(a){var b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];return this.featureLayer.fields.some(e.hitch(this,function(c){return c.name===a&&
0<=b.indexOf(c.type)}))},getFieldAlias:function(a){var b;this.popupInfo&&(b=this.getAliasFromPopupInfo(this.popupInfo,a));b||(b=a,(a=this.getFieldInfo(a))&&a.alias&&(b=a.alias));return b},_removeDuplicateElementForObjArray:function(a){if(!Array.isArray(a))return a;var b=[];b.push(a[0]);a.forEach(function(a){b.some(function(b){return h.isEqual(b,a)})||b.push(a)});return b},assigneeSettingColor:function(a,b,c){if(!b||!b.length)return b;var d=a.seriesStyle;if(!d)return b;"layerSymbol"===d.type?b=this._assigneeStyleLayerSymbolColor(b,
c):"series"===d.type?b=this._assigneeStyleSeriesColor(a,b):"custom"===d.type&&(b=this._assigneeStyleCustomColor(a,b));return b},_assigneeStyleCustomColor:function(a,b){a=a.seriesStyle;if(!a||!a.customColor)return b;var c=a.customColor;a=c.categories;c=c.others;if(!(a&&a.length||c&&c.length))return b;c&&c.length&&this._setCustomOthersColor(c,b);a&&a.length&&this._setCustomCategoriesColor(a,b)},_setCustomCategoriesColor:function(a,b){b.forEach(function(b){(b=b.data)&&b.length&&b.forEach(function(b){if("undefined"!==
typeof b.name){var c=this._getMatchingCustomColor(b.name,a);this.setColorToDataItem(b,c)}}.bind(this))}.bind(this))},_getMatchingCustomColor:function(a,b){var c=!1;if(!b||!b.length)return c;(b=b.filter(function(b){return b.id===a})[0])&&b.color&&(c=b.color);return c},_getMatchingCustomLabel:function(a,b){var c=!1;if(!b||!b.length)return c;(b=b.filter(function(b){return b.id===a})[0])&&b.label&&(c=b.label);return c},_setCustomOthersColor:function(a,b){this._setOtherColorForCustomColor(a,b);this._setNullLabelColorForCustomColor(a,
b)},_setOtherColorForCustomColor:function(a,b){(a=a.filter(function(a){return"others"===a.id})[0])&&a.color&&this.setColorToAllSerieDataItem(b,a.color)},_setNullLabelColorForCustomColor:function(a,b){if((a=a.filter(function(a){return"null"===a.id})[0])&&a.color){var c=a.color;b.forEach(function(a){(a=a.data)&&a.length&&a.forEach(function(a){a.name&&"_NULL\x26UNDEFINED_"===a.name&&this.setColorToDataItem(a,c)}.bind(this))}.bind(this))}},_assigneeStyleSeriesColor:function(a,b){var c=a.seriesStyle;if(!c||
!c.styles||!c.styles[0])return b;var d=a.mode,f=a.area;return b.map(function(a){var b=null,e=a.type;if("field"===d)"line"===e?(b=c.styles[0].style,a=this._setStyleToSerie(b,a,f)):(e=a.data)&&e[0]&&(a.data=e.map(function(a){b=this._getMatchingStyle(a.name,c);return this.setStyleToSerieDataItem(b,a)}.bind(this)));else if("column"===e||"bar"===e||"line"===e)"count"===d?(b=c.styles[0].style,a=this._setStyleToSerie(b,a,f)):"undefined"!==typeof a.name&&(b=this._getMatchingStyle(a.name,c))&&(a=this._setStyleToSerie(b,
a,f));return a}.bind(this))},_assigneeStyleLayerSymbolColor:function(a,b){a.forEach(function(a){var c=a.name;(a=a.data)&&a.length&&a.forEach(function(a){var d=[this._getFeatureForSerieData(a,b,c)];if(d=this._getSymbolColorForDataItem(d))a.itemStyle={color:d}}.bind(this))}.bind(this))},_setStyleToSerie:function(a,b,c){b.itemStyle||(b.itemStyle={});a&&"undefined"!==typeof a.color&&(Array.isArray(a.color)?b.itemStyle.color=a.color[0]:b.itemStyle.color=a.color);a&&"undefined"!==typeof a.opacity&&(c?(b.areaStyle||
(b.areaStyle={}),b.areaStyle.opacity=1-parseFloat(a.opacity/10)):b.itemStyle.opacity=1-parseFloat(a.opacity/10));return b},_getMatchingStyle:function(a,b){var c=null;b=b.styles;if(!b||!b[0]||""===a)return c;b.forEach(function(b){b.name===a&&(c=b.style)});return c},_getSymbolColorForDataItem:function(a){var b=!1;if(!this.symbolLayer)return b;a=a&&a[0];return a?b=this._getColorForFeature(this.symbolLayer.renderer,a):b},_getColorForFeature:function(a,b){var c=!1,d=this.getVisualVariableByType("colorInfo",
a.visualVariables);d?(a=a.getColor(b,{colorInfo:d}))&&(c=this._convertToEchartsRbga(a)):(a=a.getSymbol(b))&&"undefined"!==typeof a.color&&(c=this._convertToEchartsRbga(a.color));return c},_convertToEchartsRbga:function(a){if(!a||"undefined"===typeof a.r)return a;a=window.JSON.parse(window.JSON.stringify(a));var b;b="rgba("+(a.r+",");b+=a.g+",";b+=a.b+",";return b+=a.a+")"},getColors:function(a,b){var c=[];if(2===a.length)c=this._createGradientColors(a[0],a[a.length-1],b);else{for(var d=Math.ceil(b/
a.length),e=0;e<d;e++)c=c.concat(a);c=c.slice(0,b)}return c},_createGradientColors:function(a,b,c){var d=[];a=new p(a);var e=new p(b);b=(e.r-a.r)/c;for(var g=(e.g-a.g)/c,e=(e.b-a.b)/c,h=new p,m=0,k=0,l=0,n=0;n<c;n++)m=parseInt(a.r+b*n,10),k=parseInt(a.g+g*n,10),l=parseInt(a.b+e*n,10),h.setColor([m,k,l]),d.push(h.toHex());return d},setStyleToSerieDataItem:function(a,b){b.itemStyle||(b.itemStyle={});a&&"undefined"!==typeof a.color&&(Array.isArray(a.color)?b.itemStyle.color=a.color[0]:b.itemStyle.color=
a.color);a&&"undefined"!==typeof a.opacity&&(b.itemStyle.opacity=1-parseFloat(a.opacity/10));return b},setColorToSerie:function(a,b){if(!a||"object"!==typeof a||Array.isArray(a))return a;a.itemStyle||(a.itemStyle={});b&&(a.itemStyle.color=b)},setColorToDataItem:function(a,b){if(!a||"object"!==typeof a)return a;a.itemStyle||(a.itemStyle={});b&&(a.itemStyle.color=b)},setColorToAllSerieDataItem:function(a,b){a.forEach(function(a){(a=a.data)&&a.length&&a.forEach(function(a){this.setColorToDataItem(a,
b)}.bind(this))}.bind(this))},_updateDataItemNameForCustom:function(a,b,c){var d;"undefined"!==typeof a.name&&(d=a.name,"_NULL\x26UNDEFINED_"===a.name&&b?d=b:(b=this._getMatchingCustomLabel("undefined"!==typeof a.originName?a.originName:a.name,c))&&(d=b),a.name=d);return d},_updateSerieDataItemName:function(a,b,c){var d=a.name,e=d,e=a.unit&&d?this.getCategoryDisplayForDateUnit(d,a.unit):"field"!==b?this.getBestDisplayValue(c,d):this.getFieldAlias(d);a.name=e;a.originName=d;return e},updateChartSeriesDisplayName:function(a,
b,c){var d=c.clusterField,e=c.mode;c=a.series;var g=[];b=b.seriesStyle;var h,m,k;c.forEach(function(a,b){a.name&&(a.name=this.getFieldAlias(a.name));(a=a.data)&&a.length&&a.forEach(function(a,c){k=this._updateSerieDataItemName(a,e,d);0===b&&(g[c]=k)}.bind(this))}.bind(this));"custom"===b.type&&((b=b.customColor)&&b.categories&&b.categories.length&&(h=b.categories,b=b.others||[],(b=b.filter(function(a){return"null"===a.id})[0])&&b.label&&(m=b.label)),c.forEach(function(a,b){(a=a.data)&&a.length&&a.forEach(function(a,
c){k=this._updateDataItemNameForCustom(a,m,h);0===b&&(g[c]=k)}.bind(this))}.bind(this)));a.labels=null;a.labels=g}})});