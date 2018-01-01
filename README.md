# website-responsive-testing-plugin-in-jquery
this is jquery plugin use for testing your website in responsive layout.

#Installation

How to use it:

1. Load the jQuery library and jQuery resposive's javascript at the end of the document so the pages load faster.

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="{{folder}}/responsive.js"></script>

2. Place resposive.html file in project root folder.

3. Call the plugin.
  <script>
    $(function(){
      $('body').responsiveTools();	
    });
  </script>
