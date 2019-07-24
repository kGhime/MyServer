// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/Evented dijit/_WidgetBase jimu/DataSourceManager ../utils ./clientStatistic".split(" "),function(d,e,f,g,h,c){return d([f,e],{constructor:function(a){this.dataSourceManager=g.getInstance();this.appConfig=a.appConfig;this.frameWorkDsId=a.dataSource.frameWorkDsId;this.returnFeatures=a.returnFeatures;this.formatResult=a.formatResult;this.statistic=a.statistic;this.exdsBeginUpdateHandle=null;this._isStatisticDataSource()},start:function(){this.awake()},awake:function(){this.sleeping=
!1;this._getFeaturesForFirst()},sleep:function(){this.sleeping=!0},destroy:function(){this._removeHandles();this.inherited(arguments)},setAppConfigDSFeatures:function(a){this.sleeping||this._onDataUpdate(a)},_getFeaturesForFirst:function(){var a=this.dataSourceManager.getData(this.dataSource.frameWorkDsId);this._onDataUpdate(a&&a.features)},_onDataUpdate:function(a){var b;this.returnFeatures?a&&(b={features:a,hasStatisticsed:!!this._isStatDataSource}):(b=this._isStatDataSource?c.statisticExtraStatSource(this.statistic,
a):c.getStatisticResultFromFeatures(a,this.statistic),this.formatResult&&(b=h.formatterRangeNumber(b)));this.emit("data-update",b)},_isStatisticDataSource:function(){var a=this.appConfig.dataSource&&this.appConfig.dataSource.dataSources,a=a&&a[this.frameWorkDsId];this._isStatDataSource=!(!a||"FeatureStatistics"!==a.type)},_resetExdsBeginUpdateHandle:function(){this.exdsBeginUpdateHandle&&this.exdsBeginUpdateHandle.remove&&(this.exdsBeginUpdateHandle.remove(),this.exdsBeginUpdateHandle=null)},_removeHandles:function(){this._resetExdsBeginUpdateHandle()}})});