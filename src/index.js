import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Search = ({list, filter}) =>
{
    const [name, setName] = useState(void 0);

    function search(event){
        event.preventDefault();
        filter(event.target.value.toLowerCase());
    }

    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={search}>
                <input onChange={(event) => search(event)}/>
                <input onChange={(event) => search(event)}/>
                <button type="submit">Search</button>
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


    const [ formInfo, setNewFormInfo ] = useState({firstname: '', lastname: '', phone: ''});

    function addPerson(event){
        event.preventDefault();
        setList(list.concat({firstname:formInfo.firstname, lastname:formInfo.lastname, phone:formInfo.phone, show:true}))
        // let canSearch = true;

        // list.forEach(person => { // checks if the person's name is already added
        //     if(person.firstname == formInfo.firstname)
        //     canSearch = false;       
        // });

        // if(canSearch)
        //     setList(list.concat({firstname:formInfo.firstname, phone:formInfo.phone, show:true}));
        // else
        //     alert(`${formInfo.firstname} is already added to the list!`);
     }

    function filter(nameToFilter){
        if(nameToFilter === ''){ // if the search form is empty, then show everyone
            setList((prev) => prev.map(person => ({...person, show:true})));
        }
        else{
            const filtered = [];
            list.forEach(person => {
                if(!person.firstname.toLowerCase().includes(nameToFilter))
                    filtered.push({...person, show:false});
                else
                    filtered.push({...person});
            });
            setList(filtered);
        }
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Search list={list} filter={filter} />
            <h2>Add Contact</h2>
            <form onSubmit={addPerson}>
                <div>
                    First Name: <input onChange={(event) => setNewFormInfo({firstname: event.target.value, lastname: formInfo.lastname, phone: formInfo.phone})}/>
                    <br/>
                    Last Name: <input onChange={(event) => setNewFormInfo({firstname: formInfo.firstname, lastname: event.target.value, phone: formInfo.phone})}/>
                    <br/>
                    Number: <input onChange={(event) => setNewFormInfo({firstname: formInfo.firstname, lastname: formInfo.lastname, phone: event.target.value})}/>
                </div>
                <div>
                    <button type="submit">Add Contact</button>
                </div>
            </form>
            <h2>List of Contacts</h2>
            <List list={list} />
        </div>
    )
}
const List = ({list}) => 
{
    function renderList(){
        const elements = [];

        list.forEach(person => {
            if(person.show){
                elements.push(<li><b>Name:</b> {person.firstname} {person.lastname} <b>Number:</b> {person.phone}</li>);
            }
        });

        return elements;
    }

    return(
        <ul>
            {renderList()}
        </ul>
    )
}



ReactDOM.render(<App />, document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
