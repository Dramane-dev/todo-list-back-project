import { Express } from "express";
import bodyParser from "body-parser";
import compression from "compression";
import { connectionToDatabase } from "../../db/connection.db";
import { router } from "../routes/auth/auth.route";
import cors from 'cors';

export default class Main {
    constructor(private _router: Express, private _port: number) {}

    initialization(): void {
        this._router.use(bodyParser.urlencoded({ extended: false }));
        this._router.use(bodyParser.json());
        this._router.use(compression());
        this._router.use('/', router);
        this._router.use(cors());
        this._router.use((req, res, next) => {
            res.header(
                "Access-Control-Allow-Headers",
                "x-access-token, Origin, Content-Type, Accept"
            );
            next();
        });
    }

    startServer(): void {
        this.initialization();
        this._router.listen(this._port, async () => {
            console.log(`Server running on port ${this._port} ✅`);
        });
        connectionToDatabase();
    }
}