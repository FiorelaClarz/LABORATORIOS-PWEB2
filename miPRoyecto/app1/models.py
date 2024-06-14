from django.db import models

# Create your models here.
class Persona (models.Model):
    nombre = models.CharField(max_length=20)
    edad = models.IntegerField(null=True, blank=True)
    def __str__(self):
        
        return self.nombre

class Simple(models.Models):
    text = models.CharField(max_length=10)
    number = models.IntegerField(null=True)
    url = models.URLField(default='www.example.com')

    def __str__(self):
        return self.url
    
class DataExample(models.Model):
    the_date=models.DataTimeField()

class NullExample(models.Model):
    col = models.CharField(max_length=10, blank=True, null=True)

class Language(models.Model):
    name=models.CharField(max_length=10)

class Framework(models.Model):
    name = models.CharField(max_length=10)


    