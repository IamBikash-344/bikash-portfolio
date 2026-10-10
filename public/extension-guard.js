(function () {
  var ATTRS = [
    "bis_skin_checked",
    "data-new-gr-c-s-check-loaded",
    "data-gr-ext-installed",
    "data-lt-installed",
    "data-lt-tmp-id",
    "cz-shortcut-listen",
  ];

  function stripNode(node) {
    if (!node || node.nodeType !== 1 || !node.removeAttribute) return;
    for (var i = 0; i < ATTRS.length; i++) {
      if (node.hasAttribute(ATTRS[i])) node.removeAttribute(ATTRS[i]);
    }
  }

  function stripTree(root) {
    stripNode(root);
    if (!root || !root.querySelectorAll) return;
    var nodes = root.querySelectorAll("*");
    for (var i = 0; i < nodes.length; i++) stripNode(nodes[i]);
  }

  stripTree(document.documentElement);

  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      stripNode(mutations[i].target);
      var added = mutations[i].addedNodes;
      for (var j = 0; j < added.length; j++) stripTree(added[j]);
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ATTRS,
  });

  window.addEventListener(
    "error",
    function (event) {
      var source = event.filename || "";
      if (source.indexOf("chrome-extension://") === 0 || source.indexOf("moz-extension://") === 0) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true,
  );

  window.addEventListener("load", function () {
    stripTree(document.documentElement);
    setTimeout(function () {
      observer.disconnect();
    }, 2500);
  });
})();
