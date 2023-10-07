'use strict';

const Hello = ({name}) => `Hello, ${name}!`;

// Find DOM container, and render it.
ReactDOM.render(<Hello name={"John"} />, document.getElementById('root'));