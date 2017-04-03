/**
  Create a text_area input.

  @author Joe Fehrman
  @since 11/14/2016
*/
var TextAreaField = function(inputDescription){
  extend(this, AbstractField);
  var createWrapperSpan = this.createWrapperSpan;
  var createLabel = this.createLabel;
  var createWrapperGrid = this.createWrapperGrid;
  var specialClass = "dynamic_textarea";

  /** Default constructor. */
  function __construct(inputDescription){
    var wrapper = createWrapperSpan(specialClass);
    var label = createLabel(inputDescription.id, inputDescription.label);
    var element = createElement(inputDescription.id);
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
