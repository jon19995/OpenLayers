const attribution = new ol.control.Attribution({
  collapsible: false
});

const map = new ol.Map({
    controls: ol.control.defaults({attribution: false}).extend([attribution]),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([30.3141, 59.9386]),
        maxZoom: 18,
        zoom: 10
    })
});
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([30.3991, 60.0386]))
            })
        ]
    })
});
map.addLayer(layer);
