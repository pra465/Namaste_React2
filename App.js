const heading = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { key: 1 }, 'Hello'),
    React.createElement('h1', { key: 2 }, 'Hello 2'),
  ])
);

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(heading);
