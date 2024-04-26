from django.http import JsonResponse
from django.utils import timezone

def index(request):
    current_time = timezone.localtime().strftime("%-I:%S %p")
    current_date = timezone.localtime().strftime("%A %m %-Y")

    data = {
        'time': current_time,
        'date': current_date,
    }

    return JsonResponse(data)