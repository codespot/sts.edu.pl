FROM node

COPY . /src
WORKDIR /src

RUN npm install

ENV PORT 3000
EXPOSE 3000
CMD ["node", "/src/index.js"]
