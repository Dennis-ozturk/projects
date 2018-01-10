<?php include '../includes/config.php'; ?>
<?php
	$topic = strip_tags(mysql_real_escape_string($_POST['topic']));
	$about = strip_tags(mysql_real_escape_string($_POST['about']));


	mysql_query("INSERT INTO info VALUES('','$topic','$about')");


?>
