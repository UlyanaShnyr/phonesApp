'use strict'
class ShopingCart extends Component{
    constructor({element}){
        super({element});  
        this._basketQuantity={
          
         }      
        this._render();
        this.on('click','[data-element="minus-button"]',(event)=>{
            let itemElement=event.target.closest('[data-element="item"]'); 
            this.remove(itemElement.dataset.itemId);
          
           });
           this.on('click','[data-element="plus-button"]',(event)=>{
            let itemElement=event.target.closest('[data-element="item"]'); 
            this.add(itemElement.dataset.itemId);
          
           });   

           

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
            if(this._basketQuantity[itemId]==0){
                delete this._basketQuantity[itemId]    ;       
            }
            this._render();
        }
    _render(){
        let itemsProducts=Object.entries(this._basketQuantity);
        this._element.innerHTML=`
        <h4>Shopping Cart</h4>
       ${itemsProducts.length > 0 ? `<p>
       <ul>
        ${Object.entries(this._basketQuantity).map(([itemId, number])=>`
       
        <li data-element="item" data-item-id=${itemId}>${itemId} <br>
        <button data-element="plus-button">+</button>
        (${number})
        <button data-element="minus-button">-</button>
        </li>
        `).join(' ')}
       
       </ul>
       </p>`:`<p>Basket is empty</p>`}
        
       
       
        `; 
        }
       
}


