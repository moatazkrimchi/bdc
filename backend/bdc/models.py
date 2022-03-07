from django.db import models

# Create your models here.
class Bdc(models.Model):
    radical = models.CharField(max_length=100)
    agence = models.CharField(max_length=100)
    montant = models.FloatField()
    taux = models.FloatField()
    duree = models.IntegerField()
    dateE = models.DateField()
    dateP = models.DateField()
    tempsR = models.IntegerField()
    statut = models.CharField(max_length=100)

    def __str__(self) :
        return self.radical