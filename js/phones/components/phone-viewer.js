'use strict'

class PhoneViewer extends Component{
   constructor ({element, phonedetails={}, onBack}){
     super({element});          
       this._phonedetails=phonedetails;
     

       this._element.addEventListener('click',(event)=>{
        
        const btnBack= event.target.closest('[data-element="back-button"]');
        if(!btnBack){return;}
        onBack();
       })
    };
    
    show(PhoneDetails){
        this._PhoneDetails=PhoneDetails;
       super.show();
        this._render();
       }
       
  
   _render(){
    const phonedetails=this._phonedetails;
this._element.innerHTML=`

<div data-phone-id="${phonedetails.id}">
<img class="phone" src="${phonedetails.images[0]}">

<button data-element="back-button" >Back</button>
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
