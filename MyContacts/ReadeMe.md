#npm init -y
 -Inicia projeto com nodejs

#npm install express
  -Instala o express

#npx eslint --init
  -Configuração do eslint

#Cria o editorConfig
  -Clica do lado direito na raiz do projeto e gera o editor config
  -trim_trailing_whitespace = true
  -insert_final_newline = true

#npm install nodemon -D
  -Instala o nodemon como dependencia de desenvolvimento

#Package.json
   "scripts": {
    "dev":"nodemon src/index.js"
  },
  -npm run dev pra rodar o servidor
