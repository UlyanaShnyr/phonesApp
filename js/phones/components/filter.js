'use strict'

class Filter extends Component{
    constructor({element}){
        super({element});
       
        this._render();
        this._getCurentData();

        this._queryFild=this._element.querySelector('[data-element="query-field"]');
        this._orderField=this._element.querySelector('[data-element="order-field"]');

        this.on('change', '[data-element="order-field"]', ()=>{
          this.emit('order-changed');
         console.log( this._orderField.value);
        });
        this.on('input', '[data-element="query-field"]', _.debounce(
          ()=>{
            this.emit('query-changed');
          console.log( this._queryFild.value);
        },300));

      
    };
  
    _getCurentData(){      
      return{
        query: this._queryFild,
        sortBy: this._orderField
      };
     
    }

    _render(){
        this._element.innerHTML=`
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


