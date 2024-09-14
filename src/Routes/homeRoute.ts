import CourseOfflinePage from "../Page/ClientPage/CourseOfflinePage/CourseOfflinePage";
import DetailCourseOfflinePage from "../Page/ClientPage/CourseOfflinePage/DetailCourseOfflinePage";
import DocumentFreePage from "../Page/ClientPage/DocumentFreePage/DocumentFreePage";
import DocumentPayPage from "../Page/ClientPage/DocumentPayPage/DocumentPayPage";
import LessonNotPurchased from "../Page/ClientPage/DocumentPayPage/LessonNotPurchased";
import ExamsPage from "../Page/ClientPage/ExamsPage/ExamsPage";
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
    },
    {
        path: RouterLink.LessonNotPurchased,
        element: LessonNotPurchased
    },
    {
        path: RouterLink.CourseOffline,
        element: CourseOfflinePage
    },
    {
        path: RouterLink.Exam,
        element: ExamsPage
    },
    {
        path: RouterLink.DetailCourseOffline,
        element: DetailCourseOfflinePage
    }
]

export default homeRoute