import { expect } from 'chai';
import { timeout } from '../../tests/config/config.js';

function assertResponse({
  response,
  duration,
  expectedStatus,
  maxDurationMs = timeout,
}) {
  expect(duration).to.be.lessThan(maxDurationMs);
  expect(response.status).to.equal(expectedStatus);
  expect(response.headers['content-type']).to.match(/application\/json/);
}

function assertSchema(schema, data) {
  const { error } = schema.validate(data);
  expect(error).to.be.undefined;
}

export default { assertResponse, assertSchema };
