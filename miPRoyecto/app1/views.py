from django.shortcuts import render
from django.http import HttpResponse
from xhtml2pdf import pisa
from django.template.loader import get_template
from django.core.mail import send_mail
from .models import Language,Framework,Movie,Character

def pagina_principal(request):
    languages=Language.objects.all()
    frameworks=Framework.objects.all()
    movies=Movie.objects.all()
    Characters=Character.objects.all()
    context={
        "languages":languages,
        "frameworks":frameworks,
        "movies":movies,
        "characters":Characters
    }
    return render(request,"index.html",context)

def render_pdf_view(request):
    context = {
        "content": "",
    }
    template_path = 'index.html'
    response = HttpResponse(content_type="application/pdf")
    response["Content-Disposition"] = "attachment; filename='archivo.pdf'"
    template = get_template(template_path)
    html = template.render(context)
    pisa_status = pisa.CreatePDF(html, dest=response, encoding="utf-8")
    if pisa_status.err:
        return HttpResponse("Hubo errores al generar el PDF: %s" % html)
    return response

def enviar_email(request):
    subject="asunto"
    message="cuerpo"
    email_from="tu-email@gmail.com"
    recipient_list=["destinatario@example.com"]
    send_mail(subject,message,email_from,recipient_list)
    return HttpResponse("Correo enviado")