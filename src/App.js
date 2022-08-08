import {useState} from "react";
import {addDoc,collection} from "firebase/firestore"
import {db} from "./firebase-config"
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";
import "./App.css"
const App = () => {
  const [values, setValues] = useState({
    Name: "",
  });
  const Gender =[
    {
      id: 1,
    }
  ]

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
          "Username should be 3 characters",
      label: "Full Name:",
      pattern: "^[A-Za-z\\s]{3,100}$",
      required: true,
    },
    {
      id: 2,
      name: "Phone",
      type: "tel",
      pattern: "^[0-9]{10,10}$",
      placeholder: "Phone",
      errorMessage: "It should be a valid 10 digit number!",
      label: "Phone:",
      required: true,
    },
    {
      id: 3,
      name: "Address line 1",
      type: "text",
      placeholder: "Address line 1",
      errorMessage:
          "Address should be atleast 10 characters long",
      label: "Address line 1:",
      pattern: "^[A-Za-z0-9- -.-,-:-'-;-/-]{10,200}$",
      required: true,
    },
    {
      id: 3,
      name: "Address line 2",
      type: "text",
      placeholder: "Address line 2",
      errorMessage:
          "Address should be atleast 10 characters long",
      label: "Address line 2:",
      pattern: "^[A-Za-z0-9- -.-,-:-'-;-/-]{10,200}$",
    },


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
    alert("Result is stored in firebase")
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
      <div className="app">
        <form onSubmit={handleSubmit} className="actualForm" >
          <h1>Form</h1>
          {inputs.map((input) => (
              <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
              />
          ))}
          <div className="formselect">
            {Gender.map((input)=>(
                <FormSelect
                    key={Gender.id}
                    {...input}
                    value={values[Gender.name]}
                    onChange={onChange}
                />
            ))}

          </div>
            <button type="submit" className="button">Submit</button>
        </form>
      </div>
  );
};

export default App;
