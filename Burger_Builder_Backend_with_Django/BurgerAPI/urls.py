from django.urls import path
from BurgerAPI import views
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


router = DefaultRouter()
router.register(r'user', views.UserProfileViewset)
router.register(r'order', views.OrderViewSet, basename='order')



urlpatterns = [    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    
] + router.urls