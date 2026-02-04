export default function Card5() {
  return (
    <div className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn" style={{ minHeight: '60vh' }}>
      <div className="card border-primary shadow-lg w-100 mx-4">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center py-3">
          <h5 className="mb-0 text-uppercase fw-bold">Ejecución de Casos de Prueba: HU_003</h5>
          
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
                {/* Registro Web */}
                <tr>
                  <td className="text-center fw-bold">CP_1</td>
                  <td><strong>Registro web</strong></td>
                  <td>Registro exitoso con datos alfanuméricos válidos.</td>
                  <td className="text-center"><span className="badge bg-dark">ALTA</span></td>
                  <td className="text-center fw-bold text-success">PASO</td>
                </tr>
                {/* Datos Inválidos */}
                <tr>
                  <td className="text-center fw-bold">CP_2</td>
                  <td><strong>Registro fallido (Datos inválidos)</strong></td>
                  <td>El sistema impide el registro con campos incompletos o datos inválidos.</td>
                  <td className="text-center"><span className="badge bg-dark">ALTA</span></td>
                  <td className="text-center fw-bold text-danger">FALLO</td>
                </tr>
                {/* Cancelación */}
                <tr>
                  <td className="text-center fw-bold">CP_3</td>
                  <td><strong>Cancelar registro</strong></td>
                  <td>Se regresa a la página anterior y no se registra usuario.</td>
                  <td className="text-center"><span className="badge bg-secondary">MEDIA</span></td>
                  <td   className="text-center fw-bold text-success">PASO</td>
                </tr>
                {/* Login */}
                <tr>
                  <td className="text-center fw-bold">CP_4</td>
                  <td><strong>Login Usuario</strong></td>
                  <td>Usuario inicia sesión.</td>
                  <td className="text-center"><span className="badge bg-dark">ALTA</span></td>
                  <td className="text-center fw-bold text-success">PASO</td>
                </tr>
                <tr>
                  <td className="text-center fw-bold">CP_5</td>
                  <td><strong>Login fallido (Datos inválidos)</strong></td>
                  <td>Verificar que se rechace el logueo del usuario cuando se ingresan credenciales incorrectas.</td>
                  <td className="text-center"><span className="badge bg-dark">ALTA</span></td>
                  <td className="text-center fw-bold text-danger">FALLO</td>
                </tr>
                
                {/* Logout */}
                <tr>
                  <td className="text-center fw-bold">CP_6</td>
                  <td><strong>Cerrar sesión (Log out)</strong></td>
                  <td>Verificar que se cierra sesión</td>
                  <td className="text-center"><span className="badge bg-secondary">MEDIA</span></td>
                  <td className="text-center fw-bold text-success">PASO</td>
                </tr>
                {/* Accesibilidad */}
                <tr className="table-info">
                  <td className="text-center fw-bold">CP_7</td>
                  <td><strong>Verificación de Accesibilidad</strong></td>
                  <td>Lectura correcta de campos requeridos por lector de pantalla.</td>
                  <td className="text-center"><span className="badge bg-dark">Media</span></td>
                  <td className="text-center fw-bold text-danger">FALLO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer bg-light py-2">
          <div className="d-flex justify-content-around small">
            <span><strong>Total:</strong> 7</span>
            <span className="text-success"><strong>Paso:</strong> 4</span>
            <span className="text-danger"><strong>Fallo:</strong> 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}