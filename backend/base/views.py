# from django.shortcuts import render
# from django.http import JsonResponse
# from rest_framework.decorators import api_view, permission_classes #decorator view
# from rest_framework.permissions import IsAuthenticated, IsAdminUser # auth
# from rest_framework.response import Response #decorator view

# from django.contrib.auth.models import User
# from .models import Product
# from .products import products
# from .serializers import ProductSerializer, UserSerializer, UserSerializerWithToken

# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView

# from django.contrib.auth.hashers import make_password
# from rest_framework import status


# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

#     def validate(self, attrs):
#         data  = super().validate(attrs)

#         serializer = UserSerializerWithToken(self.user).data
#         for key, value in serializer.items():
#             data[key] = value

#         return data

#     # @classmethod
#     # def get_token(cls, user):
#     #     token = super().get_token(user)
#     #     # Add custom claims
#     #     token['username'] = user.username # here we can add some more tkens to appear in payload data
#     #     # ...
#     #     return token

# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer

# # @api_view(['GET']) # if method is 'GET' can be empty inside parentheses
# # def getRoutes(request):
# #     routes = [
# #         'api/products/',
# #         'api/products/create/',
# #         'api/products/upload/',
# #         'api/products/<id>/reviews/',
# #         'api/products/top/',
# #         'api/products/<id>/',
# #         'api/products/delete/<id>/',
# #          'api/products/<update>/<id>/',
# #     ]
# #     return Response(routes)



# @api_view(['POST'])
# def registerUser(request):
#     data = request.data

#     try:
#         user= User.objects.create(
#             first_name=data['name'],
#             username=data['email'],
#             email=data['email'],
#             password=make_password(data['password']),
#         )
#         serializer = UserSerializerWithToken(user, many=False)
#         return Response(serializer.data)
#     except:
#         message = {'detail':'User with this email already exists'}
#         return Response(message, status=status.HTTP_400_BAD_REQUEST)


# @api_view()
# @permission_classes([IsAuthenticated]) # restricts access. Access only with token 
# def getUserProfile(request):
#     user = request.user
#     serializer = UserSerializer(user, many=False)
#     return Response(serializer.data)


# @api_view()
# @permission_classes([IsAdminUser])
# def getUsers(request):
#     users = User.objects.all()
#     serializer = UserSerializer(users, many=True)
#     return Response(serializer.data)




# @api_view()
# def getProducts(request):
#     products = Product.objects.all()
#     serializer = ProductSerializer(products, many=True)
#     return Response(serializer.data)


# @api_view()
# def getProduct(request,pk):
#     product = Product.objects.get(_id=pk)
#     serializer = ProductSerializer(product, many=False)
    
#     return Response(serializer.data)




# # def getProducts(request):
# #     return JsonResponse(products, safe=False)

# # @api_view()
# # def getProduct(request,pk):
# #     product = None
# #     for i in products:
# #         if i['_id'] == pk:
# #             product = i
# #             break
# #     return Response(product)