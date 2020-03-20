import { loadModules } from "esri-loader";

loadModules(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"])
  .then(([Map, MapView, FeatureLayer]) => {
    let map = new Map({
      basemap: "hybrid"
    });
    
    let view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-119.4179, 36.7783],
      zoom: 9
    });

    let featureLayer = new FeatureLayer({
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
    });

    map.add(featureLayer);
  })
  .catch(err => {
    //handle any errors
    console.error(err);
  });
