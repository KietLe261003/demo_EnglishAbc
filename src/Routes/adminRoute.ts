
import ManagementAccount from "../Page/AdminPage/Account/Index";
import ManagementDocument from "../Page/AdminPage/Document/Document";
import ManagementFeedBack from "../Page/AdminPage/FeedBack/Index";
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
    },
    {
        path: RouterLinkAdmin.Document,
        element: ManagementDocument
    },
    {
        path: RouterLinkAdmin.Feedback,
        element: ManagementFeedBack
    }
]