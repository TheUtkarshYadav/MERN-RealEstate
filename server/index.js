import express from "express";

const app = express();

app.listen(3000, () => {
    console.log(`Server started running successfully on port 3000.`);
})