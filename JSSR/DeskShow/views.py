from django.shortcuts import render,HttpResponse
from django.shortcuts import HttpResponseRedirect
import time
import hashlib
# Create your views here.

def index(request):
    return render(request,'DeskShow/index.html',locals())