export default function Product({ productObj, setCartProducts, cartProducts }) {
  return (
    <div className="col">
      {productObj.is_active && (
        <div className="card product position-relative">
          <img
            src={"/img/" + productObj.image}
            alt=""
            className="card-img-top object-fit-cover"
            style={{ height: "300px" }}
          />
          <div className="card-body">
            <h2 className="h6 card-title">{productObj.baslik}</h2>

            {
              <button
                className="btn btn-link fs-5 text-danger position-absolute top-0 start-0"
                onClick={() => {
                  setCartProducts((prev) => {
                    const exists = prev.some((p) => p.id === productObj.id);

                    if (exists) return prev;

                    return [...prev, productObj];
                  });
                }}
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            }
          </div>
        </div>
      )}
    </div>
  );
}
