//components
import Login from './Login';
import Payments from './Payments';
import Dashboard from './UserDashboard';

export const routes = [
    {
        path: '/',
        component: Login 
    },
    {
        path: '/profile',
        component: Dashboard
    },
    {
        path: '/payments',
        component: Payments
    }
]