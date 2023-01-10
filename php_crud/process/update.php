<?php 
include('../database/db.php');
if (isset($_GET['id'])) {
  $id=$_GET['id'];
  $query= "SELECT * FROM prueva_user WHERE id_user = $id";
  $result = mysqli_query($conection,$query);
if (mysqli_num_rows($result)==1) {
  $row = mysqli_fetch_array($result);
  $nombre = $row['nomAdre'];
  $correo  = $row['correo'];
 
}
}
if (isset($_POST['update'])) {
  $id = $_GET['id'];
$nomAdre=$_POST['nombre'];
$email=$_POST['email'];
$query = "UPDATE prueva_user set nomAdre = '$nomAdre', correo = '$email' WHERE id_user = $id"; 
mysqli_query($conection,$query); 

$_SESSION['mensaje']='actualizado correctamente';
$_SESSION['mensaje_type']= 'mensaje--green';

header("location: ../index.php");

}
?>

<?php include('../include/header.php'); ?>
<section class="formulario">
    <?php 
    if (isset($_SESSION['mensaje'])) {?>
    <div class="mensaje <?= $_SESSION['mensaje_type']; ?>">
         <p class='mendaje__text'>
        <?= $_SESSION['mensaje']; ?> 
        </p>
      </div>
    <?php  session_unset(); }?>

      <h1 class='formulario__titel'>Registro</h1>
      
      <form action="update.php?id=<?php echo $_GET['id'] ?>" method='POST' class='formulario__form'>
      <div class="formulario__contenInput">
      <input type="text" class='formulario__inputs' name='nombre' value="<?php echo $nombre ?>"> 
      </div>
       <div class="formulario__contenInput">
      <input type="email" class='formulario__inputs' name='email' value="<?php echo $correo ?>"> 
      </div>
      <button type='sumbmit' class='formulario__button' name='update'>actualizar</button>
      </form>
    </section>
<?php include('../include/footer.php');?>