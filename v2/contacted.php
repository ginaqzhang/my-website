<?php

session_start();

if (!isset($_SESSION['contact_request_status'])) {
	header('Location: contact');
}

$possible_titles = array("Error Sending Message", "Message Sent");

$possible_results = array(
	"Oops, there was an error submitting your message &ndash; try again later.",
	"Thanks for reaching out! I'll get back to you as soon as I can."
);

$title = $possible_titles[$_SESSION['contact_request_status']];
$result = $possible_results[$_SESSION['contact_request_status']];

?>

<!DOCTYPE html>
<html>
<head>
	<title>Gina Zhang | <?= $title ?></title>
	<link rel="stylesheet" type="text/css" href="css/styles.css"/>
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel='shortcut icon' href='favicon.ico' type='image/x-icon'/ >
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<div class="center-box">
		<div id="contact-heading">Get in touch!</div>
		<div class="confirmation-box">
			<div class="confirmation">
				<?= $result ?>
			</div>
			<a class="button button--coral confirmation-box__button" href="index">Home</a>
		</div>
	</div>
</body>
</html>
