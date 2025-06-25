import { http, HttpResponse } from "msw";
import apiConfig from "../../app/config/api";
import { emailSequence } from "tests/fixtures";
import { setupServer } from "msw/node";

const handlers = [
  http.post(apiConfig.ENPOINTS.EMAIL_SEQUENCES, () => {
    return HttpResponse.json(emailSequence);
  }),
];

const mockApiServer = setupServer(...handlers);

export { mockApiServer };
