import { Router } from 'express';

// CUSTOM IMPORTS
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointment.routes.ts';
import providersRouter from '@modules/appointments/infra/http/routes/providers.routes.ts';
import usersRouter from '@modules/users/infra/http/routes/users.routes.ts';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();

// Use appointmentsRouter to call all request with /appointments as
// default path
routes.use('/sessions', sessionsRouter);
routes.use('/providers', providersRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
