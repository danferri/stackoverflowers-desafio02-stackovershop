<h1 align="center">
    StackOverShop 🌱
</h1>

![TYPESCRIPT](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NODEJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)


<p align="center">
 <a href="#description">About</a> • 
  <a href="#download">Download</a> •
 <a href="#owners">Owners</a> •
</p>

<h2 id="description">📌 About</h2>

This is a plant store project developed during our fullstack development scholarship program at Compass Uol. The application was developed using **Node, React and Typescript**.

## 💻 Requirements

Before you begin, you must have Node.js and NPM installed on your machine.


<h2 id="download">🚀 Download</h2>
First, you must clone the project on your machine, to do this you can paste the following command in your terminal

```bash
git clone https://github.com/danferri/stackoverflowers-desafio02-stackovershop.git

```

To install the backend dependencies, start and run the database, run the following commands:

```bash
cd stackovershop-api

npm install

npx prisma generate

npm run dev
```

Finally, to run the project just run the following:

```bash
cd stackovershop-web

npm install

npm run dev
```

## API Infos

The API will be accessible at http://localhost:5000

### BODY
```bash
{
    "id": 1,
    "name": "Cactus",
    "subtitle": "teste",
    "label": ["indoor","cactus"],
    "price": "139.99",
    "isInSale": true,
    "discountPercentage": 20,
    "features": "test",
    "description": "test",
    "imgUrl": "test.png"
}

```

### ENDPOINTS

```bash
GET

/plantsList - To retrieve all plants from the database.

/plants/:id - To retrieve a specific plant from the database.

/plantTypes - To retrieve all plant types from the database.

```

```bash
POST

/plants - To create a new plant in the database.

/plants - To create a new plant type in the database.

```

<h2 id="owners">Owners</h2>

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://github.com/cauewcampos.png" width="60px;" /><br />
        <sub><a href="https://github.com/cauewcampos">Cauê Watanabe</a></sub>
      </td>
      <td align="center">
        <img src="https://github.com/danferri.png" width="60px;" /><br />
        <sub><a href="https://github.com/danferri">Daniel Ferri</a></sub>
      </td>
      <td align="center">
        <img src="https://github.com/Pnonato.png" width="60px;" /><br />
        <sub><a href="https://github.com/Pnonato">Pedro Nonato</a></sub>
      </td>
      <td align="center">
        <img src="https://github.com/Arthurs08.png" width="60px;" /><br />
        <sub><a href="https://github.com/Arthurs08">Arthur Sbruzzi</a></sub>
      </td>
      <td align="center">
        <img src="https://github.com/Amanda-node-js.png" width="60px;" /><br />
        <sub><a href="https://github.com/Amanda-node-js">Amanda Amabili</a></sub>
      </td>
    </tr>
  </table>
</div>



## 📝 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.