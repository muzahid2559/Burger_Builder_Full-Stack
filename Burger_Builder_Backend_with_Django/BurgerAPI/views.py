from BurgerAPI.models import UserProfile, Order  # Model
from .serializers import UserProfileSerializer, OrderSerializer # serializer based on BurgerAPI model


# building features
from rest_framework import parsers, viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class UserProfileViewset(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [
        IsAuthenticated,
    ]
    
    # ?id=
    def get_queryset(self):
        queryset = Order.objects.all()
        id = self.request.query_params.get('id', None)
        if id is not None:
            queryset = queryset.filter(user__id=id)
        return queryset
