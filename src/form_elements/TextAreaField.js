/**
  Create a text_area input.

  @author Joe Fehrman
  @since 11/14/2016
*/
var TextAreaField = function(inputDescription){

  /** Default constructor. */
  function __construct(inputDescription){
    var wrapper = createWrapperSpan();
    var label = createLabel(inputDescription.id, inputDescription.label);
    var element = createElement(inputDescription.id);
    wrapper.appendChild(label);
    wrapper.appendChild(element);
    return wrapper;
  }

  /** Create a wrapper element. */
  function createWrapperSpan(){
    var wrapper = document.createElement("span");
    wrapper.classList.add("dynamic_textarea");
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

    @param id Id of the element being created.
    @return Input element.
  */
  function createElement(id){
    var input = document.createElement("textarea");
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input.classList.add("c-field");
    return input;
  }

  return __construct(inputDescription); // Call the constructor.
}
