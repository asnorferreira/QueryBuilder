import { app } from "./server.js";
import { env } from "./configs/env.js";

app.listen(`${env.port}`, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});
