interface RegisterType {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    pin: string;
    confirmPin: string;
}

interface LoginType {
    email: string;
    pin: string;
}

interface GuestLoginType {
    email: string;
}

export {RegisterType, LoginType, GuestLoginType};
