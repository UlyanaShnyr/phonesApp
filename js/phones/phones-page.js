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
        },
        
        add:(phoneId)=>{
          this.shopingCart.add(phoneId);
       
        }
      })
      
        this.viewer=new PhoneViewer({
          element:document.querySelector('[data-component="phone-viewer"]') ,
          phonedetails:PhoneService.getAllDetails(),

          onBack:()=>{
          this.catalog.show();
          this.viewer.hide();
          },
          add:(phoneId)=>{
            this.shopingCart.add(phoneId);
         
          }
         
        })

        this.shopingCart=new ShopingCart({
          element:document.querySelector('[data-component="shoping-cart"]'),
          
          
          
        });
     
        

       this.filter=new Filter({
        element:document.querySelector('[data-component="filter"]'),
        })

       
         
    }
_render(){
       this._element.innerHTML=`
       <div class="row">

       <!--Sidebar-->
       <div class="col-md-2">
         <section>
         <div data-component="filter"></div>
         </section>
 
         <section>
          <div data-component="shoping-cart"></div>
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