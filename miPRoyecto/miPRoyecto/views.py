
# from django.http import HttpResponse

# from django.template.loader import get_template
# from django.views.generic import View

# from miPRoyecto.app1.models import Language

# from .utils import render_to_pdf 

# class GeneratePDF(View):
#     def get(self, request, *args, **kwargs):
#         template = get_template('invoice.html')
#         languages = Language.objects.all()

#         context = {
#             "languages1": languages,
#             # "customer_name": "John Cooper",
#             # "amout"
#         }
#         html = template.render(context)
#         return HttpResponse(html)
