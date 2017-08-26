<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="format-detection" content="telephone=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="css/bootstrap-theme.css">
  <link rel="stylesheet" href="css/font-awesome.min.css">


  <title>E</title>
  <style>
    .panel-title a{display:block;text-transform: capitalize;text-decoration: none;}
  </style>
</head>
<body>

<main  class="container">

<h1>Armado</h1>
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">



        <?php

          // agregar directorios a escanear
          $dir1 = "../gasco";



          $i = 1;
          $dir = array($dir1);

          foreach ($dir as $dire) {
        // abre el directorio
        $myDirectory = opendir($dire);
        $name = substr($dire, 2);

        // Escanea los archivos
        while($entryName = readdir($myDirectory)) {
          $dirArray[] = $entryName;
        }

        // Cierra el directorio
        closedir($myDirectory);

        //	Coloca los archivos en un array
        $indexCount	= count($dirArray);
        // Ordenar
        sort($dirArray);

        // Imprimir
        print("\n");
        print("<div class='panel panel-default'>
          <div class='panel-heading' role='tab' id='heading".$i."'>
          <h4 class='panel-title'>
          <a data-toggle='collapse' data-parent='#accordion' href='#collapse".$i."' aria-expanded='false' aria-controls='collapse".$i."'>paginas</a>
          </h4>
          </div><div id='collapse".$i."' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='heading".$i."'><div class='panel-body'>
          <ul>");



          //areglo de extensiones permitidas
          $arr_exts=array("html");

          //definimos el path de acceso
          $path = "../gasco";

          //abrimos el directorio
          $dir = opendir($path);

          //Mostramos las informaciones
          foreach ($dirArray as $key => $elemento) {

             $ext=substr($elemento,-4);
             if(($elemento!='.') && ($elemento!='..') && in_array($ext,$arr_exts))
             {
                echo '<li><a target="_blank" href="'.$path.'/'.$elemento.'">'.$elemento.'</a></li>';


             }
          }

          //Cerramos el directorio
          closedir($dir);



        print(" </ul></div></div></div>");
      }
    ?>




</div>

</main>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

  </body>
</html>
