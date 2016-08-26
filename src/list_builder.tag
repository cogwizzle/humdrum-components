<list_builder>
  <div class="o-grid">
    <div class="o-grid__cell">
      <select id="selectedValues" class="list" multiple>
        <option each="{opts.selectedValues}" value="{value}">{display}</option>
      </select>
    </div>
    <div class="o-grid__cell o-grid__cell--width-10">
      <ul id="list_builder_controls">
        <li><button id="removeAll" onClick="{removeAll}">>></button></li>
        <li><button id="remove" onClick="{remove}">-></button></li>
        <li><button id="add" onClick="{add}"><-</button></li>
        <li><button id="addAll" onClick="{addAll}"><<</button></li>
      </ul>
    </div>
    <div class="o-grid__cell">
      <select id="unselectedValues" class="list" multiple>
        <option each="{unselectedValues}" value="{value}">{display}</option>
      </select>
    </div>
  </div>
  
  <script>
    var $this = this;
    this.selectedValues = opts.selectedValues;
    this.unselectedValues = opts.unselectedValues;
    this.value = opts.selectedValues;
    
    removeAll(event){
      var elements = document.querySelectorAll("select#selectedValues option");
      if(elements){
        for(var i = 0; i < elements.length; i++){
          var element = elements[i];
          element.selected = true;
        }
      }
      $this.remove();
    }
    
    addAll(event){
      var elements = document.querySelectorAll("select#unselectedValues option");
      if(elements){
        for(var i = 0; i < elements.length; i++){
          var element = elements[i];
          element.selected = true;
        }
      }
      $this.add();
    }
    
    remove(event){
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
          for(var x = 0; x < $this.selectedValues.length; x++){
            var listItem = $this.selectedValues[x];
            if(val == listItem.value){
              $this.unselectedValues.push(listItem);
              $this.selectedValues.splice(x, 1);
            }
          }
        }
      }
      $this.update();
    }
    
    add(event){
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
          for(var x = 0; x < $this.unselectedValues.length; x++){
            var listItem = $this.unselectedValues[x];
            if(val == listItem.value){
              $this.selectedValues.push(listItem);
              $this.unselectedValues.splice(x, 1);
            }
          }
        }
      }
      $this.update();
    }
    
    this.on('mount', function(){
      $this.value = $this.selectedValues;
    });
    
    /*
      On change update the element's value.
      TODO problem is here.
    */
    this.on('update', function(){
      $this.value = $this.selectedValues;
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