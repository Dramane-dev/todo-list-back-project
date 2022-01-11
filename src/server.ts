import express, { Express } from "express";
import bodyParser from "body-parser";
import compression from "compression";
import config from "../config/defaults";
import { connectionToDatabase } from "../db/connection.db";

let router: Express = express();
router.use(bodyParser.json());
router.use(compression());

const port: number = config.port;

router.listen(port, () => {
    console.log(`Server running on port ${port} ✅`);
    connectionToDatabase();
});
