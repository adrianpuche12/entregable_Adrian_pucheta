import React from 'react';

function Dates({ datos }) {

    return (
        <div>
            {datos.map((dato, index) => (
                <div key={index} className="card">
                    <h2>felicitaciones te registrarte exitosamente!!</h2>
                    <table>
                        <tr>
                            <th>nombre</th>
                            <th>apellido</th>
                            <th>edad</th>
                        </tr>
                        <tr>
                            <td>{dato.nombre}</td>
                            <td>{dato.apellido}</td>
                            <td>{dato.edad}</td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default Dates;
