import { Router } from 'express';
import authRoutes from './auth-routes.js';
import userRoutes from './api/user-routes.js';
import ticketRoutes from './api/ticket-routes.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/auth', authRoutes);
// TODO: Add authentication to the API routes
router.use('/user-routes', authenticateToken, userRoutes);
router.use('/ticket-routes', authenticateToken, ticketRoutes);

export default router;
