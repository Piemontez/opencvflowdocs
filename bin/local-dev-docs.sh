#!/bin/bash

# Entra na pasta bin
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

source ~/.bashrc

nvm use 18

# Inicia a aplicação
yarn start