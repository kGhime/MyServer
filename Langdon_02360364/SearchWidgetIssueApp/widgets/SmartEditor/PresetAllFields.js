// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-attr dojo/dom-construct dojo/on ./utils ./presetUtils dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/Popup".split(" "),function(q,r,k,n,p,l,t,u,m,v,w,x){return q([w,r,v],{baseClass:"jimu-widget-smartEditor-setting-preset",dijitCollection:{},actionsCollection:{},presetFieldInfos:{},_deletedFields:[],postCreate:function(){this.inherited(arguments);this.dijitCollection={};this.actionsCollection={};this.removeFromGroupCollection=
{};this.presetFieldInfos={};this._deletedFields=[];this.presetContainer=l.create("div",{"class":"esriCTPresetContent"});this._createPresetFieldInfos();this.showingInWidget||this.createContent()},_getRelatedLayersInfo:function(a,c){for(var g=[],d=0;d<a.length;d++){var f={},b;for(b in a[d])if("featureLayer"===b&&a[d][b].id&&(f[b]={id:a[d][b].id}),a[d].hasOwnProperty(b)&&"featureLayer"!==b&&"layerInfo"!==b)if("relationshipInfos"===b)g.push(this._getRelatedLayersInfo(a[d][b],c));else if("fieldValues"===
b||"allowUpdateOnly"===b)f[b]=a[d][b];else if("fieldInfos"===b)if(a[d][b].hasOwnProperty("name"))f[b]=a[d][b];else{var e=this._jimuLayerInfos.getLayerOrTableInfoById(a[d].featureLayer.id),e=u.getConfigInfo(e,{});f[b]=e[b]}f.hasOwnProperty("fieldValues")&&c.push(f)}return g},_getPresetFieldsForLayers:function(a){for(var c=[],g=0;g<a.length;g++){var d=a[g];if(!d.allowUpdateOnly&&d.fieldValues){for(var f in d.fieldValues)for(var b=0;b<d.fieldValues[f].length;b++){var e=d.fieldValues[f][b],h={layerId:d.featureLayer.id,
fieldName:f,action:"Preset"};"Preset"===e.actionName&&e.enabled&&(this.actionsCollection[f]||(this.actionsCollection[f]=[],this.removeFromGroupCollection[f]=[]),this.actionsCollection[f].push(e),e.hasOwnProperty("attributeActionGroupName")&&(h.groupName=e.attributeActionGroupName),this.removeFromGroupCollection[f].push(h),c.push(f))}if(0<c.length)for(b=0;b<c.length;b++)e=c[b],h=m.getFieldInfoByFieldName(d.fieldInfos,e),this.presetFieldInfos.hasOwnProperty(e)?this.presetFieldInfos[e]=m.changeFieldToMostRestrictive(this.presetFieldInfos[e],
h):this.presetFieldInfos[e]=h}}return c},_createPresetFieldInfos:function(){this.presetFieldInfos={};n.forEach(this.configInfos,k.hitch(this,function(a){var c=[];a.relationshipInfos&&this._getRelatedLayersInfo(a.relationshipInfos,c);this._getPresetFieldsForLayers([a]);0<c.length&&this._getPresetFieldsForLayers(c)}))},_disableActionsForDeletedFields:function(){n.forEach(this._deletedFields,k.hitch(this,function(a){for(var c=0;c<this.actionsCollection[a].length;c++){if(this.removeFromGroupCollection[a][c].hasOwnProperty("groupName")){var g=
this.removeFromGroupCollection[a][c];delete this.actionsCollection[a][c].attributeActionGroupName;this.removeFromGroup(g)}k.mixin(this.actionsCollection[a][c],{enabled:!1})}}))},removeFromGroup:function(a){this.emit("RemoveFromGroup",a)},_deleteField:function(a){var c;c=p.get(a.currentTarget,"fieldName");this._deletedFields.push(c);l.destroy(a.currentTarget.parentElement);delete this.dijitCollection[c]},createContent:function(){l.create("div",{innerHTML:this.nls.presetAll.hintMsg,"class":"esriCTPresetHint"},
this.presetContainer);for(var a in this.presetFieldInfos){var c=this.presetFieldInfos[a],g=l.create("div",{},this.presetContainer);l.create("div",{innerHTML:c.label,"class":"esriCTFieldTitle"},g);var d=l.create("div",{"class":"esriCTDeletePreset close-btn jimu-icon jimu-icon-close",title:this.nls.presetAll.deleteTitle},g);p.set(d,"fieldName",a);this.own(t(d,"click",k.hitch(this,this._deleteField)));c=m.createPresetFieldContentNode(c);this.dijitCollection[a]=c;for(d=0;d<c.length;d++){var f=c[d],b,
e=l.create("div",{"class":"fieldContentNode"});f.placeAt(e);g.appendChild(e);this._configuredPresetInfos&&this._configuredPresetInfos[a]&&(b=this._configuredPresetInfos[a]);if(b&&0<b.length){e=b[0];if("dijit.form.DateTextBox"===f.declaredClass||"dijit.form.TimeTextBox"===f.declaredClass)e=""===e||null===e?null:new Date(e);f.set("value",e)}}}this.showDialog()},showDialog:function(){var a=new x({titleLabel:this.nls.presetAll.popupTitle,width:400,maxHeight:600,autoHeight:!0,content:this.presetContainer,
"class":this.baseClass,buttons:[{label:this.nls.ok,onClick:k.hitch(this,function(){this._savePresetValues()&&(this._deletedFields&&0<this._deletedFields.length&&this._disableActionsForDeletedFields(),this.emit("PrestInfoUpdated",this._configuredPresetInfos),a.close())})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:k.hitch(this,function(){a.close()})}],onClose:k.hitch(this,function(){})})},_savePresetValues:function(){var a=!0,c={},g;for(g in this.dijitCollection){var d=[],f=this.dijitCollection[g];
if(!m.isValidPresetValue(f)){a=!1;break}var b=this.presetFieldInfos[g];if("esriFieldTypeDate"===b.type)for(var b=m.getDateFieldValue(b,f),e=0;e<f.length;e++)d.push(b);else for(e=0;e<f.length;e++){var h=f[e].get("value");-1!==m.integerFields.indexOf(b.type)?isNaN(h)?d.push(""):d.push(h):d.push(h)}c[g]=d}a&&(this._configuredPresetInfos=c);return a}})});