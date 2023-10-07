'use strict';

const e = React.createElement;
const Hello = () => `hello!`;

// Find DOM container, and render it.
const domRootContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domRootContainer);
root.render(
    e(Hello)
);