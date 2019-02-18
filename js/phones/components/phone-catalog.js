'use strict'

class PhoneCatalog extends Component{
   constructor ({element,  onSelectedPhone=()=>{}, add}){
     super({element});
      
       this._phones=[];
       this._onSelectedPhone=onSelectedPhone;
       this._render();
      
       this.on('click','[data-element="details-link"]',(event)=>{
         let phoneElement=event.target.closest('[data-element="phone"]');
         this._onSelectedPhone(phoneElement.dataset.phoneId);
       });

       this.on('click','[data-element="add-button"]',(event)=>{ 
        let phoneElement=event.target.closest('[data-element="phone"]');
         add(phoneElement.dataset.phoneId);
       })
          
    }
    
   show(phones){
     this._phones=phones;
     super.show();
     this._render();
   }
   _render(){
this._element.innerHTML=`
  <ul class="phones">
      ${ this._phones.map(phones=>`   

           <li class="thumbnail" data-element="phone" data-phone-id="${phones.id}">
             <a href="#!/phones/${phones.id}" data-element="details-link" class="thumb">
               <img alt="${phones.name}" src="${phones.imageUrl}">
             </a>
 
             <div class="phones__btn-buy-wrapper">
             <button data-element="add-button">
             Add
             </button>
            
             </div>
 
             <a href="#!/phones/${phones.name}" data-element="details-link" >${phones.name}</a>
             <p>${phones.snippet}</p>
           </li>
           `).join('')}
         </ul>`;
   } }