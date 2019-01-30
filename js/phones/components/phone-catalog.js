'use strict'

class PhoneCatalog{
   constructor ({element, phones=[]}){
       this._element=element;
       this._phones=phones;
       this._render();
      
    };
  
   _render(){
this._element.innerHTML=`
  <ul class="phones">
      ${ this._phones.map(phones=>`   

           <li class="thumbnail">
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