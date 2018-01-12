import riot from 'riot';
import './list_builder.tag';

riot.mount('list_builder', {
  selectedValues : [{"value" : "1", "display" : "selected"}],
  unselectedValues : [{"value" : "2", "display" : "not selected"}]
})[0];
