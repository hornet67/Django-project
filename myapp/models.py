from django.db import models


# Create your models here.

class Autherdata(models.Model):
    name = models.CharField(max_length=80)
    email = models.CharField(max_length=200,unique='True')
    message= models.TextField(max_length=300)
    

    def __str__(self):
        return f"{self.name}  ' --->  ' {self.email}"
