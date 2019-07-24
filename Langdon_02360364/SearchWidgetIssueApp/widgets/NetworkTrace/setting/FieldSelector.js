// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/NetworkTrace/setting/FieldSelector.html":'\x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"showFieldsButton" class\x3d"jimu-icon jimu-icon-add esriCTHover"\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/text!./FieldSelector.html dijit/TooltipDialog dijit/popup dojo/_base/lang dojo/_base/html dojo/on dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/_base/array".split(" "),function(m,n,p,q,r,h,d,t,f,k,g,l,u){return m([n,p],{baseClass:"jimu-widget-RelatedTableCharts-setting",templateString:q,_stringFieldType:"esriFieldTypeString",_oidFieldType:"esriFieldTypeOID",_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger",
"esriFieldTypeSingle","esriFieldTypeDouble"],_isTooltipDialogOpened:!1,fields:[],hideOnSelect:!1,showOnlyNumericFields:!1,skipObjectIdField:!1,startup:function(){this.inherited(arguments)},postCreate:function(){this._createTooltipDialog(this.domNode);this._hideTooltipDialog()},destroy:function(){h.close(this.tooltipDialog);this.tooltipDialog.destroy();this.inherited(arguments)},isPartOfPopup:function(a){var b;b=this.tooltipDialog.domNode;return a===b||t.isDescendant(a,b)},onSelect:function(a){},_showTooltipDialog:function(){h.open({parent:this.getParent(),
popup:this.tooltipDialog,around:this.domNode});this._isTooltipDialogOpened=!0},_hideTooltipDialog:function(){h.close(this.tooltipDialog);this._isTooltipDialogOpened=!1},_createTooltipDialog:function(){var a=this._createFieldList();this.tooltipDialog=new r({content:a});this.own(f(this.domNode,"click",d.hitch(this,function(b){b.stopPropagation();b.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():this._showTooltipDialog()})));this.own(f(document.body,"click",d.hitch(this,function(b){this.isPartOfPopup(b.target||
b.srcElement)||this._hideTooltipDialog()})))},_createFieldList:function(){var a,b;b=l.create("div",{style:{"max-height":"150px",overflow:"auto"}});this.fields&&(a=d.clone(this.fields),u.forEach(a,d.hitch(this,function(a){var c,e;e=!0;this.showOnlyNumericFields&&0>this._numberFieldTypes.indexOf(a.type)&&(e=!1);this.skipObjectIdField&&a.type===this._oidFieldType&&(e=!1);e&&(e=a.alias+" {"+a.name+"}",c=l.create("div",{innerHTML:e,style:{cursor:"pointer",padding:"4px 2px"}},b),g.set(c,"name",a.name),
g.set(c,"alias",a.alias),f(c,"mouseover",d.hitch(this,function(){k.set(c,"background-color","#e4e4e4")})),f(c,"mouseout",d.hitch(this,function(){k.set(c,"background-color","#FFFFFF")})),f(c,"click",d.hitch(this,function(){var a={};a.name=g.get(c,"name");a.alias=g.get(c,"alias");this.onSelect(a);this.hideOnSelect&&this._hideTooltipDialog()})))})));return b}})});