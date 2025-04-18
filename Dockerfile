FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY tic.html /usr/share/nginx/html/index.html
COPY tac.css toe.js gameover.mp3 ting.mp3 /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
