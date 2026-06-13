ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-73.033798, -36.767056, -72.906655, -36.694801]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordProyectada18s_1 = new ol.format.GeoJSON();
var features_CoordProyectada18s_1 = format_CoordProyectada18s_1.readFeatures(json_CoordProyectada18s_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CoordProyectada18s_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordProyectada18s_1.addFeatures(features_CoordProyectada18s_1);
cluster_CoordProyectada18s_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CoordProyectada18s_1
});
var lyr_CoordProyectada18s_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CoordProyectada18s_1, 
                style: style_CoordProyectada18s_1,
                popuplayertitle: 'Coord Proyectada 18s',
                interactive: true,
                title: '<img src="styles/legend/CoordProyectada18s_1.png" /> Coord Proyectada 18s'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CoordProyectada18s_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CoordProyectada18s_1];
lyr_CoordProyectada18s_1.set('fieldAliases', {'Name': 'Name', 'T_pregunta': 'T_pregunta', 'P_Correc': 'P_Correc', 'P_Error': 'P_Error', 'P_Erradas': 'P_Erradas', 'Porc_Total': 'Porc_Total', 'Porc_error': 'Porc_error', 'Porc_corre': 'Porc_corre', 'id_Estud': 'id_Estud', 'Video': 'Video', });
lyr_CoordProyectada18s_1.set('fieldImages', {'Name': 'TextEdit', 'T_pregunta': 'TextEdit', 'P_Correc': 'TextEdit', 'P_Error': 'TextEdit', 'P_Erradas': 'TextEdit', 'Porc_Total': 'TextEdit', 'Porc_error': 'TextEdit', 'Porc_corre': 'TextEdit', 'id_Estud': 'TextEdit', 'Video': 'TextEdit', });
lyr_CoordProyectada18s_1.set('fieldLabels', {'Name': 'no label', 'T_pregunta': 'inline label - always visible', 'P_Correc': 'inline label - always visible', 'P_Error': 'inline label - always visible', 'P_Erradas': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Porc_error': 'inline label - always visible', 'Porc_corre': 'inline label - always visible', 'id_Estud': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_CoordProyectada18s_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});