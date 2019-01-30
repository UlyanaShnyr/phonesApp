'use strict'

class PhoneViewer{
   constructor ({element, phonedetails={}}){
       this._element=element; 
       this._phonedetails=phonedetails
    };
    
    show(PhoneDetails){
        this._PhoneDetails=PhoneDetails;
        this._element.hidden=false;
        this._render();
       }
  
   _render(){
    const phonedetails=this._phonedetails;
this._element.innerHTML=`

<div data-phone-id="${phonedetails.id}">
<img class="phone" src="${phonedetails.images[0]}">

<button>Back</button>
<button>Add to basket</button>


<h1>"${phonedetails.name}"</h1>

<p>"${phonedetails.description}"</p>

<ul class="phone-thumbs">
  <li>
    <img src="${phonedetails.images[0]}">
  </li>
  <li>
    <img src="${phonedetails.images[1]}">
  </li>
  <li>
    <img src="${phonedetails.images[2]}">
  </li>
  

</ul>
</div>


`
   }}
