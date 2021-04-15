<?php

class Usuario
{
    public $nombre;
    public $apellido;
    public $documento;
    public $tipo_documento;
    public $rol;
    private $correo;
    private $password;
    private $password2;
    public function __construct($nom, $ap, $doc, $tip_doc, $rol)
    {

        $this->nombre = $nom;
        $this->apellido  = $ap;
        $this->documento = $doc;
        $this->tipo_documento = $tip_doc;
        $this->rol = $rol;
    }

    public function setCorreo($cr)
    {

        $this->correo = $cr;
    }

    public function getCorreo()
    {
        return $this->correo;
    }



    public function setPassword($pass)
    {

        $this->password = hash('sha512',$pass);
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword2($pass2)
    {

        $this->password2 = $pass2;
    }

    public function getPassword2()
    {
        return $this->password2;
    }
}
