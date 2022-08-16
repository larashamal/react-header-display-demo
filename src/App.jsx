import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

// TODO: Create a Form component that we will use to update the name upon submission
function App() {
  const [name, setName] = useState("Mark");

  return (
    <>
      <Header name={name} />
      <Form />
    </>
  );
}

export default App;
