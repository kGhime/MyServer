// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/topic","esri/lang","./LayerInfos/LayerInfos"],function(p,d,h,q,n){var l=null,m=p(null,{_filters:null,layerInfos:null,constructor:function(){this._filters={};window.isBuilder?(h.subscribe("app/mapLoaded",d.hitch(this,this._onMapLoaded)),h.subscribe("app/mapChanged",d.hitch(this,this._onMapChanged))):(h.subscribe("mapLoaded",d.hitch(this,this._onMapLoaded)),h.subscribe("mapChanged",d.hitch(this,this._onMapChanged)));h.subscribe("widgetDestroyed",
d.hitch(this,this._onWidgetDestroyed))},getWidgetFilter:function(a,b){return d.getObject(a+".filterExprs."+b,!1,this._filters)},applyWidgetFilter:function(a,b,c,e,d,g){var f="object"===typeof a?a:null;f&&(a=f.layerId,b=f.widgetId,c=f.expression,e=f.enableMapFilter,d=f.useAND,g=f.zoomAfterFilter);this._setFilterExp(a,b,c,e,d);b=this.layerInfos.getLayerInfoById(a)||this.layerInfos.getTableInfoById(a);a=this._getFilterExp(a);null!==a&&b&&b.setFilter(a,{zoomAfterFilter:g})},_onMapLoaded:function(){this.layerInfos=
n.getInstanceSync();this._traversalFilter()},_onMapChanged:function(){this.layerInfos=n.getInstanceSync();this._traversalFilter()},_onWidgetDestroyed:function(a){for(var b in this._filters)if(this._filters[b]){var c=this._filters[b];if(c){var e=c.filterExprs,c=c.mapFilterControls;e&&delete e[a];c&&delete c[a]}}},_traversalFilter:function(){this.layerInfos.traversalAll(d.hitch(this,function(a){this._filters[a.id]||(this._filters[a.id]={definitionExpression:a.getFilter(),filterExprs:{},mapFilterControls:{}})}))},
_getPriorityOfMapFilter:function(a){a=d.getObject(a+".mapFilterControls",!1,this._filters);var b=0,c;for(c in a){var e=a[c];e.priority>b&&(b=e.priority)}return b},_getMapFilterControl:function(a){a=d.getObject(a+".mapFilterControls",!1,this._filters);var b=0,c=null,e;for(e in a){var k=a[e];k.priority>b&&(b=k.priority,c=k)}return c},_setFilterExp:function(a,b,c,e,k){var g=a+".filterExprs."+b,f=a+".mapFilterControls."+b;c?(d.setObject(g,c,this._filters),q.isDefined(e)&&(a=this._getPriorityOfMapFilter(a),
d.setObject(f,{enable:e,useAND:k,priority:a+1},this._filters))):(d.getObject(g,!1,this._filters)&&delete this._filters[a].filterExprs[b],d.getObject(f,!1,this._filters)&&delete this._filters[a].mapFilterControls[b])},_getFilterExp:function(a){if(!this._filters[a])return null;var b=[],c=this._filters[a].definitionExpression,e=this._filters[a].filterExprs;a=this._getMapFilterControl(a);for(var d in e){var g=e[d];g&&b.push("("+g+")")}b=b.join(" AND ");return c&&a&&a.enable||c&&null===a?b?a&&!1===a.useAND?
"("+c+") OR "+b:"("+c+") AND "+b:c:b}});m.getInstance=function(){if(null===l)l=new m,window._filterManager=l;else return l};return m});