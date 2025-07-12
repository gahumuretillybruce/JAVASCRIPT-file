let farmer = {
    name: "Andrew",
    age: 35,
    location: "kla",
    requestChicks: function(quantity) {
      return this.name + " requested " + quantity + " chicks.";
    }
  }
//   module.exports = farmer; // Exporting the farmer object so it can be used in other files
  export default farmer; // Using ES6 module syntax to export the farmer object