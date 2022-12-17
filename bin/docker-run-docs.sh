#!/bin/bash

FILE=config.env

# Entra na pasta bin
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

# Carrega configurações
if [ -f "$FILE" ]; then
    export $(grep -v '^#' $FILE | xargs -d '\n')
else
  echo "Arquivo $FILE inexistente."
  exit 1
fi

# Inicia a aplicação
echo "Builda a imagem"
docker build -t opencvflow_docs_prod .

echo "Para e remove o container atual se existir"
docker stop opencvflow_docs_prod || true
docker container rm opencvflow_docs_prod || true

echo "Roda o container"
    docker run \
        -p $PORT:9000 \
        -v public:/var/www/docs/public:ro \
        --name opencvflow_docs_prod \
        -d opencvflow_docs_prod