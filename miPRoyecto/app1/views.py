from email.message import EmailMessage
from django.shortcuts import render
from django.http import HttpResponse
from xhtml2pdf import pisa
from django.template.loader import get_template
from django.core.mail import send_mail
from .models import Language,Framework,Movie,Character
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


from django.template.loader import render_to_string
import io
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

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

# def index(request):
#     languages = Language.objects.all()
#     return render(request, 'index.html', {'languages': languages})
def index(request):
    languages = Language.objects.all()
    frameworks = Framework.objects.all()
    return render(request, 'index.html', {'languages': languages, 'frameworks': frameworks})

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
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            recipient_email = data.get('email')
            message = data.get('message', 'No hay mensaje')  

            subject = "asunto"
            email_from = "tucorreo@gmail.com"
            recipient_list = [recipient_email]

            email = EmailMessage(
                subject=subject,
                body=message,
                from_email=email_from,
                to=recipient_list,
            )
            email.encoding = 'utf-8'
            email.send()

            return JsonResponse({"message": "Correo enviado"})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    return JsonResponse({"error": "Método no permitido"}, status=405)


def generate_pdf(request):
    languages = Language.objects.all()
    frameworks = Framework.objects.all()

    buffer = io.BytesIO()
    p = canvas.Canvas(buffer, pagesize=letter)
    width, height = letter

    y = height - 40
    p.setFont("Helvetica", 12)
    p.drawString(30, y, "Languages")
    y -= 20

    for language in languages:
        p.drawString(30, y, language.name)
        y -= 20

    y -= 20
    p.drawString(30, y, "Frameworks")
    y -= 20

    for framework in frameworks:
        p.drawString(30, y, f"{framework.name} (Language ID: {framework.language_id})")
        y -= 20

    p.showPage()
    p.save()

    buffer.seek(0)
    return HttpResponse(buffer, content_type='application/pdf')
