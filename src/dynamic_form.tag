<dynamic_form>
  <form class="dynamic_form" ref="{id}" id="{id}" action="{action}" method="{method}">
    <span each={inp in inputs}>
      <raw content="{inp.outerHTML}" />
    </span>
    <button type="submit" if="{submit}">Submit</button>
  </form>
  <script>
  this.inputs = [];
  this.on('before-mount', function(){
    var descriptions = opts.inputDescriptions;
    var factory = new InputFactory();
    for(var i = 0, length = descriptions.length; i < length; i++){
      this.inputs.push(factory.build(descriptions[i]));
    }
  });

  this.id = opts.id;
  this.method = opts.method;
  this.action = opts.action;
  this.submit = opts.submit;
  </script>
<style>
.dynamic_check, .dynamic_select, .dynamic_textarea, .dynamic_text, .dynamic_password{
display : block;
  }


.dynamic_check label, .dynamic_select label, .dynamic_textarea label, .dynamic_text label, .dynamic_password label, .dynamic_check input, .dynamic_select select, .dynamic_textarea textarea, .dynamic_text input, .dynamic_password input{
display : inline-block;
}

.dynamic_check span, .dynamic_select select, .dynamic_textarea textarea, .dynamic_text input, .dynamic_password input{
  width : 50vw;
  min-width: 400px;
}

.dynamic_check label, .dynamic_select label, .dynamic_textarea label, .dynamic_text label, .dynamic_password label{
  width: 20vw;
}

.dynamic_check input{
  margin-left: 20px;
}
</style>
</dynamic_form>

<raw>
  <span></span>

  <script>
    this.root.innerHTML = opts.content;
  </script>
</raw>
