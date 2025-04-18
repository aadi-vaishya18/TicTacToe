# Use a minimal nginx base image
FROM nginx:alpine

# Remove default nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy static files (HTML, CSS, JS, MP3) into nginx's web root
COPY tic.html /usr/share/nginx/html/index.html
COPY tac.css /usr/share/nginx/html/
COPY toe.js /usr/share/nginx/html/
COPY gameover.mp3 /usr/share/nginx/html/
COPY ting.mp3 /usr/share/nginx/html/

# Optional: Make sure all files are readable by nginx
RUN chmod -R 755 /usr/share/nginx/html

# Expose port
EXPOSE 80
