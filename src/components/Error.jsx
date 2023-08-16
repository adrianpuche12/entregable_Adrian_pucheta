function Error({ errores }) {
    return (
        <div>
            {errores.map((er, index) => (
                <div key={index} className="error">
                    <h2>Por favor chequea que la información sea correcta</h2>
                </div>
            ))}
        </div>
    );
}

export default Error;