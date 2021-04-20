function colorizeElement(element) {
  element.classList.add("new-class");
  element.dataset.tag = element.tagName.toLowerCase();
  element.style.color = "#f1f1f1";
  element.style.fontSize = "12px";
  return element;
};



module.exports = colorizeElement;
