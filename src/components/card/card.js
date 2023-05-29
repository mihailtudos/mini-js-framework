import { DivComponent } from "../../common/div-component";
import './card.css';

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.cardState = cardState;
        this.appState = appState;
    }

    #addToFavorites() {
        this.appState.favorites.push(this.cardState);
    }

    #deleteFromFavorites() {
        this.appState.favorites = this.appState.favorites.filter(b => b.key !== this.cardState.key);
    }

    render() {
        this.el.classList.add('card');
        const isInFavorites = this.appState.favorites.find(b => b.key == this.cardState.key);

        this.el.innerHTML = `
            <div class="card__image">
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="${this.cardState.title}"/>
            </div>
            <div class="card__info">
                <div class="card__tag">
                    ${this.cardState.subject ? this.cardState.subject[0] : 'Not provided'}
                </div>
                <div class="card__name">
                    ${this.cardState.title}
                </div>
                <div class="card__author">
                    ${this.cardState.author ? this.cardState.author[0] : 'Not provided'}
                </div>
                <div class="card__footer">
                    <button class="button__add ${isInFavorites ? 'button__active' : ''}">
                        ${isInFavorites 
                            ? '<img src="/static/favorite.svg" alt="Add book icon" />' 
                            : '<img src="/static/favorite-white.svg" alt="Add book icon" />'}
                    </button>
                </div>
            </div>
        `;
         
        if (isInFavorites) {
            this.el.querySelector('.button__add').addEventListener('click',  this.#deleteFromFavorites.bind(this));
        } else {
            this.el.querySelector('.button__add').addEventListener('click',  this.#addToFavorites.bind(this));
        }
        return this.el;
    }
}