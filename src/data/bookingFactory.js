function newBooking(overrides={}) {
    return {
        firstname: 'Pablo',
        lastname: 'Salcedo',
        totalprice: 345,
        depositpaid: true,
        bookingdates: {
            checkin: '2020-01-02',
            checkout: '2020-02-02'
            },
        additionalneeds: 'All inclusive',
        ...overrides
        };
}

export default newBooking;