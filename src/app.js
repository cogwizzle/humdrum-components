import riot from 'riot';
import './header_nav.tag';
import 'blaze/dist/blaze.min.css';

riot.mount('header_nav', {
  page_heading : "DEMO",  // The title of the page
  links : [
    {"uri" : "http://www.google.com", "text" : "The Google"}, // Navigation links that will appear on the page.
    {"uri" : "http://www.yahoo.com", "text" : "Yahoo!"},
    {"uri" : "#hash", "text" : "Hash"}
  ]
});

