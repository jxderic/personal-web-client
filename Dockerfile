FROM node
LABEL maintainer "eric4336355@gmail.com"
COPY . .
RUN npm install
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]