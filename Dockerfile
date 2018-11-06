FROM nginx:1.13-alpine
RUN rm -r /etc/nginx/conf.d
ADD out /www
RUN mkdir -p /etc/nginx/config
ADD nginx.conf /etc/nginx/config
ADD start.sh /
EXPOSE 8000
CMD ["/start.sh"]
