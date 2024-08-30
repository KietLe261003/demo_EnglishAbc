import DocumentFreePage from "../Page/ClientPage/DocumentFreePage/DocumentFreePage";
import DocumentPayPage from "../Page/ClientPage/DocumentPayPage/DocumentPayPage";
import HomePage from "../Page/ClientPage/HomePage/HomePage";
import { RouterLink } from "../Util/RouterLink";
const homeRoute = [
    {
        path: RouterLink.Home,
        element: HomePage
    },
    {
        path: RouterLink.DocumentFreePage,
        element: DocumentFreePage
    },
    {
        path: RouterLink.DocumentPayPage,
        element: DocumentPayPage
    }
]

export default homeRoute