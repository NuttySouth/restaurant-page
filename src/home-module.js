import Sombrero from './sombrero-camba-previa.jpg';

export default function createHomeModule(){

    const mainContainer = document.createElement('div');
    const topContainer = document.createElement('div');
    const midContainer = document.createElement('div');
    const bottomContainer = document.createElement('div');
    const title = document.createElement('h1');
    const sombrero = new Image();
    const description = document.createElement('p');
    const address = document.createElement('p');

    topContainer.classList.add('content');
    midContainer.classList.add('content');
    bottomContainer.classList.add('content');

    title.textContent = 'Restaurante Sombrero de Sao';
    description.textContent = "Comida tradicional cruceña hecha con los mejores ingredientes y siguiendo todas las tradiciones de antaño";
    address.textContent = "Ubicados en el parque Urbano segundo anillo, avenida tres pasos al frente";
    sombrero.src = Sombrero;

    topContainer.appendChild(title);
    topContainer.appendChild(sombrero);
    midContainer.appendChild(description);
    bottomContainer.appendChild(address);

    mainContainer.appendChild(topContainer);
    mainContainer.appendChild(midContainer);
    mainContainer.appendChild(bottomContainer);

    return mainContainer;

}