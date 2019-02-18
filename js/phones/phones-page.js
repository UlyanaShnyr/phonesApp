'use strict'

class PhonesPage {
   constructor ({element}){
       
       this._element=element;
       this._render();

       this._initFilter();
       this._initCatalog();
       this._initViewer();
       this. _initShopingCart();
       

    }
    _initCatalog(){
      this._catalog=new PhoneCatalog({
        element:document.querySelector('[data-component="phone-catalog"]'),
     


        onSelectedPhone:(phoneId)=>{
          const detailsPhone=PhoneService.getById(phoneId);
          this._catalog.hide();
          this.viewer.show(detailsPhone);
        },
        
        add:(phoneId)=>{
          this.shopingCart.add(phoneId);
       
        }
        
      });
      let phones=PhoneService.getAllPhone();
      this._catalog.show(phones);
      
    }
    _initViewer(){
      this.viewer=new PhoneViewer({
        element:document.querySelector('[data-component="phone-viewer"]') ,
        phonedetails:PhoneService.getAllDetails(),

        onBack:()=>{
        this._catalog.show();
        this.viewer.hide();
        },
        add:(phoneId)=>{
          this.shopingCart.add(phoneId);
       
        }
       
      })

    }

    _initShopingCart(){

      this.shopingCart=new ShopingCart({
        element:document.querySelector('[data-component="shoping-cart"]'),
        
        
        
      });
    }
    _initFilter(){
      this._filter=new Filter({
        element:document.querySelector('[data-component="filter"]'),
        });
        this._filter.on('order-changed','[data-component="filter"]',()=>{
         
          let currentFilter=this._filter.getCurentData();    
          let phones=PhoneService.getAllPhone({currentFilter});
               this._catalog.show(phones);
            
              
         });
         this._filter.on('query-changed','[data-component="filter"]',()=>{
          let currentFilter=this._filter.getCurentData();
          let phones=PhoneService.getAllPhone({currentFilter});
          this._catalog.show(phones);
        
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