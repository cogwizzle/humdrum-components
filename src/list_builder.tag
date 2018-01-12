<list_builder>
  <div class="o-grid">
    <div class="o-grid__cell">
      <select id="selectedValues" class="list" multiple>
        <option each="{selectedValues}" value="{value}">{display}</option>
      </select>
    </div>
    <div class="o-grid__cell o-grid__cell--width-10">
      <ul id="list_builder_controls">
        <li><button id="removeAll" onClick="{removeAll}"><i class="fa fa-forward" aria-hidden="true"></i></button></li>
        <li><button id="remove" onClick="{remove}"><i class="fa fa-play" aria-hidden="true"></i></button></li>
        <li><button id="add" onClick="{add}"><i class="fa fa-play fa-flip-horizontal" aria-hidden="true"></i></button></li>
        <li><button id="addAll" onClick="{addAll}"><i class="fa fa-backward" aria-hidden="true"></i></button></li>
      </ul>
    </div>
    <div class="o-grid__cell">
      <select id="unselectedValues" class="list" multiple>
        <option each="{unselectedValues}" value="{value}">{display}</option>
      </select>
    </div>
  </div>
  
  <script>
    import 'blaze/dist/blaze.min.css';
    import 'font-awesome/css/font-awesome.min.css';

    var component = this;
    this.selectedValues = opts.selectedValues;
    this.unselectedValues = opts.unselectedValues;
    this.value = opts.selectedValues;
    
    component.removeAll = (event) => {
      var elements = document.querySelectorAll("select#selectedValues option");
      if(elements){
        for(var i = 0; i < elements.length; i++){
          var element = elements[i];
          element.selected = true;
        }
      }
      component.remove();
    }
    
    component.addAll = (event) => {
      var elements = document.querySelectorAll("select#unselectedValues option");
      if(elements){
        for(var i = 0; i < elements.length; i++){
          var element = elements[i];
          element.selected = true;
        }
      }
      component.add();
    }
    
    component.remove = (event) => {
      var selectedElements = document.querySelectorAll("select#selectedValues option:checked");
      var itemsToRemove = [];
      if(selectedElements){
        for(var i = 0; i < selectedElements.length; i++){
          var element = selectedElements[i];
          itemsToRemove.push(element.value);
        }
      }
      if(itemsToRemove.length > 0){
        for(var i = 0; i < itemsToRemove.length; i++){
          var val = itemsToRemove[i];
          for(var x = 0; x < component.selectedValues.length; x++){
            var listItem = component.selectedValues[x];
            if(val == listItem.value){
              component.unselectedValues.push(listItem);
              component.selectedValues.splice(x, 1);
            }
          }
        }
      }
      component.update();
    }
    
    component.add = (event) => {
      var selectedElements = document.querySelectorAll("select#unselectedValues option:checked");
      var itemsToRemove = [];
      if(selectedElements){
        for(var i = 0; i < selectedElements.length; i++){
          var element = selectedElements[i];
          itemsToRemove.push(element.value);
        }
      }
      if(itemsToRemove.length > 0){
        for(var i = 0; i < itemsToRemove.length; i++){
          var val = itemsToRemove[i];
          for(var x = 0; x < component.unselectedValues.length; x++){
            var listItem = component.unselectedValues[x];
            if(val == listItem.value){
              component.selectedValues.push(listItem);
              component.unselectedValues.splice(x, 1);
            }
          }
        }
      }
      component.update();
    }
    
    this.on('mount', function(){
      component.value = component.selectedValues;
    });
    
    /*
      On change update the element's value.
    */
    this.on('update', function(){
      component.value = component.selectedValues;
    });
  </script>
  
  <style scoped>
    select#unselectedValues, select#selectedValues{
      height: 300px;
      width: 200px;
    }
    
    ul#list_builder_controls li{
      list-style-type: none;
      padding:15px;
    }
    
    div.o-grid__cell{
      text-align:center;
      vertical-align:middle;
    }
  </style>
</list_builder>
