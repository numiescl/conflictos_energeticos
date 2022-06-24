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

	<!--blockUI-->
	<script src="{% static 'js/jquery.blockUI.js' %}"></script>

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

	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 nav_buscador" style="padding-left:0px;padding-right:0px;">
		<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col_b_izq">
			<h3><span class="glyphicon glyphicon-search" aria-hidden="true"></span> BUSCADOR DE CONFLICTOS ENERGÉTICOS</h3>
		</div>
		<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 col_b_der">
			<p style="float:left;">MAPA DE CONFLICTOS ENERGÉTICOS</p>
			<p style="float:right;">
				<a href="#"><img class="image_map" onclick="$(document).ajaxStart($.blockUI({ message: ' Espere un momento...' })).ajaxStop($.unblockUI);timeline2()" src="{% static 'images/lineatiempo.png' %}" alt="mapa" /></a>
				<a href="#"><img class="image_evol" src="{% static 'images/planeta.png' %}" alt="evolucion" /></a>
			</p>
		</div>
	</div>

	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cuerpo_principal">
		<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col_izq">

			<!--
			<div class="form-check disabled" style="padding-top:10px;">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox" value="">
					<img src="{% static 'images/plomo.png' %}" alt="img" style="width:14px;"/> Generación eléctrica (XX)
				</label>
			</div>
			<div class="form-check disabled">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox" value="">
					<img src="{% static 'images/linea.png' %}" alt="img" style="width:14px;"/> Distribución eléctrica (XX)
				</label>
			</div>

			<div class="form-check disabled">
				<label class="form-check-label">
					<input id="dis" class="form-check-input" type="checkbox" value="" disabled checked>
					Todos los conflictos (71)
				</label>
			</div>
			-->

			<h3>Sistema de Generación Eléctrica asociada</h3>
			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:0px;padding-right:0px;">
				<div class="checkbox">
					<label><input id="termo" type="checkbox" value="termoelectrica"><img src="{% static 'images/puntos/p_rojo.png' %}" alt="img" /> Termoeléctrica </label>
				</div>
				<div class="checkbox">
					<label><input id="geo" type="checkbox" value="geotermica"><img src="{% static 'images/puntos/p_naranjo.png' %}" alt="img" /> Geotérmica </label>
				</div>
				<div class="checkbox">
					<label><input id="foto" type="checkbox" value="fotovoltaica"><img src="{% static 'images/puntos/p_amarillo.png' %}" alt="img" /> Fotovoltaica </label>
				</div>
				<div class="checkbox">
					<label><input id="bio" type="checkbox" value="biomasa" onclick=""><img src="{% static 'images/puntos/p_verde.png' %}" alt="img" /> Biomasa </label>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:5px;padding-right:0px;">
				<div class="checkbox">
					<label><input id="eo" type="checkbox" value="eolica"><img src="{% static 'images/puntos/p_magenta.png' %}" alt="img" /> Eólica </label>
				</div>
				<div class="checkbox">
					<label><input id="hidro" type="checkbox" value="hidroelectrica"><img src="{% static 'images/puntos/p_azul.png' %}" alt="img" /> Hidroeléctrica </label>
				</div>
				<div class="checkbox">
					<label><input id="mareo" type="checkbox" value="mareomotriz"><img src="{% static 'images/puntos/p_purpura.png' %}" alt="img" /> Mareomotriz </label>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left:0px;padding-right:0px;"><h3>Estado del conflicto (2000-2015)</h3></div>

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:0px;padding-right:0px;">
				<div class="checkbox">
					<label><input id="acti" type="checkbox" value="activo"> Activo </label>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:5px;padding-right:0px;">
				<div class="checkbox">
					<label><input id="fina" type="checkbox" value="finalizado"> Finalizado </label>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left:0px;padding-right:0px;"><h3>Tipo de conflicto</h3></div>

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:0px;padding-right:0px;">
				<div class="checkbox">
					<label><input id="transgresion" type="checkbox" value="transgresion"> Pueblos originarios </label>
				</div>
				<div class="checkbox">
					<label><input id="ambiental" type="checkbox" value="ambiental"> Impacto ambiental </label>
				</div>
				<div class="checkbox">
					<label><input id="contaminacion_agua" type="checkbox" value="contaminacion_agua"> Contaminación del agua </label>
				</div>
				<div class="checkbox">
					<label><input id="acaparamiento_agua" type="checkbox" value="acaparamiento_agua"> Acaparamiento del agua </label>
				</div>
				<div class="checkbox">
					<label><input id="contaminacion_aire" type="checkbox" value="contaminacion_aire"> Contaminación del aire </label>
				</div>
				<div class="checkbox">
					<label><input id="torres:altatension" type="checkbox" value="torres_altatension"> Torres de alta tensión </label>
				</div>
				<div class="checkbox">
					<label><input id="impacto_turismo" type="checkbox" value="impacto_turismo"> Turismo </label>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:5px;padding-right:0px;">
				<div class="checkbox">
					<label><input id="impacto_reservas" type="checkbox" value="impacto_reservas"> Parques nacionales </label>
				</div>
				<div class="checkbox">
					<label><input id="ocupacion_espacios" type="checkbox" value="ocupacion_espacios"> Reubicación u ocupación de espacios </label>
				</div>
				<div class="checkbox">
					<label><input id="impacto_trabajo" type="checkbox" value="impacto_trabajo"> Fuentes de trabajo </label>
				</div>
				<div class="checkbox">
					<label><input id="impacto_salud" type="checkbox" value="impacto_salud"> Salud</label>
				</div>
				<div class="checkbox">
					<label><input id="impacto_calidad" type="checkbox" value="impacto_calidad"> Calidad de vida</label>
				</div>
				<div class="checkbox">
					<label><input id="ilegalidad" type="checkbox" value="ilegalidad"> Ilegailidad o irregularidad  </label>
				</div>
				<div class="checkbox">
					<label><input id="tipo_otro" type="checkbox" value="tipo_otro"> Otro </label>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left:0px;padding-right:0px;"><h3>Actores Involucrados</h3></div>
			<select id="involucrados" class="selectpicker" data-live-search="true">
				<option> </option>
				<optgroup label="Empresas">
					<option>Aaktei</option>
					<option>AES Gener</option>
					<option>Agrícola Río Blanco S.A</option>
					<option>Asociación de Canalistas del Canal Zañartu</option>
					<option>Atiaia Enegía Chile S.A</option>
					<option>Australis Power - Octopus LNG S.p.a</option>
					<option>Barrick Chile Generación Limitada</option>
					<option>BiobíoGenera</option>
					<option>CAP S.A.</option>
					<option>CGE</option>
					<option>CODELCO</option>
					<option>Colbún</option>
					<option>E-CL</option>
					<option>ECOPOWER S.A.</option>
					<option>Eléctrica Puntilla S.A.</option>
					<option>Empresa Eléctrica Puesco SpA.</option> 
					<option>Enacon S.A.</option>
					<option>ENAP</option>
					<option>Endesa</option>
					<option>Energía Austral</option>
					<option>Energía Coyanco S.A</option>
					<option>Energía Pura S.A.</option>
					<option>EPA</option>
					<option>FibroAndes</option>
					<option>GDF Suez</option>
					<option>GTD Negocios S.A.</option>
					<option>Hidroeléctrica Agua Viva S.A</option>
					<option>Hidroeléctrica Centinela Ltda.</option>
					<option>Hidroeléctrica Doña Alicia Sociedad Anónima</option>
					<option>HidroÑuble SpA.</option> 
					<option>HydroChile S.A.</option>
					<option>IC Power</option>
					<option>Latin American Power</option>
					<option>Ministerio de Obras Públicas con posterior concesión privada</option>
					<option>Mediterráneo S.A</option>
					<option>Minicentral Hidroeléctrica Saltos de Los Andes S.A.</option>
					<option>MPX</option>
					<option>Pilmaiquén S.A.</option>
					<option>Pintoresco Hidro SpA.</option>
					<option>Pirandes</option>
					<option>Rakun SPA</option>
					<option>Río Cautín S.A</option>
					<option>RP Global Chile</option>
					<option>Rurelec</option>
					<option>Santa Bárbara Inversiones</option>
					<option>SN Power</option>
					<option>South World Business S.A.</option>
					<option>Southern Cross Group</option>
					<option>Suez Energy</option>
					<option>Terra Cabrero S.A</option>
					<option>Trans Antartic Energía S.A</option>
				</optgroup>
				<optgroup label="Otros">
					<option>Pueblos originarios</option>
					<option>Vecinos</option>
					<option>Estudiates</option>
					<option>Ambientalistas nacional</option>
					<option>Ambientalistas internacional</option>
					<option>Trabajadores</option>
					<option>Municipios u org de admin pública</option>
					<option>Cuali</option>
				</optgroup>
			</select>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-left:0px;padding-right:0px;"><h3>Búsqueda avanzada:</h3></div>

			<form id="busqueda-form" method="GET" action="/">
			  <div class="input-group" style="float:left;">
			    <input type="text" name="busqueda" class="form-control" placeholder="Palabra clave">
			    <div class="input-group-btn">
			      <button class="btn btn-default" type="submit">
			        <i class="glyphicon glyphicon-search"></i>
			      </button>
			    </div>
			  </div>
			</form>
			<!--
			<div class="panel panel-default">
				<div id="collapse" class="panel-collapse collapse in" aria-expanded="true" style="">
					<div class="panel-body">
						<ul class="nav nav-tabs">
							<li class="active" style="width:50%;"><a href="#conflictos" data-toggle="tab" aria-expanded="true">CONFLICTOS</a>
							</li>
							<li class="" style="width:50%;"><a href="#proyectos" data-toggle="tab" aria-expanded="false">PROYECTOS</a>
							</li>
						</ul>

						<div class="tab-content">
							<div class="tab-pane fade active in" id="conflictos">


							</div>
							<div class="tab-pane fade" id="proyectos">
								<p>fuente - enlace </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		-->

			<!--
			<h3>FILTRAR CONFLICTO</h3>

			<div class="panel-group">
			  <div class="panel panel-default">
			    <div class="panel-heading">
			      <h4 class="panel-title">
			        <a style="text-decoration: none;" data-toggle="collapse" href="#collapse1"><p><strong>SISTEMA DE GENERACIÓN ELÉCTRICA</strong></p></a>
			      </h4>
			    </div>
			    <div id="collapse1" class="panel-collapse collapse">
			      <div class="panel-body">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:0px;padding-right:0px;border-right-style: inset;border-right-color: black;border-right-width: 2px;">
							<div class="checkbox">
							  <label><input type="checkbox" value="biomasa" onclick="">Biomasa<img src="{% static 'images/energia_azul.png' %}" alt="img" /> </label>
							</div>
							<div class="checkbox">
							  <label><input type="checkbox" value="geotermica">Geotérmica <img src="{% static 'images/energia_amarillo.png' %}" alt="img" /> </label>
							</div>
							<div class="checkbox">
							  <label><input type="checkbox" value="fotovoltaica">Fotovoltaica<img src="{% static 'images/energia_verde.png' %}" alt="img" /> </label>
							</div>
							<div class="checkbox">
							  <label><input type="checkbox" value="eolica">Eólica <img src="{% static 'images/energia_rojo.png' %}" alt="img" /></label>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left:5px;padding-right:0px;">
							<div class="checkbox">
							  <label><input type="checkbox" value="planta_reciclaje">Planta de reciclaje <img src="{% static 'images/energia_cafe.png' %}" alt="img" /></label>
							</div>
							<div class="checkbox">
							  <label><input type="checkbox" value="flujo_gasoducto">Flujo de gasoducto <img src="{% static 'images/energia_purpura.png' %}" alt="img" /></label>
							</div>
							<div class="checkbox">
							  <label><input type="checkbox" value="linea_transmision">Línea de transmisión <img src="{% static 'images/energia_azul_oscuro.png' %}" alt="img" /></label>
							</div>
						</div>
			      	</div>
			    </div>
			  </div>
			</div>-->

		</div>
		<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8" id="col_map">
			<div id="map"></div><div id="popup"></div>
		</div>
		<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8" id="col_evolucion">

			
			<div id="visualization"></div>


					

			<!--
			<div class="linea">
				<div class="ano">
					<h3 style="color:#fff;background-color:#fff;font-size:0px;">nada</h3>
				</div>
				<div class="ano">
					2000
				</div>
				<div class="ano">
					2001
				</div>
				<div class="ano">
					2002
				</div>
				<div class="ano">
					2003
				</div>
				<div class="ano">
					2004
				</div>
				<div class="ano">
					2005
				</div>
				<div class="ano">
					2006
				</div>
				<div class="ano">
					2007
				</div>
				<div class="ano">
					2008
				</div>
				<div class="ano">
					2009
				</div>
				<div class="ano">
					2010
				</div>
				<div class="ano">
					2011
				</div>
				<div class="ano">
					2012
				</div>
				<div class="ano">
					2013
				</div>
				<div class="ano">
					2014
				</div>
				<div class="ano">
					2015
				</div>
			</div>

			<div class="linea">
				<div class="ano">
					<p style="background-color:#ffc02f;">1</p>
				</div>
				<div class="barra">
				<h3>Nombre del proyecto</h3>
				<div class="progress">
  					<div class="progress-bar progress-bar-success" role="progressbar" style="width:40%">
  					</div>
  					<div class="progress-bar progress-bar-warning" role="progressbar" style="width:40%">
  					</div>
  					<div class="progress-bar progress-bar-danger" role="progressbar" style="width:20%">
  					</div>
				</div>
				</div>
			</div>
			<div class="ano">
				<p style="background-color:#f2f2f2;"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></p>
			</div>

			<div class="linea">
				<div class="ano">
					<p style="background-color: #ff383a;">2</p>
				</div>
				<div class="barra">
				<h3>Nombre del proyecto</h3>
				<div class="progress">
  					<div class="progress-bar progress-bar-success" role="progressbar" style="width:30%">
  					</div>
  					<div class="progress-bar progress-bar-warning" role="progressbar" style="width:40%">
  					</div>
  					<div class="progress-bar progress-bar-danger" role="progressbar" style="width:30%">
  					</div>
				</div>
				</div>
			</div>
			<div class="ano">
				<p style="background-color:#f2f2f2;"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></p>
			</div>
		-->


	</div>
		<!--
		<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col_der">
			<h3 id="titulo"><h3>
				<p id="region" style="text-align:center;"></p>
				<p id="info"></p>
			</div>
		-->
	</div>
	<script type="text/javascript" src="{% static 'js/index.js' %}"></script>
	<script type="text/javascript" src="{% static 'js/vis-numies.js' %}"></script>
	<script type="text/javascript" src="{% static 'js/timeline.js' %}"></script>
</body>