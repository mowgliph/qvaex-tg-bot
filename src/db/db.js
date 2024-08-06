import cartoonImg from '../images/cartoon.png';
import doodlesImg from '../images/doodles.jpg';
import elephantImg from '../images/elephant.jpg';
import kittenImg from '../images/kitten.png';
import manImg from '../images/man.jpg';

export function getData() {
    return[
        { title: 'Cartoon', price: 0.99, image: cartoonImg },
        { title: 'Doodles', price: 0.99, image: doodlesImg },
        { title: 'Elephant', price: 0.99, image: elephantImg },
        { title: 'Kitten', price: 0.99, image: kittenImg },
        { title: 'A Man', price: 0.99, image: manImg },
    ];
}