import DocumentFreePage from "../Page/ClientPage/DocumentFreePage/DocumentFreePage";
import DocumentPayPage from "../Page/ClientPage/DocumentPayPage/DocumentPayPage";
import HomePage from "../Page/ClientPage/HomePage/HomePage";
const homeRoute = [
    {
        path: '/',
        element: HomePage
    },
    {
        path: '/document/free',
        element: DocumentFreePage
    },
    {
        path: '/document/pay',
        element: DocumentPayPage
    }
]

export default homeRoute