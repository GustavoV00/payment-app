import express, { Express, Request, Response, Router } from "express";
import { AppDataSource } from "../data-source";

export default class BasicConfig {
  private _app: Express;
  private router: Router;
  private port: number;

  constructor(port: number) {
    this._app = express();
    this.router = Router();
    this.port = port;
  }

  public get app() {
    return this._app;
  }

  public parseBodyToJson() {
    this._app.use(express.json());
  }

  public routes() {
    // Home
    this.router.get("/", (req: Request, res: Response) => {
      res.send("Express + Typescript server");
    });

    return this.router;
  }

  public listen() {
    // Config to start the server
    this._app.listen(this.port, () => {
      console.log(
        `⚡️[server]: Server is running at https//localhost:${this.port}`
      );
    });
  }

  public initializeDatabaseConfig(): void {
    AppDataSource.initialize()
      .then(() => {
        // here you can start to work with your database
      })
      .catch((error) => console.log(error));
  }
}
