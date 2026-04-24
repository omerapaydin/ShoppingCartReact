export default function Cart({ cartProducts }) {
  return (
    <div className="container mt-4">
      <h1>Sepetim</h1>

      {cartProducts.length === 0 ? (
        <p>Sepet boş</p>
      ) : (
        cartProducts.map((p) => (
          <div key={p.id}>
            <h5>{p.baslik}</h5>
          </div>
        ))
      )}
    </div>
  );
}
