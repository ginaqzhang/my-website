<?php

// Again not the real file.

session_start();

if (isset($_POST['name'], $_POST['email'], $_POST['msg'])) {
	$_SESSION['contact_request_status'] = rand(0, 1);
	header('Location: contacted');
	exit();
}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Gina Zhang | Contact</title>
	<link rel="stylesheet" type="text/css" href="css/styles.css"/>
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto">
</head>
<body>
	<div class="center-box">
		<div id="contact-heading">Get in touch!</div>
		<form id="contact-form" action="contact.php" method="POST" novalidate>
			<label class="input-heading required" for="name-input">Name</label>
			<input id="name-input" name="name" type="text" placeholder="What's your name?"/>
			<label class="input-heading required" for="email-input">Email</label>
			<input id="email-input" name="email" type="email" placeholder="me@example.com"/>
			<label class="input-heading required" for="msg-input">Message</label>
			<textarea id="msg-input" name="msg" placeholder="Type your message here"></textarea>
			<button class="button disabled" type="submit" value="submit" disabled>Send</button>
		</form>
	</div>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.4/lodash.min.js"></script>
	<script type="text/javascript" src="js/contact.js"></script>
</body>
</html>
