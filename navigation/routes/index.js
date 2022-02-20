import {SignIn, Dashboard} from '../../components/pages';

export const privateRoutes = [
    {
        path: '/',
        element: <Dashboard />
    },
];

export const publicRoute = [
    {
        path: '/signIn',
        element: <SignIn />
    }
];