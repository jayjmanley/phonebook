import React, { useState } from 'react';
import Search from './Search';
import List from './List';

const App = () => 
{
   // const [val, setResetState] = useState();

    const [ list, setList ] = useState([
        { firstname: 'Vulcan', lastname: 'Kristiansen', phone: '402-293-0123', show: true },
        { firstname: 'George', lastname: 'Martin', phone: '213-451-2432', show: true },
        { firstname: 'Logan', lastname: 'Roy', phone: '209-234-1234', show: true },
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

  function filter(filteredValue, nameOrNumber) {
      const lower = filteredValue.toLowerCase();
      if (nameOrNumber === 1)
        setList(list.map(list =>
            ({
                ...list,
                show: list.firstname.toLowerCase().includes(lower),
            })
        ));
      else if (nameOrNumber === 2)
        setList(list.map(list =>
            ({
                ...list,
                show: list.lastname.toLowerCase().includes(lower),
            })
        ));
      else
        setList(list.map(list =>
            ({
                ...list,
                show: list.phone.toLowerCase().includes(lower),
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

export default App;