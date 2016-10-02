from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name ="my_index"),
    url(r'^validate_register$', views.register),
    url(r'^validate_login$', views.login),
    url(r'^success$', views.success),
    url(r'^logout$', views.logout, name = 'logout')
]