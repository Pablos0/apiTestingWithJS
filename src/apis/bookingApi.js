import apiClient from "../httpClient.js";

class BookingApi {
    getBookingId(filters={}) {
        return apiClient.get('/booking', { params: filters });
    }
    getBookingById(id) {
        return apiClient.get(`/booking/${id}`);
    }
    createBooking(newBook) {
        return apiClient.post('/booking', newBook);
    }
    updateBooking(id, update, head={}) {
        return apiClient.put(`/booking/${id}`, update, { headers:{ ...head }});
    }
    deleteBooking(id, head={}) {
        return apiClient.delete(`/booking/${id}`, { headers:{ ...head }});
    }
}

export default BookingApi;