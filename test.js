mapView.map.operationalLayers.append(function(getLayerToAdd) {
  wLog("Creating layer");
  let layer = Qt.createComponent("../qml/main.qml");
  if (layer.status === QtQuick.Component.Ready) {
    return layer.createObject();
  }
});
