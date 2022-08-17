import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [name, setName] = useState("Mark");

  return (
    <>
      <h1 className="my-8 text-center text-3xl">Hello {name}</h1>
      <Form setName={setName} />
    </>
  );
}

export default App;
