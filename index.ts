import express, { Application, Request, Response } from "express";
import cors from "cors";

export const app = express();
app.use(cors());
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", async (_req, res) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
