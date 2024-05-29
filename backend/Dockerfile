FROM node:latest

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max_old_space_size=2048

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "run", "dev"]