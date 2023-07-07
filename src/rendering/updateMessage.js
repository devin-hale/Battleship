const updateMessage = (message) => {
  document.getElementById("gameMessage").innerHTML = message;
};

const updateMColor = (color) => {
  document.getElementById("gameMessage").style.backgroundColor = color;
};

export { updateMessage, updateMColor };
