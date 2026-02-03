export default function Card6() {
  return (
    <div
      className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn"
      style={{ minHeight: "60vh" }}
    >
      <div className="card border-success shadow-lg w-75">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0 text-uppercase">
            Análisis Técnico: Historia de Usuario 005
          </h5>
        </div>

        <div className="card-body">
          <h3 className="card-title h4 mb-4">
            Contacto a Empresa
          </h3>

          {/* Validaciones del Formulario */}
          <div className="mb-4">
            <h4 className="h6 fw-bold text-success mb-2">
              📝 Campos del Formulario
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item small">
                <strong>Email:</strong> Formato válido <em>xx@rr.com</em>
              </li>
              <li className="list-group-item small">
                <strong>Contact Name:</strong> Hasta 20 caracteres alfanuméricos
              </li>
              <li className="list-group-item small">
                <strong>Message:</strong> Alfanumérico, hasta 250 caracteres
              </li>
              <li className="list-group-item small text-muted italic">
                * Email y mensaje obligatorios 
              </li>
            </ul>
          </div>

          <div className="row">
            {/* Rama Usuario Registrado */}
            <div className="col-md-6 border-end">
              <h4 className="h6 fw-bold text-success text-center mb-3">
                👤 Usuario Registrado
              </h4>

              <ul className="list-group list-group-flush">
                <li className="list-group-item small">
                  <strong>Datos válidos:</strong> Permite avanzar al paso de confirmación.
                </li>
                <li className="list-group-item small">
                  <strong>Confirmar:</strong> Se realiza el envío del contacto.
                </li>
                <li className="list-group-item small">
                  <strong>Cancelar:</strong> No se envía la información.
                </li>
                <li className="list-group-item small text-muted italic">
                  * Datos no válidos: el flujo se interrumpe.
                </li>
              </ul>
            </div>

            {/* Rama Usuario No Registrado */}
            <div className="col-md-6">
              <h4 className="h6 fw-bold text-success text-center mb-3">
                👥 Usuario No Registrado
              </h4>

              <ul className="list-group list-group-flush">
                <li className="list-group-item small">
                  <strong>Datos válidos:</strong> Puede continuar con la confirmación.
                </li>
                <li className="list-group-item small">
                  <strong>Confirmar:</strong> Se envía el mensaje a la empresa.
                </li>
                <li className="list-group-item small">
                  <strong>Cancelar:</strong> No se genera el envío.
                </li>
                <li className="list-group-item small text-muted italic">
                  * Datos no válidos: el sistema cancela el proceso.
                </li>
              </ul>
            </div>
          </div>

          <div className="alert alert-light border mt-3 mb-0">
            <strong>💡 Enfoque del Árbol:</strong>  
            La validación de los campos del formulario determina si los datos
            son correctos. Solo con datos válidos y confirmación se ejecuta el
            envío, tanto para usuarios registrados como no registrados.
          </div>
        </div>

        <div className="card-footer bg-transparent text-end text-muted small">
          Técnica: Árbol Jerárquico de Decisiones
        </div>
      </div>
    </div>
  );
}
