const h1 = virtualdom.createElement('h1', null, 'Virtual DOM');
const h2 = virtualdom.createElement('h2', null, 'Teknik ini dipopulerkan oleh React');
const div = virtualdom.createElement(
  'div',
  {
    style: {
      backgroundColor: '#555',
      color: '#fff'
    }
  },
  h1, h2
);

const hasil = virtualdom.render(div, document.getElementById('app'));
console.log(div);
