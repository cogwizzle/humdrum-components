<string>
  <input type="text" id="{opts.id}" name="{opts.id}" />
</string>

<number>
  <input type="number" id="{opts.id}" name="{opts.id}" />
</number>

<big_string>
  <textarea id="{opts.id}" name="{opts.id}"></textarea>
</big_string>

<check>
  <span each={val in opts.values}>
    <input type="checkbox" id="{opts.id}" name="{opts.id}" value="{val}" />
  </span>
</check>

<sel>
  <select id="{opts.id"} name="{opts.id}">
    <option each={val in opts.values} value="{val.value}">{val.name}</option>
  </select>
</sel>

<dynamic_form>
  <form class="dynamic_form">
    <span each={inp in inputs}>
      <raw content="{inp}" />
    </span>
  </form>
  <script>
    
  </script>
</form>
