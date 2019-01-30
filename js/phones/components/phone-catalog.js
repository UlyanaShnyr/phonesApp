'use strict'

class PhoneCatalog{
   constructor ({element, phones=[], onSelectedPhone=()=>{}}){
       this._element=element;
       this._phones=phones;
       this._onSelectedPhone=onSelectedPhone;
       this._render();
      
      this._element.addEventListener('click',(event)=>{
      let phoneElement=event.target.closest('[data-element="phone"]');
      if(!phoneElement){return;}
      this._onSelectedPhone(phoneElement.dataset.phoneId)
      })
    }
  hide(){
    this._element.hidden=true;
  }
   _render(){
this._element.innerHTML=`
  <ul class="phones">
      ${ this._phones.map(phones=>`   

           <li class="thumbnail" data-element="phone" data-phone-id="${phones.id}">
             <a href="#!/phones/${phones.id}" class="thumb">
               <img alt="${phones.name}" src="${phones.imageUrl}">
             </a>
 
             <div class="phones__btn-buy-wrapper">
               <a class="btn btn-success">
                 Add
               </a>
             </div>
 
             <a href="#!/phones/${phones.name}">${phones.name}</a>
             <p>${phones.snippet}</p>
           </li>
           `).join('')}
         </ul>`;
   } }