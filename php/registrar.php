<!--<?php
//Conexion con bases de datos
//include("con_bd.php");

if (isset($_POST['register'])) {
    if (
        strlen($_POST['nombre1']) >= 1 && strlen($_POST['nombre2']) >=  1 &&
        strlen($_POST['apellido1']) >= 1 && strlen($_POST['apellido2']) >=  1 &&
        strlen($_POST['tipo_sexo']) >= 1 && strlen($_POST['documento']) >=  1 &&
        strlen($_POST['tipo_documento']) >= 1 && strlen($_POST['nacionalidad']) >=  1 &&
        strlen($_POST['email']) >= 1 && strlen($_POST['password']) >=  1 &&
        strlen($_POST['password2']) >= 1 && strlen($_POST['tipo_rol']) >=  1 &&
        strlen($_POST['celular']) >= 1) {
        $nombre1 = trim($_POST['nombre1']);
        $nombre2 = trim($_POST['nombre2']);
        $apellido1 = trim($_POST['apellido1']);
        $apellido2 = trim($_POST['apellido2']);
        $tipo_sexo = trim($_POST['tipo_sexo']);
        $documento = trim($_POST['documento']);
        $tipo_documento = trim($_POST['tipo_documento']);
        $nacionalidad = trim($_POST['nacionalidad']);
        $email = trim($_POST['email']);
        $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
        $password2 = password_hash($_POST['password2'], PASSWORD_BCRYPT);
        $tipo_rol = trim($_POST['tipo_rol']);
        $celular = trim($_POST['celular']);
        $fechareg = date("d/m/y");
        if (isset($_POST['register'])){
            $nombre1 = $_POST['nombre1'];
            $nombre2 = $_POST['nombre2'];
            $password1 = $_POST['password'];
            $email = $_POST['email'];
                
        $campos = array();
        if ($nombre1 == "") {
            array_push($campos, "El campo nombre no puede estar vacio");
        }
        if ($nombre2 == "" || strlen($nombre2) < 5) {
            array_push($campos, "El campo nombre2 no puede estar vacio");
        }

        if ($password1 == "" || strlen($password1) < 6) {
            array_push($campos, "El campo password no puede tener menos de 6 caracteres");
        }
        if ($email == "" || strpos($email, "@") === false) {
            array_push($campos, "Ingresa un correo electrónico valido");
        }

        if (count($campos) > 0) {
            echo "<div class='error'>";
            for ($i = 0; $i < count($campos); $i++) {
                echo "<li>" . $campos[$i] . "</i>";
            }
        } else {
            $consulta = "INSERT INTO usuarios(nombre1, nombre2, apellido1, apellido2, tipo_sexo, documento,tipo_documento, nacionalidad, email, password, password2,tipo_rol, celular, fecha_reg) VALUES ('$nombre1','$nombre2','$apellido1','$apellido2','$tipo_sexo','$documento','$tipo_documento','$nacionalidad','$email','$password','$password2','$tipo_rol','$celular','$fechareg')";
            $resultado = mysqli_query($conex, $consulta);
            echo "<div class='correcto'>Datos correctos";
        
        if ($resultado) {
        ?>
            <h3 class="ok">Te has registrado correctamente</h3>
        <?php
        } else {
        ?>
            <h3 class="bad">¡Por favor complete los campos!</h3>
        <?php
            echo "</div>";
        }
    } 
        ?>

<?php
    }
    
}
}

?>