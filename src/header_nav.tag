<header_nav>
  <ul ref="page_heading" id="page_heading" class="c-nav c-nav--inline">
    <yield ref="brand" />
    <li id="page_heading_text" class="c-nav__content" if="{opts.page_heading}">{opts.page_heading}</li>
    <span class="navspan" if="{opts.links}">
      <li class="icon c-nav__item--right" onclick={ toggleResponsive }>&#9776;</li>
      <li each="{opts.links}" class="c-nav__item c-nav__item--right" uri="{uri}" onclick="{goto}">{text}</li>
    </span>
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

    ul#page_heading li{
      position:relative;
      color: #f2f2f2;
      text-decoration: none;
      transition: 0.3s;
      height:100%;
    }

    ul#page_heading li.icon {
      display: none;
      padding: 16px;
    }

    ul#page_heading{
      z-index:100;
    }

    @media screen and (max-width:680px) {
      ul#page_heading li.c-nav__item--right {display: none;}
      ul#page_heading li.icon {
        display: inline-block;
      }
    }

    @media screen and (max-width:680px) {
      ul#page_heading.responsive {position: relative;}
      ul#page_heading.responsive li.c-nav__item {
        float: none;
        display: block;
      }
      ul#page_heading.responsive li.c-nav__item a {
        display: block;
        text-align: left;
        margin-left:16px;
      }
      ul#page_heading.responsive li.c-nav__item:hover{
        display:block;
      }
    }
  </style>

  <script>
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    toggleResponsive() {
      var titleBar = this.refs.page_heading;

      if (titleBar.className == "c-nav c-nav--inline") {
          titleBar.className += " responsive";
      } else {
          titleBar.className = "c-nav c-nav--inline";
      }
    }

    /** Go to page. */
    goto(event){
      var uri = event.target.getAttribute('uri');
      window.location.href = uri;
      this.toggleResponsive();
    }
  </script>
</header_nav>