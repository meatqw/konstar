from django.db import models
from django.contrib import admin

class Message(models.Model):
    '''Message model'''
    username = models.CharField('Имя', max_length=50)
    phone = models.CharField('Телефон', max_length=50)
    message = models.TextField('Сообщение')
    datetime = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'
        
        
class MessageAdmin(admin.ModelAdmin):
    '''Show all fields in admin (Message)'''
    list_display = [field.name for field in Message._meta.fields]