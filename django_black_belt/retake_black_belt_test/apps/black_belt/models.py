from __future__ import unicode_literals
from django.db import models
from ..login_registration.models import User

class Poke(models.Model):
	poker = models.ForeignKey(User, related_name= "poker")
	pokee = models.ForeignKey(User, related_name = "pokee")
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)