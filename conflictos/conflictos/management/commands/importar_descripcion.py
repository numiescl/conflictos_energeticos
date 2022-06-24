# coding=utf-8
from django.core.management.base import BaseCommand, CommandError
import os,csv,sys
import logging
import urllib2,base64,json
from conflictos.models import bd
from datetime import datetime,timedelta

reload(sys)
sys.setdefaultencoding('utf-8')

class Command(BaseCommand):

	help = "Importa capas a base de datos"

	def handle(self, *app_labels,**options):


				filas=[]
				CSV_DIR = '/home/plataforma/template/'
				with open('%sdescripcion_conflictos.csv'%CSV_DIR, 'r') as csvfile:
					reader1 = csv.reader(csvfile, delimiter=',', quotechar='|')
					for row in reader1:
						filas.append(', '.join(row))

				#print "id:%s"%filas[0][:5]
				contador = 1
				for row in filas:
					f=row.split(";")
					bd.objects.filter(id_bd=f[0]).update(detalles=f[2].decode('latin-1').encode('utf-8'))
					contador+=1
					print f[0]+' '+f[2].decode('latin-1').encode('utf-8')
				#funciona
				print contador
			