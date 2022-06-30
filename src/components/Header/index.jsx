import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header container" role="banner">
      <div className="header__single">
        <section className="header__logo header__logo--single">
          <img src="/assets/image/logo.svg" alt="Enuygun Logo" />
        </section>
        <section className="header__single-back">
          {location.pathname !== "/" && (
            <span className="header__menu" onClick={() => navigate("/")}>
              Home
            </span>
          )}
          {location.pathname !== "/logs" && (
            <span className="header__menu" onClick={() => navigate("/logs")}>
              Logs
            </span>
          )}
        </section>
      </div>
    </header>
  );
}

export default Header;
