import fs from "fs";

/**
 * Health check endpoint
 * @param {import('express').Request} _req
 * @param {import('express').Response} res
 */
const getAllAirports = (_req, res) => {
  fs.readFile("./allAirports.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    const json = JSON.parse(data);
    res.json(json);
  });
};

export default getAllAirports;
