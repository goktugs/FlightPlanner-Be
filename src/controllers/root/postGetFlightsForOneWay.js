const localData = require("../../../allFlights.json");
/**
 * Echo endpoint
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const postGetFlightsForOneWay = (req, res) => {
  const json = req.body;

  const filteredData = localData.filter((flight) => {
    return (
      flight.departure_airport === json.depAirport.airport_name &&
      flight.arrival_airport === json.arrAirport.airport_name &&
      flight.departure_date.substring(0, flight.departure_date.indexOf("T")) ===
        json.departureDate.substring(0, json.departureDate.indexOf("T"))
    );
  });

  res.json(filteredData);
};

export default postGetFlightsForOneWay;
