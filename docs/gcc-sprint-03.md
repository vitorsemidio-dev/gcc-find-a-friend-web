# GCC Sprint 03

Wow, mais uma entrega incrível. Tá mandando bem demais nesse projeto, hein ?! 🔥🤯

Agora que já temos todos os recursos para que o Adotante encontre o Pet perfeito para ser seu melhor amigo, precisamos iniciar os recursos para que uma ORG possa acessar nosso sistema também.

## Prazos

🗓️ Data de início -> 28/03/2023
🗓️ Data da entrega -> 03/04/2023

## História

Seu papel nessa sprint será desenvolver a páginas onde a ORG irá se cadastrar e realizar seu login na plataforma.

As páginas já foram pré-criadas por nosso Tech Lead, agora você precisa integrar essa páginas com nossa API, que nosso dev Back-end vem desenvolvendo e documentando.

Na página de Login, seu papel é criar uma forma de recuperar o os dados de e-mail e senha digitados pelo usuário e criar uma sessão. A requisição de autenticação retorna um token JWT que é utilizado para validar as requisições autenticadas na API, você precisa utilizar esse token para validar se o usuário está logado na aplicação ou não.

As telas internas da aplicação só podem ser acessadas se a ORG possuir um token JWT válido, caso a ORG já estiver logada, ela não poderá acessar as telas de Login e Registro.

Lembrando que todos os campos da tela de Login são obrigatórios, então é necessária uma validação para que esses dados não sejam enviados vazios para a API.

Na página de Registro de uma ORG você precisará, assim como na página de Login, capturar os dados preenchidos pelo usuário (lembrando que todos os campos são obrigatórios).

Uma observação bem importante é que no layout do Figma temos um campo de CEP que não foi desenvolvido e um papel importante nessa sprint é criar esse Input com toda sua lógica.

Ao digitar o CEP e sair do Input deverá ser realizada uma chamada que irá buscar o endereço e as coordenadas da ORG, para preencher o campo Endereço e renderizar o mapa conforme o layout (algo semelhante foi feito na página de detalhes do Pet).

## Links

- [Link do Figma (#SPRINT 3)](https://www.figma.com/community/file/1220006040435238030)

- [Link da Documentação API](https://efficient-sloth-d85.notion.site/API-FindAFriend-c9275383751f463b8a43137eed9087e8)

- [Link do Driver](https://drive.google.com/drive/folders/1uOqN5R8KVbCx8mLQjgXHm1rk1KFdfw1V)
