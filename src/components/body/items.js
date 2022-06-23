import coponGin from './images/copongin.jpg';
import botella from './images/botella.jpg';

export const items = {
    copas:{
        id:'1',
        stock:100,
        precio:500,
        nombre: 'Copón Gin Artemis',
        imagen: coponGin,
    },
    botellas:{
        id:'2',
        stock:600,
        precio:1000,
        nombre: 'Artemis 500mL',
        imagen: botella,
    },
    caja:{
        id:'3',
        stock:10,
        precio:7200,
        nombre: 'Caja x9 Artemis 500mL',
        imagen: botella
    },
}