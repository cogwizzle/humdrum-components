/**
  Creates inputs based on descriptions.

  @author Joe Fehrman
  @since 11/12/2016
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
        // TODO Replace with form_element.
        /*element = document.createElement("span");
        element.setAttribute("id", inputDescription.id);
        element.classList.add("cb_container");
        for(var i = 0; i < inputDescription.values.length; i++){
          var val = inputDescription.values[i];
          var check = document.createElement("input");
          check.setAttribute("name", inputDescription.id);
          check.setAttribute("type", "checkbox");
          var checkLabel = document.createTextNode(val);
          check.appendChild(checkLabel);
          element.appendChild(check);
        }
        return element;*/
        break;
      case "select":
        // TODO Replace with form_element.
        /**
        element = document.createElement("span");
        var select = document.createElement("select");
        var label = document.createElement("label");
        var textLabel = document.createTextNode(inputDescription.label);
        for(var i = 0; i < inputDescription.values.length; i++){
          var val = inputDescription.values[i];
          var option = document.createElement("option");
          option.setAttribute("value", val.value);
          var optionText = document.createTextNode(val.label);
          option.appendChid(optionText);
          select.appendChild(option);
        }
        label.appendChild("for", inputDescription.id);
        select = addDefaults(select, inputDescription.id);
        element.appendChild(label);
        element.appendChild(select);
        return element;*/
        break;
      default:
        console.error("Unable to create an element.");
        break;
    }
  }

  __construct();
  return {"build" : build};
}
