
var data_items = []
var data_groups = []
var flag_items = 0;
var groups = new vis.DataSet();
var items = new vis.DataSet();
var container = document.getElementById('visualization');
var options = {
  stack: false,
  verticalScroll: true,
  zoomKey: 'ctrlKey',
  maxHeight: 550,
  min: new Date(1920,0,1),
  max: new Date(2018,0,1),
  zoomMin: 1000 * 60 * 60 * 24 * 31,
  zoomMax: 1000 * 60 * 60 * 24 * 31 * 12 * 16,
  // option groupOrder can be a property name or a sort function
  // the sort function must compare two groups and return a value
  //     > 0 when a > b
  //     < 0 when a < b
  //       0 when a == b
  groupOrder: function (a, b) {
    return a.value - b.value;
  },
  orientation: 'both',
  editable: false,
};

var timeline = new vis.Timeline(container);
timeline.setOptions(options);
timeline.setGroups(groups);
timeline.setItems(items);

$.ajax({
  async: false,
  type: 'GET',
  url: '/timeline/groups_array/',
  success: function(data) {
    var aux=data.split("-");
      for(var i=0;i<aux.length;i++){
        clase_name = retorno(aux[i]);
        groups.add({id: ''+aux[i]+'', content: '<a class="group_a" href="/ficha/?id='+aux[i]+'">'+aux[i]+'</a>', value: ''+aux[i]+'', className:clase_name});
      }
  }
});

var find = getUrlParameter('busqueda');
var first_inn = 0;

function timeline2(){
  if(first_inn==0){
    if (typeof find == "undefined"){
      $.ajax({
        async: true,
        type: 'GET',
        url: '/timeline/items_array/',
        success: function(data) {
          var aux=data.split("*");
          var contador=1;
          for(var i=0;i<aux.length;i++){
            var aux2 = aux[i].split("|");
            if(aux2[3] != 'Aún no calificado' && aux2[3] != 'Sin información' && aux2[3] != 'No se presenta a SEIA. Menor a 3 MW'){
              items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/inicio.png" style="width:50%;" alt="flag" /></div><br>', start: new Date(aux2[2],0,1,0,0,0), end: new Date(aux2[2],11,28,0,0,0),type: 'box', className:"transparent"});
              contador++;
              items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-warning barra-warning" role="progressbar" style="width:100%;background-color:#9ebc0b;"></div></div><br>', start: new Date(aux2[4],0,1,0,0,0), end: new Date(aux2[3],11,31,0,0,0),className:"transparent"});
              contador++;
              $.ajax({
                async: true,
                type: 'GET',
                url: '/timeline/items_noticias/?id='+aux2[0],
                success: function(data2) {
                  var aux3=data2.split("*");
                  for(var j=0;j<aux3.length-1;j++){
                    var aux4 = aux3[j].split("|");
                    items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: new Date(aux4[1],aux4[2],aux4[3],23,59,59), className:"transparent"});
                    contador++;
                  }
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
                  async: true,
                  type: 'GET',
                  url: '/timeline/items_noticias/?id='+aux2[0],
                  success: function(data2) {
                    var aux3=data2.split("*");
                    for(var j=0;j<aux3.length-1;j++){
                      var aux4 = aux3[j].split("|");
                      var tomorrow = new Date(aux4[1],aux4[2],aux4[3]);
                      tomorrow.setDate(tomorrow.getDate() + 4);
                      items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: tomorrow, className:"transparent"});
                        contador++;
                      }
                    }
                  });
                }
                else{
                  items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/inicio.png" style="width:50%;" alt="flag" /></div><br>', start: new Date(aux2[2],0,1,0,0,0), end: new Date(aux2[2],11,28,0,0,0), type: 'box', className:"transparent"});
                  contador++;
                  $.ajax({
                   async: true,
                   type: 'GET',
                   url: '/timeline/items_noticias/?id='+aux2[0],
                   success: function(data2) {
                     var aux3=data2.split("*");
                     for(var j=0;j<aux3.length-1;j++){
                       var aux4 = aux3[j].split("|");
                       items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: new Date(aux4[1],aux4[2],aux4[3],23,59,59), className:"transparent"});
                       contador++;
                     }
                   }
                  });
                }  
              }
            }
          }
        });

          }
          else{
            console.log('/timeline/items_array/?palabra='+find);
            groups.clear();
          $.ajax({
           async: false,
           type: 'GET',
           url: '/timeline/items_array/?palabra='+find,
           success: function(data) {
            var aux=data.split("*");
            console.log(data);
            var contador=1;
            for(var i=0;i<aux.length-1;i++){
              var aux2 = aux[i].split("|");
              clase_name = retorno(aux2[0]);
              groups.add({id: ''+aux2[0]+'', content: '<a class="group_a" href="/ficha/?id='+aux2[0]+'">'+aux2[0]+'</a>', value: ''+aux2[0]+'', className:clase_name});


              if(aux2[3] != 'Aún no calificado' && aux2[3] != 'Sin información' && aux2[3] != 'No se presenta a SEIA. Menor a 3 MW'){
                items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/inicio.png" style="width:50%;" alt="flag" /></div><br>', start: new Date(aux2[2],0,1,0,0,0), end: new Date(aux2[2],11,28,0,0,0),type: 'box', className:"transparent"});
                contador++;
                items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-warning barra-warning" role="progressbar" style="width:100%;background-color:#9ebc0b;"></div></div><br>', start: new Date(aux2[4],0,1,0,0,0), end: new Date(aux2[3],11,31,0,0,0),className:"transparent"});
                contador++;
                $.ajax({
                  async: true,
                  type: 'GET',
                  url: '/timeline/items_noticias/?id='+aux2[0],
                  success: function(data2) {
                    var aux3=data2.split("*");
                    for(var j=0;j<aux3.length-1;j++){
                      var aux4 = aux3[j].split("|");
                      items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: new Date(aux4[1],aux4[2],aux4[3],23,59,59), className:"transparent"});
                      contador++;
                    }
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
                    async: true,
                    type: 'GET',
                    url: '/timeline/items_noticias/?id='+aux2[0],
                    success: function(data2) {
                      var aux3=data2.split("*");
                      for(var j=0;j<aux3.length-1;j++){
                        var aux4 = aux3[j].split("|");
                        var tomorrow = new Date(aux4[1],aux4[2],aux4[3]);
                        tomorrow.setDate(tomorrow.getDate() + 4);
                        items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: tomorrow, className:"transparent"});
                        contador++;
                      }
                    }
                  });
                }
                else{
                  items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/inicio.png" style="width:50%;" alt="flag" /></div><br>', start: new Date(aux2[2],0,1,0,0,0), end: new Date(aux2[2],11,28,0,0,0), type: 'box', className:"transparent"});
                  contador++;
                  $.ajax({
                   async: true,
                   type: 'GET',
                   url: '/timeline/items_noticias/?id='+aux2[0],
                   success: function(data2) {
                     var aux3=data2.split("*");
                     for(var j=0;j<aux3.length-1;j++){
                       var aux4 = aux3[j].split("|");
                       items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: new Date(aux4[1],aux4[2],aux4[3],23,59,59), className:"transparent"});
                       contador++;
                     }
                   }
                  });
                }  
              }
            }
          }
        });


          }

      first_inn=1;
      }
      else{
        $.unblockUI();
      }
    }

$('input[type="checkbox"],select[id="involucrados"]').on('click change', function(){

  filtros2 = [];
  $('input[type="checkbox"]:checked').each(function() {
    if($(this).attr('id') != 'dis'){
      filtros2.push($(this).attr('id'));
    }
  });
  busqueda2='';
  for (var i = 0; i < filtros2.length; i++) { 
    busqueda2 += filtros2[i]+'+';
  }
  busqueda2=busqueda2.slice(0, -1);

  var em = $('#involucrados').val();

  groups.clear();
  $.ajax({
    async: false,
    type: 'GET',
    url: '/timeline/groups_array/?busqueda='+busqueda2+'&empresa='+em,
    success: function(data) {
     var aux=data.split("-");
     for(var i=0;i<aux.length;i++){
       clase_name = retorno(aux[i]);
        groups.add({id: ''+aux[i]+'', content: '<a class="group_a" href="/ficha/?id='+aux[i]+'">'+aux[i]+'</a>', value: ''+aux[i]+'', className:clase_name});
      }
    }
  });


    if(flag_items ==0){
      items.clear();
      $.ajax({
        async: false,
        type: 'GET',
        url: '/timeline/items_array/',
        success: function(data) {
          var aux=data.split("*");
          var contador=1;
          for(var i=0;i<aux.length;i++){
            var aux2 = aux[i].split("|");
            if(aux2[3] != 'Aún no calificado' && aux2[3] != 'Sin información' && aux2[3] != 'No se presenta a SEIA. Menor a 3 MW'){
              items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/inicio.png" style="width:50%;" alt="flag" /></div><br>', start: new Date(aux2[2],0,1,0,0,0), end: new Date(aux2[2],11,28,0,0,0),type: 'box', className:"transparent"});
              contador++;
              items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-warning barra-warning" role="progressbar" style="width:100%;background-color:#9ebc0b;"></div></div><br>', start: new Date(aux2[4],0,1,0,0,0), end: new Date(aux2[3],11,31,0,0,0),className:"transparent"});
              contador++;
              $.ajax({
                async: false,
                type: 'GET',
                url: '/timeline/items_noticias/?id='+aux2[0],
                success: function(data2) {
                  var aux3=data2.split("*");
                  for(var j=0;j<aux3.length-1;j++){
                    var aux4 = aux3[j].split("|");
                    items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: new Date(aux4[1],aux4[2],aux4[3],23,59,59), className:"transparent"});
                    contador++;
                  }
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
                  url: '/timeline/items_noticias/?id='+aux2[0],
                  success: function(data2) {
                    var aux3=data2.split("*");
                    for(var j=0;j<aux3.length-1;j++){
                      var aux4 = aux3[j].split("|");
                      var tomorrow = new Date(aux4[1],aux4[2],aux4[3]);
                      tomorrow.setDate(tomorrow.getDate() + 4);
                      items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: tomorrow, className:"transparent"});
                        contador++;
                      }
                    }
                  });
                }
                else{
                  items.add({id: '"'+contador+'"', group: ''+aux2[0]+'', content: '<div><div class="progress" style="overflow: unset;background-color: transparent;box-shadow: none;"><img src="/static/images/inicio.png" style="width:50%;" alt="flag" /></div><br>', start: new Date(aux2[2],0,1,0,0,0), end: new Date(aux2[2],11,28,0,0,0), type: 'box', className:"transparent"});
                  contador++;
                  $.ajax({
                   async: false,
                   type: 'GET',
                   url: '/timeline/items_noticias/?id='+aux2[0],
                   success: function(data2) {
                     var aux3=data2.split("*");
                     for(var j=0;j<aux3.length-1;j++){
                       var aux4 = aux3[j].split("|");
                       items.add({id: '"'+contador+'"', group: ''+aux4[0]+'', content: '<div class="progress"><div class="progress-bar progress-bar-success barra-sucess" role="progressbar" style="width:100%;background-color: #000 !important;"></div></div>', start: new Date(aux4[1],aux4[2],aux4[3],0,0,0), end: new Date(aux4[1],aux4[2],aux4[3],23,59,59), className:"transparent"});
                       contador++;
                     }
                   }
                  });
                }  
              }
            }
          }
        });
    flag_items=1;
    }



timeline.setWindow('2010-1-1', '2015-10-3');
});


/////////simbologia//////////
$( ".vis-timeline" ).after('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-top:10px;padding-bottom:10px;"><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"><p><img src="/static/images/inicio.png" style="width:4%;" alt="flag" /> : Inicio del conflicto</p><p><img src="/static/images/ingreso.png" style="width:4%;" alt="flag" /> : Ingreso a SEIA.</p><p style="font-size: 10px;padding-top: 10px;">*zoom en desktop con ctrl+mouse</p></div><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"><p><img src="/static/images/barra.png" style="width:4%;" alt="flag" /> : Tiempo entre ingreso a SEIA y calificación</p><p><img src="/static/images/barra_noticia.png" style="width:4%;" alt="flag" /> : Noticia del conflicto</p></div></div>');

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