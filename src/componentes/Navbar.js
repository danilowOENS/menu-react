import React, { useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
    <div className="Navbar">
      <nav>

        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={menuAtivo ? "tiro1" : ""}></span>
          <span className={menuAtivo ? "tiro2" : ""}></span>
          <span className={menuAtivo ? "tiro3" : ""}></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <a href="/">Home</a>
        <a href="/">Chuchu</a>
        <a href="/">Pudim</a>
        <a href="/">Carro</a>
      </section>
    </div>
  );
};
export default Navbar;
