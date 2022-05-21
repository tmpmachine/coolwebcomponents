window.template = (function() {
  
  let $ = document.querySelectorAll.bind(document);
  let child = function(selector, node=document) { return node.querySelectorAll(selector); }
  
  function getChild(selector) {
    let nodes = child(selector, this);
    return nodes;
  }
  
  function clone(selector) {
    
    let node = $(selector)[0].content.cloneNode(true);
    node.get = getChild;
    return node;
  }
  
  return {
    clone,
  };
  
})();
