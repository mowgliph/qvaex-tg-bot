import cartoonImg from '../images/cartoon.png';
import doodlesImg from '../images/doodles.jpg';
import elephantImg from '../images/elephant.jpg';
import kittenImg from '../images/kitten.png';
import manImg from '../images/man.jpg';

export function getData() {
    return[
        { title: 'Cartoon', price: 4.99, Image: cartoonImg },
        { title: 'Doodles', price: 4.99, Image: doodlesImg },
        { title: 'Elephant', price: 4.99, Image: elephantImg },
        { title: 'Kitten', price: 4.99, Image: kittenImg },
        { title: 'a Man', price: 4.99, Image: manImg },
    ]
}