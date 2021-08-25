from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name= models.CharField(max_length=200, null=True, blank=True)
    image=models.ImageField(null=True, blank=True)
    brand= models.CharField(max_length=200, null=True, blank=True)
    category= models.CharField(max_length=200, null=True, blank=True)
    description= models.TextField(null=True, blank=True)
    rating= models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReview= models.IntegerField(null=True, blank=True, default=0)
    price= models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    countinStock= models.IntegerField(null=True, blank=True,default=0)
    createdAt= models.DateTimeField(auto_now_add=True)
    _id= models.AutoField(primary_key=True, editable=False)   # override primary key

    def __str__(self):
        return str(self.name)


class Review(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    product=models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    name=models.CharField(max_length=200, null=True, blank=True)
    rating=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    comment=models.TextField(null=True, blank=True)
    createdAT=models.DateTimeField(auto_now_add=True)
    _id=models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    paymentMethod=models.CharField(max_length=200, null=True, blank=True)
    taxPrice=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    TotalPrice=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    IsPaid=models.BooleanField(default=False)
    paidAt=models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered=models.BooleanField(default=False)
    deliveredAt=models.DateTimeField(auto_now_add=False, null=True, blank=True)
    creatAt=models.DateTimeField(auto_now_add=True)
    _id=models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.creatAt)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    Product = models.ForeignKey(Product, on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7,decimal_places=2, null=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)


