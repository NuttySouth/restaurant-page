import './style.css';
import createHomeModule from "./home-module";

const homeModule = document.querySelector("#content");
homeModule.appendChild(createHomeModule());
