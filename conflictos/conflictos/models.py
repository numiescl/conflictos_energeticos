from __future__ import unicode_literals

from django.db import models
from django.utils import timezone


# Create your models here.
class bd(models.Model):
	id_bd = models.CharField(max_length=1000,null=True, default='')
	id_casos = models.CharField(max_length=1000,null=True, default='')
	nombre = models.CharField(max_length=1000,null=True, default='')
	detalles = models.CharField(max_length=5000,null=True, default='')
	tipo = models.CharField(max_length=1000,null=True, default='')
	region = models.CharField(max_length=1000,null=True, default='')
	provincias = models.CharField(max_length=1000,null=True, default='')
	comunas = models.CharField(max_length=1000,null=True, default='')
	idh_comunal = models.CharField(max_length=1000,null=True, default='')
	ingreso_promedio_comunal = models.CharField(max_length=1000,null=True, default='')
	porcentaje_pobreza_comunal = models.CharField(max_length=1000,null=True, default='')
	porcentaje_poblacion_indigena_comunal = models.CharField(max_length=1000,null=True, default='')
	titular = models.CharField(max_length=1000,null=True, default='')
	inversion_millones_dolares = models.CharField(max_length=1000,null=True, default='')
	potencia_mw = models.CharField(max_length=1000,null=True, default='')
	obra_1 = models.CharField(max_length=1000,null=True, default='')
	obra_2 = models.CharField(max_length=1000,null=True, default='')
	obra_3 = models.CharField(max_length=1000,null=True, default='')
	obra_4 = models.CharField(max_length=1000,null=True, default='')
	tipo_proyecto_fotovoltaico = models.CharField(max_length=1000,null=True, default='')
	numero_ingresos_sistema = models.CharField(max_length=1000,null=True, default='')
	fecha_presentacion = models.CharField(max_length=1000,null=True, default='')
	trimestre_presentacion = models.CharField(max_length=1000,null=True, default='')
	ano_presentacion = models.CharField(max_length=1000,null=True, default='')
	estado_calificacion = models.CharField(max_length=1000,null=True, default='')
	fecha_calificacion = models.CharField(max_length=1000,null=True, default='')
	trimestre_calificacion = models.CharField(max_length=1000,null=True, default='')
	ano_calificacion = models.CharField(max_length=1000,null=True, default='')
	lat = models.CharField(max_length=1000,null=True, default='')
	lon = models.CharField(max_length=1000,null=True, default='')
	coincide_controversia = models.CharField(max_length=1000,null=True, default='')
	situacion_actual_proyecto = models.CharField(max_length=1000,null=True, default='')
	empresa_cargo1 = models.CharField(max_length=1000,null=True, default='')
	empresa_cargo2 = models.CharField(max_length=1000,null=True, default='')
	recurso_proteccion = models.CharField(max_length=1000,null=True, default='')
	pueblos_originarios = models.CharField(max_length=1000,null=True, default='')
	vecinos = models.CharField(max_length=1000,null=True, default='')
	estudiantes = models.CharField(max_length=1000,null=True, default='')
	ambientalistas_nacionales = models.CharField(max_length=1000,null=True, default='')
	ambientalistas_internacionales = models.CharField(max_length=1000,null=True, default='')
	trabajadores = models.CharField(max_length=1000,null=True, default='')
	org_admin_publica = models.CharField(max_length=1000,null=True, default='')
	actores_sociales = models.CharField(max_length=1000,null=True, default='')
	ano_inicio_controversia = models.CharField(max_length=1000,null=True, default='')
	duracion_latente_controversia = models.CharField(max_length=1000,null=True, default='')
	ano_mayor_intensidad_controversia = models.CharField(max_length=1000,null=True, default='')
	extension_territorial_controversia = models.CharField(max_length=1000,null=True, default='')
	controversia_santiago = models.CharField(max_length=1000,null=True, default='')
	transgresion_cultura_territorio_pueblos_originarios = models.CharField(max_length=1000,null=True, default='')
	impacto_ambiental_sobre_entorno_natural = models.CharField(max_length=1000,null=True, default='')
	contaminacion_agua = models.CharField(max_length=1000,null=True, default='')
	acaparamiento_agua = models.CharField(max_length=1000,null=True, default='')
	contaminacion_aire = models.CharField(max_length=1000,null=True, default='')
	impacto_torres_alta_tension = models.CharField(max_length=1000,null=True, default='')
	impacto_negativo_turismo = models.CharField(max_length=1000,null=True, default='')
	impacto_reservas_parques_nacionales = models.CharField(max_length=1000,null=True, default='')
	reubicacion_ocupacion_espacios_accesos = models.CharField(max_length=1000,null=True, default='')
	impacto_sobre_fuentes_trabajo = models.CharField(max_length=1000,null=True, default='')
	impacto_sobre_salud_vecinos_trabajadores = models.CharField(max_length=1000,null=True, default='')
	impacto_sobre_calidad_vida = models.CharField(max_length=1000,null=True, default='')
	ilegalidad_irregularidad_procesos_llevados = models.CharField(max_length=1000,null=True, default='')
	otro = models.CharField(max_length=1000,null=True, default='')
	cantidad_manifestantes = models.CharField(max_length=1000,null=True, default='')
	intereses_pueblos_originarios = models.CharField(max_length=1000,null=True, default='')
	etapa_proyecto_controversia = models.CharField(max_length=1000,null=True, default='')
	estado_conflicto = models.CharField(max_length=1000,null=True, default='')
	mecanismo_resolucion_controversia = models.CharField(max_length=1000,null=True, default='')
	agua = models.CharField(max_length=1000,null=True, default='')
	economico_desarrollo = models.CharField(max_length=1000,null=True, default='')
	naturaleza = models.CharField(max_length=1000,null=True, default='')
	pueblos_originarios2 = models.CharField(max_length=1000,null=True, default='')
	salud = models.CharField(max_length=1000,null=True, default='')
	tecnico_legal = models.CharField(max_length=1000,null=True, default='')
	reubicacion = models.CharField(max_length=1000,null=True, default='')
	posicion_pueblos_originarios = models.CharField(max_length=1000,null=True, default='')
	posicion_vecinos = models.CharField(max_length=1000,null=True, default='')
	posicion_estudiantes = models.CharField(max_length=1000,null=True, default='')
	posicion_ambientalistas_nacionales = models.CharField(max_length=1000,null=True, default='')
	posicion_ambientalistas_internacionales = models.CharField(max_length=1000,null=True, default='')
	posicion_trabajadores = models.CharField(max_length=1000,null=True, default='')
	posicion_org_admin_publica = models.CharField(max_length=1000,null=True, default='')
	
	def __unicode__(self):
		return self.nombre

class noticias(models.Model):
	"""
    Esta es una documentacion exitosa.
    """
	id_bd = models.CharField(max_length=1000,null=True, default='')
	nombre = models.CharField(max_length=500,null=True, default='')
	conflicto = models.CharField(max_length=100,null=True, default='')
	bajada = models.CharField(max_length=1000,null=True, default='',blank=True)
	texto = models.CharField(max_length=2000,null=True, default='',blank=True)
	fecha = models.DateTimeField(default=timezone.now,blank=True)
	url = models.CharField(max_length=500,null=True, default='')
	fuente = models.CharField(max_length=100,null=True, default='')
	imagen = models.ImageField(null=True,blank=True)
	def __unicode__(self):
		return self.nombre








