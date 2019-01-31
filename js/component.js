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
}