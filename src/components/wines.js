const winesImages = [
    require('../images/wines/1.jpg'),
    require('../images/wines/2.jpg'),
    require('../images/wines/3.jpg'),
    require('../images/wines/4.jpg'),
]

const tasteImages = [
    require('../images/taste/seafood.svg'), //0
    require('../images/taste/beef.svg'), // 1
    require('../images/taste/elk.svg'), //2
    require('../images/taste/fish.svg'), // 3 
    require('../images/taste/drink.svg'), // 4
    require('../images/taste/bird.svg'), // 5
    require('../images/taste/vegetable.svg'), // 6
]

const typeImages = [
    require('../images/type/red.svg'), //0
    require('../images/type/white.svg'), //0
    require('../images/type/rose.svg'), //0
]

export const postData = [
    {
        id: 1,
        slug: "cianti-colli-senesi",
        img: winesImages[0],
        grape: "Sangiovese",
        name: "Chianti Colli Senesi",
        producer: "Fontaleoni",
        country: "Italien",
        number: "309434",
        taste: [tasteImages[0], tasteImages[1]],
        year: "2018",
        type: [typeImages[0]],
        price: "599"
    },
    {
        id: 2,
        slug: "barbera-d-asti-la-gena",
        img: winesImages[1],
        grape: "Barbera",
        producer: "La Gironda",
        name: "Barbera d´Asti La Gena",
        country: "Italien",
        number: "569433",
        taste: [tasteImages[2], tasteImages[3], tasteImages[4], tasteImages[5]],
        year: "2015",
        type: [typeImages[0]],
        price: "299"
    },
    {
        id: 3,
        slug: "cianti-colli-senesi",
        img: winesImages[2],
        grape: "Vernacchia",
        name: "Vernaccia Di san Gim",
        producer: "Fontaleoni",
        country: "Italien",
        number: "309434",
        taste: [tasteImages[3], tasteImages[0], tasteImages[5], tasteImages[6]],
        year: "2018",
        type: [typeImages[1]],
        price: "599"
    },
    {
        id: 4,
        slug: "cianti-colli-senesi",
        img: winesImages[3],
        grape: "Grasparossa",
        producer: "Zanasi",
        name: "Intrigante Frizzante",
        country: "Italien",
        number: "569433",
        taste: [tasteImages[4]],
        year: "2016",
        type: [typeImages[2]],
        price: "299"
    },

];
