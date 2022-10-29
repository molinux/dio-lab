#!/bin/bash

FILE=main.zip

echo "Atualizando o servidor..."
apt update
apt upgrade -y
apt install apache2 -y
apt install unzip wget -y

echo "Baixando e copiando os arquivos da aplicação..."
cd /tmp
if [ $FILE ]; then
  echo
  echo "Arquivo $FILE já foi baixado anteriormente"
  echo
else
  wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip
  unzip main.zip
  cp -R linux-site-dio-main/* /var/www/html/
fi
