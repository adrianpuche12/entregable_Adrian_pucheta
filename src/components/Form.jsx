import { useState } from "react";

function Form({ onAddDatos, onAddErrores }) {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState();

    const [errornombre, setErrorombre] = useState("error en el nombre");
    const [errorapellido, setErrorpellido] = useState("error en apellido");
    const [erroredad, setErrordad] = useState("error en la edad");


    function validateUserName(nombre) {
        if (nombre.length > 2) {
            return true;
        }
        else {
            return false;
        }
    }

    function apellidoVacio(apellido) {
        if (apellido.length !== 0 && apellido.length >= 6) {
            return true;
        }
        else {
            return false;
        }
    }

    function validateAge() {
        if (edad >= 18) {
            return true
        } else {
            return false
        }
    }

    const validarNombre = validateUserName(nombre);
    const apellidoDate = apellidoVacio(apellido);
    const validarEdad = validateAge(edad);


    function handleNombre(e) {
        setNombre(e.target.value);
    }
    function handleApellido(e) {
        setApellido(e.target.value);
    }
    function handleEdad(e) {
        setEdad(e.target.value);
    }

    function registro(e) {
        e.preventDefault();

        if (validarNombre && validarEdad && apellidoDate) {
            setApellido("");
            setNombre("");
            setEdad(0);
            onAddDatos({ nombre, apellido, edad })
        } else {
            onAddErrores({ errornombre, errorapellido, erroredad })
        }
    }
    return (
        <div className="form">
            <h2>Register</h2>
            <form onSubmit={registro}>
                <div>
                    <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={handleNombre} />
                    <br />
                    <input type="text" placeholder="Ingrese su apellido" value={apellido} onChange={handleApellido} />
                    <br />
                    <input type="number" placeholder="Ingrese su edad" value={edad} onChange={handleEdad} />
                    <br />
                    <input className="botonEnviar" type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Form;