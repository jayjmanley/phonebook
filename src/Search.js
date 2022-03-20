import React from "react";

const Search = ({list, filter}) =>
{
    return (
        <div>
            <h1>Search</h1>
            <form>
                First Name: <input onChange={event => filter(event.target.value, 1)}/>
                Last Name: <input onChange={event => filter(event.target.value, 2)}/>
                Phone Number: <input onChange={event => filter(event.target.value, 3)}/>
            </form>
        </div>
    )
}

export default Search;