export default function Card1() {
  return (
    <div className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn" style={{ minHeight: '60vh' }}>
      <div className="card border-primary shadow-lg w-75">
        <div className="card-body py-5 text-center">
          {/* Badge de identificación del Sprint */}
          <span className="badge rounded-pill bg-primary mb-3 p-2 px-4">
            Sprint 1</span>
          
          {/* Título Principal */}
          <h1 className="display-4 fw-bold text-dark mb-3">
            Presentación de Testing Funcional
          </h1>
          
          <hr className="mx-5 mb-4" />

          {/* Subtítulo con las Historias de Usuario */}
          <div className="mb-4">
            <h3 className="text-secondary h5 mb-3">Historias de Usuario en Alcance:</h3>
            <div className="d-flex justify-content-center gap-2">
              <span className="badge bg-light text-dark border">003: Logueo y Registro</span>
              <span className="badge bg-light text-dark border">005: Contacto</span>
            </div>
          </div>

          {/* Nombre del equipo */}
          <div className="mt-5">
            <p className="lead mb-1">Equipo de QA:</p>
            <h2 className="h4 fw-bold text-primary">🛡️ Bug Hunters</h2>
          </div>
        </div>
        
        {/* Footer de la Card con info del proyecto */}
        <div className="card-footer bg-transparent text-muted">
          Proyecto: Products Store 
        </div>
      </div>
    </div>
  );
}