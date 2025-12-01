import { expect } from "chai";

function assertResponse({response, duration, expectedStatus, maxDurationMs=5000 }) {
    expect(duration).to.be.lessThan(maxDurationMs);
    expect(response.status).to.equal(expectedStatus);
    expect(response.headers['content-type']).to.match(/application\/json/);
};

function assertSchema(schema, data) {
    const { error } = schema.validate(data);
    expect(error).to.be.undefined;
};

export default { assertResponse, assertSchema }