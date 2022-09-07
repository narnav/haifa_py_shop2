from .models import Pita
from django.contrib import admin

# Register your models here.

from .models import Note
admin.site.register(Note)


admin.site.register(Pita)
