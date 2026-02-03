export default function Card8() {
  return (
    <div
      className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn"
      style={{ minHeight: '60vh' }}
    >
      <div className="card border-primary shadow-lg w-100 mx-4">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center py-3">
          <h5 className="mb-0 text-uppercase fw-bold">
            Ejecución de Casos de Prueba: HU_005 – Contacto con la Empresa
          </h5>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-bordered mb-0 align-middle">
              <thead className="table-dark">
                <tr className="text-center">
                  <th style={{ width: '80px' }}>ID</th>
                  <th>Título del Caso de Prueba</th>
                  <th>Resultado Esperado</th>
                  <th>Prioridad</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody className="small">
                {/* Contacto Usuario Registrado */}
                <tr>
                  <td className="text-center fw-bold">CP_1</td>
                  <td><strong>Contacto con la empresa – Usuario registrado</strong></td>
                  <td>
                    El sistema permite enviar el mensaje con datos válidos y confirma el envío.
                  </td>
                  <td className="text-center">
                    <span className="badge bg-dark">ALTA</span>
                  </td>
                  <td className="text-center fw-bold text-success">PASO</td>
                </tr>

                {/* Contacto Usuario No Registrado */}
                <tr>
                  <td className="text-center fw-bold">CP_2</td>
                  <td><strong>Contacto con la empresa – Usuario no registrado</strong></td>
                  <td>
                    El sistema permite el envío del mensaje e identifica al usuario como no registrado.
                  </td>
                  <td className="text-center">
                    <span className="badge bg-dark">ALTA</span>
                  </td>
                  <td className="text-center fw-bold text-success">PASO</td>
                </tr>

                {/* Datos inválidos */}
                <tr>
                  <td className="text-center fw-bold">CP_3</td>
                  <td><strong>Contacto fallido (Datos inválidos)</strong></td>
                  <td>
                    El sistema bloquea el envío y muestra mensajes de error.
                  </td>
                  <td className="text-center">
                    <span className="badge bg-dark">ALTA</span>
                  </td>
                  <td className="text-center fw-bold text-danger">FALLO</td>
                </tr>

                {/* Cancelar envío */}
                <tr>
                  <td className="text-center fw-bold">CP_4</td>
                  <td><strong>Cancelar envío de mensaje</strong></td>
                  <td>
                    Al presionar “Close”, el mensaje no se envía y se cierra el formulario.
                  </td>
                  <td className="text-center">
                    <span className="badge bg-secondary">MEDIA</span>
                  </td>
                  <td className="text-center fw-bold text-success">PASO</td>
                </tr>

                {/* Accesibilidad */}
                <tr className="table-info">
                  <td className="text-center fw-bold">CP_5</td>
                  <td><strong>Verificación de accesibilidad del formulario de contacto</strong></td>
                  <td>
                    Los campos, etiquetas, mensajes de error y botones son correctamente
                    interpretados por lectores de pantalla.
                  </td>
                  <td className="text-center">
                    <span className="badge bg-dark">ALTA</span>
                  </td>
                  <td className="text-center fw-bold text-success">PASO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-footer bg-light py-2">
          <div className="d-flex justify-content-around small">
            <span><strong>Total:</strong> 5</span>
            <span className="text-success"><strong>Paso:</strong> 4</span>
            <span className="text-danger"><strong>Fallo:</strong> 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
