from rest_framework.serializers import ModelSerializer
from base.models import Note,Pita,Product,Category


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


class PitaSerializer(ModelSerializer):
    class Meta:
        model = Pita
        fields = '__all__'

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
