'use strict'

class PhoneCatalog extends Component{
   constructor ({element, phones=[], onSelectedPhone=()=>{}}){
     super({element});
      
       this._phones=phones;
       this._onSelectedPhone=onSelectedPhone;
       this._render();
      
       this.on('click','[data-element="details-link"]',(event)=>{
         let phoneElement=event.target.closest('[data-element="phone"]');
         this._onSelectedPhone(phoneElement.dataset.phoneId);
       });
          
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
               <a class="btn btn-success">
                 Add
               </a>
             </div>
 
             <a href="#!/phones/${phones.name}" data-element="details-link" >${phones.name}</a>
             <p>${phones.snippet}</p>
           </li>
           `).join('')}
         </ul>`;
   } }