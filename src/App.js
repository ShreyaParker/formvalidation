import {useState} from "react";
import {addDoc,collection} from "firebase/firestore"
import {db} from "./firebase-config"
import FormInput from "./components/FormInput";
import "./App.css"
const App = () => {
  const [values, setValues] = useState({
    Name: "",
    Phone: "",
    Address: "",
    Gender:"",

  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "name",
      errorMessage:
          "Username should be 3 characters",
      label: "name",
      pattern: "^[A-Za-z\\s]{3, }$",
      required: true,
    },
    {
      id: 2,
      name: "Phone",
      type: "tel",
      pattern: "^[0-9]{10,10}",
      placeholder: "Phone",
      errorMessage: "It should be a valid 10 digit number!",
      label: "Phone",
      required: true,
    },
    {
      id: 3,
      name: "Address",
      type: "text",
      placeholder: "Address",
      errorMessage:
          "Address should be atleast 10 characters long",
      label: "Address",
      pattern: "^[A-Za-z0-9'\\.\\-\\s\\,]{10, }$",
      required: true,
    },
    {
      id: 4,
      name: "Gender",
      type: "text",
      placeholder: "Gender",
      errorMessage:
          "specify either as female male or other",
      label: "Gender",
      pattern: "^[F-e-m-a-l-e,M-a-l-e,f-e-m-a-l-e,o-t-h-e-r,O-t-h-e-r,m-a-l-e]$",
      required: true,

    }

  ];


  const handleSubmit = async(e) => {
    e.preventDefault();
    const dataCollectionRef=collection(db,"data")
    addDoc(dataCollectionRef,{values})
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.message)
        })
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
              <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
              />
          ))}
          <button type="submit" >Submit</button>
        </form>
      </div>
  );
};

export default App;
