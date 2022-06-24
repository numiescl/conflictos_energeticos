<!DOCTYPE html>
<html>
<head>
	<title>Conflictos Energéticos</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	{% load static %}
	<!-- Bootstrap Core CSS -->
	<link href="{% static 'css/bootstrap.min.css' %}" rel="stylesheet">

	<!-- IDES Core CSS -->
	<link href="{% static 'css/numies.css' %}" rel="stylesheet">

	<!-- MetisMenu CSS -->
	<link href="{% static 'css/metisMenu.min.css' %}" rel="stylesheet">

	<!-- Timeline CSS -->
	<link href="{% static 'css/timeline.css' %}" rel="stylesheet">

	<!-- Custom CSS -->
	<link href="{% static 'css/sb-admin-2.css' %}" rel="stylesheet">
	<link href="{% static 'css/bootstrap-select.css' %}" rel="stylesheet">

	<!-- Custom Fonts -->
	<link href="{% static 'css/font-awesome.min.css' %}" rel="stylesheet" type="text/css">

	<!-- Open Layer3-->
	<link href="{% static 'css/ol.css' %}" rel="stylesheet" type="text/css">

	<!-- jQuery -->
	<script src="{% static 'js/jquery.min.js' %}"></script>
	<script src="{% static 'js/bootstrap-select.js' %}"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="{% static 'js/bootstrap.min.js' %}"></script>

	<!-- Metis Menu Plugin JavaScript -->
	<script src="{% static 'js/metisMenu.min.js' %}"></script>


	<script src="{% static 'js/prettify.min.js' %}"></script>
	<link rel="stylesheet" href="{% static 'css/prettify.min.css' %}">

	<!-- modal -->
	<link href="{% static 'css/modal.css' %}" rel="stylesheet">
	<script src="{% static 'js/modal.js' %}"></script>

	<!-- Open Layer3-->
	<script src="{% static 'js/ol.js' %}"></script>  

	<!--timeline-->
	<script src="{% static 'js/moment.min.js' %}"></script>
	<script src="{% static 'js/vis.js' %}"></script>
	<link href="{% static 'css/vis-timeline-graph2d.min.css' %}" rel="stylesheet" type="text/css" />

	<!--scroll-->
	<link rel="stylesheet" href="{% static 'css/simplebar.css' %}" />
	<script src="{% static 'js/simplebar.js' %}"></script>
</head>
<body>
	<div class="col-xs-12 ol-sm-12 col-md-12 col-lg-12 header">
		<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
			<p style="text-align:center;"><a href="http://numies.cl/"><img src="{% static 'images/logo.png' %}" alt="Logo" /></a></p>
		</div>
		<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 header_titulo">
			<h2>CONFLICTOS ENERGÉTICOS 2000 - 2016</h2>
		</div>
	</div>	

	<nav class="navbar navbar-default navbar-numies" style="margin-bottom:0px;">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a href="#" class="navbar-brand"></a>
		</div>
		<!-- Collection of nav links and other content for toggling -->
		<div id="navbarCollapse" class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li><a href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
				<li><a href="/quienes-somos">Quienes somos</a></li>
				<li><a href="/estudio">Estudio</a></li>
				<li><a href="/contacto">Contacto</a></li>
			</ul>
		</div>
	</nav>


	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 nav_buscador">
		<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col_b_izq">
			<h3><a href="/" style="text-decoration:none;color:#000;font-family: 'open-sans bold';"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> MAPA DE CONFLICTOS ENERGÉTICOS</a></h3>
		</div>
		<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 col_b_der">
			<p style="float:left;">RESUMEN CONFLICTO</p>
			<p style="float:right;">
			<a href="#"><img class="image_map" style="opacity:1;" src="{% static 'images/informacion.png' %}" alt="info" /></a>
			<a href="#"><img class="image_evol" style="opacity:0.5;" src="{% static 'images/noticias.png' %}" alt="noticias" /></a>
			</p>
		</div>
	</div>

	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cuerpo_principal" style="padding-top:20px;">

		<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col_izq_ficha ">
			<div id="map" style="width:100%;height:300px;"></div><div id="popup"></div>
			<h3>Proyectos cercanos</h3>
			{% for relacionado in relacionados %}
				<p style="font-size:12px;"><a href="/ficha/?id={{relacionado.id_bd}}" style="text-decoration:none;color:#000;font-family: 'open-sans condensed bold';">{{relacionado.nombre}}</a></p>
			{% endfor %}

		</div>
		<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8" id="col_map">
        {% for info in capa %}
        	<h3 style="margin-top: 0px;font-size: 40px;font-family: 'open-sans condensed bold';">{{info.nombre}}</h3>

        	<div id="lat" style="display:none;">{{info.lat}}</div>
        	<div id="lon" style="display:none;">{{info.lon}}</div>

        	<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:0px;padding-right:0px;">
        		<h3 style="font-family: 'open-sans condensed bold';font-size:20px;">Tipo de proyecto</h3>
        		<p>Generación / Distrubición</p>
        		<h3 style="font-family: 'open-sans condensed bold';font-size:20px;">Sistema de Generación Eléctrica Asociada</h3>
        		<p>{{info.obra_1}}</p>
        		<h3 style="font-family: 'open-sans condensed bold';font-size:20px;">Estado del Conflicto (2000-2016)</h3>
        		
        		{%if info.estado_conflicto == "1"%}
        		<p>Activo</p>
        		{%elif info.estado_conflicto == "2"%}
        		<p>Latente</p>
        		{%elif info.estado_conflicto == "3"%}
        		<p>Cerrado</p>
        		{%else%}
        		<p>Sin información</p>
        		{%endif%}

        		<h3 style="font-family: 'open-sans condensed bold';font-size:20px;">Tipo de Conflicto</h3>
        		<p>No identificado</p>

        	</div>
	
        	<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:0px;padding-right:0px;">
        		<h3 style="font-family: 'open-sans condensed bold';font-size:20px;">Etapa de inicio del conflicto</h3>
        		<p>desconocido</p>
        		<h3 style="font-family: 'open-sans condensed bold';font-size:20px;">Empresa</h3>
        		<p>{{info.titular}}</p>
        		<h3 style="font-family: 'open-sans condensed bold';font-size:20px;">Costo del Proyecto</h3>
        		<p>{{info.inversion_millones_dolares}} [millones de dolares]</p>
        		<h3 style="font-family: 'open-sans condensed bold';font-size:20px;">Capacidad de Producción</h3>
        		<p>{{info.potencia_mw}} [Mw]</p>

        	</div>

        	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left:0px;padding-right:0px;padding-top:40px;padding-bottom:40px;">
			{{info.detalles}}
			</div>

		{% endfor %}
		</div>
		<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8" id="col_evolucion">
			{% for info in capa %}
			<h3 style="margin-top: 0px;font-size: 40px;font-family: 'open-sans condensed bold';">{{info.nombre}}</h3>
			{% endfor %}
			
			{%if noticia|length > 0 %}
			{% for n in noticia %}
				{% if forloop.first %}
                   	<h3 style="font-family: 'open-sans condensed bold';font-size:32px;">{{n.nombre}}</h3>
                   	<p>{{n.fecha|date:"d-m-Y"}}.{{n.fuente}}</p>

                   	<h4 style="font-family: 'open-sans bold';font-size:24px;">{{n.bajada}}</h4>
                   	<p style="padding-top:20px;">{{n.texto}}</p>
                   	<p style="font-size:12px;padding-top:10px;padding-bottom:20px;">Fuente Original: <a style="text-decoration:none;color:#000;font-family: 'open-sans condensed bold';" href="{{n.url}}">{{n.url}}</a></p>
        			<div id="visualization"></div>
        		{% endif %}
			{%endfor%}
			{%else%}
				<p>No se encontraron noticias</p>
				<div id="visualization"></div>
			{%endif%}
		</div>

	</div>
	<script type="text/javascript" src="{% static 'js/ficha.js' %}"></script>
	<script type="text/javascript" src="{% static 'js/vis-numies.js' %}"></script>
	<script type="text/javascript" src="{% static 'js/timeline-ficha.js' %}"></script>
</body>