from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category_id=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @action(detail=False, methods=['get'], url_path='sorted-by-category')
    def sorted_by_category(self, request):
        
        products = (Product.objects.filter(category_id_id__in=[1, 2, 3, 4, 5]).order_by('category_id_id', 'id'))
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='by-price')
    def by_price(self, request):
        
        min_p = request.query_params.get('min_price')
        max_p = request.query_params.get('max_price')

        if min_p is None and max_p is None:
            return Response(
                {'detail': 'Specify min_price and/or max_price in query string.'}, status=404)

        qs = Product.objects.all()
        try:
            if min_p is not None:
                qs = qs.filter(price__gte=float(min_p))
            if max_p is not None:
                qs = qs.filter(price__lte=float(max_p))
        except ValueError:
            return Response(
                {'detail': 'min_price and max_price must be numbers.'}, status=404)

        serializer = ProductSerializer(qs.order_by('price'), many=True)
        return Response(serializer.data)
