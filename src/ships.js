const ship = (len) => {
  let uniqueID = 0;

  uniqueID++;

  return {
    type: null,
    length: len,
    orientation: null,
    hits: 0,
    shipID: uniqueID,
    isPlaced: false,
    isSunk: false,

    shipHit() {
      this.hits++;
    },

    changeOrientation(orient) {
      this.orientation = orient;
    },
  };
};

export default ship;
