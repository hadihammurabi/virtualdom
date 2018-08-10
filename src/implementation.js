const h1 = virtualdom.h('h1', null, 'Virtual DOM');
const div = virtualdom.h('div', null, h1);

const el = virtualdom.createElement(div);

const hasil = virtualdom.render(el, document.getElementById('app'));
console.log(hasil);
