
	
<?php
$URL_link = utf8_decode($_POST['url']);
$nombre = utf8_decode($_POST['Nombre']);
$empresa = utf8_decode($_POST['Empresa']);
$correo = utf8_decode($_POST['Correo']);
$Telefono = utf8_decode($_POST['Telefono']);
$estado = utf8_decode($_POST['Estado']);
$asunto = utf8_decode($_POST['Asunto']);
$mensaje = utf8_decode($_POST['Mensaje']);
$reply = $correo;
$bcc = 'neftaliacosta@outlook.com';


$cabeceras = 'From:'.$correo . "\r\n" .
			 'Reply-To: '.$reply. "\r\n" .
			 'Bcc: '.$bcc. "\r\n" .
			 'X-Mailer: PHP/' . phpversion();
			 $email_to = "neftaliacosta@outlook.com";
			 
$contenido = "Un prospecto se ha contactado a través del sitio $URL_link"
. "\n"
. "Nombre: $nombre \n"
. "Empresa: $empresa \n"
. "E-mail: $correo \n"
. "Teléfono: $Telefono \n"
. "Estado/Cuidad: $estado \n"
. "Asunto: $asunto \n"
. "Mensaje: $mensaje \n"
 
."\n"
."\n"
;


if ( (trim($correo)=="")){
	die(":From:");

}
else {
  mail($email_to, $asunto ,$contenido ,$cabeceras) ;
  echo "Mensaje enviado correctamente";
}
 
	
?>