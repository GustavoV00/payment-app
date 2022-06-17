import "reflect-metadata";
import { container } from "tsyringe";
import CustomerResource from "./resources/CustomerResource";
import BasicConfig from "./configs/BasicConfig";

const main = async () => {
  const config = new BasicConfig(8080);
  config.initializeDatabaseConfig();

  // Customer end-point
  const customerResource = container.resolve(CustomerResource);
  config.app.use("/customers", customerResource.routes());

  config.listen();
};

main().catch((error) => {
  console.log(error);
});
