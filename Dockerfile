# Usa la versión 'alpine' del contenedor de Nginx como base
FROM nginx:alpine

# Elimina la configuración por defecto (opcional, para evitar conflictos)
RUN rm /etc/nginx/conf.d/default.conf

# Copia tu archivo index.html al directorio donde Nginx busca archivos estáticos
COPY index.html /usr/share/nginx/html/

# Expón el puerto 80 (opcional, pero buena práctica)
EXPOSE 80
# Puedes (opcionalmente) copiar un archivo de configuración personalizado, si lo deseas
# COPY mi-config.conf /etc/nginx/conf.d/
