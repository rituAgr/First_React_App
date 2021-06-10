// import React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create component
const App = () => {
    let button = "Click Me!!";
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name</label>
            <input id="name" text="text"/>
            {/*it is by convention that we use single quote for non JSX element & single quote for JSX.
             Also, single & double works fine at any place.
            */}
            {/*Below line shows that style is JS object, first {} says it is JS obj,
            and second {} is the object */}
            <button style={{"backgroundColor": "blue", "color": "white"}}> {button} </button>
        </div>
    );
}

//show on screen. 
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);