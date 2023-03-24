# GCC Sprint 02

A entrega da primeira sprint foi incrível, parabéns!! 🚀 Agora que temos uma página onde os usuários podem encontrar o Pet perfeito para eles, precisamos criar um local onde ele consiga ver todos os detalhes e requisitos para poder seguir com a adoção.

## Prazos

📆 Data de início -> 21/03/2023
📆 Data de término -> 28/03/2023

## História

Seu papel nessa sprint é desenvolver uma página de detalhes seguindo todos os padrões de projeto utilizados na sprint 1, como estilização e boas práticas. Ao clicar em um pet na tela de listagem, o usuário deverá ser levado para uma tela de PetDetails, onde será possível visualizar galeria de fotos, contatos da ORG, requisitos de adoção e etc.

Para essa sprint alguns pontos são bem importantes e vamos pontua-los logo abaixo.

  1 - Temos uma galeria de fotos para o pet, então precisamos criar um componente que possa exibir uma imagem selecionada pelo usuário. Para buscar essas imagens deverá consumir uma rota que está documentada na API.

  2 - Assim como a galeria, precisamos listar todos os requisitos para que o usuário possa adotar aquele pet, a rota para isso está documentada na API.

  3 - Para facilitar que o usuário encontre a localização da ORG, vamos precisar colocar um mapa nessa tela, temos uma rota na API que retorna as coordenadas da ORG por cep (isso também totalmente documentado). Indicamos a biblioteca React Leaflet para a renderização do mapa mas caso tenha outra de sua preferência fique a vontade para utilizar.

  4 - Por último e não menos importante, precisamos que o usuário consiga se comunicar com a ORG, para isso precisamos de dois links que levem o usuário direto para o Whatsapp da ORG. Dentro do layout você conseguirá visualizar qual locais são necessárias essas ações.

## Links

Link do Figma (#SPRINT 2): https://www.figma.com/community/file/1220006040435238030

Documentação de rotas da api: https://www.notion.so/API-FindAFriend-c9275383751f463b8a43137eed9087e8?pvs=4#b2e499938a75409aa4d89caf6ff3d1e3 
