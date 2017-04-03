/**
  Contains all similar functions of Dynamic Fields.

  @author Joe Fehrman
  @since 05/03/2017
*/
var AbstractField = (function(inputDescription){

  /** 
    Create a wrapper element. 

    @param Name of the dynamic field. example dynamic_text.
  */
  function createWrapperSpan(dynamicFieldName){
    var wrapper = document.createElement("span");
    wrapper.classList.add(dynamicFieldName);
    wrapper.classList.add("o-grid");
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
    label.classList.add("o-grid-small--fit");
    label.classList.add("o-grid--medium-fit");
    label.classList.add("o-grid--large-fit");
    return label;
  }

  /**
    Creates wrapper div to be used to give fields a uniform look.
  */
  function createWrapperGrid(){
    var grid = document.createElement("div");
    grid.classList.add("o-grid__cell");
    return grid;
  }

  return {
    "createWrapperSpan" : createWrapperSpan,
    "createLabel" : createLabel,
    "createWrapperGrid" : createWrapperGrid
  }
})(); // Wrapped in execution call because we need revealing module pattern to activate.
