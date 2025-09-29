import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    api.get("/hello")
      .then(res => setMsg(res.data.message))
      .catch(e => console.log(e))
  }, [])

  return (
    <div>
      <h1>Front-End React</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;