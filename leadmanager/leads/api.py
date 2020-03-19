from rest_framework import permissions, viewsets
from leads.models import Lead
from .serializer import LeadSerializer

# Lead Viewset

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer