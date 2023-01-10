<?php 
class Mysql extends Conexion{
  private $conexion;
  private $strQuery;
  private $arrayValue;
  public function __construct()
  {
    $this->conexion =new Conexion();
    $this->conexion =$this->conexion->connect();
  }
  public function insert(string $query, array $arrayValue)
  {
    $this->strQuery=$query;
    $this->arrayValue = $arrayValue;
    $insert = $this->conexion->prepare($this->strQuery);
    $resInsert = $insert->execute($this->arrayValue);
    if ($resInsert) {
      $lastInsert = $this->conexion->lastInsertId();
    }else{
      $lastInsert = 0;
    }
    return $lastInsert;
  }
  public function select(string $query)
  {
    $this->strQuery=$query;
    $result=$this->conexion->prepare($this->strQuery);
    $result->execute();
    $data= $result->fetch(PDO::FETCH_ASSOC);
    return $data;
  }
   public function selectAll(string $query){
    $this->strQuery=$query;
    $result=$this->conexion->prepare($this->strQuery);
    $result->execute();
    $data= $result->fetchall(PDO::FETCH_ASSOC);
    return $data;
  }
  public function update(string $query, array $arrayValue)
  {
      $this->strQuery=$query;
    $this->arrayValue = $arrayValue;
    $update = $this->conexion->prepare($this->strQuery);
    $resExucute = $update->execute($this->arrayValue);
    return $resExucute;
  }
  public function delete(string $query)
  {
    $this->strQuery=$query;
    $result=$this->conexion->prepare($this->strQuery);
    $del = $result->execute();
    return $del;
  }

}
?>