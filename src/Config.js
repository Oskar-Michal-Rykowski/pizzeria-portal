const URL = process.env.PUBLIC_URL;

export const config = {
  dashboard: `${URL}/`,
  kitchen: `${URL}/kitchen`,
  login: `${URL}/login`,
  tables: `${URL}/tables`,
  tablesBookingReservation: `${URL}/tables/booking/:id`,
  tablesBookingNew: `${URL}/tables/booking-new`,
  tablesEventReservation: `${URL}/tables/events/:id`,
  tablesEventNew: `${URL}/tables/events-new`,
  waiter: `${URL}/waiter`,
  waiterOrderNew: `${URL}/waiter/order/new`,
  waiterOrder: `${URL}/waiter/order/:id`,
};
