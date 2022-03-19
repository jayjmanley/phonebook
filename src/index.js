import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Search = ({list, filter}) =>
{
    return (
        <div>
            <h1>Search</h1>
            <form>
                First Name: <input onChange={event => filter(event.target.value)}/>
                Last Name: <input onChange={event => filter(event.target.value)}/>
                Phone Number: <input onChange={event => filter(event.target.value)}/>
            </form>
        </div>
    )
}
const App = () => 
{
    const [ list, setList ] = useState([
        { firstname: 'Vulcan', lastname: 'Kristiansen', phone: '402-293-0123', show: true },
        { firstname: 'George', lastname: 'Martin', phone: '213-451-2432', show: true },
    ]);


    const [{ firstname, lastname, phone, errorMessage = '' }, setNewFormInfo] = useState({ firstname: '', lastname: '', phone: '' });

    function addPerson(event){
        event.preventDefault();

        const duplicate = list.some(list => (list.firstname === firstname) && (list.lastname === lastname) && (list.phone === phone));

        if (!duplicate)
            setList(list.concat({firstname, lastname, phone, show: true }));
        else
            setNewFormInfo({firstname, lastname, phone, errorMessage: `${firstname} ${lastname} with number ${phone} is already added.` });
    }


  function filter(filteredValue) {
      const lower = filteredValue.toLowerCase();
      setList(list.map(list =>
          ({
              ...list,
              show: list.firstname.toLowerCase().includes(lower),
          })
      ));
  }


    return (
        <div>
            <h1>Phonebook</h1>
            <Search list={list} filter={filter} />
            <h2>Add Contact</h2>
            <form onSubmit={addPerson}>
                <div>
                    First Name: <input onChange={(event) => setNewFormInfo({firstname: event.target.value, lastname, phone})}/>
                    <br/>
                    Last Name: <input onChange={(event) => setNewFormInfo({firstname, lastname: event.target.value, phone})}/>
                    <br/>
                    Number: <input onChange={(event) => setNewFormInfo({firstname, lastname, phone: event.target.value})}/>
                </div>
                <div>
                    <button type="submit">Add Contact</button>
                </div>
                {(errorMessage && <div className="error">{errorMessage}</div>)}
            </form>
            <h2>List of Contacts</h2>
            <List list={list} />
        </div>
    )
}
const List = ({list}) => (
      <ul>
        {(
          list
            .filter(list => list.show)
            .map(list => <li><b>Name:</b> {list.firstname} {list.lastname} <b>Number:</b> {list.phone}</li>)
        )}
      </ul>
);



ReactDOM.render(<App />, document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
