<dynamic_form>
  <form class="dynamic_form" ref="{id}" id="{id}" action="{action}" method="{method}">
    <span each={inp in inputs}>
      <raw content="{inp.outerHTML}" />
    </span>
    <button type="submit" if="{submit}">Submit</button>
  </form>
  <script>
    import riot from 'riot';
    import 'blaze/dist/blaze.min.css';
    import {InputFactory} from './factory/InputFactory';

    this.inputs = [];
    var descriptions = opts.input_descriptions;
    var factory = new InputFactory();
    for(var i = 0, length = descriptions.length; i < length; i++){
      this.inputs.push(factory.build(descriptions[i]));
    }

    this.id = opts.id;
    this.method = opts.method;
    this.action = opts.action;
    this.submit = opts.submit;
  </script>
<style>
.dynamic_check input{
  margin-left: 20px;
}

span.o-grid{
  padding-bottom:20px;
}

span.o-grid:last{
  padding-bottom:0px;
}

div.o-grid__cell.label{
  width : 100%;
  text-align : right;
}
</style>
</dynamic_form>

<raw>
  <span></span>

  <script>
    this.root.innerHTML = opts.content;
  </script>
</raw>
