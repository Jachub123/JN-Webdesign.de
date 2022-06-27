<?php
$number = $_POST["Zahl"];
if(is_numeric($number)){
if($number % 2 == 0){
    echo "zahl ist gerade";
}
else if($number % 2 !== 0){
    echo "zahl ist ungerade";
}}else{
    echo "bitte geben Sie einen numerischen Wert ein!";
}
?>