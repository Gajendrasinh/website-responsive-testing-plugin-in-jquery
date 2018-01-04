Version:
-----------------------------------------------------------------------------------------------------------------------
v.1.0.0

Contributors:
-----------------------------------------------------------------------------------------------------------------------
Bhavesh Doshi, Gajendrasinh Zala

Tags: 
-----------------------------------------------------------------------------------------------------------------------
responsive layout, test responsive design

Description:
-----------------------------------------------------------------------------------------------------------------------
This is a small lightweight plugin used to check the responsive design for your webpage.

Installation:
-----------------------------------------------------------------------------------------------------------------------
It is very simple to install this plugin. 

Step 1) Unzip  responsive-plugin.zip file to the root of your project.

Step 2) You need to include below code in your webpage before end of body tag.
	<script src="responsive-plugin.js"></script>	
	<script>
		$(document).ready(function(){	
			$("body").responsiveTools();	
		});
	</script>

If you want to change the style of the button, you can replace "$("body").responsiveTools();" with below code and apply the values of attributes you want:

	$("body").responsiveTools({
			"height": "30px",
                	"backgroundcolor": "#04B5BA",
			"borderradius": "4px",
			"position": "absolute",
			"right": "15px",
			"lineheight": "30px",
			"color": "rgb(255, 255, 255)",
			"textalign": "center",
			"fontfamily": "arial",
			"fontsize": "14px",
			"top": "15px",
			"padding": "0 10px",
			"cursor": "pointer",
			"zindex":"8989898",
			"baseURL" : '',                    
	});

Usage: 
-----------------------------------------------------------------------------------------------------------------------
You can check the responsiveness of your webpage. Once you install the plugin, it will automatically add a "Check Responsive View" button in the top right corner. When you click on that button, you will be able to view your webpage with different resolutions in a new tab/window. 
