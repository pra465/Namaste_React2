import React from 'react';
import ReactDOM from 'react-dom/client';

//react element
const Ele = <h1 id="heading">Hello from jsx9</h1>;

// react functional component

const Heading = () => (
  <div>
    {Ele} <h2> hello functional component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<Heading />);
