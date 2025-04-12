var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_geologiapiura_practi_1 = new ol.format.GeoJSON();
var features_geologiapiura_practi_1 = format_geologiapiura_practi_1.readFeatures(json_geologiapiura_practi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologiapiura_practi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologiapiura_practi_1.addFeatures(features_geologiapiura_practi_1);
var lyr_geologiapiura_practi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologiapiura_practi_1, 
                style: style_geologiapiura_practi_1,
                popuplayertitle: 'geologia-piura_practi',
                interactive: true,
    title: 'geologia-piura_practi<br />\
    <img src="styles/legend/geologiapiura_practi_1_0.png" /> Ad-c<br />\
    <img src="styles/legend/geologiapiura_practi_1_1.png" /> Ao-b<br />\
    <img src="styles/legend/geologiapiura_practi_1_2.png" /> C_poblados<br />\
    <img src="styles/legend/geologiapiura_practi_1_3.png" /> C-d<br />\
    <img src="styles/legend/geologiapiura_practi_1_4.png" /> Estuario<br />\
    <img src="styles/legend/geologiapiura_practi_1_5.png" /> Lagunas<br />\
    <img src="styles/legend/geologiapiura_practi_1_6.png" /> Ll-a<br />\
    <img src="styles/legend/geologiapiura_practi_1_7.png" /> Lld-c<br />\
    <img src="styles/legend/geologiapiura_practi_1_8.png" /> Llo-b<br />\
    <img src="styles/legend/geologiapiura_practi_1_9.png" /> Reservorio<br />\
    <img src="styles/legend/geologiapiura_practi_1_10.png" /> V-a<br />\
    <img src="styles/legend/geologiapiura_practi_1_11.png" /> Vc-d<br />\
    <img src="styles/legend/geologiapiura_practi_1_12.png" /> Vc-e<br />\
    <img src="styles/legend/geologiapiura_practi_1_13.png" /> Vs1-d<br />\
    <img src="styles/legend/geologiapiura_practi_1_14.png" /> Vs1-e<br />\
    <img src="styles/legend/geologiapiura_practi_1_15.png" /> Vs2-d<br />\
    <img src="styles/legend/geologiapiura_practi_1_16.png" /> Vs2-e<br />\
    <img src="styles/legend/geologiapiura_practi_1_17.png" /> Vs3-d<br />\
    <img src="styles/legend/geologiapiura_practi_1_18.png" /> Vs3-e<br />\
    <img src="styles/legend/geologiapiura_practi_1_19.png" /> VsA1-e<br />\
    <img src="styles/legend/geologiapiura_practi_1_20.png" /> VsA2-e<br />\
    <img src="styles/legend/geologiapiura_practi_1_21.png" /> Vso-c<br />' });
var format_Departamentode_PIURA_2 = new ol.format.GeoJSON();
var features_Departamentode_PIURA_2 = format_Departamentode_PIURA_2.readFeatures(json_Departamentode_PIURA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentode_PIURA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentode_PIURA_2.addFeatures(features_Departamentode_PIURA_2);
var lyr_Departamentode_PIURA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentode_PIURA_2, 
                style: style_Departamentode_PIURA_2,
                popuplayertitle: 'Departamento de_PIURA',
                interactive: true,
                title: '<img src="styles/legend/Departamentode_PIURA_2.png" /> Departamento de_PIURA'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_geologiapiura_practi_1.setVisible(true);lyr_Departamentode_PIURA_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_geologiapiura_practi_1,lyr_Departamentode_PIURA_2];
lyr_geologiapiura_practi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_Departamentode_PIURA_2.set('fieldAliases', {'NAME_1': 'NAME_1', });
lyr_geologiapiura_practi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SIMBOLO_': 'TextEdit', 'REGION': 'TextEdit', 'FORMAS_DEL': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_Departamentode_PIURA_2.set('fieldImages', {'NAME_1': 'TextEdit', });
lyr_geologiapiura_practi_1.set('fieldLabels', {'OBJECTID': 'no label', 'SIMBOLO_': 'inline label - always visible', 'REGION': 'inline label - always visible', 'FORMAS_DEL': 'no label', 'Area': 'inline label - always visible', 'Perimetro': 'inline label - always visible', });
lyr_Departamentode_PIURA_2.set('fieldLabels', {'NAME_1': 'inline label - always visible', });
lyr_Departamentode_PIURA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});