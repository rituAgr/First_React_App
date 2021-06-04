// import React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create component
const App = () => {
    return (
        <div>Hi there!!</div>
    );
}

//show on screen. 
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);