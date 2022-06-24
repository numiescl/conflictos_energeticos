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
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="col_map" style="padding-left: 5%;padding-right: 5%;padding-top: 20px;">
			<p style="padding-bottom:20px;padding-top:20px;">
				La información presentada en esta plataforma es parte del Catastro de Conflictos Energéticos 2000-2015 realizado por NUMIES. Se consideró como “conflicto” pugnas que cumplían con los siguientes requisitos: a) situaciones de pugna, enfrentamiento o controversia entre dos o más actores, b) en torno a proyectos de energía de cualquier tipo y en cualquiera de sus fases, y c) y que hayan sido de dominio público, es decir, cuyo conocimiento e impacto sobrepase a los privados involucrados. Esta decisión es acorde con la literatura sociológica internacional sobre conflictos, que los define como fenómenos de orden colectivo que se articulan, discuten y resuelven en la esfera pública. </p>
			<p style="padding-bottom:20px;">
				La información presentada en esta plataforma es parte del Catastro de Conflictos Energéticos 2000-2015 realizado por NUMIES. Se consideró como “conflicto” pugnas que cumplían con los siguientes requisitos: a) situaciones de pugna, enfrentamiento o controversia entre dos o más actores, b) en torno a proyectos de energía de cualquier tipo y en cualquiera de sus fases, y c) y que hayan sido de dominio público, es decir, cuyo conocimiento e impacto sobrepase a los privados involucrados. Esta decisión es acorde con la literatura sociológica internacional sobre conflictos, que los define como fenómenos de orden colectivo que se articulan, discuten y resuelven en la esfera pública. </p>
			<p style="padding-bottom:20px;">
				Esta metodología, además, asegura un mecanismo sistemático y objetivo de selección, evitando que sea el/la investigador/a quien defina la existencia y naturaleza de un conflicto. Adicionalmente, esta metodología permite recabar información sobre eventos históricos sobre los cuales puede haber poca información. </p>
			<p style="padding-bottom:20px;">
				Para la construcción del catastro se realizó un proceso exhaustivo de búsqueda y selección de información que se dividió en tres fases principales: </p>
				<ol>
					<li>Recolección de proyectos presentados y calificados por el Servicio de Evaluación de Impacto Ambiental, y disponibles en su plataforma digital (http://seia.sea.gob.cl/busqueda/buscarProyecto.php), entre el 01 de enero de 2000 y el 28 de marzo de 2016, tanto para Declaraciones de Impacto Ambiental (DIA) y Evaluaciones de Impacto Ambiental (EIA). </li>
					<li>Recolección y sistematización de conflictos, disponibles en compendios y mapas relacionados a conflictos en energía, en base a diversas dimensiones de estudio, como actores involucrados, motivaciones de protesta, o posición frente al conflicto, por parte de los mismos involucrados. </li>
					<li>Sistematización de noticias digitales relacionadas a conflictos en energía identificados previamente. De tal manera, se logró proporcionar información técnica del proyecto conflictuado en base al material institucional disponible, que fue complementado por información cualitativa, mediante información proveniente de trabajos previos de recopilación de información y noticias digitales en la prensa chilena. Tal imbricación permitió caracterizar conflictos en energía en el territorio chileno desde una mirada longitudinal, considerando aspectos técnicos y sociales de la problemática.</li>
				</ol>
			<p style="padding-bottom:20px;">
				Las fuentes utilizadas fueron: </p>
				<ul>
					<li>Proyectos en energía ingresados al portal del Servicio de Impacto Ambiental (<a href="http://sea.gob.cl/">http://sea.gob.cl/</a>), tanto para Declaraciones de Impacto Ambiental (DIA) como para Estudios de Impacto Ambiental (EIA), presentados y calificados entre el periodo 01 de enero de 2000 y el 28 de marzo de 2016. </li>
					<li>Compendio de noticias relacionadas a conflictos en energía, proporcionados por el Newsletter del Observatorio Latinoamericano de Conflictos Ambientales (OLCA), entre el periodo 01 de enero de 2000 y el 31 de julio de 2015. </li>
					<li>Mapa de Conflictos Socioambientales en Chile, realizado por el Instituto de Derechos Humanos (INDH), para conflictos ocurridos entre 2010 y 2012. </li>
					<li>620 noticias publicadas en medios digitales desde el 01 de enero de 2000 hasta el 31 de diciembre de 2015, relacionadas a controversias socioambientales en energía.</li>
				</ul>
			<p style="padding-bottom:20px;">
				El proceso de recolección de datos arrojó un total de 1152 proyectos presentados al SEIS en el período de estudio, de los cuales 71 de ellos tuvieron algún tipo de conflicto públicamente expuesto en la prensa. La base de datos resultante contempló 81 variables de análisis, y la información presentada en esta plataforma muestra sólo una parte del total de información recabada. </p>

			<p style="padding-bottom:20px;">
				Las categorías de análisis presentadas en esta plataforma son las siguientes:</p>

			<h4>Información técnica del proyecto</h4>
			<ul>
				<li>Tipo de obras involucradas en el conflicto</li>
				<li>Tipo de energía</li>
				<li>Inversión en millones de dólares</li>
				<li>Potencia instalada en MW</li>
				<li>Titular del proyecto </li>
				<li>Ubicación</li>
			</ul>

			<h4>Información socio-política del conflicto</h4>
			<ul>
				<li>Actores involucrados</li>
				<li>Temporalidad del conflicto (año de inicio y duración aproximada del enfrascamiento)</li>
				<li>Motivos de la protesta </li>
			</ul>
			<p style="padding-bottom:20px;">
				Para mayor información, comuníquese con Manuel Tironi (metironi@uc.cl)</p>

				<p style="text-align:center;">
					<img style="width:60%;padding-top:20px;" src="{% static 'images/logos.png' %}" alt="logos" />
				</p>
		</div>

		</div>
	</body>