# coding=utf-8
from django.shortcuts import render_to_response,render,HttpResponse
from django.http import JsonResponse
from django.conf import settings
from django.core.serializers import serialize
from django.core.mail import send_mail
from conflictos.models import bd, noticias
from django.db.models import Q
# Create your views here.
def index(request):
	base=bd.objects.order_by().values('obra_1').distinct()
	return render(request,'index.php',{'base':base})

def quienes_somos(request):
	return render(request,'quienes-somos.php')

def contacto(request):
	"""
    Aqui va la documentacion de contacto
    """
	return render(request,'contacto.php')

def estudio(request):
	return render(request,'estudio.php')

def ficha(request):
	id_bd = request.GET.get('id',False)
	capa = bd.objects.filter(id_bd=id_bd)

	if request.method == 'GET' and 'noticia' in request.GET:
		id_noticia = request.GET.get('noticia')
		noticia = noticias.objects.filter(id=id_noticia)

	else:
		noticia = noticias.objects.filter(id_bd=id_bd)
	
	for c in capa:
		comunas = c.comunas
	proyectos_relacionados = bd.objects.filter(comunas__contains=comunas).exclude(id_bd=id_bd)[:6]

	return render(request,'ficha.php',{'id':id_bd,'capa':capa,'noticia':noticia,'relacionados':proyectos_relacionados})

def json_query(request):
	busqueda = request.GET.get('busqueda',False)
	message='inactivo'

	if busqueda == 'hidroelectrica':
		base=bd.objects.filter(Q(obra_1__contains = 'Central hidro') & Q(coincide_controversia = 1 )).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	if busqueda == 'hidroelectrica_pasada':
		base=bd.objects.filter(obra_1='Central hidroeléctrica de embalse', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'geotermica':
		base=bd.objects.filter(obra_1='Central geotérmica', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd')

	elif busqueda == 'hidrocarburos':
		base=bd.objects.filter(obra_1='Exploración de hidrocarburos', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'termoelectrica':
		base=bd.objects.filter(obra_1='Central termoeléctrica', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'fotovoltaica':
		base=bd.objects.filter(obra_1='Central fotovoltaica', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'eolica':
		base=bd.objects.filter(obra_1='Central eólica', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'flujo_gasoducto':
		base=bd.objects.filter(obra_1='Línea de flujo/Gasoducto', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'biomasa':
		base=bd.objects.filter(obra_1='Central biomasa', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'linea_transmision':
		base=bd.objects.filter(obra_1='Línea de transmisión', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'subestacion':
		base=bd.objects.filter(obra_1='Subestación', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'modificacion':
		base=bd.objects.filter(obra_1='Modificación', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	elif busqueda == 'planta_reciclaje':
		base=bd.objects.filter(obra_1='Planta de reciclaje', coincide_controversia = 1).only('lon', 'lat','nombre','id_bd','estado_conflicto')

	else:
		base=bd.objects.all().only('lon', 'lat','nombre','id_bd','estado_conflicto')
	
	geojson='{"type": "FeatureCollection",  "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "features": ['
	for row in base:
		if row.estado_conflicto == "1":
			estado = "Activo"
		else:
			estado = "Finalizado"
		elemento='{"type": "Feature", "geometry": {"type": "Point", "coordinates": ['+row.lon+', '+row.lat+']},"properties":{"nombre": "'+row.nombre+'", "estado":"'+estado+'", "bd_id": "'+row.id_bd+'", "region": "'+row.region+'", "fecha_presentacion": "'+row.fecha_presentacion+'"}}'
		geojson+=elemento+','
	geojson = geojson[:-1]
	geojson+=']}'
	return HttpResponse(geojson)
	#return HttpResponse(serialize('geojson', base,geometry_field='point',fields=('nombre','lat','lon','id_bd',)))
	#return JsonResponse({'results': list(base)})

def busqueda_general(request):

	b = request.GET.get('busqueda',False)

	if request.method == 'GET' and 'empresa' in request.GET:
		empresa = request.GET.get('empresa')
	else:
		empresa = ""

	busqueda = b.split(" ")

	termoelectrica = "?"
	geotermica = "?"
	fotovoltaica = "?"
	biomasa = "?"
	eolica = "?"
	hidroelectrica = "?"
	mareomotriz = "?"

	transgresion = "?"
	ambiental = "?"
	contaminacion_agua = "?"
	acaparamiento_agua = "?"
	contaminacion_aire = "?"
	torres_altatension = "?"
	impacto_turismo = "?"
	impacto_reservas = "?"
	ocupacion_espacios = "?"
	impacto_trabajo = "?"
	impacto_salud = "?"
	impacto_calidad = "?"
	ilegalidad = "?"
	tipo_otro = "?"

	situacion = "99"

	for bus in busqueda:

		if bus == "termo":
			termoelectrica = "termo" 
		if bus == "geo":
			geotermica = "geo"
		if bus == "foto":
			fotovoltaica = "foto"
		if bus == "bio":
			biomasa = "biomasa" 
		if bus == "eo":
			eolica = "eólica"
		if bus == "hidro":
			hidroelectrica = "hidro"
		if bus == "mareo":
			mareomotriz = "mareo"

		if bus == "acti":
			situacion = "1"
		if bus == "fina":
			situacion = "3"

		if bus == "transgresion":
			transgresion = "1"
		if bus == "ambiental":
			ambiental = "1"
		if bus == "contaminacion_agua":
			contaminacion_agua = "1"
		if bus == "acaparamiento_agua":
			acaparamiento_agua = "1"
		if bus == "contaminacion_aire":
			contaminacion_aire = "1"
		if bus == "torres_altatension":
			torres_altatension = "1"
		if bus == "impacto_turismo":
			impacto_turismo = "1"
		if bus == "impacto_reservas":
			impacto_reservas = "1"
		if bus == "ocupacion_espacios":
			ocupacion_espacios = "1"
		if bus == "impacto_trabajo":
			impacto_trabajo = "1"
		if bus == "impacto_salud":
			impacto_salud = "1"
		if bus == "impacto_calidad":
			impacto_calidad = "1"
		if bus == "ilegalidad":
			ilegalidad = "1"
		if bus == "tipo_otro":
			tipo_otro = "1"

	if (situacion == "1") or (situacion == "3"):
		if(transgresion == "1" or ambiental == "1" or  tipo_otro == "1" or  ilegalidad == "1" or  impacto_calidad == "1" or  impacto_salud == "1" or  impacto_trabajo == "1" or  ocupacion_espacios == "1" or  impacto_reservas == "1" or  impacto_turismo == "1" or  torres_altatension == "1" or  contaminacion_aire == "1" or  acaparamiento_agua == "1" or  contaminacion_agua == "1"):
			base = bd.objects.filter((Q(obra_1__contains = termoelectrica ) | Q(obra_1__contains = geotermica ) | Q(obra_1__contains = fotovoltaica ) | Q(obra_1__contains = biomasa ) | Q(obra_1__contains = eolica ) | Q(obra_1__contains = hidroelectrica ) | Q(obra_1__contains = mareomotriz)) & Q(coincide_controversia = 1) & Q(estado_conflicto = situacion) & (Q(transgresion_cultura_territorio_pueblos_originarios__contains = transgresion) | Q(impacto_ambiental_sobre_entorno_natural__contains = ambiental) | Q(contaminacion_agua__contains = contaminacion_agua) | Q(acaparamiento_agua__contains = acaparamiento_agua) | Q(contaminacion_aire__contains = contaminacion_aire) | Q(impacto_torres_alta_tension__contains = torres_altatension) | Q(impacto_negativo_turismo__contains = impacto_turismo) | Q(impacto_reservas_parques_nacionales__contains = impacto_reservas) | Q(reubicacion_ocupacion_espacios_accesos__contains = ocupacion_espacios) | Q(impacto_sobre_fuentes_trabajo__contains = impacto_trabajo) | Q(impacto_sobre_salud_vecinos_trabajadores__contains = impacto_salud) | Q(impacto_sobre_calidad_vida__contains = impacto_calidad) | Q(ilegalidad_irregularidad_procesos_llevados__contains = ilegalidad) | Q(otro__contains = tipo_otro)) & Q(empresa_cargo1__contains = empresa ) ).only('lon', 'lat','nombre','id_bd','estado_conflicto','obra_1')			
		else:
			base = bd.objects.filter((Q(obra_1__contains = termoelectrica ) | Q(obra_1__contains = geotermica ) | Q(obra_1__contains = fotovoltaica ) | Q(obra_1__contains = biomasa ) | Q(obra_1__contains = eolica ) | Q(obra_1__contains = hidroelectrica ) | Q(obra_1__contains = mareomotriz)) & Q(coincide_controversia = 1) & Q(estado_conflicto = situacion) & Q(empresa_cargo1__contains = empresa )).only('lon', 'lat','nombre','id_bd','estado_conflicto','obra_1')



	else:
		if( transgresion == "1" or ambiental == "1" or  tipo_otro == "1" or  ilegalidad == "1" or  impacto_calidad == "1" or  impacto_salud == "1" or  impacto_trabajo == "1" or  ocupacion_espacios == "1" or  impacto_reservas == "1" or  impacto_turismo == "1" or  torres_altatension == "1" or  contaminacion_aire == "1" or  acaparamiento_agua == "1" or  contaminacion_agua == "1"):
			base = bd.objects.filter((Q(obra_1__contains = termoelectrica ) | Q(obra_1__contains = geotermica ) | Q(obra_1__contains = fotovoltaica ) | Q(obra_1__contains = biomasa ) | Q(obra_1__contains = eolica ) | Q(obra_1__contains = hidroelectrica ) | Q(obra_1__contains = mareomotriz)) & Q(coincide_controversia = 1) & (Q(transgresion_cultura_territorio_pueblos_originarios__contains = transgresion) | Q(impacto_ambiental_sobre_entorno_natural__contains = ambiental) | Q(contaminacion_agua__contains = contaminacion_agua) | Q(acaparamiento_agua__contains = acaparamiento_agua) | Q(contaminacion_aire__contains = contaminacion_aire) | Q(impacto_torres_alta_tension__contains = torres_altatension) | Q(impacto_negativo_turismo__contains = impacto_turismo) | Q(impacto_reservas_parques_nacionales__contains = impacto_reservas) | Q(reubicacion_ocupacion_espacios_accesos__contains = ocupacion_espacios) | Q(impacto_sobre_fuentes_trabajo__contains = impacto_trabajo) | Q(impacto_sobre_salud_vecinos_trabajadores__contains = impacto_salud) | Q(impacto_sobre_calidad_vida__contains = impacto_calidad) | Q(ilegalidad_irregularidad_procesos_llevados__contains = ilegalidad) ) & Q(empresa_cargo1__contains = empresa )).only('lon', 'lat','nombre','id_bd','estado_conflicto','obra_1')
		else:
			base = bd.objects.filter((Q(obra_1__contains = termoelectrica ) | Q(obra_1__contains = geotermica ) | Q(obra_1__contains = fotovoltaica ) | Q(obra_1__contains = biomasa ) | Q(obra_1__contains = eolica ) | Q(obra_1__contains = hidroelectrica ) | Q(obra_1__contains = mareomotriz)) & Q(coincide_controversia = 1) & Q(empresa_cargo1__contains = empresa )).only('lon', 'lat','nombre','id_bd','estado_conflicto','obra_1')



	geojson='{"type": "FeatureCollection",  "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "features": ['
	cont = 0
	tipo = ''
	for row in base:
		if row.estado_conflicto == "1":
			estado = "Activo"
		else:
			estado = "Finalizado"

		if "termo" in row.obra_1:
			tipo = "termo"
		elif "hidro" in row.obra_1:
			tipo = "hidro"			
		elif "geo" in row.obra_1:
			tipo = "geo"
		elif "eo" in row.obra_1:
			tipo = "eo"
		elif "bio" in row.obra_1:
			tipo = "bio"

		elemento='{"type": "Feature", "geometry": {"type": "Point", "coordinates": ['+row.lon+', '+row.lat+']},"properties":{"nombre": "'+row.nombre+'", "estado": "'+estado+'", "bd_id": "'+row.id_bd+'", "tipo": "'+tipo+'", "region": "'+row.region+'", "fecha_presentacion": "'+row.fecha_presentacion+'"}}'
		geojson+=elemento+','
		cont +=1
	if cont > 0:
		geojson = geojson[:-1]
	geojson+=']}'

	return HttpResponse(geojson)

#busqueda avanzada
def busqueda_avanzada(request):

	b = request.GET.get('busqueda',False)
	palabra = request.GET.get('palabra',False)

	busqueda = b.split(" ")

	termoelectrica = "?"
	geotermica = "?"
	fotovoltaica = "?"
	biomasa = "?"
	eolica = "?"
	hidroelectrica = "?"
	mareomotriz = "?"

	for bus in busqueda:

		if bus == "termo":
			termoelectrica = "termo" 
		if bus == "geo":
			geotermica = "geo"
		if bus == "foto":
			fotovoltaica = "foto"
		if bus == "bio":
			biomasa = "biomasa" 
		if bus == "eo":
			eolica = "eólica"
		if bus == "hidro":
			hidroelectrica = "hidro"
		if bus == "mareo":
			mareomotriz = "mareo"

	base = bd.objects.filter(Q(nombre__icontains = palabra) & (Q(obra_1__contains = termoelectrica ) | Q(obra_1__contains = geotermica ) | Q(obra_1__contains = fotovoltaica ) | Q(obra_1__contains = biomasa ) | Q(obra_1__contains = eolica ) | Q(obra_1__contains = hidroelectrica ) | Q(obra_1__contains = mareomotriz)) & Q(coincide_controversia = 1)).only('lon', 'lat','nombre','id_bd','estado_conflicto','obra_1')


	geojson='{"type": "FeatureCollection",  "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "features": ['
	cont = 0
	tipo = ''
	for row in base:
		if row.estado_conflicto == "1":
			estado = "Activo"
		else:
			estado = "Finalizado"

		if "termo" in row.obra_1:
			tipo = "termo"
		elif "hidro" in row.obra_1:
			tipo = "hidro"			
		elif "geo" in row.obra_1:
			tipo = "geo"
		elif "eo" in row.obra_1:
			tipo = "eo"
		elif "bio" in row.obra_1:
			tipo = "bio"

		elemento='{"type": "Feature", "geometry": {"type": "Point", "coordinates": ['+row.lon+', '+row.lat+']},"properties":{"nombre": "'+row.nombre+'", "estado": "'+estado+'", "bd_id": "'+row.id_bd+'", "tipo": "'+tipo+'", "region": "'+row.region+'", "fecha_presentacion": "'+row.fecha_presentacion+'"}}'
		geojson+=elemento+','
		cont +=1
	if cont > 0:
		geojson = geojson[:-1]
	geojson+=']}'

	return HttpResponse(geojson)



def timeline_info(request):

	jsonF='{"proyectos": ['
	proyectos=bd.objects.filter( Q(coincide_controversia = 1)).only('id_bd', 'nombre','ano_inicio_controversia','ano_mayor_intensidad_controversia')
	
	for row in proyectos:
		elemento = '{"id":"'+row.id_bd+'", "nombre":"'+row.nombre+'", "inicio":"'+row.ano_inicio_controversia+'", "mayor_controversia":"'+row.ano_mayor_intensidad_controversia+'"}'
		jsonF += elemento + ','

	jsonF = jsonF[:-1]
	jsonF += ']}'

	return HttpResponse(jsonF)

def groups(request):
	proyectos_id = bd.objects.filter( Q(coincide_controversia = 1)).only('id_bd')
	result = ''

	for row in proyectos_id:
		id_result = 'id: "'+row.id_bd+'"'
		content = 'content: "'+row.id_bd+'"'
		value = 'value: "'+row.id_bd+'"'

		result += '{'+id_result+', '+content+', '+value+'}-'

	result = result[:-1]
	result += ''

	return HttpResponse(result)

def groups_array(request):
	b = request.GET.get('busqueda',False)

	if b is not False and b != '':
		if request.method == 'GET' and 'empresa' in request.GET:
			empresa = request.GET.get('empresa')
		else:
			empresa = ""
	
		busqueda = b.split(" ")
	
		termoelectrica = "?"
		geotermica = "?"
		fotovoltaica = "?"
		biomasa = "?"
		eolica = "?"
		hidroelectrica = "?"
		mareomotriz = "?"
	
		transgresion = "?"
		ambiental = "?"
		contaminacion_agua = "?"
		acaparamiento_agua = "?"
		contaminacion_aire = "?"
		torres_altatension = "?"
		impacto_turismo = "?"
		impacto_reservas = "?"
		ocupacion_espacios = "?"
		impacto_trabajo = "?"
		impacto_salud = "?"
		impacto_calidad = "?"
		ilegalidad = "?"
		tipo_otro = "?"
	
		situacion = "99"
	
		for bus in busqueda:
	
			if bus == "termo":
				termoelectrica = "termo" 
			if bus == "geo":
				geotermica = "geo"
			if bus == "foto":
				fotovoltaica = "foto"
			if bus == "bio":
				biomasa = "biomasa" 
			if bus == "eo":
				eolica = "eólica"
			if bus == "hidro":
				hidroelectrica = "hidro"
			if bus == "mareo":
				mareomotriz = "mareo"
	
			if bus == "acti":
				situacion = "1"
			if bus == "fina":
				situacion = "3"
	
			if bus == "transgresion":
				transgresion = "1"
			if bus == "ambiental":
				ambiental = "1"
			if bus == "contaminacion_agua":
				contaminacion_agua = "1"
			if bus == "acaparamiento_agua":
				acaparamiento_agua = "1"
			if bus == "contaminacion_aire":
				contaminacion_aire = "1"
			if bus == "torres_altatension":
				torres_altatension = "1"
			if bus == "impacto_turismo":
				impacto_turismo = "1"
			if bus == "impacto_reservas":
				impacto_reservas = "1"
			if bus == "ocupacion_espacios":
				ocupacion_espacios = "1"
			if bus == "impacto_trabajo":
				impacto_trabajo = "1"
			if bus == "impacto_salud":
				impacto_salud = "1"
			if bus == "impacto_calidad":
				impacto_calidad = "1"
			if bus == "ilegalidad":
				ilegalidad = "1"
			if bus == "tipo_otro":
				tipo_otro = "1"
	
	
		if (situacion == "1") or (situacion == "3"):
			if(transgresion == "1" or ambiental == "1" or  tipo_otro == "1" or  ilegalidad == "1" or  impacto_calidad == "1" or  impacto_salud == "1" or  impacto_trabajo == "1" or  ocupacion_espacios == "1" or  impacto_reservas == "1" or  impacto_turismo == "1" or  torres_altatension == "1" or  contaminacion_aire == "1" or  acaparamiento_agua == "1" or  contaminacion_agua == "1"):
				proyectos_id = bd.objects.filter((Q(obra_1__contains = termoelectrica ) | Q(obra_1__contains = geotermica ) | Q(obra_1__contains = fotovoltaica ) | Q(obra_1__contains = biomasa ) | Q(obra_1__contains = eolica ) | Q(obra_1__contains = hidroelectrica ) | Q(obra_1__contains = mareomotriz)) & Q(coincide_controversia = 1) & Q(estado_conflicto = situacion) & (Q(transgresion_cultura_territorio_pueblos_originarios__contains = transgresion) | Q(impacto_ambiental_sobre_entorno_natural__contains = ambiental) | Q(contaminacion_agua__contains = contaminacion_agua) | Q(acaparamiento_agua__contains = acaparamiento_agua) | Q(contaminacion_aire__contains = contaminacion_aire) | Q(impacto_torres_alta_tension__contains = torres_altatension) | Q(impacto_negativo_turismo__contains = impacto_turismo) | Q(impacto_reservas_parques_nacionales__contains = impacto_reservas) | Q(reubicacion_ocupacion_espacios_accesos__contains = ocupacion_espacios) | Q(impacto_sobre_fuentes_trabajo__contains = impacto_trabajo) | Q(impacto_sobre_salud_vecinos_trabajadores__contains = impacto_salud) | Q(impacto_sobre_calidad_vida__contains = impacto_calidad) | Q(ilegalidad_irregularidad_procesos_llevados__contains = ilegalidad) | Q(otro__contains = tipo_otro)) & Q(empresa_cargo1__contains = empresa ) ).only('id_bd')			
			else:
				proyectos_id = bd.objects.filter((Q(obra_1__contains = termoelectrica ) | Q(obra_1__contains = geotermica ) | Q(obra_1__contains = fotovoltaica ) | Q(obra_1__contains = biomasa ) | Q(obra_1__contains = eolica ) | Q(obra_1__contains = hidroelectrica ) | Q(obra_1__contains = mareomotriz)) & Q(coincide_controversia = 1) & Q(estado_conflicto = situacion) & Q(empresa_cargo1__contains = empresa )).only('id_bd')
	
	
	
		else:
			if( transgresion == "1" or ambiental == "1" or  tipo_otro == "1" or  ilegalidad == "1" or  impacto_calidad == "1" or  impacto_salud == "1" or  impacto_trabajo == "1" or  ocupacion_espacios == "1" or  impacto_reservas == "1" or  impacto_turismo == "1" or  torres_altatension == "1" or  contaminacion_aire == "1" or  acaparamiento_agua == "1" or  contaminacion_agua == "1"):
				proyectos_id = bd.objects.filter((Q(obra_1__contains = termoelectrica ) | Q(obra_1__contains = geotermica ) | Q(obra_1__contains = fotovoltaica ) | Q(obra_1__contains = biomasa ) | Q(obra_1__contains = eolica ) | Q(obra_1__contains = hidroelectrica ) | Q(obra_1__contains = mareomotriz)) & Q(coincide_controversia = 1) & (Q(transgresion_cultura_territorio_pueblos_originarios__contains = transgresion) | Q(impacto_ambiental_sobre_entorno_natural__contains = ambiental) | Q(contaminacion_agua__contains = contaminacion_agua) | Q(acaparamiento_agua__contains = acaparamiento_agua) | Q(contaminacion_aire__contains = contaminacion_aire) | Q(impacto_torres_alta_tension__contains = torres_altatension) | Q(impacto_negativo_turismo__contains = impacto_turismo) | Q(impacto_reservas_parques_nacionales__contains = impacto_reservas) | Q(reubicacion_ocupacion_espacios_accesos__contains = ocupacion_espacios) | Q(impacto_sobre_fuentes_trabajo__contains = impacto_trabajo) | Q(impacto_sobre_salud_vecinos_trabajadores__contains = impacto_salud) | Q(impacto_sobre_calidad_vida__contains = impacto_calidad) | Q(ilegalidad_irregularidad_procesos_llevados__contains = ilegalidad) ) & Q(empresa_cargo1__contains = empresa )).only('id_bd')
			else:
				proyectos_id = bd.objects.filter((Q(obra_1__contains = termoelectrica ) | Q(obra_1__contains = geotermica ) | Q(obra_1__contains = fotovoltaica ) | Q(obra_1__contains = biomasa ) | Q(obra_1__contains = eolica ) | Q(obra_1__contains = hidroelectrica ) | Q(obra_1__contains = mareomotriz)) & Q(coincide_controversia = 1) & Q(empresa_cargo1__contains = empresa )).only('id_bd')
			
	else:
		proyectos_id = bd.objects.filter( Q(coincide_controversia = 1)).only('id_bd')
	result = ''
	

	for row in proyectos_id:
		id_result = 'id: "'+row.id_bd+'"'
		content = 'content: "'+row.id_bd+'"'
		value = 'value: "'+row.id_bd+'"'

		result += row.id_bd+'-'

	result = result[:-1]
	result += ''

	return HttpResponse(result)


def items(request):
	proyectos = bd.objects.filter( Q(coincide_controversia = 1)).only('id_bd', 'nombre','ano_inicio_controversia','ano_mayor_intensidad_controversia')
	result = ''
	contador = 1
	for row in proyectos:
		id_result = 'id: "'+str(contador)+'"'
		group = 'group: "'+row.id_bd+'"'
		content = 'content: "<h3>'+row.nombre+'</h3><div class="progress"><div class="progress-bar progress-bar-success barra-warning" role="progressbar" style="width:100%"></div></div>"'
		start = 'start: '+row.ano_inicio_controversia+'-01-01T01:00:00'
		end = 'end: 2015-01-01T01:00:00'
		contador = contador + 1
		result += '{'+id_result+', '+group+', '+content+', '+start+', '+end+', className:"transparent"}-'

	result = result[:-1]
	result += ''

	return HttpResponse(result)

def items_array(request):
	id_get = request.GET.get('id',False)
	palabra = request.GET.get('palabra',False)

	if id_get is not False and id_get != '' and palabra is False:
		proyectos = bd.objects.filter(Q(id_bd = id_get) & Q(coincide_controversia = 1)).only('id_bd', 'nombre','ano_inicio_controversia','ano_calificacion','ano_presentacion','fecha_presentacion')
		result = ''
	
		for row in proyectos:
	
			result += row.id_bd+'|'+row.nombre+'|'+row.ano_inicio_controversia+'|'+row.ano_calificacion+'|'+row.ano_presentacion+'|'+row.fecha_presentacion[:2]+'|'+row.fecha_presentacion[3:5]+'|'+row.fecha_presentacion[6:10]+'*'
	
		result = result
	elif id_get is False and palabra is not False and palabra != '':
		proyectos = bd.objects.filter(Q(nombre__icontains = palabra) & Q(coincide_controversia = 1)).only('id_bd', 'nombre','ano_inicio_controversia','ano_calificacion','ano_presentacion','fecha_presentacion')
		result = ''
	
		for row in proyectos:
	
			result += row.id_bd+'|'+row.nombre+'|'+row.ano_inicio_controversia+'|'+row.ano_calificacion+'|'+row.ano_presentacion+'|'+row.fecha_presentacion[:2]+'|'+row.fecha_presentacion[3:5]+'|'+row.fecha_presentacion[6:10]+'*'
	
		result = result


	else:
		proyectos = bd.objects.filter( Q(coincide_controversia = 1)).only('id_bd', 'nombre','ano_inicio_controversia','ano_calificacion','ano_presentacion','fecha_presentacion')
		result = ''
	
		for row in proyectos:
	
			result += row.id_bd+'|'+row.nombre+'|'+row.ano_inicio_controversia+'|'+row.ano_calificacion+'|'+row.ano_presentacion+'|'+row.fecha_presentacion[:2]+'|'+row.fecha_presentacion[3:5]+'|'+row.fecha_presentacion[6:10]+'*'
	
		result = result[:-1]
		result += ''

	return HttpResponse(result)

def items_noticias(request):
	id_get = request.GET.get('id',False)
	result = ''

	if id_get is not False and id_get != '':
		noticia = noticias.objects.filter(id_bd=id_get)

		for row in noticia:
	
			result += row.id_bd+'|'+row.fecha.strftime("%Y")+'|'+row.fecha.strftime("%m")+'|'+row.fecha.strftime("%d")+'|'+str(row.id)+'*'
	
		result = result


	return HttpResponse(result)

def send_email(request):

	name=request.GET.get('name')
	email=request.GET.get('email')
	message=request.GET.get('message')
	final_subject="[mensaje]"
	final_message=" nombre:"+name+"\n email:"+email+"\n mensaje:"+message

	send_mail('Subject here', 'Here is the message.', settings.EMAIL_HOST_USER,
    [''], fail_silently=False)
	
	return HttpResponse("Mensaje enviado, muchas gracias.")