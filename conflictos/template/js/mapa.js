/*iconos*/
var energia_azul_style = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 20],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/static/images/energia_azul.png'
    }))
  });

var energia_amarillo_style = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 20],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/static/images/energia_amarillo.png'
    }))
  });

var energia_amarillo_azul_oscuro_style = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 20],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/static/images/energia_azul_oscuro.png'
    }))
  });

var energia_cafe_style = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 20],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/static/images/energia_cafe.png'
    }))
  });

var energia_purpura_style = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 20],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/static/images/energia_purpura.png'
    }))
  });

var energia_rojo_style = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 20],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/static/images/energia_rojo.png'
    }))
  });

var energia_verde_style = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 20],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/static/images/energia_verde.png'
    }))
  });


var energia_azul1 = new ol.Feature({
    geometry: new ol.geom.Point([533, 634]),
    name: 'Conflicto Hidroeléctrico',
    population: 4000,
    rainfall: 500
  });

var energia_azul2 = new ol.Feature({
    geometry: new ol.geom.Point([531, 612]),
    name: 'Conflicto Hidroeléctrico',
    population: 4000,
    rainfall: 500
  });

var energia_verde1 = new ol.Feature({
    geometry: new ol.geom.Point([568, 704]),
    name: 'Conflicto Eólico',
    population: 4000,
    rainfall: 500
  });

var energia_rojo1 = new ol.Feature({
    geometry: new ol.geom.Point([516, 382]),
    name: 'Conflicto Termoeléctrica',
    population: 4000,
    rainfall: 500
  });

var energia_cafe1 = new ol.Feature({
    geometry: new ol.geom.Point([522, 551]),
    name: 'Conflicto Geotérmico',
    population: 4000,
    rainfall: 500
  });


energia_azul1.setStyle(energia_azul_style);
energia_azul2.setStyle(energia_azul_style);

energia_verde1.setStyle(energia_verde_style);

energia_rojo1.setStyle(energia_rojo_style);

energia_cafe1.setStyle(energia_cafe_style);

var energia_azul1_source = new ol.source.Vector({
    features: [energia_azul1,energia_azul2]
  });

var energia_azul1_vector = new ol.layer.Vector({
    source: energia_azul1_source
  });


var energia_verde_source = new ol.source.Vector({
    features: [energia_verde1]
  });

var energia_verde_vector = new ol.layer.Vector({
    source: energia_verde_source
  });


var energia_rojo_source = new ol.source.Vector({
    features: [energia_rojo1]
  });

var energia_rojo_vector = new ol.layer.Vector({
    source: energia_rojo_source
  });


var energia_cafe_source = new ol.source.Vector({
    features: [energia_cafe1]
  });

var energia_cafe_vector = new ol.layer.Vector({
    source: energia_cafe_source
  });


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
          //url: 'http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          url: 'https://api.mapbox.com/styles/ocuc/cj6p23jy6267m2sojzzcn0wpa/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2N1YyIsImEiOiJjajFnbWVlOGowMDMwMnFvaDBkb29tY251In0.ImJiuX5XUafsFDafL4To0w'
        })
      });

var santiagoLonLat = [-68.64, -38.65];
var santiagoWebMercator = ol.proj.fromLonLat(santiagoLonLat);

/*
var map = new ol.Map({
        layers: [
          osmmap,raster,vector
        ],
        target: 'map',
        view: new ol.View({
          center: santiagoWebMercator,
          zoom: 4
        })
      });
*/

/*Mouse position*/
var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        // comment the following two lines to have the mouse position
        // be placed within the map.
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
      });

var extent = [0, 0, 1024, 1024];
      var projection = new ol.proj.Projection({
        code: 'xkcd-image',
        units: 'pixels',
        extent: extent
      });

/*json capas*/
 var jsonSource = new ol.source.Vector();

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

    var jsonLayer = new ol.layer.Vector({
      source: jsonSource,
      style: jsonStyle
    });



/*imaagen mapa*/
imagen = new ol.layer.Image({
            source: new ol.source.ImageStatic({
              attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
              url: "/static/images/NUMIES-01.png",
              projection: projection,
              imageExtent: extent
            })
          })
//energia_azul1_vector,energia_verde_vector,energia_rojo_vector,energia_cafe_vector
/*inicializacion mapa*/

var vS = new ol.source.Vector({
  url: 'http://192.140.56.118:8000/json',
  format: new ol.format.GeoJSON()
});
var vL= new ol.layer.Vector({source: vS,style: jsonStyle});


      var map = new ol.Map({
      	controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
          })
        }).extend([mousePositionControl]),
        layers: [
          osmmap,raster,vector,jsonLayer,vL],
        target: 'map',
        view: new ol.View({
          center: santiagoWebMercator,
          zoom: 4
        })
      });


    var precisionInput = document.getElementById('precision');
      precisionInput.addEventListener('change', function(event) {
        var format = ol.coordinate.createStringXY(event.target.valueAsNumber);
        mousePositionControl.setCoordinateFormat(format);
      });


/*detecta click filtro*/
function filtro(checkbox)
{
    if (checkbox.checked)
    {
        alert(checkbox.value);
    }
}



/*popup*/
var element = document.getElementById('popup');

      var popup = new ol.Overlay({
        element: element,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -50]
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
            'placement': 'top',
            'html': true,
            'content': feature.get('nombre')
          });
          $(element).popover('show');
        } else {
          $(element).popover('destroy');
        }
      });

/*si hace click se despliega imagen*/
map.on('click', function(evt) {
var coordinates = evt.coordinate;
var primero=coordinates[0];
var segundo=coordinates[1];

var region = document.getElementById("region");
var titulo = document.getElementById("titulo");
var info = document.getElementById("info");

if(primero > 531 && primero <=540 && segundo > 606 && segundo <= 654 )
{

	region.innerHTML = "";
	titulo.innerHTML = "";
	info.innerHTML = "";

	var img = document.createElement("img");
	img.src = '/static/images/region.png';
	region.appendChild(img);

	titulo.innerHTML = "REGIÓN DE COQUIMBO";
	info.innerHTML = '<ul><li><p class="pTitulo">Proyecto N1</p> <p class="pInfo">Conflicto activo desde Enero 2002</p></li><li><p class="pTitulo">Proyecto N2</p> <p class="pInfo">Conflicto activo desde Abril 2010</p></li></ul>';
}
else
{
	region.innerHTML = "";
	titulo.innerHTML = "";
	info.innerHTML = "";
}

});


function successHandler(data) {
      // we need to transform the geometries into the view's projection
      var transform = ol.proj.getTransform('EPSG:4326', 'EPSG:3857');
      // loop over the items in the response
      data.items.forEach(function(item) {
        // create a new feature with the item as the properties
        var feature = new ol.Feature(item);
        // add a url property for later ease of access
        feature.set('name', item.nombre);
        // create an appropriate geometry and add it to the feature
        var coordinate = transform([parseFloat(item.lon), parseFloat(item.lat)]);
        var geometry = new ol.geom.Point(coordinate);
        feature.setGeometry(geometry);
        // add the feature to the source
        jsonSource.addFeature(feature);
      });
    }

/*
    $.ajax({
      url: 'http://192.140.56.118:8000/json/',
      dataType: 'jsonp',
      jsonpCallback: 'json',
      success: successHandler,
      error: function (err) {
        console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
    }
    }).always(function(jqXHR, textStatus) {
    if (textStatus != "success") {
        alert("Error: " + jqXHR.statusText);
    }
});
*/
