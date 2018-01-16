import riot from 'riot';
import './floating_action_button.tag';

riot.mount("floating_action_button", {
  "press" : function(){
    alert("HELLO");
  },
  "background_color" : "red"
});
