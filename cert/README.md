Para gerar os certificados siga o passo a passo:

openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048

openssl req -new -key private.key -out csr.csr

openssl x509 -req -in csr.csr -signkey private.key -out certificate.crt
