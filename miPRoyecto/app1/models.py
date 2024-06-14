from django.db import models

# Create your models here.
class Persona (models.Model):
    nombre = models.CharField(max_length=20)
    edad = models.IntegerField(null=True, blank=True)
    def __str__(self):
        
        return self.nombre
    
class Cliente (models.Model):
    nombreCli = models.CharField(max_length=20)
    edad = models.IntegerField(null=True, blank=True)
    def __str__(self):
        
        return self.nombre