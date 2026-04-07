from django.shortcuts import render

from django.http import JsonResponse
from .models import Product, Category


def get_products(request):
    products = Product.objects.all()
    data = []
    for p in products:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category.id
        })

    return JsonResponse(data, safe=False)

def get_id_product(request, id):
    try:
        p = Product.objects.get(id = id)
        data = {
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category.id
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    
def get_categories(request):
    categories = Category.objects.all()
    data = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(data, safe=False)

def get_id_category(request, id):
    try:
        c = Category.objects.get(id = id)
        data = {'id': c.id, 'name': c.name}
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status = 404)
    
def get_category_products(request, id):
    cat_products = Product.objects.filter(category_id = id)
    data = []
    for p in cat_products:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category.id
        })

    return JsonResponse(data, safe=False)

def get_categories_stat(request):
    categories = Category.objects.all()
    data = []
    for c in categories:
        numer = 0
        denom = 0
        cat_products = Product.objects.filter(category_id = c.id)
        for p in cat_products:
            numer += p.price * p.count
            denom += p.count
        avg_price = numer / denom if denom != 0 else 0
        data.append({
            'id': c.id,
            'name': c.name,
            'avg_price': avg_price
        })
    return JsonResponse(data, safe=False)
        