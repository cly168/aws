from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "my_index"),
    url(r'^poke/(?P<id>\d+)$', views.poke, name ="my_poke")
]