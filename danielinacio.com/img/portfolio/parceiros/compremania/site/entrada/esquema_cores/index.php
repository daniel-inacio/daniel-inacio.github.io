<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<title>Cores da sua página</title>	
	<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="js/jquery.styledselect.js"></script>
	<script type="text/javascript" src="js/jquery.floatbox.js"></script>
	<script type="text/javascript" src="js/jquery.tooltip.js"></script>
	<script type="text/javascript" src="js/jquery.droppy.js"></script>
	<script type="text/javascript" src="js/jquery.cookie.js"></script>
	<script type="text/javascript" src="js/colorschemedesigner.js"></script>
	<script type="text/javascript" src="js/tooltips.js"></script>
    <script type="text/javascript" src="kxs/kxs.js"></script>
    <link rel="stylesheet" href="css/default.css" type="text/css">
	<link rel="stylesheet" href="kxs/kxs.css" type="text/css">
</head>	
<body>


<div id="csd3-jscheck">
	<h1>Color Scheme Designer 3</h1>
	<div id="csd3-load">
		<h4>You need Javascript &amp; CSS to run this application.</h4>
		<p>You may also try <a href="/previous">previous versions</a>.</p>
		<hr>
	</div>
</div>

<script type="text/javascript">
<!--

var elm = document.getElementById('csd3-load');
if (elm) elm.innerHTML = '<p>Wait please. Loading...<'+'/p>';

//-->
</script>

<div id="csd3-canvas" style="display:none">


	<div id="csd3-model-cover"></div>

	<div id="csd3-pane-wheel" class="pane"></div>

	<div id="csd3-pane-vars" class="pane">
		<div class="tabs" id="csd3-tabs-csv"></div>
		<div id="csd3-c1-cover"></div>
		<div id="csd3-c2-cover"></div>
	</div>

	<div id="csd3-pane-info" class="pane"></div>

	<div class="tabs" id="csd3-tabs-color"></div>

	<table id="csd3-palette"><tr>
		<td class="cbox bg-pri-0"></td>
		<td class="cbox bg-sec1-0"></td>
		<td class="cbox bg-sec2-0"></td>
		<td class="cbox bg-compl-0"></td>
	</tr></table>
    <input type="text" id="csd3-schemeid" style="width:150px !important;"></input>

	<div id="csd3-preview-palette-canvas">
		<div id="csd3-preview-palette-bg1"></div>
		<div id="csd3-preview-palette-bg2"></div>	
		<table id="csd3-preview-palette">
		<tr class="pri">
			<td class="cbox bg-pri-3" rel="pri-3"></td>
			<td class="cbox bg-pri-0" rel="pri-0" rowspan="2"></td>
			<td class="cbox bg-pri-1" rel="pri-1"></td>
		</tr>
		<tr class="pri">
			<td class="cbox bg-pri-4" rel="pri-4"></td>
			<td class="cbox bg-pri-2" rel="pri-2"></td>
		</tr>
		<tr class="sec sec1">
			<td class="cbox bg-sec1-1" rel="sec1-1"></td>
			<td class="cbox bg-sec1-0" rel="sec1-0" rowspan="2"></td>
			<td class="cbox bg-sec1-3" rel="sec1-3"></td>
		</tr>
		<tr class="sec sec1">
			<td class="cbox bg-sec1-2" rel="sec1-2"></td>
			<td class="cbox bg-sec1-4" rel="sec1-4"></td>
		</tr>
		<tr class="sec sec2">
			<td class="cbox bg-sec2-1" rel="sec2-1"></td>
			<td class="cbox bg-sec2-0" rel="sec2-0" rowspan="2"></td>
			<td class="cbox bg-sec2-3" rel="sec2-3"></td>
		</tr>
		<tr class="sec sec2">
			<td class="cbox bg-sec2-2" rel="sec2-2"></td>
			<td class="cbox bg-sec2-4" rel="sec2-4"></td>
		</tr>
		<tr class="compl">
			<td class="cbox bg-compl-1" rel="compl-1"></td>
			<td class="cbox bg-compl-0" rel="compl-0" rowspan="2"></td>
			<td class="cbox bg-compl-3" rel="compl-3"></td>
		</tr>
		<tr class="compl">
			<td class="cbox bg-compl-2" rel="compl-2"></td>
			<td class="cbox bg-compl-4" rel="compl-4"></td>
		</tr>

		</table>

	</div>

	<div class="tabs" id="csd3-tabs-preview"></div>
<div id="csd3-showtext">
		<a id="csd3-showtext-btn" href="#">Show sample text</a>
	</div>

	

	<div id="csd3-showtext">
		<a id="csd3-showtext-btn" href="#">Show sample text</a>
	</div>

	
</div>
</body>
</html>

