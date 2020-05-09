import React, { useState, cloneElement, useEffect, useRef } from "react";
import "./App.scss";
import Item from "./Components/Item";
import Input from "./Components/Input";

const initList = [
  { name: "Tomato", calories: 20 },
  { name: "Rice", calories: 30 },
  { name: "Candies", calories: 100 },
];
function App() {
  const [age, setAge] = useState(21);
  const [list, setList] = useState(initList);
  const [editable, setEditable] = useState(false);

  const [name, setName] = useState("John Doe");
  const [income, setIncome] = useState("High");

  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const InputStyle = {
    width: "400px",
    height: "40px",
    fontSize: "30px",
    marginBottom: "10px",
  };

  const ageUpHandle = () => {
    setAge(age + 1);
  };

  const ageDownHandle = () => {
    setAge(age - 1);
  };

  const removeUnhealthyHandle = (e) => {
    const copyList = [...list];
    const filteredList = copyList.filter((value) => value.calories <= 50);
    setList(filteredList);
  };

  const removeItemHandle = (e) => {
    //const newList = list.filter((value) => value.name !== e.target.name);
    setList(list.filter((value) => value.name !== e.target.name));
  };

  const makeEditableHandle = (e) => {
    setEditable(true);
  };

  const handleKeyPressHandle = (e, index) => {
    if (e.key == "Enter") {
      setEditable(!editable);
      const copyList = [...initList];
      copyList[index].name = e.target.value;
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSelectIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(`name ${name} income ${income}`);
  };

  const keyPressHandle = (e) => {
    if (e.keyCode === 13) {
      if (e.target.id === "nameInput") {
        ageRef.current.focus();
      }
      if (e.target.id === "ageInput") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        submitRef.current.focus();
      }
    }
  };

  const onSubmitButtonHandle = () => {
    alert("submitted");
  };

  function firstNameKeyDown(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Use State Hooks</h1>
        <h2>Age: {age}</h2>
        <button onClick={ageUpHandle}>Age Up</button>
        <button onClick={ageDownHandle}>Age Down</button>
        <h1>Grocery List</h1>
        {list.map((value, key) => {
          return (
            <Item
              key={`${key}${value.name}${value.calories}`}
              item={value}
              onClick={removeItemHandle}
              editable={editable}
              onDoubleClick={makeEditableHandle}
              onKeyPress={handleKeyPressHandle}
              index={key}
            />
          );
        })}

        <button className="remove-button" onClick={removeUnhealthyHandle}>
          Remove Unhealthy Items
        </button>
        <br />
        <h1>OnChange Event</h1>
        <form onSubmit={onSubmitHandle}>
          <div>
            <span>Name:</span>
            <input value={name} type="text" onChange={handleNameChange}></input>
          </div>
          <div>
            <span>Income</span>
            <select value={income} onChange={handleSelectIncomeChange}>
              <option value="high">High</option>
              <option value="mid">Mid</option>
              <option value="low">Low</option>
            </select>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
        <br />
        <div>
          <h1>useRef Hook</h1>
          <div className="form-field">
            <span>Name:</span>
            <input
              ref={nameRef}
              id="nameInput"
              type="text"
              onKeyDown={keyPressHandle}
            ></input>
          </div>
          <div className="form-field">
            <span>Age:</span>
            <input
              ref={ageRef}
              id="ageInput"
              type="text"
              onKeyDown={keyPressHandle}
            ></input>
          </div>
          <div className="form-field">
            <span>Married:</span>
            <input
              ref={marriedRef}
              id="marriedInput"
              type="checkbox"
              onKeyDown={keyPressHandle}
            ></input>
          </div>
          <button
            ref={submitRef}
            id="submitButton"
            onClick={onSubmitButtonHandle}
            onKeyDown={keyPressHandle}
          >
            Submit
          </button>
        </div>
        <div>
          <h1>Forwarding Refs</h1>
          <Input
            ref={firstNameRef}
            placeholder="type first name here..."
            style={InputStyle}
            onKeyDown={firstNameKeyDown}
          />
          <br />
          <Input
            ref={lastNameRef}
            placeholder="type last name here..."
            style={InputStyle}
          />
          <br />
        </div>
      </header>
    </div>
  );
}

export default App;
