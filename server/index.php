<?php

session_start();

require_once("twitteroauth/twitteroauth.php"); 

define('CONSUMER_KEY', 'sYefUMVW8rZsUHhlSAeICHNVx');
define('CONSUMER_SECRET', 'cXV4xhQHqH8f39JeSF7iOT35V8vteL6vMUjEjqGrK1uttM0RNR');
define('OAUTH_TOKEN','101776826-PM1dIyKyQpvC039cYk5QQ3sDqRAj2K5PsN1ibItb');
define('OAUTH_TOKEN_SECRET','G3Ws6wo47JoPZ4tVziPE4bHa7rUZusUZ46M5ZAT2HIo96');

$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, OAUTH_TOKEN, OAUTH_TOKEN_SECRET);

$q_string = $_GET['q'];  
$geocode = $_GET['geocode']; 

foreach ($_GET as $k => $v) {
	$q_s .= $k . '='. $v . '&';
}

$q_s = preg_replace('/&$/', '',$q_s);

$tweets = $connection->get("https://api.twitter.com/1.1/search/tweets.json?$q_s");
	

	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	echo json_encode(array($tweets));

