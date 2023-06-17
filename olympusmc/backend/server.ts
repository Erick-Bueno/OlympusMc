import express from "./main";
import dotenv from 'dotenv'

dotenv.config();

express.listen(process.env.PORT, () => {
    console.log("servidor rodando")
})