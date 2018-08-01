FROM yarnpkg/node-yarn

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
