<?php
    
$user = $_SERVER['REMOTE_USER'];

if($user == "Jachub123"){
    return;
}
function logIp(){
    $ip = $_POST['ip'];
    $city = $_POST['city'];
    $region = $_POST['area'];
    $country = $_POST['country'];
    $provider = $_POST['isp'];

    date_default_timezone_set('Europe/Berlin');
    $date = date('m/d/Y h:i:s a', time());

    $log = "guest at ". $date .":\n".$ip."\n".$region."\n".$provider."\n".$city."\n".$country."\n";
    $logfile = fopen("iplog.txt", "a") or die("Unable to open file!");
    fwrite($logfile, $log."\n" );
    fclose($logfile);
        

}
ini_set('display_errors', 1); 
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL); 

logIp(); 


?>