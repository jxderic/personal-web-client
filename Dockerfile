FROM node
LABEL maintainer "eric4336355@gmail.com"
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
RUN npm install
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]