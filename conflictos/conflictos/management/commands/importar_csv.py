#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.core.management.base import BaseCommand, CommandError
import os,csv
import logging
import urllib2,base64,json
from conflictos.models import bd
from datetime import datetime,timedelta

class Command(BaseCommand):

	help = "Importa capas a base de datos"

	def handle(self, *app_labels,**options):

				filas=[]
				CSV_DIR = '../plataforma/template/'
				with open('%sbd_url_sin_cabeceras.csv'%CSV_DIR, 'rb') as csvfile:
					reader1 = csv.reader(csvfile, delimiter=',', quotechar='|')
					for row in reader1:
						filas.append(', '.join(row))

				#print "id:%s"%filas[0][:5]
				for row in filas:
					f=row.split(";")
					f[28]=f[28].replace(" ", "")
					f[29]=f[29].replace(" ", "")
					f[28]=f[28].replace(",", ".")
					f[29]=f[29].replace(",", ".")

					ca=bd.objects.create(id_bd=f[0],id_casos=f[1],nombre=f[2],detalles=f[3],tipo=f[4],region=f[5],provincias=f[6],comunas=f[7],idh_comunal=f[8],ingreso_promedio_comunal=f[9],porcentaje_pobreza_comunal=f[10],porcentaje_poblacion_indigena_comunal=f[11],titular=f[12],inversion_millones_dolares=f[13],potencia_mw=f[14],obra_1=f[15],obra_2=f[16],obra_3=f[17],obra_4=f[18],tipo_proyecto_fotovoltaico=f[19],numero_ingresos_sistema=f[20],fecha_presentacion=f[21],trimestre_presentacion=f[22],ano_presentacion=f[23],estado_calificacion=f[24],fecha_calificacion=f[25],trimestre_calificacion=f[26],ano_calificacion=f[27],lat=f[28],lon=f[29],coincide_controversia=f[30],situacion_actual_proyecto=f[31],empresa_cargo1=f[32],empresa_cargo2=f[33],recurso_proteccion=f[34],pueblos_originarios=f[35],vecinos=f[36],estudiantes=f[37],ambientalistas_nacionales=f[38],ambientalistas_internacionales=f[39],trabajadores=f[40],org_admin_publica=f[41],actores_sociales=f[42],ano_inicio_controversia=f[43],duracion_latente_controversia=f[44],ano_mayor_intensidad_controversia=f[45],extension_territorial_controversia=f[46],controversia_santiago=f[47],transgresion_cultura_territorio_pueblos_originarios=f[48],impacto_ambiental_sobre_entorno_natural=f[49],contaminacion_agua=f[50],acaparamiento_agua=f[51],contaminacion_aire=f[52],impacto_torres_alta_tension=f[53],impacto_negativo_turismo=f[54],impacto_reservas_parques_nacionales=f[55],reubicacion_ocupacion_espacios_accesos=f[56],impacto_sobre_fuentes_trabajo=f[57],impacto_sobre_salud_vecinos_trabajadores=f[58],impacto_sobre_calidad_vida=f[59],ilegalidad_irregularidad_procesos_llevados=f[60],otro=f[61],cantidad_manifestantes=f[62],intereses_pueblos_originarios=f[63],etapa_proyecto_controversia=f[64],estado_conflicto=f[65],mecanismo_resolucion_controversia=f[66],agua=f[67],economico_desarrollo=f[68],naturaleza=f[69],pueblos_originarios2=f[70],salud=f[71],tecnico_legal=f[72],reubicacion=f[73],posicion_pueblos_originarios=f[74],posicion_vecinos=f[75],posicion_estudiantes=f[76],posicion_ambientalistas_nacionales=f[77],posicion_ambientalistas_internacionales=f[78],posicion_trabajadores=f[79],posicion_org_admin_publica=f[80])
					ca.save()
					print f[28]
				#funciona

			