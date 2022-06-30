import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { addLog } from "../../components/store/Logs";

function UserDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const userList = useSelector((state) => state.user.users);
  let user = userList.find((data) => data.login.uuid === id);
  if (!user) navigate("/");

  useEffect(() => {
    dispatch(
      addLog({
        type: "View",
        detail: "User Detail page viewed.",
      })
    );
  }, []);

  return (
    <>
      <Header />
      <main className="main container" role="main">
        <section className="voteList">
          <div className="voteList__single">
            <div className="voteList__single-img">
              <img src={user?.picture?.large} alt="" />
            </div>
            <div className="voteList__single-name">
              <h1>
                {user?.name?.title}. {user?.name?.first} {user?.name?.last}
              </h1>
            </div>

            <div className="voteList__single-info">
              <ul>
                <li>
                  <span>E-Mail</span>
                  <p>
                    <a href={`mailto:${user?.email}`}>{user?.email}</a>
                  </p>
                </li>
                <li>
                  <span>Age</span> <p>{user?.dob?.age - 10}</p>
                </li>
                <li>
                  <span>Phone</span>
                  <p>
                    <a href={`tel:${user?.cell}`}>{user?.cell}</a>
                  </p>
                </li>
                <li>
                  <span>City</span>
                  <p>
                    {user?.location?.city} / {user?.location?.country}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default UserDetails;
