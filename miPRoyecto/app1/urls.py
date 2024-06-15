"""
URL configuration for miPRoyecto project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views


urlpatterns = [
    # salida, def, nombre 
    path('', views.index, name='index'),
    path('pdf/', views.generate_pdf, name='generate_pdf'),
    path('send-email/', views.enviar_email, name='send_email'), 
]
    # path('pdf/',views.render_pdf_view, name='render_pdf'),
    # path('', views.pagina_principal, name='pagina_principal'),
