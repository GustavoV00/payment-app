# node version to install
FROM node:18-alpine

# Dir directory
RUN mkdir -p /usr/src/payment
RUN mkdir -p /usr/src/paymeny/backend

# Create app directory
WORKDIR /usr/src/payment/backend

# Copy package files into docker
COPY package*.json ./

# For security reasons, let the application run as node user
# USER node

# Install dependencies in docker
RUN npm install

# Copy my files ./ to /usr/src/payment/backend
COPY . .

# Set server to listen in port 8080
EXPOSE 8080

# Run dev setup
CMD ["npm", "run", "dev"]