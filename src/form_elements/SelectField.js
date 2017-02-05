/**
  Create a select input.

  @author Joe Fehrman
  @since 01/02/2017
*/
var SelectField = function(inputDescription){
  extend(this, AbstractField);
  var createWrapperSpan = this.createWrapperSpan;
  var createLabel = this.createLabel;
  var createWrapperGrid = this.createWrapperGrid;
  var specialClass = "dynamic_select";

  /** Default constructor. */
  function __construct(inputDescription){
    var wrapper = createWrapperSpan(specialClass);
    var label = createLabel(inputDescription.id, inputDescription.label);
    var element = createElements(inputDescription.id, inputDescription.values, inputDescription.multiple);
    var labelGrid = createWrapperGrid();
    labelGrid.classList.add("o-grid__cell--width-20");
    var inputGrid = createWrapperGrid();
    labelGrid.appendChild(label);
    inputGrid.appendChild(element);
    wrapper.appendChild(labelGrid);
    wrapper.appendChild(inputGrid);
    return wrapper;
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
