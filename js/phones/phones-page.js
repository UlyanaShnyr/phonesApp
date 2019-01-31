'use strict'

class PhonesPage {
   constructor ({element}){
       
       this._element=element;
       this._render();

       this.catalog=new PhoneCatalog({
        element:document.querySelector('[data-component="phone-catalog"]'),
        phones:PhoneService.getAllPhone(),


        onSelectedPhone:(phoneId)=>{
          const detailsPhone=PhoneService.getById(phoneId);
          this.catalog.hide();
          this.viewer.show(PhoneDetails);
        }
      })
      
        this.viewer=new PhoneViewer({
          element:document.querySelector('[data-component="phone-viewer"]') ,
          phonedetails:PhoneService.getAllDetails(),
         
        })

       
         
    }

   _render(){
       this._element.innerHTML=`
       <div class="row">

       <!--Sidebar-->
       <div class="col-md-2">
         <section>
           <p>
             Search:
             <input>
           </p>
 
           <p>
             Sort by:
             <select>
               <option value="name">Alphabetical</option>
               <option value="age">Newest</option>
             </select>
           </p>
         </section>
 
         <section>
           <p>Shopping Cart</p>
           <ul>
             <li>Phone 1</li>
             <li>Phone 2</li>
             <li>Phone 3</li>
           </ul>
         </section>
       </div>
 
       <!--Main content-->
       <div class="col-md-10">        
        <div data-component="phone-catalog" ></div>
        <div data-component="phone-viewer" hidden></div>
       </div>
     </div>
       `
   }
}