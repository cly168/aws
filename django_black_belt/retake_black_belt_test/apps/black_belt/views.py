from django.shortcuts import render, redirect
from ..login_registration.models import User
from .models import Poke
from django.core.urlresolvers import reverse
from django.db.models import Count


def index(request):
	context={
		"current_user": User.objects.get(id=request.session['id']),
		"pokemes": Poke.objects.filter(pokee__id = request.session['id']).values('poker__last_name').annotate(count = Count('poker')).order_by('-count'),
		"users": User.objects.exclude(id=request.session['id']).annotate(count = Count('pokee')), 
	}
	return render(request, 'black_belt/index.html', context)
def poke(request, id):
	poke = Poke.objects.create(poker = User.objects.get(id = request.session['id']), pokee = User.objects.get(id = id))
	return redirect(reverse('black_belt:my_index'))