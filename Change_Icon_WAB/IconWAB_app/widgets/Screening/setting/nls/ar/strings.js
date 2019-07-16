///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "feetUnit": "قدم / قدم مربع",
    "milesUnit": "ميل / أكر",
    "metersUnit": "متر / متر مربع",
    "kilometersUnit": "كيلومتر/ كيلومتر مربع",
    "hectaresUnit": "كيلومتر / هكتار"
  },
  "analysisTab": {
    "analysisTabLabel": "تحليل",
    "selectAnalysisLayerLabel": "تحليل الطبقات",
    "addLayerLabel": "إضافة طبقات",
    "noValidLayersForAnalysis": "لم يتم العثور على طبقات صحيحة في خريطة الويب المحددة.",
    "noValidFieldsForAnalysis": "لم يتم العثور على حقول صحيحة في خريطة الويب المحددة. يرجى إزالة الطبقة المحددة.",
    "addLayersHintText": "تلميح: اختر الطبقات والحقول لتضمينها في التحليل والتقرير",
    "addLayerNameTitle": "اسم الطبقة",
    "addFieldsLabel": "إضافة حقل",
    "addFieldsPopupTitle": "تحديد حقول",
    "addFieldsNameTitle": "Field Names",
    "aoiToolsLegendLabel": "منطقة أدوات الاهتمام",
    "aoiToolsDescriptionLabel": "اختر الأدوات المتاحة وقم بتسميتها لإنشاء منطقة الاهتمام.",
    "placenameLabel": "اسم المكان",
    "drawToolsLabel": "اختر أدوات الرسم",
    "uploadShapeFileLabel": "تحميل ملف أشكال",
    "coordinatesLabel": "إحداثيات",
    "coordinatesDrpDwnHintText": "لمحة: اختيار وحدة لعرض الانتقالات المدخلة",
    "coordinatesBearingDrpDwnHintText": "لمحة: اختيار تحمل لعرض الانتقالات المدخلة",
    "allowShapefilesUploadLabel": "السماح للمستخدم بتحميل ملفات الأشكال لتضمينها في التحليل",
    "allowShapefilesUploadLabelHintText": "تلميح: إضافة خيار لعلامة تبويب التقرير حيث يمكن للمستخدمين تحميل بياناتهم الخاصة كملف أشكال لتضمينه في تقرير التحليل",
    "allowVisibleLayerAnalysisLabel": "لا تُحلل نتائج الطبقات غير المرئية أو تُبلغّ عنها",
    "allowVisibleLayerAnalysisHintText": "تلميح: تكون الطبقات التي تم إيقاف تشغيلها غير مرئية بسبب عدم تحليل أو تضمين إعدادات رؤية المقياس في نتائج مطبوعة أو تم تنزيلها.",
    "areaUnitsLabel": "وحدات نتائج التحليل",
    "maxFeatureForAnalysisLabel": "العدد الأقصى لمعالم المُراد تحليلها",
    "maxFeatureForAnalysisHintText": "تلميح: تعيين العدد الأقصى للمعالم التي سيتم تضمينها في التحليل",
    "searchToleranceLabelText": "سماحية البحث",
    "searchToleranceHint": "لمحة: تستخدم سماحية البحث عند تحليل مدخلات نقطة وخط",
    "placenameButtonText": "اسم المكان",
    "drawToolsButtonText": "رسم",
    "shapefileButtonText": "ملف شكل",
    "coordinatesButtonText": "إحداثيات",
    "invalidLayerErrorMsg": "يرجى تكوين الحقول لـ",
    "drawToolSelectableLayersLabel": "اختر الطبقات القابلة للتحديد",
    "drawToolSelectableLayersHint": "تلميح: اختر الطبقات التي تحتوي على المعالم التي يمكن تحديدها باستخدام أداة تحديد الرسم",
    "drawToolsSettingsFieldsetLabel": "أدوات الرسم",
    "drawToolPointLabel": "نقطة",
    "drawToolPolylineLabel": "متعدد الخطوط",
    "drawToolExtentLabel": "المدى",
    "drawToolPolygonLabel": "مضلع",
    "selectDrawToolsText": "اختيار أدوات الرسم المتاحة لإنشاء منطقة الاهتمام",
    "selectingDrawToolErrorMessage": "اختر أداة رسم أو طبقة تحديد واحدة على الأقل لاستخدام خيار أدوات الرسم لأدوات AOI."
  },
  "downloadTab": {
    "downloadLegend": "إعدادات التنزيل",
    "reportLegend": "إعدادات التقرير",
    "downloadTabLabel": "تحميل",
    "syncEnableOptionLabel": "طبقات المعالم",
    "syncEnableOptionHint": "تلميح: اختر الطبقات التي يمكن تنزيلها وحدد التنسيقات المتاحة بها كل طبقة. ستتضمن مجموعات البيانات المنزلة تلك المعالم التي تتقاطع مع منطقة الاهتمام.",
    "syncEnableOptionNote": "ملاحظة: تتطلب تنزيلات قاعدة بيانات الجغرافيا وملف الأشكال طبقات معالم ممكنة المزامنة. إن تنسيق ملف الأشكال غير مدعوم إلا بطبقات معالم ArcGIS Online المستفاضة.",
    "extractDataTaskOptionLabel": "استخراج خدمة المعالجة الجغرافية لمهمة البيانات",
    "extractDataTaskOptionHint": "تلميح: استخدم خدمة المعالجة الجغرافية لاستخراج مهمة البيانات المنشورة لتنزيل المعالم التي تتقاطع مع منطقة الاهتمام في قاعدة البيانات الجغرافية الملفية أو تنسيقات ملف الأشكال.",
    "cannotDownloadOptionLabel": "تعطيل التنزيل",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "اسم الطبقة",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "قاعدة البيانات الجغرافية الملفية",
      "ShapefileFormatLabel": "ملف شكل",
      "allowDownloadLabel": "السماح بالتنزيل"
    },
    "setButtonLabel": "تعيين",
    "GPTaskLabel": "حدد عنوان url لخدمة المعالجة الجغرافية",
    "printGPServiceLabel": "طباعة عنوان URL للخدمة",
    "setGPTaskTitle": "حدد عنوان URL لخدمة المعالجة الجغرافية",
    "logoLabel": "الشعار",
    "logoChooserHint": "تلميح: النقر على أيقونة الصورة لتغيير الشعار المعروض أعلى الزاوية اليسرى من التقرير",
    "footnoteLabel": "حاشية سفلية",
    "columnTitleColorPickerLabel": "لون عنوان عمود التقرير",
    "reportTitleLabel": "عنوان التقرير",
    "errorMessages": {
      "invalidGPTaskURL": "خدمة معالجة جغرافية وغير صحيحة. الرجاء تحديد خدمة معالجة جغرافية تتضمن استخراج مهمة البيانات.",
      "noExtractDataTaskURL": "الرجاء تحديد خدمة معالجة جغرافية تتضمن استخراج مهمة البيانات.",
      "duplicateCustomOption": "يوجد إدخال مكرر لـ ${duplicateValueSizeName} exists.",
      "invalidLayoutWidth": "تم إدخال عرض غير صحيح لـ ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "تم إدخال ارتفاع غير صحيح لـ ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "تم تحديد وحدة صفحة غير صحيحة لـ ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "حَدَثَ خطأ أثناء إحضار معلومات بُعد المهمة المرافقة. يرجى إعادة المحاولة.",
      "failtofetchbuddyTaskName": "حَدَثَ خطأ أثناء إحضار اسم المهمة المرافقة. يرجى إعادة المحاولة.",
      "failtofetchChoiceList": "حَدَثَ خطأ أثناء إحضاء قائمة الخيار من خدمة الطباعة. يرجى إعادة المحاولة.",
      "invalidWidth": "العرض غير صحيح.",
      "invalidHeight": "الارتفاع غير صحيح."
    },
    "addCustomLayoutTitle": "إضافة مخطط مخصص",
    "customLayoutOptionHint": "تلميح: أضف خمخطط من خدمة الطباعة إلى قائمة خيارت الطباعة.",
    "reportDefaultOptionLabel": "تخطيط افتراضي",
    "pageSizeUnits": {
      "millimeters": "ميليميتر",
      "points": "النقاط"
    },
    "noDataTextRepresentation": "لا توجد قيمة بيانات",
    "naTextRepresentation": "قيمة غير منطبقة",
    "noDataDefaultText": "لا توجد بيانات",
    "notApplicableDefaultText": "غير متوفر"
  },
  "generalTab": {
    "generalTabLabel": "عام",
    "tabLabelsLegend": "لافتات تسمية اللوحة",
    "tabLabelsHint": "لمحة: حدد لافتات التسمية",
    "AOITabLabel": "لوحة منطقة الاهتمام",
    "ReportTabLabel": "لوحة التقرير",
    "bufferSettingsLegend": "إعدادات النطاق",
    "defaultBufferDistanceLabel": "مسافة النطاق المؤقت الافتراضي",
    "defaultBufferUnitsLabel": "وحدات النطاق",
    "generalBufferSymbologyHint": "تلميح: يستخدم الترميز للإشارة إلى منطقة النطاق حول منطقة الاهتمام المحددة",
    "aoiGraphicsSymbologyLegend": "ترميز منطقة الاهتمام",
    "aoiGraphicsSymbologyHint": "لمحة: يستخدم الترميز للإشارة إلى نقطة أو خط أو مضلع في منطقة الاهتمام",
    "pointSymbologyLabel": "نقطة",
    "previewLabel": "معاينة",
    "lineSymbologyLabel": "خط",
    "polygonSymbologyLabel": "مضلع",
    "aoiBufferSymbologyLabel": "ترميز النطاق",
    "pointSymbolChooserPopupTitle": "رمز العنوان أو موقع النقطة",
    "polygonSymbolChooserPopupTitle": "رمز المضلع",
    "lineSymbolChooserPopupTitle": "رمز الخط",
    "aoiSymbolChooserPopupTitle": "رمز النطاق",
    "aoiTabText": "AOI",
    "reportTabText": "تقرير",
    "invalidSymbolValue": "قيمة الرمز غير صحيحة."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "البحث في إعدادات المصدر",
    "searchSourceSettingTitle": "البحث في إعدادات المصدر",
    "searchSourceSettingTitleHintText": "أضف خدمات التكويد الجغرافي أو طبقات المعالم وقم بتكوينها كمصادر للبحث، وتُحدد هذه المصادر المحددة ما يمكن البحث عنه في مربع البحث.",
    "addSearchSourceLabel": "إضافة مصدر البحث",
    "featureLayerLabel": "طبقة المعلم",
    "geocoderLabel": "المُكود الجغرافي",
    "generalSettingLabel": "إعدادات عامة",
    "allPlaceholderLabel": "نص العنصر النائب للبحث في كل:",
    "allPlaceholderHintText": "تلميح: أدخل نص لإظهاره في صورة عنصر نائب في حين البحث عن جميع الطبقات والمكود الجغرافي",
    "generalSettingCheckboxLabel": "عرض عناصر منبثقة للمعلم أو الموقع الذي يتم العثور عليه",
    "countryCode": "كود الدولة أو المنطقة",
    "countryCodeEg": "مثال ",
    "countryCodeHint": "سيؤدي ترك هذه القيمة فارغة إلى البحث في كل الدول والمناطق",
    "questionMark": "؟",
    "searchInCurrentMapExtent": "البحث في مدى الخريطة الحالي فقط",
    "locatorUrl": "عنوان URL للمكود الجغرافي",
    "locatorName": "اسم المكود الجغرافي",
    "locatorExample": "مثال",
    "locatorWarning": "هذا الإصدار من خدمة التكويد الجغرافي غير مدعوم، فيما يدعم عنصر واجهة الاستخدام الإصدار 10.0 فأحدث من خدمة التكويد الجغرافي.",
    "locatorTips": "لا توجد اقتراحات بسبب عدم دعم خدمة التكويد الجغرافي لإمكانية الاقتراح.",
    "layerSource": "مصدر الطبقة",
    "setLayerSource": "تحديد مصدر الطبقة",
    "setGeocoderURL": "تحديد عنوان URL للمكود الجغرافي",
    "searchLayerTips": "لا توجد اقتراحات بسبب عدم دعم خدمة المعالم لإمكانية الحدود الفاصلة للصفحات.",
    "placeholder": "نص العنصر النائب",
    "searchFields": "حقول البحث:",
    "displayField": "عرض الحقل",
    "exactMatch": "تطابق تام",
    "maxSuggestions": "الاقتراحات القصوى",
    "maxResults": "النتائج القصوى",
    "enableLocalSearch": "تمكين البحث المحلي",
    "minScale": "أدنى مقياس الرسم",
    "minScaleHint": "عندما يكون مقياس الخريطة أكبر من هذا المقياس، سيتم تطبيق البحث المحلي",
    "radius": "نصف القطر",
    "radiusHint": "يُحدد مُحيط المنطقة حول مركز الخريطة الحالية المستخدمة لتحسين رتبة مرشحي التكويد الجغرافي؛ حتى يتم إرجاع المرشحين الأقرب للموقع أولاً",
    "setSearchFields": "تحديد حقول البحث",
    "set": "تعيين",
    "invalidUrlTip": "عنوان URL لـ ${URL} غير صحيح أو لا يمكن الوصول إليه.",
    "invalidSearchSources": "بحث غير صحيح في إعدادات المصدر"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "يرجى ملء الحقول المطلوبة",
    "bufferDistanceFieldsErrorMsg": "يرجى إدخال قيم صحيحة",
    "invalidSearchToleranceErrorMsg": "يرجى إدخال قيمة صحيحة لسماحية البحث",
    "atLeastOneCheckboxCheckedErrorMsg": "تكوين غير صحيح: مطلوب أداة منطقة اهتمام واحدة على الأقل.",
    "noLayerAvailableErrorMsg": "لا توجد أي طبقات",
    "layerNotSupportedErrorMsg": "غير مدعوم ",
    "noFieldSelected": "الرجاء استخدام رمز تحرير لتحديد الحقول الخاصة بالتحليل.",
    "duplicateFieldsLabels": "تكرار لافتة التسمية \"${labelText}\" المضافة لـ: \"${itemNames}\"",
    "noLayerSelected": "يرجى تحديد طبقة واحدة على الأقل للتحليل.",
    "errorInSelectingLayer": "تعذر تحديد طبقة. الرجاء إعادة المحاولة مرة أخرى.",
    "errorInMaxFeatureCount": "يرجى إدخال الحد الأقصى الصحيح لعدد المعالم المراد تحليلها."
  }
});