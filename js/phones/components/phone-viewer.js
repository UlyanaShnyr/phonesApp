'use strict'

class PhoneViewer extends Component{
   constructor ({element, phonedetails={}, onBack}){
     super({element});          
       this._phonedetails=phonedetails;     

       this.on('click','[data-element="back-button"]',(event)=>{ 
        onBack();
       })
       this.on('click', '[data-element="smallImg"]',(event)=>{
        const smallImg=event.target;
        const largeImg=element.querySelector('[data-element="largeImg"]');
         largeImg.src=smallImg.src;
 
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
<img data-element="largeImg" class="phone" src="${phonedetails.images[0]}">

<button data-element="back-button" >Back</button>
<button>Add to basket</button>


<h1>"${phonedetails.name}"</h1>

<p>"${phonedetails.description}"</p>

<ul class="phone-thumbs">
${phonedetails.images.map(imageUrl=>`
<li >
    <img data-element="smallImg" src="${imageUrl}">
  </li>
`).join(' ')}
  
 
</ul>
</div>
`
   }}
