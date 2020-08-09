import { Router } from 'express';
import Connections from '../api/routes/connections/connections';

const getRoutes = () => {
    const router = Router();

    router.use('/connections', Connections());

    return router;
};

export default getRoutes;
