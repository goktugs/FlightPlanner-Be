import express from "express";
import postRoot from "../controllers/root/postRoot";
import getAllFlights from "../controllers/root/getAllFlights";
import getAllAirports from "../controllers/root/getAllAirports";

const root = express.Router();

root.get("/api/getAllFlights", getAllFlights);
root.get("/api/getAllAirports", getAllAirports);
root.post("/", postRoot);

export default root;
