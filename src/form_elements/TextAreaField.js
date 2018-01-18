import AbstractField from './AbstractField';

/**
 * Create a text_area input.
 */
export default class TextAreaField extends AbstractField {

  /**
   * Default constructor.
   */
  constructor() {
    super();
  }

  /**
   * Create the input element.
   *
   * @param id Id of the element being created.
   * @return Input element.
   */
  createElement(id){
    let input = document.createElement("textarea");
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input.classList.add("c-field");
    return input;
  }

  build(inputDescription){
    let specialClass = "dynamic_textarea";
    let wrapper = this.createWrapperSpan(specialClass);
    let label = this.createLabel(inputDescription.id, inputDescription.label);
    let element = this.createElement(inputDescription.id);
    let labelGrid = this.createWrapperGrid();
    labelGrid.classList.add("label");
    labelGrid.classList.add("o-grid__cell--width-30");
    let inputGrid = this.createWrapperGrid();
    labelGrid.appendChild(label);
    inputGrid.appendChild(element);
    wrapper.appendChild(labelGrid);
    wrapper.appendChild(inputGrid);
    return wrapper;
  }
}

module.exports = TextAreaField;
