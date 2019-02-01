'use strict'

class Component{
    constructor({element}){
        this._element=element;
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
}