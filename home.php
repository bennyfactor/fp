<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html>

	<head>
		<title>iaatb.net</title>
		<?php
			$cssroot = function_exists('get_stylesheet_directory_uri') ? get_stylesheet_directory_uri() . '/css' : '/css' ;
      $fileroot = function_exists('get_stylesheet_directory_uri') ? get_stylesheet_directory_uri() . '' : '' ;
		?>
		<link rel="stylesheet" href="<?php echo $cssroot ?>/style.css" type="text/css" media="screen" />
		<script type="text/javascript" src="<?php echo $fileroot ?>/js/public.js"></script>



	</head>
	<body>
	<div id="main">
		<div class="content">
			<div class="inner">
				<img src="<?php echo $fileroot ?>/images/iaatblarge-t.png" />
				<h1>iaatb.net</h1>
				since 2002<br /><br />
				<a href="/blog2/" class="blog"><span>blog</span></a>
				<a href="/style/" class="style"><span>style</span></a>
				<a href="/pics/" class="pics"><span>pics</span></a>
				<a href="https://twitter.com/bennyfactor/" class="twitter"><span>twitter</span></a>
				<a href="https://github.com/bennyfactor" class="github"><span>GitHub</span></a>
				<a href="http://iaat.be/" class="express"><span>IAATBExpress</span></a>
				<br clear=all />
			</div>
		</div>
	</div>
	<div class="footer" id="footer"><div class="inner"><div id="footer-image">&nbsp;</div></div></div>
	</body>
</html>

