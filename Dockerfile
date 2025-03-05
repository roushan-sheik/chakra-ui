FROM --platform=linux/amd64 597088013768.dkr.ecr.us-west-2.amazonaws.com/node:22-slim
LABEL authors="roushan"
ENV RUST_BACKTRACE=1
# Copy the rest of the application code into the container
COPY . .

# Install the required packages
RUN npm install
RUN flavor=dev npm run build

EXPOSE 80

CMD ["npm", "run", "start:prod"]
