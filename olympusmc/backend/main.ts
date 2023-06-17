import  Express  from "express";
import Route from "./router";
const express = Express();

express.use(Route)
export default express;