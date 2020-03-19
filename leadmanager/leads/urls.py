from rest_framework.routers import DefaultRouter
from .api import LeadViewSet

router = DefaultRouter()
router.register(r'api/leads', LeadViewSet, basename='leads')

urlpatterns = router.urls
