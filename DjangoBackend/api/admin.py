from django.contrib import admin
from .models import Performance,Attendance,Teacher,Child,Class,Parent

# Register your models here.

admin.site.register(Child)
admin.site.register(Parent)
admin.site.register(Teacher)
admin.site.register(Attendance)
admin.site.register(Class)
admin.site.register(Performance)