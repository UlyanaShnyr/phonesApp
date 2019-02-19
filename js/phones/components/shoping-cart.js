

class ShoppingCart extends Component {
  constructor({ element }) {
    super({ element });

    this._basketQuantity = {};

    this._render();

    this.on('click', '[data-element="minus-button"]', (event) => {
      let itemElement = event.target.closest('[data-element="item"]');
      this.remove(itemElement.dataset.itemId);
    });
    this.on('click', '[data-element="plus-button"]', (event) => {
        let itemElement = event.target.closest('[data-element="item"]');
        this.add(itemElement.dataset.itemId);
      });
  }

  add(itemId) {
    if (!this._basketQuantity.hasOwnProperty(itemId)) {
      this._basketQuantity[itemId] = 0;
    }

    this._basketQuantity[itemId]++;

    this._render();
  }

  remove(itemId) {
    if (!this._basketQuantity.hasOwnProperty(itemId)) {
      return;
    }

    this._basketQuantity[itemId]--;

    if (this._basketQuantity[itemId] === 0) {
      delete this._basketQuantity[itemId];
    }

    this._render();
  }

  _render() {
    let itemIds = Object.keys(this._basketQuantity);

    this._element.innerHTML = `
        <h4>Shopping Cart</h4>
      
      ${ itemIds.length > 0 ? `
        <ul>
          ${itemIds.map(itemId => `
          
            <li data-element="item" data-item-id="${itemId}">
            <button data-element="plus-button">+</button>
              ${itemId} (${this._basketQuantity[itemId]})
              <button data-element="minus-button">-</button>
            </li>
          
          `).join('') }
        </ul>
      ` : `
        <p>No items yet</p>
      ` }
      
    `;
  }
}
