FROM node:20-alpine

# Install system dependencies
RUN apk add --no-cache \
    iputils \
    curl \
    wget \
    git \
    zsh \
    vim \
    tree \
    npm

# Install npm
RUN npm install -g npm

# Install oh-my-zsh and set up as default shell
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

WORKDIR /app/code

CMD ["tail", "-f", "/dev/null"]