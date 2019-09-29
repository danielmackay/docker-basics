# Dockerfile

FROM node:latest

WORKDIR /app

COPY . .

ENV PORT=3000

RUN npm install

EXPOSE $PORT

# DM NOTE: Do we really need to do this?  Shouldn't this file already be in the container?
COPY wait-for-it.sh /wait-for-it.sh

RUN chmod +x /wait-for-it.sh

#ENTRYPOINT ["npm", "start"]

#CMD ["npm", "start"];