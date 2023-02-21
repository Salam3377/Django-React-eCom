from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes #decorator view
from rest_framework.permissions import IsAuthenticated, IsAdminUser # auth
from rest_framework.response import Response #decorator view


from base.models import Product
from base.serializers import ProductSerializer

from rest_framework import status


@api_view()
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view()
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    
    return Response(serializer.data)
