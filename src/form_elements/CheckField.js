/**
  Create a check input.

  @author Joe Fehrman
  @since 11/14/2016
*/
var CheckField = function(inputDescription){
  extend(this, AbstractField);
  var createWrapperSpan = this.createWrapperSpan;
  var createLabel = this.createLabel;
  var createWrapperGrid = this.createWrapperGrid;
  var specialClass = "dynamic_check";
  

  /** Default constructor. */
  function __construct(inputDescription){
    var wrapper = createWrapperSpan(specialClass);
    var label = createLabel(inputDescription.id, inputDescription.label);
    var element = createElements(inputDescription.id, inputDescription.values);
    var labelGrid = createWrapperGrid();
    labelGrid.classList.add("label");
    labelGrid.classList.add("o-grid__cell--width-30");
    var inputGrid = createWrapperGrid();
    labelGrid.appendChild(label);
    inputGrid.appendChild(element);
    wrapper.appendChild(labelGrid);
    wrapper.appendChild(inputGrid);
    return wrapper;
  }

  /**
    Create the input element.

    @param id ID of the field.
    @param listOfValues Values to be used as checkboxes.
    @return checkbox span.
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
