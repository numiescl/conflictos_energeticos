from django.core.management.base import BaseCommand, CommandError
import os,csv
import logging
import urllib2,base64,json
from conflictos.models import bd
from datetime import datetime,timedelta

class Command(BaseCommand):

	help = "Importa capas a base de datos"

	def handle(self, *app_labels,**options):

				
				#funciona

			