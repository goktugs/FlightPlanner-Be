import express from "express";
import getAllFlights from "../controllers/root/getAllFlights";
import getAllAirports from "../controllers/root/getAllAirports";
import postGetFlights from "../controllers/root/postGetFlights";

const root = express.Router();

root.get("/api/getAllFlights", getAllFlights);
root.get("/api/getAllAirports", getAllAirports);
root.post("/api/getFlights", postGetFlights);

export default root;
