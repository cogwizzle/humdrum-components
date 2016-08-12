<header_nav>
  <ul id="page_heading" class="c-nav c-nav--inline">
    <li id="page_heading_text" class="c-nav__content">{opts.page_heading}</li>
    <li class="icon">
      <a href="javascript:void(0);" onclick={ toggleResponsive }>&#9776;</a>
    </li>
    <li each="{opts.links}" class="c-nav__item c-nav__item--right"><a href="{uri}">{text}</a></li>
  </ul>
  <style>
    body {margin:0;}
   
    ul#page_heading #page_heading_text{
      font-weight:bold;
    }
    
    ul#page_heading li.icon {
      vertical-align:center;
      text-align:center;
      
    }
    
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
      color: #f2f2f2;
      text-align: center;
      text-decoration: none;
      transition: 0.3s;
    }
  
    
    ul#page_heading li.icon {
      display: none;
      padding: 16px;
    }
    
    ul#page_heading{
      z-index:100;
    }
  
    @media screen and (max-width:680px) {
      ul#page_heading li.c-nav__item {display: none;}
      ul#page_heading li.icon {
        float: right;
        display: inline-block;
      }
    }
    
    @media screen and (max-width:680px) {
      ul#page_heading.responsive {position: relative;}
      ul#page_heading.responsive li.c-nav__item {
        float: none;
        display: inline;
      }
      ul#page_heading.responsive li.c-nav__item a {
        display: block;
        text-align: left;
        padding-left:16px;
      }
      ul#page_heading.responsive li:hover{
        display:block;
      }
    }
  </style>
  
  
  <script>
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    toggleResponsive() {
      var titleBar = this.page_heading;
      
      if (titleBar.className === "c-nav c-nav--inline") {
          titleBar.className += " responsive";
      } else {
          titleBar.className = "c-nav c-nav--inline";
      }
    }
  </script>
</header_nav>