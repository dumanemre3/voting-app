import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { addLog } from "../../components/store/Logs";
import { increment } from "../../components/store/Users";

function UserList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(addLog({ type: "View", detail: "User List page viewed." }));
  }, []);

  return (
    <>
      <Header />
      <main className="main container" role="main">
        <section className="voteList">
          {users.map((user, index) => (
            <ul className="voteList__item" key={index}>
              <li>
                <div className="voteList__item-box">
                  {index === 0 && (
                    <div className="voteList__item-box__star animate__item">
                      <img src="/assets/image/star-icon.svg" alt="" />
                    </div>
                  )}
                  <div
                    className="voteList__item-box__img"
                    onClick={() => navigate(`/user/${user.login.uuid}`)}
                  >
                    <img src={user.picture.thumbnail} alt="" />
                  </div>

                  <div className="voteList__item-box__detail">
                    <div className="voteList__item-box__detail-name">
                      <p onClick={() => navigate(`/user/${user.login.uuid}`)}>
                        {user.name.first} {user.name.last} - {user.vote}
                      </p>
                    </div>
                    <button
                      aria-label="vote button"
                      type="button"
                      className="voteList__item-box__detail-btn"
                      onClick={() => {
                        dispatch(increment(user.login.uuid));

                        dispatch(
                          addLog({
                            type: "Action",
                            detail: `Voted for ${user.name.first} ${user.name.last}.`,
                          })
                        );
                      }}
                    >
                      Vote
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </section>
      </main>
    </>
  );
}

export default UserList;
