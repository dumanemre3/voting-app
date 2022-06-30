import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";

function Logs() {
  let logs = useSelector((state) => state.logs.logs);
  logs = logs.slice().sort((a, b) => moment(b.time) - moment(a.time));

  return (
    <>
      <Header />
      <main className="main container" role="main">
        <section className="voteList">
          {logs.map((log, index) => {
            return (
              <>
                <ul className="voteList__item" key={index}>
                  <li>
                    <div className="voteList__item-box__detail">
                      <div className="voteList__item-box__detail-name">
                        <p>{log.detail}</p>
                      </div>
                      <p
                        aria-label="vote button"
                        type="button"
                        className="voteList__item-box__detail-btn"
                      >
                        {moment(log.time).format("DD.MM.YYYY HH:mm")}
                      </p>
                    </div>
                  </li>
                </ul>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Logs;
