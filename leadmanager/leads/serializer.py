from django.db.models import fields
from rest_framework import serializers
from leads.models import *

class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = '__all__'

    