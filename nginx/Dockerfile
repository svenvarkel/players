FROM nginx

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

# Start the application
CMD /wait && exec nginx -g 'daemon off;'
