
import ManagementAccount from "../Page/AdminPage/Account/Index";
import HomePageAdmin from "../Page/AdminPage/HomePage/HomePageAdmi";
import { RouterLinkAdmin } from "../Util/RouterLink";

export const adminRoute=[
    {
        path: RouterLinkAdmin.Home,
        element: HomePageAdmin
    },
    {
        path: RouterLinkAdmin.Account,
        element: ManagementAccount
    }
]