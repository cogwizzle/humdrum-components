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
        element = document.createElement("input");
        element.setAttribute("type", "text");
        element = addDefaults(element, inputDescription.id);
        return element;
        break;
      case "textarea":
        element = document.createElement("textarea");
        element = addDefaults(element, inputDescription.id);
        return element;
        break;
      case "password":
        element = document.createElement("input");
        element.setAttribute("type", "password");
        element = addDefaults(element, inputDescription.id);
        return element;
      case "checkbox":
        element = document.createElement("span");
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
        return element;
      default:
        console.error("Unable to create an element.");
        break;
    }
  }

  __construct();
  return {"build" : build};
}
