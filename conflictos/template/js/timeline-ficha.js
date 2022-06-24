/*var mousePosition;
var offset = [0,0];
var div;
var isDown = false;

div = document.getElementsByClassName("linea");
$(".linea").css("position","relative");
$(".linea").css("left","0px");
$(".linea").css("top","0px");

$( ".linea" ).mousedown(function(event) {
      isDown = true;
      offset = [
        $(".linea").position().left - event.clientX,
    ];
    console.log(offset[0]);
});

$( ".linea" ).mouseup(function(e) {
      isDown = false;
});

$( ".linea" ).mousemove(function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            x : event.clientX,    
        };
        $(".linea").css("left",(mousePosition.x + offset[0]) + 'px');
        console.log("despues:"+offset[0]);
    }
    
  });*/
var id = getUrlParameter('id');

var data_items = [];
var data_groups = [];
var data_noticias = [];
console.log(data_items);
console.log(data_groups);
var groups = new vis.DataSet();
var items = new vis.DataSet();
var container = document.getElementById('visualization');
var now = moment().minutes(0).seconds(0).milliseconds(0);
var options = {
  stack: false,
  showCurrentTime: false,
  min: new Date(1920,0,1),
  max: now,
  zoomMin: 1000 * 60 * 60 * 24 * 31 * 12,
  zoomMax: 1000 * 60 * 60 * 24 * 31 * 12 * 16,
        // option groupOrder can be a property name or a sort function
        // the sort function must compare two groups and return a value
        //     > 0 when a > b
        //     < 0 when a < b
        //       0 when a == b
        groupOrder: function (a, b) {
          return a.value - b.value;
        },
        orientation: 'top',
        editable: false,
      };

      var timeline = new vis.Timeline(container);
      timeline.setOptions(options);
      timeline.setItems(items);


      $.ajax({
       async: false,
       type: 'GET',
       url: '/timeline/items_array/?id='+id,
       success: function(data) {
        var aux=data.split("*");
        var contador=1;
        for(var i=0;i<aux.length-1;i++){
          clase_name = retorno(aux[i]);
          var aux2 = aux[i].split("|");
          //groups.add({id: ''+id+'', content: ''+id+'', value: ''+id+'', className:clase_name});

          if(aux2[3] != 'Aún no calificado' && aux2[3] != 'Sin información' && aux2[3] != 'No se presenta a SEIA. Menor a 3 MW'){
            items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/inicio.png" style="width:50%;" alt="flag" /></div><br>', start: new Date(aux2[2],0,1,0,0,0), end: new Date(aux2[2],11,28,0,0,0),type: 'box', className:"transparent"});
            contador++;
            items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-warning barra-warning" role="progressbar" style="width:100%;background-color:#85c8e8;"></div></div><br>', start: new Date(aux2[4],0,1,0,0,0), end: new Date(aux2[3],11,31,0,0,0),className:"transparent"});
            contador++;
            $.ajax({
              async: false,
              type: 'GET',
              url: '/timeline/items_noticias/?id='+id,
              success: function(data2) {
                  var aux3=data2.split("*");
                  if(aux3.length > 0){
                  for(var j=0;j<aux3.length-1;j++){
                    var aux4 = aux3[j].split("|");
                    items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<a href="/ficha/?id='+id+'&noticia='+aux4[4]+'"><div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div></a>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: new Date(aux4[1],aux4[2],aux4[3],23,59,59), className:"transparent"});
                    contador++;
                  }
                }
                timeline.setWindow('2010-1-1', '2015-10-3');
              }
            });
          }
          else{
            if(aux2[3] == 'Aún no calificado'){
              items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/inicio.png" style="width:50%;" alt="flag" /></div><br>', start: new Date(aux2[2],0,1,0,0,0), end: new Date(aux2[2],11,28,0,0,0), type: 'box', className:"transparent"});
              contador++;
              items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/ingreso.png" style="width:50%;" alt="enter" /></div><br>', start: new Date(aux2[4],aux2[6],aux2[5],0,0,0), end: new Date(aux2[4],aux2[6]+1,aux2[5],23,0,0), type: 'box', className:"transparent"});
              contador++;
              $.ajax({
                async: false,
                type: 'GET',
                url: '/timeline/items_noticias/?id='+id,
                success: function(data2) {
                    var aux3=data2.split("*");
                    if(aux3.length > 0){
                    for(var j=0;j<aux3.length-1;j++){
                      var aux4 = aux3[j].split("|");
                      var tomorrow = new Date(aux4[1],aux4[2],aux4[3]);
                      tomorrow.setDate(tomorrow.getDate() + 4);
                      items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<a href="/ficha/?id='+id+'&noticia='+aux4[4]+'"><div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div></a>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: tomorrow, className:"transparent"});
                      contador++;
                      console.log("tiempo:"+aux4[3]);
                    }
                  }
                  timeline.setWindow('2010-1-1', '2015-10-3');
                }
              });
            }
            else{
              items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/inicio.png" style="width:50%;" alt="flag" /></div><br>', start: new Date(aux2[2],0,1,0,0,0), end: new Date(aux2[2],11,28,0,0,0), type: 'box', className:"transparent"});
              contador++;
              $.ajax({
               async: false,
               type: 'GET',
               url: '/timeline/items_noticias/?id='+id,
               success: function(data2) {
                 var aux3=data2.split("*");
                 if(aux3.length > 0){
                 for(var j=0;j<aux3.length-1;j++){
                   var aux4 = aux3[j].split("|");
                   items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<a href="/ficha/?id='+id+'&noticia='+aux4[4]+'"><div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div></a>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: new Date(aux4[1],aux4[2],aux4[3],23,59,59), className:"transparent"});
                   contador++;
                 }
                }
                timeline.setWindow('2010-1-1', '2015-10-3');
               }
             });
            }              
          }
          
        }

      }
    });


//cambiar de noticia en la linea de tiempo
timeline.on('click', function (properties) {
      console.log(properties);
    });

function retorno(flag){
  class_name='';

  termo_string = '-1571-1104-1136-1554-992-1555-1021-1030-1072-1049-908-988-1552-940-1553-1548-836-1550-1507-1574-1581-291-332-1489-239-1484-1578-1472-';
  hidro_string = '-1582-1271-1577-1221-1173-1144-1575-1034-1064-600-547-1573-945-1572-961-842-1544-825-843-742-625-686-1495-677-488-493-553-402-1492-374-1498-110-111-1576-1579-1580-80-';
  eo_string='-351-';
  geo_string='-1583-';
  bio_string='-769-326-1502-163-';
  mareo_string='';
  foto_string='';

  if(termo_string.search('-'+flag+'-') != -1){
    class_name='termoelectrica';
  }
  else if(hidro_string.search('-'+flag+'-') != -1){
    class_name='hidroelectrica';
  }
  else if(eo_string.search('-'+flag+'-') != -1){
    class_name='eolica';
  }
  else if(geo_string.search('-'+flag+'-') != -1){
    class_name='geotermica';
  }
  else if(bio_string.search('-'+flag+'-') != -1){
    class_name='biomasa';
  }
  else if(mareo_string.search('-'+flag+'-') != -1){
    class_name='mareo';
  }
  else if(foto_string.search('-'+flag+'-') != -1){
    class_name='foto';
  }

  return class_name;
}