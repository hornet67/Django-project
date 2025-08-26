from django.shortcuts import render, redirect
from .models import Autherdata

# Create your views here.


def register(request):
    if request.method == "POST":
        # Get form data from request.POST
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Save data to database
        Autherdata.objects.create(name=name, email=email, message=message)
        
        return redirect('profile')
   


    return render(request,'registration/autherregister.html')


def profile(request):
    auther = Autherdata.objects.all()
    return render(request,'registration/user.html',{"auther":auther})





