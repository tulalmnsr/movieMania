const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate'); // Import your authentication middleware

// Import your controllers
const homeController = require('../controllers/homeController');
const movieController = require('../controllers/movieController');
const bookingController = require('../controllers/bookingController');
const cancelBookingController = require('../controllers/cancelBookingController');
const userController = require('../controllers/userController');
const paymentController = require('../controllers/paymentController');
const aboutController = require('../controllers/aboutController');
const cinemaController = require('../controllers/cinemaController');
const adminLoginController = require('../controllers/adminController');
const adminPanelController = require('../controllers/adminPanelController');
const MoviesController = require('../controllers/MoviesController');
const TicketsController = require('../controllers/TicketsController');
const newTicketsController = require('../controllers/newTicketsController');
const userManagementController = require('../controllers/userManagementController');
const ticketController = require('../controllers/ticketController');

// Home Page
router.get('/', homeController.displayMovies);

// Movie Detail Page
router.get('/movies/:id', movieController.getMovieDetails);

// Display About Page
router.get('/about', aboutController.getAboutInfo);

// Booking Page
router.post('/bookings', bookingController.addBooking);

// Cancel Booking Page
router.post('/bookings/:id/cancel', cancelBookingController.cancelBooking);

// User Profile Page
router.get('/users/:id', authenticate, userController.updateProfile);
router.put('/users/:id', authenticate, userController.updateProfile);
router.post('/users/:id/upload-photo', authenticate, userController.updateProfile);
router.post('/user/register', userController.register);


// Payment Page
router.post('/payments', authenticate, paymentController.makePayment);

// Cinemas Page
router.get('/cinemas', cinemaController.getAllCinemas);

// Admin Login Page
router.post('/admin/login', adminLoginController.adminLogin);

// Admin Panel
router.get('/admin/panel', authenticate, async (req, res) => {
  const result = await adminPanelController.getNewUsers();
  return res.status(result.success ? 200 : 500).json(result);
});

// Admin Panel - New Users
router.get('/admin/panel/new-users', authenticate, async (req, res) => {
  const result = await adminPanelController.getNewUsers();
  return res.status(result.success ? 200 : 500).json(result);
});

// Admin Panel - New Bookings
router.get('/admin/panel/new-bookings', authenticate, async (req, res) => {
  const result = await adminPanelController.getNewBookings();
  return res.status(result.success ? 200 : 500).json(result);
});

// Admin Panel - Canceled Bookings
router.get('/admin/panel/canceled-bookings', authenticate, async (req, res) => {
  const result = await adminPanelController.getCanceledBookings();
  return res.status(result.success ? 200 : 500).json(result);
});

// Manage Movies Page
router.get('/admin/movies', authenticate, MoviesController.listMovies);
router.post('/admin/movies', authenticate, MoviesController.addMovie);
router.put('/admin/movies/:id', authenticate, MoviesController.editMovie);
router.delete('/admin/movies/:id', authenticate, MoviesController.deleteMovie);

// Manage Tickets Page
router.get('/admin/tickets', authenticate, TicketsController.listTickets);
router.get('/admin/tickets/:id', authenticate, TicketsController.getTicketDetails);
router.put('/admin/tickets/:id', authenticate, TicketsController.editTicket);
router.delete('/admin/tickets/:id', authenticate, TicketsController.deleteTicket);

// New Tickets Page
router.get('/admin/new-tickets', authenticate, newTicketsController.listNewTickets);
router.post('/admin/new-tickets/:id/approve', authenticate, newTicketsController.approveNewTicket);

// User Management Page
router.get('/admin/users', authenticate, userManagementController.listUsers);

// Ticket Controller
router.post('/tickets', authenticate, ticketController.createTicket);
router.get('/tickets', authenticate, TicketsController.listTickets);

module.exports = router;