from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Parent, Teacher




# serializers.py
class ParentSignupSerializer(serializers.Serializer):
    class Meta:
        model = Parent
        fields = "__all__"
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    password_confirm = serializers.CharField(write_only=True)

    def validate(self, data):
        password = data.get('password')
        password_confirm = data.get('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match.")

        return data
    
    
class ParentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parent
        fields = ['telephone_number', 'parent_name', 'child_first_name', 'child_last_name', 'child_gender', 'child_classroom', 'profile_picture']
        

class TeacherSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"

