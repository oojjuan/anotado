# Projeto CRUD Fullstack
Esse projeto foi feito com o intuito de aprender coisas novas e também reforçar o que já aprendi, baseado num problema real que usei como base para a ideia da proposta.<br><br>

## O que é o "Anotado"?
O **Anotado** é um site onde o usuário irá registrar e guardar as receitas que ele achar interessante, podendo olhar elas quando quiser e de forma simples. <br><br>

O usuário poderá criar sua receita na aba de **"Criar"** e salva-lá no sistema, onde será exibida na página **"Receitas"**, junto das outras diversas receitas que o usuário salvou ao longo do tempo. Por fim, ele também pode alterar as **informações das receitas**, **favoritar a receita** e até **deletar** caso queira. 

## Como rodar
1. Copie o repositório localmente
2. Instale as dependências necessárias
3. Abra dois terminais: um no diretório **/frontend** e outro no **/backend**
4. No */frontend*, digite **npm start**
5. No */backend*, digite **nodemon start**
6. Abra na url *http://localhost:3000/inicio* e pronto!

### React-hook-form
De todas as dependências que utilizei, como express, nodemon, axios e react-router-dom, a **react-hook-form** foi o destaque deste projeto para mim.<br><br>

Quando pensei em criar o projeto, não sabia da existência do hook-form, até chegar na parte de criar a página onde o usuário iria criar as próprias receitas. Com base numa sugestão de uma IA, descobri esta biblioteca e decidi usa-la no projeto.<br>No começo fiquei confuso em entender o funcionamento dela, ainda mais no meu contexto, mas depois de quebrar a cabeça consegui criar um formulário que possibilitou a criação de novas receitas e também a edição delas. Enfim, fiquei orgulhoso e contente com o que eu pude criar com ela.