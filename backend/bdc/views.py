from django.shortcuts import render
from .serializers import BdcSerializer
from rest_framework import viewsets      
from .models import Bdc                 

class BdcView(viewsets.ModelViewSet):  
    serializer_class = BdcSerializer   
    queryset = Bdc.objects.all()  