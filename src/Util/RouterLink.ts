export enum RouterLink {
    Home="/",
    DocumentFreePage="/document/free",
    DocumentPayPage="/document/pay",
    LessonNotPurchased = "/document/notpay",
    CourseOffline="/course/offline",
    Exam="/exam",
    Profile="/profile",
    Setting="/setting",
    Chat="/chat",
    DetailCourseOffline="/course/offline/:id",
}
export enum RouterLinkAdmin {
    Home="",
    Account="account",
    Certificate="certificate",
    Course="course",
    RegisteredCourse="registeredCourse",
    Teacher="teacher",
    Feedback="feedback"
}