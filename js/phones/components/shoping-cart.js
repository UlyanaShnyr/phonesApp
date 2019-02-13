'use strict'
class ShopingCart extends Component{
    constructor({element}){
        super({element});  
        this._basketQuantity={
          
         }      
        this._render();
        }
   
        add(itemId){
            if(!this._basketQuantity.hasOwnProperty(itemId)){
                this._basketQuantity[itemId]=0;
            }
            this._basketQuantity[itemId]++;
            this._render();
        }

        remove(itemId){
            if(!this._basketQuantity.hasOwnProperty(itemId)){
                return   ;            
            }
            this._basketQuantity[itemId]--;
            if(!this._basketQuantity[itemId]==0){
                delete this._basketQuantity[itemId]    ;       
            }
            this._render();
        }
    _render(){
        this._element.innerHTML=`
        <p>Shopping Cart</p>
        <ul>
         ${Object.entries(this._basketQuantity).map(([itemId, number])=>`
         <li>${itemId} (${number})</li>
         `).join(' ')}
        </ul>
        `;
        }
}


