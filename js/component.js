'use strict'

class Component{
    constructor({element}){
        this._element=element;
        this._callbackMap={};
    }
    hide(){
        return this._element.hidden=true;
    }
    show(){
        return this._element.hidden=false;
    }
    on(eventName, selector, callback){
        this._element.addEventListener(eventName,(event)=>{
          let detailsLink =event.target.closest(selector);
        
          if(!detailsLink){return;}
          callback(event);
          })
         }

         emit(eventName, data) {
            const eventCallbacks = this._callbackMap[eventName];
        
            if (!eventCallbacks) {
              return;
            }
        
            eventCallbacks.forEach(callback => {
              callback(data);
            });
          }     
         
}