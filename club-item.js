class ClubItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
 
  set club(club) {
    this._club = club;
    this.render();
  }
 
  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }
    .fan-art-club {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }
    .club-info {
      padding: 24px;
    }
    .club-info > h2 {
      font-weight: lighter;
    }
    
    .club-info > p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; /* number of lines to show */
    }
  </style>
    <div class="club-info">
      <h2>${this._club.name}</h2>
      <h2>${this._club.id}</h2>
      <p>${this._club.genus}</p>
      <p>${this._club.family}</p>
      <p>${this._club.order}</p>
      <p>${this._club.nutritions}</p>
      <p>${this._club.carbohydrates}</p>
      <p>${this._club.protein}</p>
      <p>${this._club.fat}</p>
      <p>${this._club.calories}</p>
      <p>${this._club.sugar}</p>

    </div>
    `;
  }
}
 
customElements.define('club-item', ClubItem);