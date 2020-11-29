import React from 'react';
//components
import UserNav from '../components/UserNav';
import UserDetails from '../components/UserDetails';
import UserApplication from '../components/UserApplication';
import SideNav from '../components/SideNav';

const Dashboard = () => {
    return(
        <React.Fragment>
            <div className="flex-row bg-gray-200 w-screen h-screen antialiased">
                <UserNav />
                <UserDetails />
                <div className="flex">
                    <SideNav />
                    <UserApplication />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;