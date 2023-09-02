import express from "express";
import getAllFlights from "../controllers/root/getAllFlights";
import getAllAirports from "../controllers/root/getAllAirports";
import postGetFlightsForOneWay from "../controllers/root/postGetFlightsForOneWay";

const root = express.Router();

root.get("/api/getAllFlights", getAllFlights);
root.get("/api/getAllAirports", getAllAirports);
root.post("/api/getFlightsForOneWay", postGetFlightsForOneWay);

export default root;
