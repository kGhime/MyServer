// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/html dojo/string dojo/keys dijit/_WidgetBase dijit/_TemplatedMixin".split(" "),function(b,c,d,e,f,g){return b([f,g],{baseClass:"jimu-search",declaredClass:"jimu.dijit.Search",templateString:'\x3cdiv\x3e\x3cspan class\x3d"jimu-input-wrapper" style\x3d"left:0;right:0;"\x3e\x3cinput class\x3d"jimu-input" style\x3d"background:#fafafc;" data-dojo-attach-point\x3d"inputSearch" data-dojo-attach-event\x3d"onKeydown: _onKeyDown, onKeyUp: _onKeyUp"/\x3e\x3c/span\x3e\x3cdiv class\x3d"search-btn jimu-icon jimu-icon-search" data-dojo-attach-point\x3d"searchBtn" data-dojo-attach-event\x3d"onClick: _onBtnClick"\x3e\x3c/div\x3e\x3c/div\x3e',
placeholder:"",onSearch:null,searchWhenInput:!1,postCreate:function(){this.inherited(arguments);this.placeholder&&c.setAttr(this.inputSearch,"placeholder",this.placeholder)},getValue:function(){return d.trim(this.inputSearch.value)},doSearch:function(){if(this.onSearch)this.onSearch(this.getValue())},_onKeyDown:function(a){this.doChange();(void 0!==a.keyCode?a.keyCode:a.which)===e.ENTER&&this.doSearch();a.stopPropagation()},_onKeyUp:function(){this.searchWhenInput&&this.doSearch()},_onBtnClick:function(){this.doSearch()},
doChange:function(){if(this.onChange)this.onChange(this.getValue())}})});