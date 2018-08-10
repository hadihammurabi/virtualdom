(function(w, d){
  const vd = {};

  vd.h = function(type, props, ...children){
    return {
      type,
      props,
      children,
    }
  };

  vd.createElement = function (node) {
    if (typeof node === 'string') {
      return document.createTextNode(node);
    }

    const el = document.createElement(node.type);
    if (node.children !== undefined){
      node.children
        .map(vd.createElement)
        .forEach(el.appendChild.bind(el));
    }
    return el;
  }

  vd.render = function(vdom, el){
    if (el === null) throw Error('Element root tidak dapat digunakan.');

    const dom = el.appendChild(vdom);
    return dom;
  }

  w.virtualdom = vd;
})(window, document);
