var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  for (var i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let elementsFound = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...elementsFound];
  }

  /*   for (let i = 0; i < startEl.children.length; i++) {
    resultSet = resultSet.concat(
      traverseDomAndCollectElements(matchFunc, startEl.children.item(i))
    );
  } */

  /* for (let childElement of startEl.children) {
    resultSet = resultSet.concat(
      traverseDomAndCollectElements(matchFunc, childElement)
    );
  } */
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === ".") return "class";
  else if (selector[0] === "#") return "id";
  else if (selector.split(".").length > 1) return "tag.class";
  else return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // matchFunction = (el) => "#" + el.id === selector;
    matchFunction = function (el) {
      return "#" + el.id === selector;
    };
  } else if (selectorType === "class") {
    // matchFunction = (el) => el.classList.contains(selector.substring(1));
    /* matchFunction = function (el) {
      return el.classList.contains(selector.substring(1));
    }; */
    matchFunction = function (el) {
      let classes = el.classList;
      for (let i = 0; i < classes.length; i++) {
        if ("." + classes[i] === selector) {
          return true;
        }
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    // matchFunction = (el) => el.tagName.toLowerCase() === selector.split(".")[0] && el.classList.contains(selector.split(".")[1]);
    /* matchFunction = function (el) {
      return (
        el.tagName.toLowerCase() === selector.split(".")[0] &&
        el.classList.contains(selector.split(".")[1])
      );
    }; */
    // Con destructuring
    matchFunction = function (el) {
      let [tag, className] = selector.split(".");
      return (
        matchFunctionMaker(tag)(el) && matchFunctionMaker("." + className)(el)
      );
    };
  } else if (selectorType === "tag") {
    // matchFunction = (el) => el.tagName.toLowerCase() === selector;
    matchFunction = function (el) {
      // return el.tagName.toLowerCase() === selector; // Pasa a minúscula
      // return el.tagName === selector.toUpperCase(); // Pasa a mayúsculas
      return el.localName === selector;
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
