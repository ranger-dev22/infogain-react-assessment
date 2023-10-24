import { setupServer } from "msw/node";
import { handlers } from "../../PurchasePoints/mocks/handlers";

export const mswServer = setupServer(...handlers);
