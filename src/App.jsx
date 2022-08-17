import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
  const [inputName, setInputName] = useState("Mark");

  return (
    <>
      <Header name={inputName} />
      <Form setName={setInputName} />
    </>
  );
}

export default App;
