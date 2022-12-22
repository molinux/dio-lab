#!/bin/bash

echo "Criando as imagens..."

docker build -t molinux/projeto-backend:1.0 backend/.
docker build -t molinux/projeto-database:1.0 database/.

echo "Realizando push das imanges"
docker push molinux/projeto-backend:1.0
docker push molinux/projeto-database:1.0

echo "Criando serviços no cluster Kubernetes..."

kubectl apply -f ./services.yml

echo "Criando os deployments..."

kubectl apply -f ./deployment.yml
