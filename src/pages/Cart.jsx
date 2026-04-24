export default function Cart({ cartProducts }) {
  const totalItems = cartProducts.length;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">🛒 Sepetim</h4>
          <span className="badge bg-danger">{totalItems} ürün</span>
        </div>

        <div className="card-body">
          {cartProducts.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-cart-x display-1 text-muted"></i>
              <p className="mt-3 text-muted">Sepetiniz boş</p>
            </div>
          ) : (
            <div className="list-group">
              {cartProducts.map((p) => (
                <div
                  key={p.id}
                  className="list-group-item d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={"/img/" + p.image}
                      alt=""
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />

                    <div>
                      <h6 className="mb-1">{p.baslik}</h6>
                      <small className="text-muted">{p.aciklama}</small>
                    </div>
                  </div>

                  <button className="btn btn-sm btn-outline-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartProducts.length > 0 && (
          <div className="card-footer d-flex justify-content-between">
            <strong>Toplam Ürün: {totalItems}</strong>
            <button className="btn btn-success">Ödemeye Geç</button>
          </div>
        )}
      </div>
    </div>
  );
}
