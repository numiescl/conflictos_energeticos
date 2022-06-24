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
var santiagoLonLat = [-68.64, -38.65];
var santiagoWebMercator = ol.proj.fromLonLat(santiagoLonLat);



/*json files*/
function jsonStyle(feature) {
  var style = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 6,
      stroke: new ol.style.Stroke({
        color: 'white',
        width: 2
      }),
      fill: new ol.style.Fill({
        color: 'green'
      })
    })
  });
  return [style];
}


var find = getUrlParameter('busqueda');

if (typeof find != "undefined") {

var biomasaSource = new ol.source.Vector({
  url: '/busqueda_avanzada/?busqueda=bio&palabra='+find,
  format: new ol.format.GeoJSON()
});
var biomasaLayer= new ol.layer.Vector({source: biomasaSource,style: energia_verde_style});

var geotermicaSource = new ol.source.Vector({
  url: '/busqueda_avanzada/?busqueda=geo&palabra='+find,
  format: new ol.format.GeoJSON()
});
var geotermicaLayer= new ol.layer.Vector({source: geotermicaSource,style: energia_cafe_style});

var fotovoltaicaSource = new ol.source.Vector({
  url: '/busqueda_avanzada/?busqueda=foto&palabra='+find,
  format: new ol.format.GeoJSON()
});
var fotovoltaicaLayer= new ol.layer.Vector({source: fotovoltaicaSource,style: energia_amarillo_style});

var eolicaSource = new ol.source.Vector({
  url: '/busqueda_avanzada/?busqueda=eo&palabra='+find,
  format: new ol.format.GeoJSON()
});
var eolicaLayer= new ol.layer.Vector({source: eolicaSource,style: energia_amarillo_azul_oscuro_style});

var termoelectricaSource = new ol.source.Vector({
  url: '/busqueda_avanzada/?busqueda=termo&palabra='+find,
  format: new ol.format.GeoJSON()
});
var termoelectricaLayer= new ol.layer.Vector({source: termoelectricaSource,style: energia_rojo_style});

var hidroelectricaSource = new ol.source.Vector({
  url: '/busqueda_avanzada/?busqueda=hidro&palabra='+find,
  format: new ol.format.GeoJSON()
});
var hidroelectricaLayer= new ol.layer.Vector({source: hidroelectricaSource,style: energia_azul_style});

var mareoSource = new ol.source.Vector({
  url: '/json/?busqueda=mareo',
  format: new ol.format.GeoJSON()
});
var mareoLayer= new ol.layer.Vector({source: mareoSource,style: energia_purpura_style});

var linea_transmisionSource = new ol.source.Vector({
  url: '/json/?busqueda=linea_transmision',
  format: new ol.format.GeoJSON()
});
var linea_transmisionLayer= new ol.layer.Vector({source: linea_transmisionSource,style: energia_amarillo_azul_oscuro_style });

}
else{
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

var mareoSource = new ol.source.Vector({
  url: '/json/?busqueda=mareo',
  format: new ol.format.GeoJSON()
});
var mareoLayer= new ol.layer.Vector({source: mareoSource,style: energia_purpura_style});

var linea_transmisionSource = new ol.source.Vector({
  url: '/json/?busqueda=linea_transmision',
  format: new ol.format.GeoJSON()
});
var linea_transmisionLayer= new ol.layer.Vector({source: linea_transmisionSource,style: energia_amarillo_azul_oscuro_style });

}

///json/?busqueda=geotermica

//layer.setVisibility(true)

var primer_ingreso = 0;

var map = new ol.Map({
  layers: [
  osmmap,biomasaLayer,geotermicaLayer,fotovoltaicaLayer,eolicaLayer,termoelectricaLayer,hidroelectricaLayer,mareoLayer],
  target: 'map',
  view: new ol.View({
    center: santiagoWebMercator,
    zoom: 4,
    minZoom: 4,
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
mareoLayer.setVisible(false);
/*popup*/
var element = document.getElementById('popup');

var popup = new ol.Overlay({
  element: element,
  positioning: 'bottom-left',
  stopEvent: false,
  offset: [-10, 0]
});
map.addOverlay(popup);
var primer_titulo=0;
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
      
      /*chechbox invisible and visible*/

      var filtros = [];
      var busqueda='';

      $('input[type="checkbox"],select[id="involucrados"]').on('click change', function(){

        if(primer_ingreso == 0 && typeof find == "undefined"){
          biomasaLayer.setVisible(false);
          geotermicaLayer.setVisible(false);
          fotovoltaicaLayer.setVisible(false);
          eolicaLayer.setVisible(false);
          hidroelectricaLayer.setVisible(false);
          termoelectricaLayer.setVisible(false);
          linea_transmisionLayer.setVisible(false);
          mareoLayer.setVisible(false);
          primer_ingreso =1;
        }
        else if(primer_ingreso == 0 && typeof find != "undefined"){

            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda=termo',
              format: new ol.format.GeoJSON()
            });
            termoelectricaLayer.setSource(aux);
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda=bio',
              format: new ol.format.GeoJSON()
            });
            biomasaLayer.setSource(aux);
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda=eo',
              format: new ol.format.GeoJSON()
            });
            eolicaLayer.setSource(aux);
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda=hidro',
              format: new ol.format.GeoJSON()
            });
            hidroelectricaLayer.setSource(aux);
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda=geo',
              format: new ol.format.GeoJSON()
            });
            geotermicaLayer.setSource(aux);
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda=mareo',
              format: new ol.format.GeoJSON()
            });
            mareoLayer.setSource(aux);

          biomasaLayer.setVisible(false);
          geotermicaLayer.setVisible(false);
          fotovoltaicaLayer.setVisible(false);
          eolicaLayer.setVisible(false);
          hidroelectricaLayer.setVisible(false);
          termoelectricaLayer.setVisible(false);
          linea_transmisionLayer.setVisible(false);
          mareoLayer.setVisible(false);
          primer_ingreso =1;
        }

        actualiza_filtros();

        if ( $(this).is(':checked') ) {
          actualiza_capas_filtros($(this).val(),true);
        } 
        else {
          actualiza_capas_filtros($(this).val(),false);
        }
      });




      $('.image_map').on('click', function(){
        $(".image_map").css("opacity","1");
        $(".image_evol").css("opacity","0.5");
        $("#col_map").hide();
        $("#col_evolucion").show();
      });
      $('.image_evol').on('click', function(){
        $(".image_map").css("opacity","0.5");
        $(".image_evol").css("opacity","1");
        $("#col_evolucion").hide();
        $("#col_map").show();
      });


      /************detectar return previous**********/
      jQuery(document).ready(function($) {
        primer_ingreso = 0;
        if (window.history && window.history.pushState) {
          jQuery('input:checkbox').removeAttr('checked');
        }
      });

      /**************************FUNCIONES****************************/



      function actualiza_capas_filtros(a,b){
        var empresa='';
        console.log("significa:"+a);

        if($("#involucrados").val() != ''){
          empresa = $("#involucrados").val();
        }

        if(a =='biomasa')
        {
          biomasaLayer.setVisible(b);
        }
        else if(a =='geotermica')
        {
          geotermicaLayer.setVisible(b);
        }
        else if(a =='hidroelectrica')
        {
          hidroelectricaLayer.setVisible(b);
        }
        else if(a =='fotovoltaica')
        {
          fotovoltaicaLayer.setVisible(b);
        }
        else if(a =='eolica')
        {
          eolicaLayer.setVisible(b);
        }
        else if(a =='termoelectrica')
        {
          termoelectricaLayer.setVisible(b);
        }
        else if(a =='mareomotriz')
        {
          mareoLayer.setVisible(b);
        }
        else if(a =='linea_transmision')
        {
          linea_transmisionLayer.setVisible(b);
        }

        else if(a =='activo' || a =='finalizado' || a == 'contaminacion_agua' || a == 'ambiental' || a == 'acaparamiento_agua' || a == 'contaminacion_aire' || a == 'torres_altatension' || a == 'impacto_turismo' || a == 'impacto_reservas' || a == 'ocupacion_espacios' || a == 'impacto_trabajo' || a == 'impacto_salud' || a == 'impacto_calidad' || a == 'ilegalidad' || a == 'tipo_otro' || a == 'Aaktei' || a == 'AES Gener' || a == 'Agrícola Río Blanco S.A' || a == 'Asociación de Canalistas del Canal Zañartu' || a == 'Atiaia Enegía Chile S.A' || a == 'Australis Power - Octopus LNG S.p.a' || a == 'Barrick Chile Generación Limitada' || a == 'BiobíoGenera' || a == 'CAP S.A.' || a == 'CGE' || a == 'CODELCO' || a == 'Colbún' || a == 'E-CL' || a == 'ECOPOWER S.A.' || a == 'Eléctrica Puntilla S.A.' || a == 'Empresa Eléctrica Puesco SpA. ' || a == 'Enacon S.A.' || a == 'ENAP' || a == 'Endesa' || a == 'Energía Austral' || a == 'Energía Coyanco S.A' || a == 'Energía Pura S.A.' || a == 'EPA' || a == 'FibroAndes' || a == 'GDF Suez' || a == 'GTD Negocios S.A.' || a == 'Hidroeléctrica Agua Viva S.A' || a == 'Hidroeléctrica Centinela Ltda.' || a == 'Hidroeléctrica Doña Alicia Sociedad Anónima' || a == 'HidroÑuble SpA. ' || a == 'HydroChile S.A.' || a == 'IC Power' || a == 'Latin American Power' || a == 'Ministerio de Obras Públicas con posterior concesión privada' || a == 'Mediterráneo S.A' || a == 'Minicentral Hidroeléctrica Saltos de Los Andes S.A.' || a == 'MPX' || a == 'Pilmaiquén S.A.' || a == 'Pintoresco Hidro SpA.' || a == 'Pirandes' || a == 'Rakun SPA' || a == 'Río Cautín S.A' || a == 'RP Global Chile' || a == 'Rurelec' || a == 'Santa Bárbara Inversiones' || a == 'SN Power' || a == 'South World Business S.A.' || a == 'Southern Cross Group' || a == 'Suez Energy' || a == 'Terra Cabrero S.A' || a == 'Trans Antartic Energía S.A' || a == '')
        {
          if(a == 'contaminacion_agua' || a == 'ambiental' || a == 'acaparamiento_agua' || a == 'contaminacion_aire' || a == 'torres_altatension' || a == 'impacto_turismo' || a == 'impacto_reservas' || a == 'ocupacion_espacios' || a == 'impacto_trabajo' || a == 'impacto_salud' || a == 'impacto_calidad' || a == 'ilegalidad' || a == 'tipo_otro' || a == 'Aaktei' || a == 'AES Gener' || a == 'Agrícola Río Blanco S.A' || a == 'Asociación de Canalistas del Canal Zañartu' || a == 'Atiaia Enegía Chile S.A' || a == 'Australis Power - Octopus LNG S.p.a' || a == 'Barrick Chile Generación Limitada' || a == 'BiobíoGenera' || a == 'CAP S.A.' || a == 'CGE' || a == 'CODELCO' || a == 'Colbún' || a == 'E-CL' || a == 'ECOPOWER S.A.' || a == 'Eléctrica Puntilla S.A.' || a == 'Empresa Eléctrica Puesco SpA. ' || a == 'Enacon S.A.' || a == 'ENAP' || a == 'Endesa' || a == 'Energía Austral' || a == 'Energía Coyanco S.A' || a == 'Energía Pura S.A.' || a == 'EPA' || a == 'FibroAndes' || a == 'GDF Suez' || a == 'GTD Negocios S.A.' || a == 'Hidroeléctrica Agua Viva S.A' || a == 'Hidroeléctrica Centinela Ltda.' || a == 'Hidroeléctrica Doña Alicia Sociedad Anónima' || a == 'HidroÑuble SpA. ' || a == 'HydroChile S.A.' || a == 'IC Power' || a == 'Latin American Power' || a == 'Ministerio de Obras Públicas con posterior concesión privada' || a == 'Mediterráneo S.A' || a == 'Minicentral Hidroeléctrica Saltos de Los Andes S.A.' || a == 'MPX' || a == 'Pilmaiquén S.A.' || a == 'Pintoresco Hidro SpA.' || a == 'Pirandes' || a == 'Rakun SPA' || a == 'Río Cautín S.A' || a == 'RP Global Chile' || a == 'Rurelec' || a == 'Santa Bárbara Inversiones' || a == 'SN Power' || a == 'South World Business S.A.' || a == 'Southern Cross Group' || a == 'Suez Energy' || a == 'Terra Cabrero S.A' || a == 'Trans Antartic Energía S.A' || a == ''){
            actualiza_filtros();
          }
          else if(a =='activo'){
            $('#fina').prop("checked",false);
            actualiza_filtros();
          }
          else{
            $('#acti').prop("checked",false);
            actualiza_filtros();
          }


          if(filtros.indexOf('termo') != -1)
          {
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda='+despeja_filtros(busqueda,"termo")+'&empresa='+empresa,
              format: new ol.format.GeoJSON()
            });
            termoelectricaLayer.setSource(aux);
          }
          if(filtros.indexOf('bio') != -1)
          {
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda='+despeja_filtros(busqueda,"bio")+'&empresa='+empresa,
              format: new ol.format.GeoJSON()
            });
            biomasaLayer.setSource(aux);
          }
          if(filtros.indexOf('eo') != -1)
          {
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda='+despeja_filtros(busqueda,"eo")+'&empresa='+empresa,
              format: new ol.format.GeoJSON()
            });
            eolicaLayer.setSource(aux);
          }
          if(filtros.indexOf('hidro') != -1)
          {
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda='+despeja_filtros(busqueda,"hidro")+'&empresa='+empresa,
              format: new ol.format.GeoJSON()
            });
            hidroelectricaLayer.setSource(aux);
          }
          if(filtros.indexOf('geo') != -1)
          {
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda='+despeja_filtros(busqueda,"geo")+'&empresa='+empresa,
              format: new ol.format.GeoJSON()
            });
            geotermicaLayer.setSource(aux);
          }
          if(filtros.indexOf('mareo') != -1)
          {
            aux=new ol.source.Vector({
              url: '/busqueda_general/?busqueda='+despeja_filtros(busqueda,"mareo")+'&empresa='+empresa,
              format: new ol.format.GeoJSON()
            });
            mareoLayer.setSource(aux);
          }
        }

      }



      function actualiza_filtros(){
        filtros = [];
        $('input[type="checkbox"]:checked').each(function() {
          if($(this).attr('id') != 'dis'){
            filtros.push($(this).attr('id'));
          }
        });

        busqueda='';
        for (var i = 0; i < filtros.length; i++) { 
          busqueda += filtros[i]+'+';
        }
        busqueda=busqueda.slice(0, -1);
        
      }


      function despeja_filtros(search,s){
        var auxilar = search.split("+");
        var retorno = "";
        for (var i = 0; i < auxilar.length; i++){

          if(auxilar[i] == s || auxilar[i] =='acti' || auxilar[i] =='fina' || auxilar[i] == 'contaminacion_agua' || auxilar[i] == 'ambiental' || auxilar[i] == 'acaparamiento_agua' || auxilar[i] == 'contaminacion_aire' || auxilar[i] == 'torres_altatension' || auxilar[i] == 'impacto_turismo' || auxilar[i] == 'impacto_reservas' || auxilar[i] == 'ocupacion_espacios' || auxilar[i] == 'impacto_trabajo' || auxilar[i] == 'impacto_salud' || auxilar[i] == 'impacto_calidad' || auxilar[i] == 'ilegalidad' || auxilar[i] == 'tipo_otro'){
            retorno += auxilar[i]+'+';
          }

        }
        retorno = retorno.slice(0,-1);
        return retorno;
      }

      function change_popover_title(a){
        if(a.search("termo") != -1){
          jQuery(".popover-title").css("background-color","#ff383a");
        }
        else if(a.search("geo") != -1){
          jQuery(".popover-title").css("background-color","#ff7d10");
        }
        else if(a.search("foto") != -1){
          jQuery(".popover-title").css("background-color","#ffc02f");
        }
        else if(a.search("bio") != -1){
          jQuery(".popover-title").css("background-color","#60b43d");
        }
        else if(a.search("eo") != -1){
          jQuery(".popover-title").css("background-color","#00adc0");
        }
        else if(a.search("hidro") != -1){
          jQuery(".popover-title").css("background-color","#008be5");
        }
        else if(a.search("mareo") != -1){
          jQuery(".popover-title").css("background-color","#592faa");
        }
      }
      /*ficha*/
/*
var region = document.getElementById("region");
var titulo = document.getElementById("titulo");
var info = document.getElementById("info");

map.on('click', function(evt) {
  var feature = map.forEachFeatureAtPixel(evt.pixel,
    function(feature, layer) {
      propiedades=feature.getProperties();
      bd_id=propiedades["bd_id"];
      nombre=propiedades["nombre"];
      region_=propiedades["region"];
      fecha_presentacion=propiedades["fecha_presentacion"];
      console.log(propiedades["bd_id"]);

      region.innerHTML = "";
      titulo.innerHTML = "";
      info.innerHTML = "";
    
      var img = document.createElement("img");
      img.src = '/static/images/region.png';
      region.appendChild(img);
    
      titulo.innerHTML = ""+region_;
      info.innerHTML = '<ul><li><p class="pTitulo">'+nombre+'</p> <p class="pInfo">Conflicto activo desde '+fecha_presentacion+'</p></li></ul>';


    });
});
*/