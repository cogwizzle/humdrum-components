<header_nav>
  <ul id="page_heading" class="c-nav c-nav--inline">
    <li id="page_heading_text" class="c-nav__content">{opts.page_heading}</li>
    <li class="icon">
      <a href="javascript:void(0);" onclick={ toggleResponsive }>&#9776;</a>
    </li>
  </ul>
  <ul class="topnav" id="myTopnav">
    <li></li>
    <li each="{opts.links}"><a href="{uri}">{text}</a></li>
  </ul>
  
  <style>
    ul#page_heading{
      background-color:#212121;
      font-size: 24px;
    }

    body {margin:0;}
    ul.topnav {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #212121;
    }
    
    ul.topnav li {float: left;}
    
    ul.topnav li a {
      display: inline-block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      transition: 0.3s;
      font-size: 17px;
    }
    
    ul#page_heading li a{
      display: inline-block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      transition: 0.3s;
      font-size: 30px;
    }
  
    ul.topnav li a:hover {background-color: #555;}
    
    ul#page_heading li.icon {
      display: none;
    }
  
    @media screen and (max-width:680px) {
      ul.topnav li:not(:first-child) {display: none;}
      ul#page_heading li.icon {
        float: right;
        display: inline-block;
      }
    }
    
    @media screen and (max-width:680px) {
      ul.topnav.responsive {position: relative;}
      ul.topnav.responsive li {
        float: none;
        display: inline;
      }
      ul.topnav.responsive li a {
        display: block;
        text-align: left;
      }
    }
  </style>
  
  
  <script>
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    toggleResponsive() {
      var nav = this.myTopnav;
      var titleBar = this.page_heading;
      if (nav.className === "topnav") {
          nav.className += " responsive";
      } else {
          nav.className = "topnav";
      }
      
      if (titleBar.className === "c-nav c-nav--inline") {
          titleBar.className += " responsive";
      } else {
          titleBar.className = "c-nav c-nav--inline";
      }
    }
  </script>
</header_nav>