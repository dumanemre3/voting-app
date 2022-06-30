import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <main className="main container" role="main">
        <section className="voteList">
          <div className="voteList__single">
            <div className="voteList__single-name voteList__single-name--404">
              <h1>404 Page Not Found!</h1>
            </div>
            <button
              aria-label="vote button"
              type="button"
              className="voteList__item-box__detail-btn voteList__item-box__detail-btn--404"
              onClick={() => navigate("/")}
            >
              GO TO HOME PAGE
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default NotFound;
