from django.contrib import admin
from BurgerAPI.models import UserProfile, Profile, Ingredient, CustomerDetail, Order


# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Profile)


admin.site.register(Ingredient)
admin.site.register(CustomerDetail)
admin.site.register(Order)