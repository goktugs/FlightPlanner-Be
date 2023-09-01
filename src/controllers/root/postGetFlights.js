const localData = require("../../../allFlights.json");
/**
 * Echo endpoint
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const postGetFlights = (req, res) => {
  const json = req.body;

  const filteredData = localData.filter((flight) => {
    return (
      flight.departure_airport === json.depAirport.airport_name &&
      flight.arrival_airport === json.arrAirport.airport_name
    );
  });

  res.json(filteredData);
};

export default postGetFlights;
