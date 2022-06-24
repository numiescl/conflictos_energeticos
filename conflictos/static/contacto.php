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
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="col_map" style="padding-left: 28%;padding-right: 28%;padding-top: 50px;">
			<form id="login-form" method="GET" action="/send_email">
					<input id="name" name="name" class="form-control" type="text" placeholder="Nombre*" required>
					<input id="email" name="email" class="form-control" type="text" placeholder="Email de contacto*" required>
					<p style="margin-bottom:0px;margin-top:10px;margin-left:1px;">Mensaje:</p>
					<textarea id="message" class="form-control" rows="5" required></textarea>
					<div>
						<button type="submit" class="btn btn-primary btn-lg btn-block">Enviar</button>
					</div>
					<div>
					</div>

			</form>


			<p style="text-align:center;">
				<img style="width:60%;padding-top:60px;" src="{% static 'images/logos.png' %}" alt="logos" />
			</p>
		</div>

	</div>
</body>