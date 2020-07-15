<?php
	
	$userName 		= $_POST['name'];
    $userEmail	 	= $_POST['email'];
    $userFindUs     = $_POST['find-us'];
    $userNews     = $_POST['news'];
	$userMessage 		= $_POST['message'];

	$to 			= "kim.vphung@gmail.com";
	$subject 		= "Email from Cafe Ngoc";
	$body 			= "Information Submitted:";

	$body .= "\r\n Name: " . $userName;
    $body .= "\r\n Email: " . $userEmail;
    $body .= "\r\n Found us: " . $userFindUs;
    $body .= "\r\n Newsletter: " . $userNews;
	$body .= "\r\n Message: " . $userMessage;

	if (mail($to, $subject, $body)) {
		echo '<p style="background-color:#fff;color:#555;font-family:Roboto,Arial,sans-serif;font-weight:300;text-rendering:optimizeLegibility;overflow-x:hidden;">Email sent successfully.';
		echo '<br><br><strong>This form (and website) is purely designed for Kim Phung\'s portfolio. As such, the contents of this site is purely fictional.</strong></p>';
	} else {
		echo "Email sending failed...";
	}
?>