// TODO: Buat anunya props

(function(w, d){
  const vd = {};

  vd.createElement = function(type, props, ...children){
    return {
      type,
      props,
      children,
    }
  };

  vd.node = function (node) {
    if (typeof node === 'string') {
      return d.createTextNode(node);
    }

    const el = d.createElement(node.type);

    // creating children
    if (node.children !== undefined){
      node.children
        .map(vd.node)
        .forEach(el.appendChild.bind(el));
    }
    return el;
  }

  vd.render = function(vdom, el){
    if (el === null) throw Error('Element root tidak dapat digunakan.');

    const dom = el.appendChild(vd.node(vdom));
    return dom;
  }

  w.virtualdom = vd;
})(window, document);
