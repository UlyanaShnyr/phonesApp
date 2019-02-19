 class Component {
  constructor({ element }) {
    this._element = element;
    this._callbackMap = {};
  }

  hide() {
     this._element.hidden=true;
  }

  show() {
     this._element.hidden=false;
  }


  on(eventName, selector, callback){
    this._element.addEventListener(eventName,(event)=>{
      let detailsLink =event.target.closest(selector);
    
      if(!detailsLink){return;}
      callback(event);
      })
     }

 

  subscribe(eventName, callback) {
    if (!this._callbackMap[eventName]) {
      this._callbackMap[eventName] = [];
    }

    this._callbackMap[eventName].push(callback);
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
