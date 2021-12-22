from django.urls import path, include
from .api import *
from rest_framework.authtoken import views

urlpatterns = [
    path('api/auth', views.obtain_auth_token),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view(), name='login'),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', LogoutAPI.as_view()),
    
]