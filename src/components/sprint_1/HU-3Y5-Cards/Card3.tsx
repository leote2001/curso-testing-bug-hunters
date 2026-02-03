export default function Card3() {
  return (
    <div className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn" style={{ minHeight: '60vh' }}>
      <div className="card border-info shadow-lg w-75">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0 text-uppercase">Análisis Técnico: Historia de Usuario 003</h5>
        </div>
        <div className="card-body">
          <h3 className="card-title h4 mb-4">Registro y Logueo de Usuarios</h3>
          
          <div className="row">
            {/* Rama de Registro */}
            <div className="col-md-6 border-end">
              <h4 className="h6 fw-bold text-primary text-center mb-3">📂 Módulo: Registro (Sign Up)</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item small">
                  <strong>Username:</strong> Alfanumérico, hasta 150 caracteres.
                </li>
                <li className="list-group-item small">
                  <strong>Password:</strong> 8-150 caracteres, alfanumérico, debe incluir letras y números.
                </li>
                <li className="list-group-item small text-muted italic">
                  * Validación: Campos obligatorios y encriptación de clave.
                </li>
              </ul>
            </div>

            {/* Rama de Logueo */}
            <div className="col-md-6">
              <h4 className="h6 fw-bold text-primary text-center mb-3">📂 Módulo: Acceso (Log In)</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item small">
                  <strong>Verificación de Credenciales:</strong> Cruce de datos con usuarios registrados.
                </li>
                <li className="list-group-item small">
                  <strong>Estado de Sesión:</strong> Mostrar usuario en cabecera tras éxito.
                </li>
                 </ul>
                 <strong>Cierre:</strong> Botón "Log out" con confirmación de salida.
            </div>
          </div>

          <div className="alert alert-light border mt-3 mb-0">
            <strong>💡 Enfoque del Árbol:</strong> Desglosamos las reglas de negocio en nodos de validación positiva (datos válidos) y negativa (datos incorrectos/ya existentes).
          </div>
        </div>
        <div className="card-footer bg-transparent text-end text-muted small">
          Técnica: Árbol Jerárquico de Decisiones
        </div>
      </div>
    </div>
  );
}