FROM node
LABEL org.label-schema.version=v1.1
ARG NODE_USER=node_user
ARG SRC_DIR=/home/$NODE_USER/app
ENV NODE_ENV="production"
ENV PORT=3000
RUN useradd -ms /bin/bash $NODE_USER
USER $NODE_USER
RUN mkdir -p $SRC_DIR
WORKDIR $SRC_DIR
COPY ./package.json ./
RUN yarn
COPY . .
EXPOSE $PORT
CMD ["yarn", "run", "start"]
