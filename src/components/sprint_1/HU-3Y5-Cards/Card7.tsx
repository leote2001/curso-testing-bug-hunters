export default function Card7() {
  return (
    <div
      className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn"
      style={{ minHeight: "60vh" }}
    >
      <div className="card border-dark shadow-lg w-75">
        <div className="card-header bg-dark text-white text-center py-3">
          <h5 className="mb-0 text-uppercase fw-bold">
            Resumen: HU 005 – Contacto con la Empresa
          </h5>
        </div>

        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr className="text-center">
                <th className="py-3">Escenario</th>
                <th className="py-3">Criterio de Aceptación</th>
                <th className="py-3">Resultado Esperado</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="ps-4 fw-bold text-primary">
                  Contacto Usuario Registrado
                </td>
                <td>Datos correctos y confirmación</td>
                <td className="text-center">
                  <span className="badge bg-success">
                    Envío de información
                  </span>
                </td>
              </tr>

              <tr>
                <td className="ps-4 fw-bold text-primary">
                  Contacto Registrado – Datos inválidos
                </td>
                <td>Datos incorrectos</td>
                <td className="text-center">
                  <span className="badge bg-danger">
                    No se envía información
                  </span>
                </td>
              </tr>

              <tr>
                <td className="ps-4 fw-bold text-success">
                  Contacto Usuario No Registrado
                </td>
                <td>Datos correctos y confirmación</td>
                <td className="text-center">
                  <span className="badge bg-success">
                    Envío de información
                  </span>
                </td>
              </tr>

              <tr>
                <td className="ps-4 fw-bold text-success">
                  Contacto No Registrado – Datos inválidos
                </td>
                <td>Datos incorrectos</td>
                <td className="text-center">
                  <span className="badge bg-danger">
                    No se envía información
                  </span>
                </td>
              </tr>

              <tr>
                <td className="ps-4 fw-bold text-warning">
                  Cancelación de Contacto
                </td>
                <td>Usuario cancela la operación</td>
                <td className="text-center">
                  <span className="badge bg-secondary">
                    No se envía información
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card-footer bg-light py-3">
          <div className="d-flex justify-content-around small">
            <span>
              <strong>Validación:</strong> Datos obligatorios
            </span>
            <span>|</span>
            <span>
              <strong>Acción:</strong> Confirmar / Cancelar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
