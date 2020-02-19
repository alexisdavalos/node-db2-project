
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate() //resets ids
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
      {
          VIN: "SCA664S5XAUX48670",
          make: "Rolls Royce",
          model: "Ghost",
          mileage: 1000,
          transmission: "automatic",
          title: "clean"
      },
      {
        VIN: "JH4KA3270KC007497",
        make: "Legends",
        model: "Acura",
        mileage: 49800,
        transmission: "automatic",
        title: "clean"
      },
      {
        VIN: "2S3TD52V3Y6103456",
        make: "Suzuki",
        model: "Vitara",
        mileage: 32146,
        transmission: "automatic",
        title: "clean"
      }
      ]);
    });
};
