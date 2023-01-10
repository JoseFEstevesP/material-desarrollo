<?php include('database/db.php' );
include('include/header.php');
?>
<main >
  <article class="main">
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
      <form action="process/creid.php" method='POST' class='formulario__form'>
      <div class="formulario__contenInput">
      <input type="text" class='formulario__inputs' name='nombre' placeholder='nombre'> 
      </div>
      <div class="formulario__contenInput">
      <input type="text" class='formulario__inputs' name='apellido' placeholder='apellidos'> 
      </div>
       <div class="formulario__contenInput">
      <input type="email" class='formulario__inputs' name='email' placeholder='email'> 
      </div>
      <button type='sumbmit' class='formulario__button' name='registrar'>Registrarse</button>
      </form>
    </section>
    <section class='tabel'>
      
      <table class='tabel__tab'>
        <caption class='tabel__titel'>Tabal de usuarios</caption>
        <thead class='tabel__head'>
          <tr>
            <th>Nombre y apellido</th>
              <th>Correo</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody class='tabel__body'>
         <?php 
         $query = "SELECT * FROM prueva_user";
         $result = mysqli_query($conection, $query);
         while ($row = mysqli_fetch_array($result)) {?>
          <tr>
            <td><?php echo $row['nomAdre'] ?></td>
            <td><?php echo $row['correo'] ?></td>
            <td>
           
              <a href="process/update.php?id=<?php echo $row['id_user'] ?>" class='tabel__update'><i class="fas fa-feather"></i></a>
              <a href="process/delit.php?id=<?php echo $row['id_user'] ?>" class='tabel__delite'><i class="far fa-trash-alt"></i></a>
            </td>
          </tr>
    
    <?php } ?>
         
        </tbody>
      </table>
    </section>
  </article>
</main> 
<?php 
include('include/footer.php');
 ?>