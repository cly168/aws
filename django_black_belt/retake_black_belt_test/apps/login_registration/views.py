from django.shortcuts import render, redirect
from .models import User
import bcrypt
from django.core.urlresolvers import reverse

def index(request):
	try:
		request.session['message']
	except:
		request.session['message'] = ''
	return render(request, 'login_registration/index.html')
def register(request):
	email_validate = User.objects.validate(request.POST['email'])
	info_validate = User.objects.register(request.POST['first_name'],request.POST['last_name'],request.POST['password'], request.POST['confirm']) 
	date_validate = User.objects.date_valid(request.POST['birthday'])
	password = request.POST['password']
	if email_validate and info_validate and date_validate:
		request.session['message'] = ''
		request.session['first_name'] = request.POST['first_name']
		request.session['regorlogin'] = 'registered'
		password = password.encode('utf-8')
		hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
		first_name = request.POST['first_name']
		last_name = request.POST['last_name']
		birthday = request.POST['birthday']
		email = request.POST['email']
		User.objects.create(email = email, first_name = first_name, last_name = last_name, password = hashed, birthday = birthday)
		request.session['id'] = User.objects.get(email = email).id
		return redirect('/success')
	elif not date_validate:
		request.session['message'] = "Birthday must be before today"
	elif not email_validate:
		request.session['message'] = "Email is not valid"
	elif not info_validate:
		request.session['message'] = "First Name required and must letters\r\n Last Name required and must have letters \r\n Password Required with no fewer than 8 characters and must match passwowrd confirmation"
	return redirect(reverse('logreg:my_index'))
def login(request):
	login_validate = User.objects.login_valid(request.POST['email'], request.POST['password'])
	if login_validate:
		request.session['id'] = User.objects.get(email=request.POST['email']).id
		request.session['message'] = ''
		request.session['first_name'] = User.objects.get(email=request.POST['email']).first_name
		request.session['regorlogin'] = 'logged in!'
		return redirect('/success')
	elif not login_validate:
		request.session['message']= 'Wrong login credentials'
	return redirect(reverse('black_belt:my_index'))
def success(request):
	return redirect(reverse('black_belt:my_index'))
def logout(request):
	request.session['message'] = ''
	request.session.pop('id')
	return redirect(reverse('logreg:my_index'))