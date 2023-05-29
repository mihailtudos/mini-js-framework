import { DivComponent } from "../../common/div-component";
import './header.css';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add('header');
        this.el.innerHTML =  `
            <div>
                <img src="/static/logo.svg" alt="Logo"/>
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="/static/search.svg" alt="Search icon"/>
                    Search
                </a>
                <a class="menu__item" href="#favorites">
                    <img src="/static/favorites.svg" alt="Favorites icon"/>
                    Search
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
        `;

        return this.el;
    }
}