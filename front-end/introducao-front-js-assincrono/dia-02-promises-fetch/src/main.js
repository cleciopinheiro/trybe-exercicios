import './style.css';
import Swal from 'sweetalert2';

const image = document.querySelector('#hero-image');
const answer = document.querySelector('#hero-name');
const button = document.querySelector('#button');

const API = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';

const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
    event.preventDefault();

    const id = randomId();

    fetch(`${API}/${id}.json`)
        .then((heroes) => heroes.json())
        .then((data) => {
            image.src = data.images.md;
            answer.innerHTML = data.name;
        })
        .catch(() => Swal.fire('Herói não encontrado!'));
});
