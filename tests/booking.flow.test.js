/* global describe, it */
import BookingApi from '../src/apis/bookingApi.js';
import newBooking from '../src/data/bookingFactory.js';
import assertions from '../src/utils/assertions.js';
import bookingSchemas from '../src/schemas/bookingSchemas.js';
import { expect } from 'chai';
import { basicAuthorization } from './config/config.js';
import measure from '../src/utils/performance.js';

const bookingApi = new BookingApi();

describe('Booking CRUD flow', () => {
  let id;

  it('Create new booking', async () => {
    const { response, duration } = await measure(() =>
      bookingApi.createBooking(newBooking())
    );
    assertions.assertResponse({ response, duration, expectedStatus: 200 });
    id = response.data.bookingid;
    expect(id).to.be.a('number');
  });

  it('Read booking', async () => {
    const { response, duration } = await measure(() =>
      bookingApi.getBookingById(id)
    );
    assertions.assertResponse({ response, duration, expectedStatus: 200 });
    assertions.assertSchema(bookingSchemas.bookingData, response.data);
  });

  it('Update booking', async () => {
    const updated = newBooking({ firstname: 'Jane' });
    const { response, duration } = await measure(() =>
      bookingApi.updateBooking(id, updated, {
        Authorization: basicAuthorization,
      })
    );
    assertions.assertResponse({ response, duration, expectedStatus: 200 });
    assertions.assertSchema(bookingSchemas.bookingData, response.data);
  });

  it('Delete booking', async () => {
    const { response } = await measure(() =>
      bookingApi.deleteBooking(id, { Authorization: basicAuthorization })
    );
    expect([200, 201, 204]).to.include(response.status);
  });
});
