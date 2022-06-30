import Router from "./route/Router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setInitial } from "./components/store/Users";
import Maintenance from "./components/Maintenance";
import Footer from "./components/Footer";
import "./app.scss";

function App() {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const fetchData = () => {
    axios
      .get("https://randomuser.me/api/?results=20&nat=tr")
      .then((res) => {
        res.data.results.map((user) => {
          return (user.vote = Math.ceil(Math.random() * 10));
        });
        res.data.results.sort((a, b) => {
          return b.vote - a.vote;
        });
        dispatch(setInitial(res.data.results));
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return (
      <div>
        <Maintenance></Maintenance>
      </div>
    );
  }

  return (
    <>
      <Router></Router>
      <Footer></Footer>
    </>
  );
}

export default App;
