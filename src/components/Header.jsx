import { useNavigate } from "react-router-dom";

export default function Header({ cartProducts }) {
  const navigate = useNavigate();

  return (
    <div id="header">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container d-flex align-items-center">
          <a className="navbar-brand" onClick={() => navigate("/")}>
            Movie App
          </a>

          <form className="d-flex ms-auto me-2">
            <input
              type="search"
              className="form-control me-1"
              placeholder="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <button
            type="button"
            className="btn btn-outline-light position-relative"
            onClick={() => navigate("/cart")}
          >
            <i className="bi bi-cart"></i>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartProducts.length}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
