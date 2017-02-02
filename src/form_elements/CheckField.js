/**
  Create a check input.

  @author Joe Fehrman
  @since 11/14/2016
*/
var CheckField = function(inputDescription){

  /** Default constructor. */
  function __construct(inputDescription){
    var wrapper = createWrapperSpan();
    var label = createLabel(inputDescription.id, inputDescription.label);
    var element = createElements(inputDescription.id, inputDescription.values);
    wrapper.appendChild(label);
    wrapper.appendChild(element);
    return wrapper;
  }

  /** Create a wrapper element. */
  function createWrapperSpan(){
    var wrapper = document.createElement("span");
    wrapper.classList.add("dynamic_check");
    return wrapper;
  }

  /**
    Create a label.

    @param id Id of the input.
    @param labelText Label test show in display.
    @return Label element.
  */
  function createLabel(id, labelText){
    var label = document.createElement("label");
    label.setAttribute("for", id);
    var textNode = document.createTextNode(labelText);
    label.appendChild(textNode);
    return label;
  }

  /**
    Create the input element.

  */
  function createElements(id, listOfValues){
    var wrapper = document.createElement("span");
    for(var i = 0; i < listOfValues.length; i++){
      var item = listOfValues[i];
      var input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("name", id);
      input.setAttribute("value", item.value);
      var textNode = document.createTextNode(item.label);
      wrapper.appendChild(input);
      wrapper.appendChild(textNode);
    }
    return wrapper;
  }

  return __construct(inputDescription); // Call the constructor.
}
