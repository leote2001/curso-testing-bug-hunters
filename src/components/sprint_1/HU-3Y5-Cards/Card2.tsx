export default function Card2() {
  return (
    <div className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn" style={{ minHeight: '60vh' }}>
      <div className="card border-secondary shadow-lg w-75">
        <div className="card-header bg-light">
          <h5 className="mb-0 text-secondary text-uppercase" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
            Contexto del Proyecto
          </h5>
        </div>
        <div className="card-body py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="card-title fw-bold mb-4">🛒 Sistema: Product Store</h2>
              <p className="lead">
                Se trata de una plataforma web diseñada para la <strong>gestión de venta de productos electrónicos</strong>.
              </p>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item bg-transparent border-0 ps-0">
                  ✅ <strong>Finalidad:</strong> Gestionar la venta web y transacciones de compra.</li>
                <li className="list-group-item bg-transparent border-0 ps-0">
                  ✅ <strong>Interfaz:</strong> Secciones de Cabecera, Home con categorías y Pie de página.</li>
                <li className="list-group-item bg-transparent border-0 ps-0">
                  ✅ <strong>Catálogo:</strong> Visualización de productos como teléfonos, laptops y monitores.</li>
              </ul>
            </div>
            <div className="col-md-5 text-center d-none d-md-block">
              {/* Icono representativo o placeholder */}
              <div className="p-4 bg-light rounded-circle d-inline-block shadow-sm">
                <i className="bi bi-laptop-fill text-primary" style={{ fontSize: '4rem' }}></i>
                <span className="display-1 text-primary">💻</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer bg-transparent">
          <small className="text-muted">Alcance del Sprint 1: Seguridad (Logueo) y Comunicación (Contacto)</small>
        </div>
      </div>
    </div>
  );
}