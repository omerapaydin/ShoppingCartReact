import React from "react";
import Product from "./Product.jsx";

export default function ProductList({ products }) {
  return (
    <div className="container my-3">
      <div className="card">
        <div className="card-header">
          <h2 className="title h5 mb-0">Products</h2>
        </div>
        <div className="card-body">
          {products.filter((p) => p.is_active).length == 0 ? (
            <div>Ürün bulunamadı</div>
          ) : (
            <div
              id="product-list"
              className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
            >
              {products.map((p, index) => (
                <Product key={index} productObj={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
