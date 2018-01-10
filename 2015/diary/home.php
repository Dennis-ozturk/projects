 <?php include 'templates/nav.php'; ?>

<html>
<head>
<link rel='stylesheet' type='text/css' href='css/home/home.css' />
<link rel='stylesheet' type='text/css' href='css/main.css' />

<script>
$(document).ready(function() {
	$("#postInfo").submit(function() {
		var topic = $('#topic').val();
		var about = $('#about').val();

		$.post('parse/insert.php',{topic: topic, about: about},function(data) {
			$('#response').html(data);
		});
		return false;
	});
});
</script>
</head>
<body>
<div id='middleHome'>
<div id='response'></div>
	<form action='' method='post' id='postInfo' class="postInfo">
		<h4 style=" margin-bottom: 0px; margin: 10px;">Topic for this day</h5>
		<input type='text' name='topic' id='topic' placeholder='Title for today...' />

		<h4 style="margin-bottom: 0; margin:10px;">What happened today?</h5>
		<textarea type='text' name="about" id="about" placeholder='What happened today?'></textarea>
		<input type='submit' name='register' id='register' placeholder='Signup!' />
	</form>
</div>
</body>
</html>
