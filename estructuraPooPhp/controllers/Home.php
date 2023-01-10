<?php 
class Home extends Controllers
{
  public function __construct()
  {
    parent::__construct();
  }
  public function home()
  {
    $data['titulo'] = "Home";
    $data['content'] = "contet home";
    $data['subonten'] = "sub content";
    $this->Views->getView($this,"home", $data);
  }
  public function insertar()
  {
    $data = $this->model->setuser("ale",20);
    print_r($data);
  }
  public function verUser($id)
  {
    $data= $this->model->getUser($id);
    print_r($data);
  }
  public function actualizarUser()
  {
    $data=$this->model->updateUser(1,"ale",20);
    print_r($data);
  }
  public function verTodosUser()
  {
    $data= $this->model->getUsers();
    print_r($data);
  }
  public function eliminarUser($id)
  {
    $data= $this->model->deleteUser($id);
    print_r($data);
  }
}
?>