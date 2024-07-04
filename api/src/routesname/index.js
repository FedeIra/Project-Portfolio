// External packages:
import { Router } from 'express';

// Internal packages:
import userRoutes from './user.routes.js';
import commentRoutes from './comments.routes.js';
import fileRoutes from './files.routes.js';
import emailRoutes from './email.routes.js';

const router = Router();

router.use(emailRoutes);
router.use(fileRoutes);
router.use(userRoutes);
router.use(commentRoutes);

export default router;
