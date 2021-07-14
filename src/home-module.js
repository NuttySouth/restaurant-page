import Sombrero from './sombrero.png';

export default function createHomeModule(){

    const navBar = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
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

    home.textContent = 'Home';
    home.classList.add('active');
    menu.textContent = 'Menu';
    contact.textContent = 'Contact'
    home.href = '#home';
    menu.href = '#menu';
    contact.href = '#contact';
    title.textContent = 'Restaurante Sombrero de Sao';
    description.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    address.textContent = "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
    sombrero.src = Sombrero;

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    topContainer.appendChild(title);
    topContainer.appendChild(sombrero);
    midContainer.appendChild(description);
    bottomContainer.appendChild(address);

    mainContainer.appendChild(navBar);
    mainContainer.appendChild(topContainer);
    mainContainer.appendChild(midContainer);
    mainContainer.appendChild(bottomContainer);


    return mainContainer;

}