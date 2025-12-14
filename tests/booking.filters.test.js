/* global describe, it */
import { expect } from 'chai';
import BookingApi from '../src/apis/bookingApi.js';
import assertions from '../src/utils/assertions.js';

const bookingApi = new BookingApi();

const measure = async (miliSeconds) => {
  const start = Date.now();
  const result = await miliSeconds();
  return { response: result, duration: Date.now() - start };
};

describe('Get Booking by filters', () => {
  it('Filter by firstName & lastName', async () => {
    const filters = { firstname: 'John', lastname: 'Doe' };
    const { response, duration } = await measure(() =>
      bookingApi.getBookingId(filters)
    );
    assertions.assertResponse({ response, duration, expectedStatus: 200 });
    expect(response.data).to.be.an('array');
  });

  it('Filtering by Date', async () => {
    const filters = { checkin: '2025-01-01', checkout: '2025-12-30' };
    const { response, duration } = await measure(() =>
      bookingApi.getBookingId(filters)
    );
    assertions.assertResponse({ response, duration, expectedStatus: 200 });
    expect(response.data).to.be.an('array');
  });
});
