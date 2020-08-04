// const winesImages = [
//     require('./src/images/wines/1.jpg'),
//     require('./src/images/wines/2.jpg'),
//     require('./src/images/wines/3.jpg'),
// ]
const postData = [
    {
        id: 1,
        img: 'winesImages[0]',
        grape: "Sangiovese",
        name: "Chianti Colli Senespppp",
        producer: "Fontaleoni",
        country: "Italien",
        number: "309434",

        year: "2018",
        type: "../../type/red.svg",
        price: "599"
    },
    {
        id: 2,
        img: 'winesImages[1]',
        grape: "Barbera",
        producer: "La Gironda",
        name: "Barbera d´Asti La Gena",
        country: "Italien",
        number: "569433",

        year: "2015",
        type: "../../type/red.svg",
        price: "299"
    },
    {
        id: 3,
        img: 'winesImages[2]',
        grape: "Vernacchia",
        name: "Vernaccia Di san Gim",
        producer: "Fontaleoni",
        country: "Italien",
        number: "309434",

        year: "2018",
        type: "../../type/white.svg",
        price: "599"
    },
    {
        id: 4,
        img: "../../wines/4.jpg",
        grape: "Grasparossa",
        producer: "Zanasi",
        name: "Intrigante Frizzante",
        country: "Italien",
        number: "569433",

        year: "2016",
        type: "../../type/rose.svg",
        price: "299"
    },

];

module.exports = postData