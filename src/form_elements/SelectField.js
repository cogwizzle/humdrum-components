/**
  Create a select input.

  @author Joe Fehrman
  @since 01/02/2017
*/
var SelectField = function(inputDescription){

  /** Default constructor. */
  function __construct(inputDescription){
    var wrapper = createWrapperSpan();
    var label = createLabel(inputDescription.id, inputDescription.label);
    var element = createElements(inputDescription.id, inputDescription.values, inputDescription.multiple);
    wrapper.appendChild(label);
    wrapper.appendChild(element);
    return wrapper;
  }

  /** Create a wrapper element. */
  function createWrapperSpan(){
    var wrapper = document.createElement("span");
    wrapper.classList.add("dynamic_select");
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

    @param id Id of selectbox.
    @param listOfValues List of options.
    @param multiple Boolean representing if it is a multiple select box.
    @return Selectbox.
  */
  function createElements(id, listOfValues = [], multiple = false){
    var select = document.createElement("select");
    select.setAttribute("name", id);
    select.classList.add("c-field");
    
    // Evaluate if select field allows multiple values to be selected.
    if(multiple){
      select.setAttribute("multiple", true);
    }
    for(var i = 0; i < listOfValues.length; i++){
      var item = listOfValues[i];
      var option = document.createElement("option");
      option.setAttribute("name", id);
      option.setAttribute("value", item.value);
      option.classList.add("c-field");
      var textNode = document.createTextNode(item.label);
      option.appendChild(textNode);
      select.appendChild(option);
    }
    return select;
  }

  return __construct(inputDescription); // Call the constructor.
}
