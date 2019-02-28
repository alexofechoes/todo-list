from .models import Todo
from rest_framework import viewsets
from .serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
