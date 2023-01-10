<?php 
class homeModel extends Mysql
{
  public function __construct()
    {
      parent::__construct();
    }
  public function setuser(string $nombre,int $edad)
  {
    $query_inset="INSERT INTO usuario(nombre,edad) VALUE (?,?)";
    $arrayData=array($nombre,$edad);
    $request_insert = $this->insert($query_inset,$arrayData);
    return $request_insert;
  }
  public function getUser($id)
  {
    $query_select="SELECT * FROM usuario WHERE id = $id";
    $request_select=$this->select($query_select);
    return $request_select;
  }
  public function updateUser(int $id, string $nombre , int $edad)
  {
    $query_update="UPDATE usuario SET nombre = ? ,edad = ? WHERE id = $id";
    $arrayData=array($nombre,$edad);
    $request_update = $this->update($query_update,$arrayData);
    return $request_update;
  }
  public function getUsers()
  {
    $query_selectAll="SELECT * FROM usuario";
    $request_selectAll=$this->selectAll($query_selectAll);
    return $request_selectAll;
  }
  public function deleteUser(int $id)
  {
    $query_delete="DELETE FROM usuario WHERE id = $id";
     $request_delete=$this->delete($query_delete);
    return $request_delete;
  }
}  
?>