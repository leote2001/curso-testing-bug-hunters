export default function Card4() {
  return (
    <div className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn" style={{ minHeight: '60vh' }}>
      <div className="card border-dark shadow-lg w-75">
        <div className="card-header bg-dark text-white text-center py-3">
          <h5 className="mb-0 text-uppercase fw-bold">Resumen: HU 003</h5>
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
                <td className="ps-4 fw-bold text-primary">Registro Nuevo</td>
                <td>Usuario/Pass Alfanumérico</td>
                <td className="text-center">
                  <span className="badge bg-success">Registro exitoso</span>
                </td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold text-primary">Registro Duplicado / fallido</td>
                <td>Usuario ya existente / datos inválidos</td>
                <td className="text-center">
                  <span className="badge bg-danger">Alerta / error</span>
                </td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold text-success">Login Correcto</td>
                <td>Credenciales correctas</td>
                <td className="text-center">
                  <span className="badge bg-success">Inicia sesión</span>
                </td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold text-success">Login Fallido</td>
                <td>Usuario no registrado o credenciales incorrectas</td>
                <td className="text-center">
                  <span className="badge bg-warning text-dark">Error de Acceso</span>
                </td>
              </tr>
              {/* Nueva fila de Logout */}
              <tr>
                <td className="ps-4 fw-bold text-danger">Logout</td>
                <td>Usuario logueado</td>
                <td className="text-center">
                  <span className="badge bg-info text-dark">Cierre de sesión</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer bg-light py-3">
          <div className="d-flex justify-content-around small">
            <span><strong>Regla:</strong> 8 a 150 caracteres</span>
            <span>|</span>
            <span><strong>Seguridad:</strong> Claves Encriptadas</span>
          </div>
        </div>
      </div>
    </div>
  );
}