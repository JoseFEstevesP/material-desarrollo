<?php 
include('../database/db.php');
if (isset($_POST['registrar'])) {
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['email'];
$query = "INSERT INTO prueva_user(nomAdre, correo) VAlUE('$nombre $apellido', '$correo')";
$result = mysqli_query($conection, $query);
if (!$result) {
  die('query fallido');
}
$_SESSION['mensaje']='guardoado correctamente';
$_SESSION['mensaje_type']= 'mensaje--green';

header("location: ../index.php");
}
?>