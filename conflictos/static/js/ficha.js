/***********image toggle***********/
$('.image_map').on('click', function(){
  $(".image_map").css("opacity","1");
  $(".image_evol").css("opacity","0.5");
  $("#col_map").show();
  $("#col_evolucion").hide();
});
$('.image_evol').on('click', function(){
  $(".image_map").css("opacity","0.5");
  $(".image_evol").css("opacity","1");
  $("#col_evolucion").show();
  $("#col_map").hide();
});

/***********Get URL Par***********/
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var id = getUrlParameter('id');

var noti = getUrlParameter('noticia');
if (typeof noti != "undefined") {
  $(".image_map").css("opacity","0.5");
  $(".image_evol").css("opacity","1");
  $("#col_evolucion").show();
  $("#col_map").hide();
}

var lat = parseFloat($('#lat').html());
var lon = parseFloat($('#lon').html());




/*iconos*/
var generalStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 20],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/static/images/puntos/purpura.png'
  }))
});

var energia_azul_style = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.1, 2],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/static/images/puntos/azul.png'
  }))
});

var energia_amarillo_style = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.05, 1],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/static/images/puntos/amarillo.png'
  }))
});

var energia_amarillo_azul_oscuro_style = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 20],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/static/images/puntos/magenta.png'
  }))
});

var energia_cafe_style = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 20],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/static/images/puntos/naranjo.png'
  }))
});

var energia_purpura_style = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 20],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/static/images/puntos/purpura.png'
  }))
});

var energia_rojo_style = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 0],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/static/images/puntos/rojo.png'
  }))
});

var energia_verde_style = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 20],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/static/images/puntos/verde.png'
  }))
});
var biomasaSource = new ol.source.Vector({
  url: '/busqueda_general/?busqueda=bio',
  format: new ol.format.GeoJSON()
});
var biomasaLayer= new ol.layer.Vector({source: biomasaSource,style: energia_verde_style});

var geotermicaSource = new ol.source.Vector({
  url: '/busqueda_general/?busqueda=geo',
  format: new ol.format.GeoJSON()
});
var geotermicaLayer= new ol.layer.Vector({source: geotermicaSource,style: energia_cafe_style});

var fotovoltaicaSource = new ol.source.Vector({
  url: '/busqueda_general/?busqueda=foto',
  format: new ol.format.GeoJSON()
});
var fotovoltaicaLayer= new ol.layer.Vector({source: fotovoltaicaSource,style: energia_amarillo_style});

var eolicaSource = new ol.source.Vector({
  url: '/busqueda_general/?busqueda=eo',
  format: new ol.format.GeoJSON()
});
var eolicaLayer= new ol.layer.Vector({source: eolicaSource,style: energia_amarillo_azul_oscuro_style});

var termoelectricaSource = new ol.source.Vector({
  url: '/busqueda_general/?busqueda=termo',
  format: new ol.format.GeoJSON()
});
var termoelectricaLayer= new ol.layer.Vector({source: termoelectricaSource,style: energia_rojo_style});

var hidroelectricaSource = new ol.source.Vector({
  url: '/busqueda_general/?busqueda=hidro',
  format: new ol.format.GeoJSON()
});
var hidroelectricaLayer= new ol.layer.Vector({source: hidroelectricaSource,style: energia_azul_style});

var linea_transmisionSource = new ol.source.Vector({
  url: '/json/?busqueda=linea_transmision',
  format: new ol.format.GeoJSON()
});
var linea_transmisionLayer= new ol.layer.Vector({source: linea_transmisionSource,style: energia_amarillo_azul_oscuro_style });
/*inicializar mapa*/

var raster = new ol.layer.Tile({
  source: new ol.source.OSM()
});

var source = new ol.source.Vector({wrapX: false});

var vector = new ol.layer.Vector({
  source: source
});
var osmmap = new ol.layer.Tile({
  source: new ol.source.OSM({
    attributions: [
    'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    ol.source.OSM.ATTRIBUTION
    ],
    url: 'https://api.mapbox.com/styles/v1/ocuc/cj6p23jy6267m2sojzzcn0wpa/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2N1YyIsImEiOiJjajFnbWVlOGowMDMwMnFvaDBkb29tY251In0.ImJiuX5XUafsFDafL4To0w'
  })
});
var LonLat = [lon, lat];
var Mercator = ol.proj.fromLonLat(LonLat);
var map = new ol.Map({
  layers: [
  osmmap,biomasaLayer,geotermicaLayer,fotovoltaicaLayer,eolicaLayer,termoelectricaLayer,hidroelectricaLayer],
  target: 'map',
  view: new ol.View({
    center: Mercator,
    zoom: 8,
    minZoom: 6,
    maxZoom: 15
  })
});
biomasaLayer.setVisible(true);
geotermicaLayer.setVisible(true);
fotovoltaicaLayer.setVisible(true);
eolicaLayer.setVisible(true);
hidroelectricaLayer.setVisible(true);
termoelectricaLayer.setVisible(true);
linea_transmisionLayer.setVisible(true);
/*popup*/
var element = document.getElementById('popup');

var popup = new ol.Overlay({
  element: element,
  positioning: 'bottom-left',
  stopEvent: false,
  offset: [-10, 0]
});
map.addOverlay(popup);

      // display popup on click
      map.on('click', function(evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel,
          function(feature) {
            return feature;
          });
        if (feature) {
          var coordinates = feature.getGeometry().getCoordinates();
          popup.setPosition(coordinates);
          $(element).popover({
            'placement': 'left',
            'html': true,
            'title': feature.get('nombre'),
            'content': 'Estado: '+feature.get('estado')+'<a style="float:right;" href="/ficha/?id='+feature.get('bd_id')+'">[ver +]</a>'
          });
          $(element).popover('show');
          change_popover_title(feature.get('tipo'));
        } else {
          $(element).popover('destroy');
        }
      });


/****************funciones***************/
      function change_popover_title(a){
        if(a == 'termo'){
          jQuery(".popover-title").css("background-color","#ff383a");
        }
        else if(a == 'geo'){
          jQuery(".popover-title").css("background-color","#ff7d10");
        }
        else if(a == 'foto'){
          jQuery(".popover-title").css("background-color","#ffc02f");
        }
        else if(a == 'bio'){
          jQuery(".popover-title").css("background-color","#60b43d");
        }
        else if(a == 'eo'){
          jQuery(".popover-title").css("background-color","#00adc0");
        }
        else if(a == 'hidro'){
          jQuery(".popover-title").css("background-color","#008be5");
        }
        else if(a == 'mareo'){
          jQuery(".popover-title").css("background-color","#592faa");
        }
      }