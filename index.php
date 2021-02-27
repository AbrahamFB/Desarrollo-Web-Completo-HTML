<?

/////////////ENLISTAR LOS FICHEROS EXISTENTES///////////////////////////////////////////////
$listar = null;
$directorio=opendir("Portafolio/");

while ($elemento = readdir($directorio))
{
  if ($elemento != '.' && $elemento != '..')
  {
  if (is_dir("Portafolio/".$elemento))
  {
    $listar .="<a class=' col-md-6' href='Portafolio/$elemento' target='_blank'> 
    $elemento/</a>
    <br><br>";
  }
  else
  {
     $listar .="<a class=' col-md-6' href='Portafolio/$elemento' target='_blank'> 
    $elemento</a>
    <br><br>";
  }
  }
}

/////////////////////////7 SUBIR UN NUEVO FICHERO /////////////////////////////////////////////
if ($_POST["subir"] == "Cargar archivo")
{
$folder = "Portafolio/";
move_uploaded_file($_FILES["formato"]["tmp_name"] , "$folder".$_FILES["formato"]["name"]);
echo "
<div class='alert alert-success'><p class='hidd' align=center>El archivo  ".$_FILES["formato"]["name"]." se ha cargado correctamente. <a href='index.php' class='btn btn-default'>Cliqué aquí </a> para verificar.</div>";
}

/////////////////////////////// BORRAR ARCHIVO ////////////////////////////////////

$borrarFor=($_POST['borrarFor']);
if (isset($_POST['borrar']))
{
@unlink('Portafolio/'.$borrarFor);
echo "
<div class='alert alert-danger'><p class='hidd' align=center>El archivo  ".$_FILES["formato"]["name"]." ha sido eliminado correctamente. <a href='index.php' class='btn btn-default'>Cliqué aquí </a> para verificar.</div>";
}
?>


<html lang="es">

<head>
  <title>Mi portafolio sobre desarrollo web</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

  <link href="css/estilos.css" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

</head>

<body>
  <header>
    <div class="alert alert-info">
      <h2>Portafolio</h2>
    </div>
  </header>

  <div class="col-md-offset-4">
    <?
echo $listar;
?>
  </div>

</body>

</html>