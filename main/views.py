from django.shortcuts import render, redirect
from .models import Message
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
import json

# Routs

def index(request):
    """INDEX page"""
    return render(request, 'main/index.html')

def about(request):
    """ABOUT page"""
    return render(request, 'main/about.html')

def contacts(request):
    """CONTACTS page"""
    
    # save message from user
    if request.method == 'POST':
        username = request.POST['username']
        phone = request.POST['phone']
        message = request.POST['message']
        
        # insert data in db
        mes = Message(username=username, phone=phone, message=message)
        mes.save()
        
        return redirect('contacts')
        
        
    return render(request, 'main/contacts.html')

def documentation(request):
    """DOCUMENTATION page"""
    return render(request, 'main/documentation.html')

def catalog(request):
    """CATALOG page"""
    return render(request, 'main/catalog.html')

def cart(request):
    """CART page"""
    return render(request, 'main/detail_cart.html')

def service(request):
    """CERVICE page"""
    return render(request, 'main/service.html')

def services(request):
    """CERVICES page"""
    return render(request, 'main/services.html')