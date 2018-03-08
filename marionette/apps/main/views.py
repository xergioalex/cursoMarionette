from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import EventSerializer, InscritionSerializer, FavoritoSerializer
from .models import Event, Inscription, Favorito
from rest_framework.decorators import link, action
from rest_framework.permissions import IsAuthenticated, IsAdminUser

class EventViewSet(viewsets.ModelViewSet):

	queryset = Event.objects.all()
	serializer_class = EventSerializer

	@link(permission_classes=[IsAuthenticated])
	def inscritos(self, request, pk=None):
		"""
		localhost:8000/api/cursos/08/capitulos_usuario/
		"""
		inscritos = Inscription.objects.filter(pk = pk)
		inscritosSer = InscritionSerializer(inscritos, many=True, context={'request': request})
		return Response(inscritosSer.data)


class IndexView(TemplateView):

	template_name = 'index.html'



class FavoritoViewSet(viewsets.ModelViewSet):

	queryset = Favorito.objects.all()
	serializer_class = FavoritoSerializer
