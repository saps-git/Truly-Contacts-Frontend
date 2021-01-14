import RegisterComponent from "../containers/Register";
import LoginComponent from "../containers/Login";
import ContactsComponent from "../containers/Contacts";
import CreateContactComponent from "../containers/CreateContact"

const routes = [  //routes array, which contain route to follow when a path is invoked
    {
        path: "/auth/register",
        component: RegisterComponent, //impoerted all various components from their own files
        title: "Register",
    },
    {
        path: "/auth/login",
        component: LoginComponent,
        title: "Login",
    },
    {
        path: "/contacts/create",
        component: CreateContactComponent,
        title: "Create Contact",
    },
    {
        path: "/",
        component: ContactsComponent,
        title: "Contacts",
    },
]

export default routes;