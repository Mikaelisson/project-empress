import { useState } from "react";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [items, setItem] = useState([
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Solutions",
      path: "#solutions",
    },
    {
      name: "Who we are",
      path: "#about",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ]);

  return (
    <header className="d-flex justify-content-center">
      <div className="d-flex justify-content-between align-items-center py-3 py-sm-4 w-75">
        <h1>
          <a className="text-decoration-none" href="/">
            Empress
          </a>
        </h1>

        <div className="d-lg-none">
          <div className="dropdown" onClick={() => setMenu(!menu)}>
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {menu ? (
                <MdOutlineMenuOpen
                  style={{ width: "25px", height: "25px" }}
                  className="ps-1"
                />
              ) : (
                <MdOutlineMenu
                  style={{ width: "25px", height: "25px" }}
                  className="ps-1"
                />
              )}
            </button>

            <ul className="dropdown-menu">
              {items.map((item, index) => {
                return (
                  <li key={index} className="">
                    <a
                      className="text-decoration-none list-style-none btn btn-primary dropdown-item"
                      href={item.path}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="d-none d-sm-none d-md-none d-lg-flex">
          <ul className="d-flex gap-2 my-auto" style={{ listStyle: "none" }}>
            {items.map((item, index) => {
              return (
                <li key={index} className="">
                  <a className="btn btn-primary" href={item.path}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
