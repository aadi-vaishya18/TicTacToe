# Use Nginx as the base image
FROM nginx:alpine

# Remove default index.html (optional but good practice)
RUN rm -rf /usr/share/nginx/html/*

# Copy your HTML, CSS, JS files into nginx's serving directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
