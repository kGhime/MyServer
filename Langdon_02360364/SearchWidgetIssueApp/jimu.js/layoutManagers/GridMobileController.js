// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/aspect dojo/dom-construct dojo/dom-geometry dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin jimu/PanelManager jimu/WidgetManager".split(" "),function(q,e,k,m,l,n,g,p,d,r,t,u,v){return q([r,t],{baseClass:"jimu-dnd-mobile-controller",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"icon-section" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"container-section" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\x3c/div\x3e',
appConfig:null,panelContainerNode:null,openIds:null,toolsCount:0,panels:null,openPanelIds:null,widgetOnCloseHandlerIds:null,panelOnCloseHandlerIds:null,postCreate:function(){this.inherited(arguments);this.panelManager=u.getInstance();this.widgetManager=v.getInstance();this.openIds=[];this.openPanelIds=[];this.widgetOnCloseHandlerIds=[];this.panelOnCloseHandlerIds=[];this.panels={};this.createWidgetIcons();0===this.toolsCount&&m.setStyle(this.domNode,"display","none");this.own(l(this.iconNode,"click",
e.hitch(this,function(a){a.stopPropagation();d.contains(this.containerNode,"in")?(d.remove(this.containerNode,"in"),d.add(this.containerNode,"out")):(d.remove(this.containerNode,"out"),d.add(this.containerNode,"in"))})));this.own(l(document.body,"click",e.hitch(this,function(a){d.contains(this.containerNode,"in")&&!this.isPartOfPopup(a.target||a.srcElement)&&(d.remove(this.containerNode,"in"),d.add(this.containerNode,"out"))})))},destroyOnScreenWidgets:function(){k.forEach(this.appConfig.widgetOnScreen.widgets,
function(a){a.inPanel?this.panelManager.destroyPanel(a.id+"_panel"):this.widgetManager.destroyWidget(a.id)},this)},isPartOfPopup:function(a){var c=this.containerNode;return a===c||m.isDescendant(a,c)},setConfig:function(a){this.appConfig=a;this.createWidgetIcons()},createWidgetIcons:function(){this.toolsCount=0;g.empty(this.containerNode);this.appConfig&&this.appConfig.widgetOnScreen&&k.forEach(this.appConfig.widgetOnScreen.widgets,function(a){a.uri&&a.closeable&&(this._addItem(a),this.toolsCount++)},
this)},_pushId:function(a){this._popId(a);this.openPanelIds.push(a)},_popId:function(a,c){a=this.openPanelIds.indexOf(a);0<=a&&(this.openPanelIds.splice(a,1),c&&0<this.openPanelIds.length&&(c=this.openPanelIds[this.openPanelIds.length-1],this.panelManager.openPanel(c)))},_addItem:function(a){var c=e.clone(a),h=g.create("div",{"class":"row"},this.containerNode);g.create("div",{"class":"widget-icon column",style:"background: url("+a.icon+") no-repeat;"},h);g.create("div",{"class":"widget-label jimu-ellipsis column",
title:a.label,innerHTML:a.label},h);this.own(l(h,"click",e.hitch(this,function(b){var f;b.stopPropagation();a.inPanel?(b=p.getMarginBox(this.panelContainerNode),f=window.isRTL?{relativeTo:"browser",right:b.l,top:b.t,width:b.w,height:b.h}:{relativeTo:"browser",left:b.l,top:b.t,width:b.w,height:b.h},c.panel={uri:"themes/DashboardTheme/panels/OnScreenPanel/Panel",position:f},this.panelManager.showPanel(c).then(e.hitch(this,function(a){this.panels[a.id]=a;this._pushId(a.id);a.setPosition(f);0>this.panelOnCloseHandlerIds.indexOf(a.id)&&
(this.own(n.after(a,"onClose",e.hitch(this,function(){this._popId(a.id,!0)}))),this.panelOnCloseHandlerIds.push(a.id));return a})).then(e.hitch(this,function(a){this.panelManager.openPanel(a)}))):(b=p.getMarginBox(h),this._toggleOffPanelWidget(a,b.l+b.w,b.t));d.remove(this.containerNode,"in");d.add(this.containerNode,"out")})))},_toggleOffPanelWidget:function(a,c,d){var b=this.openIds.indexOf(a.id);0<=b?(this.widgetManager.closeWidget(a.id),this.openIds.splice(b,1)):this.widgetManager.loadWidget(a).then(e.hitch(this,
function(f){this.openIds.push(a.id);f.setPosition({left:c,top:d,zIndex:100,relativeTo:"map"});this.widgetManager.openWidget(f);0>this.widgetOnCloseHandlerIds.indexOf(a.id)&&(this.own(n.after(f,"onClose",e.hitch(this,function(){b=this.openIds.indexOf(a.id);0<=b&&this.openIds.splice(b,1)}))),this.widgetOnCloseHandlerIds.push(a.id))}))},setPanelPosition:function(a){k.forEach(this.openPanelIds,e.hitch(this,function(c,d){d===this.openPanelIds.length-1&&(a.zIndex=101);"opened"!==this.panels[c].state&&"active"!==
this.panels[c].state||this.panels[c].setPosition(a,!0)}))}})});