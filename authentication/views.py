from django.shortcuts import render

# Create your views here.


def login(request):
    # Logic for handling login
    return render(request, 'auth/login.html')
