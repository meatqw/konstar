from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('contacts', views.contacts, name='contacts'),
    path('documentation', views.documentation, name='documentation'),
    path('catalog', views.catalog, name='catalog'),
    path('cart', views.cart, name='cart'),
    path('service', views.service, name='service'),
    path('services', views.services, name='services'),
]