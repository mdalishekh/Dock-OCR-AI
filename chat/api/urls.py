from django.urls import path
from .views import upload_file, get_answer, test_api, delete_all_files, pdf_ocr_api, image_ocr_api

# Api urls
urlpatterns = [
    path('test/', test_api, name='test-api'),
    path('upload/', upload_file, name='upload-file'),  
    path('get-answer/', get_answer, name='get-answer'),
    path('delete-files/', delete_all_files, name='delete-files'),
    path('pdf-to-text/', pdf_ocr_api, name='pdf-to-text'),
    path('image-to-text/', image_ocr_api, name='image-to-text')
]
