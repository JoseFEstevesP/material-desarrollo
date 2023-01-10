<?php 
include('../database/db.php');

if (isset($_GET['id'])) {
$id = $_GET['id'];
$query = "DELETE FROM prueva_user WHERE id_user = $id";
$result = mysqli_query($conection, $query);
if (!$result) {
  die('query fallido');
}
$_SESSION['mensaje']='eliminado correoctamente';
$_SESSION['mensaje_type']= 'mensaje--red';
header("location: ../index.php");
}
?>