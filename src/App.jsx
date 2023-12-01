import BuildTable from "./components/build-table";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    //lets get fake users from our JSONPlaceHolder

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.error("Error fetching data", err));
  }, []);

  const settingsObject = {
    headers: ["Id", "Name", "Username", "Email", "Street", "Phone", "Website", "Role"],
  };


  return (
    <div className="container">
      <h1>Table Builder App</h1>
      <BuildTable settings={settingsObject} data={userData} />
    </div>
  );
}

export default App;
