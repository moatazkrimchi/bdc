from rest_framework import serializers
from .models import Bdc

class BdcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bdc
        fields = "__all__"