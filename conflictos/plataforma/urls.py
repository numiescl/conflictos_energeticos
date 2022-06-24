"""plataforma URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url, include
from django.contrib import admin
from conflictos.views import index, ficha, busqueda_general, busqueda_avanzada, quienes_somos, contacto, send_email, estudio, json_query, timeline_info, groups, groups_array, items_noticias, items_array, items
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
import settings
import certbot_django.server.urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^\.well-known/', include(certbot_django.server.urls)),
    url(r'^$',index),
    url(r'^ficha/', ficha),
    url(r'^quienes-somos/', quienes_somos),
    url(r'^send_email/',send_email),
    url(r'^estudio/', estudio),
    url(r'^contacto/', contacto),
    url(r'^busqueda_general/', busqueda_general),
    url(r'^busqueda_avanzada/', busqueda_avanzada),
    url(r'^timeline_info/', timeline_info),
    url(r'^timeline/groups/', groups),
    url(r'^timeline/groups_array/', groups_array),
    url(r'^timeline/items/', items),
    url(r'^timeline/items_array/', items_array),
    url(r'^timeline/items_noticias/', items_noticias),
    url(r'^json/', json_query)
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)