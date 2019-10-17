#### Stage 1: Build the react application
FROM node:alpine as build

WORKDIR /app/dir

COPY package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

#### Stage 2: Serve the React application from Nginx 
FROM nginx:alpine

COPY --from=build /app/dir/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx","-g","daemon off;"]

