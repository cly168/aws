# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-23 14:08
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login_registration', '0002_remove_user_confirm'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='email',
            new_name='username',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
    ]
