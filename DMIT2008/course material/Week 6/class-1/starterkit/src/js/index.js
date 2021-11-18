  /*
    last class
    attaching scripts to the global object window
    -- namespace collisions
    Modules
    strict on by default (slopy mode)
    this key module undifined...
    moduleA scope {
      const
      let
      functions
      objects
    }

    moduleB scope {
      const
      let
      functions
      objects
    }
        
    key... this
    Old JavaScript last semester...
        // iffy
          const app = (function(){
            const name = "tim";
          })()

    Global Scope (window object...)

    Modules
    {
      module scope
    }
 */
  // Protected Code Golbal Scope
  // App Module Scope
  {
    // global Module

    // OOP
    // Angular

    // Vue, Svelte
    // both

    // Functional
    // React

    // angular              react
  }


  // currying
  // JavaScript
  // prototype inheratince       functional
  /*
  const httpName = function (){
    const private = 1;

    return function getPrivate(){
      return private
    }

  }
  */

  // function is named object

  // Object named function
  // Using Functions as Class ===> objects
  /*
  const Elements = function (){
    // property
    this.element = undefined;

    // private: _name 
    // method
    this.make = function(elem = 'div'){
      this.element = document.createElement(elem);
      this.element.textContent = "ui thing";
      return this.element;
    }

    this.addEvent = function (eventType, eventHandler){
      this.element.addEventListener(eventType, eventHandler);
    }
    this.removeEvent = function (eventType, eventHandler){
      this.element.removeEventListener(eventType, eventHandler);
    }

    this.getElement = function(){
      return this.element;
    }
    this.setEmelent = function(value){
      this.element = value;
    }
  }

  const h1 = new Elements()
    console.log(h1.make('h1'));
    */

  // MVC
  // Model data
  // View UI
  // Control ----- M   C   V
  /*
  class Elements {
    // constructor called when you use the new keyword
    constructor (){
      this.elem = undefined;
    }

    make = function (elem = "div"){
      this.elem = document.createElement(elem);
      // set attributes etc...
      return this.elem;
    }
  }
  getThis = function(){
    return this;
  }
  */

  // State Management
  const element = {
    elem: undefined,
    action: reducer(state)
    }

  // object in JavaScript
  const temp = {...element}

  // Objects In JavaScript
  // functions Elements
  // class new
  // Custom Event for Objects... new Event('name', props)
  // Recieve event Transmit Events

  // Object