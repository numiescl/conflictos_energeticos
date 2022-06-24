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
	<script src="{% static 'js/vis.js' %}"></script>
  	<link href="{% static 'css/vis-timeline-graph2d.min.css' %}" rel="stylesheet" type="text/css" />
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


	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cuerpo_principal">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="col_map" style="padding:5%;">
			<h3 style="font-family: 'open-sans condensed bold';">Nucleo Milenio de Investigación</h3>

			<p style="padding-bottom:20px;padding-top:20px;">
				La producción, distribución y consumo de energía en Chile se ha convertido en un desafío urgente para el país. Como consecuencia, se ha llegado a la unánime conclusión sobre la necesidad de introducir cambios mayores para “lograr un desarrollo energético suficiente, eficiente, seguro, equitativo y sustentable”.</p>
			<p style="padding-bottom:20px;">
				Derivado de este juicio se han propuesto una amplia gama de medidas que, en su conjunto, buscan reforzar el sistema de provisión eléctrico nacional, desde la construcción de grandes infraestructuras a campañas de eficiencia energética. Desde una óptica convencional, estas medidas parecen estar bien encaminadas y debieran contribuir a mejorar en cierto grado la situación actual. La gravedad del problema, sin embargo, nos debiera llevar a ser más ambiciosos a la hora de explorar soluciones, preguntándonos en paralelo qué nuevos factores tendrían que incorporarse para iniciar una transición decidida hacia una matriz eléctrica sustentable.</p>
			<p style="padding-bottom:20px;">
				El Núcleo Milenio Numies, está convencido de que para que una reformulación de la política energética sea significativa y efectiva, debe haber un cambio en el enfoque tradicional, donde se reconozca que ésta se disputa en un campo mucho más amplio que el técnico-económico. Por este motivo, el Núcleo busca enriquecer el acercamiento tradicional hacia temáticas energéticas, a través de la incorporación de factores sociales y culturales, perspectiva analítica que hasta el momento ha ocupado un lugar marginal en el análisis y el desarrollo de intervenciones concretas en el área energética.</p>

			<h3 style="font-family: 'open-sans condensed bold';">Créditos</h3>
			<p style="padding-bottom:20px;">
				<strong>Manuel Tironi.</strong> Director del proyecto. Profesor Asistente de la Pontificia Universidad Católica de Chile 
				</br>
				<strong>Trajan Pirkovic.</strong> Análisis y curación de datos. Trajan es Sociólogo de la Universidad de la Frontera.
				</p>

				<p style="text-align:center;">
					<img style="width:60%;padding-top:20px;" src="{% static 'images/logos.png' %}" alt="logos" />
				</p>
		</div>

		</div>
	</body>