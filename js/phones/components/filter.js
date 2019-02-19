class Filter extends Component {
  constructor({ element }) {
    super({ element });

    this._render();

    this._queryField = this._element.querySelector('[data-element="query-field"]');
    this._orderField = this._element.querySelector('[data-element="order-field"]');

    this.on('change', '[data-element="order-field"]', () => {
      this.emit('order-changed');
    });

    this.on('input', '[data-element="query-field"',  _.debounce(
      ()=>{
        this.emit('query-changed');     
    },300));
  }

  getCurrentData() {
    return {
      query: this._queryField.value,
      sortBy: this._orderField.value
    };
  }

  _render() {
    this._element.innerHTML = `
      <p>
        Search:
        <input data-element="query-field">
      </p>

      <p>
        Sort by:
        <select data-element="order-field">
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    `;
  }
}
