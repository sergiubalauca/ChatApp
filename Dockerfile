# we usually create custom images based on existing ones
FROM nginx:1.17.2-alpine
# copy everything from (.) - to (/usr/share/nginx/html)
ADD . /usr/share/nginx/html