import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-dark text-light">
        <div className="container">
          <a className="navbar-brand text-light fw-bold">
            <span>
              <img
                src="https://www.mcdonalds.eg/Cms_Data/Contents/En/Media/images/logo20.png"
                alt="menu logo m"
                style={{ height: "50px", width: "50px", marginRight: "10px" }}
              />
            </span>
            <span className="fw-bold fs-4 text-warning">Menu</span>
          </a>

          <form className="d-flex" role="search">
            <input
              className="form-control m-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
