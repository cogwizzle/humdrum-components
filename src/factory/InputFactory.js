import {TextField} from '../form_elements/TextField';
import {TextAreaField} from '../form_elements/TextAreaField';
import {PasswordField} from '../form_elements/PasswordField';
import {SelectField} from '../form_elements/SelectField';
import {CheckField} from '../form_elements/CheckField';

/**
  Creates inputs based on descriptions.
*/
var InputFactory = function(){
  function __construct(){}

  function addDefaults(element, id){
    element.setAttribute("id", id);
    element.setAttribute("name", id);
    element.classList.add("c-field");
    return element;
  }

  /**
    Build an input.

    @param inputDescription Json object description of object.
    @return Created input.
  */
  function build(inputDescription){
    var element = undefined;
    switch(inputDescription.type.toLowerCase()){
      case "text":
        return new TextField(inputDescription);
        break;
      case "textarea":
        return new TextAreaField(inputDescription);
        break;
      case "password":
        return new PasswordField(inputDescription);
        break;
      case "checkbox":
        return new CheckField(inputDescription);
        break;
      case "select":
        return new SelectField(inputDescription);
        break;
      default:
        console.error("Unable to create an element.");
        break;
    }
  }

  __construct();
  return {"build" : build};
};

module.exports = {
  InputFactory
};
