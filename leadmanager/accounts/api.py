from django.db.models import query
from rest_framework import generics, permissions, views
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializers import *

#Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(
                user, 
                context=self.get_serializer_context()
            ).data,
            "token": Token.objects.create(user=user).key
            
        })


#Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, created = Token.objects.get_or_create(user=user)
        login(request, user)
        print(user)
        return Response({
            "user": UserSerializer(
                user, 
                context=self.get_serializer_context()
            ).data,
            "token": token.key
            
        })

#User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

#Logout API
class LogoutAPI(views.APIView):
    def post(self, request, format = None):
        # simply delete the token to force a login
        print(request.user)
        request.user.auth_token.delete()
        return Response({"Success":"Logged Out Successfully!"})

