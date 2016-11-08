<table_list>
  <table class="{tableClass}">
    <thead class="c-table__head">
      <tr class="c-table__row c-table__row--heading">
        <th class="c-table__cell" each="{column in columns}">{column}</th>
      </tr>
    </thead>
    <tbody class="c-table__body">
      <tr class="c-table__row" each="{row in data}" onclick="{parent.rowClick}">
        <td class="c-table__cell" each="{column in columns}">{row[column]}</td>
      </tr>
    </tbody>
  </table>
  
  <script>
    var getKeys = function(obj, keys){
      for(var key in obj){
        if(!keys.includes(key)){
          keys.push(key);
        }
      }
      return keys;
    }

    this.data = opts.data;
    this.rowClick = opts.rowClick;
    this.columns = [];
    var $this = this;
    for(var i = 0; i < $this.data.length; i++){
      $this.columns = getKeys($this.data[i], $this.columns);
    }

    this.tableClass = "c-table";
    if(this.rowClick){
      this.tableClass+= " c-table--clickable";
    }
  </script>
</table_list>
