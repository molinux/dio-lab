#!/bin/bash

#
# Created by Molinux <molinuxbr@gmail.com>
#
# https://github.com/molinux

# TODO:
# - Criar um menu ou parametros (--rollback) para o usuario escolher a opção)
# - Melhorar mensagens de interação com o usuario
# - Criar descrição sobre o que o script faz

# Rollback
rmdir /{publico,adm,ven,sec}

for i in GRP_ADM GRP_VEN GRP_SEC
  do
    groupdel $i
  done

for user in carlos maria joao debora sebastiana roberto josefina amanda rogerio
  do
    userdel -r $user
  done

# Fim do Rollback

echo "Criando os diretórios..."
mkdir /{publico,adm,ven,sec}

echo "Criando os grupos de usuários..."
for i in GRP_ADM GRP_VEN GRP_SEC
  do
    groupadd $i
  done


echo "Criando os usuarios e adicionando aos respectivos grupos..."
SHELL=/bin/bash
PASSWD=$(openssl passwd -crypt Senha123)
PARAMS="-m -s $SHELL -p $PASSWD"
for user in carlos maria joao
  do
    useradd $user $PARAMS -G GRP_ADM
  done

#unset user

for user in debora sebastiana roberto
  do
    useradd $user $PARAMS -G GRP_VEN
  done

#unset user

for user in josefina amanda rogerio
  do
    useradd $user $PARAMS -G GRP_SEC
  done

echo "Especificando permissões dos diretórios..."

chown root:GRP_ADM /adm
chown root:GRP_VEN /ven
chown root:GRP_SEC /sec

echo "Definindo as permissões..."

chmod 770 /{adm,ven,sec}
chmod 777 /publico

echo "Fim..."

