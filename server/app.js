import express from "express";
import {router} from "./routes/index.js";
import { connect } from "./database/db_config.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

connect();

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.json());

app.use('/api', router);

app.listen(8080, () => {
  console.log("Backend server is running");
});
