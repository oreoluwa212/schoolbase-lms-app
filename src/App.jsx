import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./pages/web-site/GetStarted";
import TeacherDashboard from "./pages/web-app/teachers-dashboard/TeacherDashboard";
import ClassRecords from "./components/teachers-dashboard/ClassRecords";
import Classes from "./components/teachers-dashboard/Classes";
import Attendance from "./components/teachers-dashboard/Attendance";
import Exams from "./components/teachers-dashboard/Exams";
import Settings from "./components/teachers-dashboard/Settings";
// import Holder from "./pages/web-site/landingpage/Holder";
import QuizHistory from "./components/teachers-dashboard/QuizHistory";
import ApplicantReg from "./pages/web-site/applicant/ApplicantReg";
import ApplicantContact from "./pages/web-site/applicant/ApplicantContact";
import ApplicantAcademiaInfo from "./pages/web-site/applicant/ApplicantAcademiaInfo";
import EmailVerification from "./pages/web-site/applicant/EmailVerification";
import CreatePassword from "./pages/web-site/applicant/CreatePassword";
import ResetPassword from "./pages/web-site/applicant/ResetPassword";
import ResetPasswordVerification from "./pages/web-site/applicant/ResetPasswordVerification";
import PasswordResetSuccessful from "./pages/web-site/applicant/PasswordResetSuccessful";
import ConfirmEmail from "./pages/web-site/applicant/ConfirmEmail";
import SignInPage from "./pages/web-site/teachersOnboading/SignInPage";
import SignUpPage from "./pages/web-site/teachersOnboading/SignUpPage";
import TemporaryHome from "./pages/web-app/students-dashboard/TemporaryHome";
import StudentsPage from "./pages/web-app/students-dashboard/StudentsPage";
import ClassesPage from "./pages/web-app/students-dashboard/ClassesPage";
import PaymentsPage from "./pages/web-app/students-dashboard/PaymentsPage";
import MailPage from "./pages/web-app/students-dashboard/MailPage";
import SettingsPage from "./pages/web-app/students-dashboard/Settings";
import LandingPage from "./pages/web-site/landingpage/LandingPage";
import Timetable from "./Calender";
import AssessmentPage from "./pages/web-app/students-dashboard/AssessmentPage";
import PayFees from "./pages/web-app/students-dashboard/PayFees";
import StuSignUp from "./pages/web-site/studentsOnboarding/StuSignUp";
import SigninPage from "./pages/web-site/studentsOnboarding/SigninPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/get-started/student/signup" element={<StuSignUp />} />
        <Route path="/get-started/student/signin" element={<SigninPage />} />
        {/* <Route path="/student/dashboard" element={<HomePage />} /> */}
        <Route path="/student" element={<TemporaryHome /> }/>
        <Route path="/student/student-life" element={<StudentsPage />} />
        <Route path="/student/classes" element={<ClassesPage />} />
        <Route path="/student/payments" element={<PaymentsPage />} />
        <Route path="/student/payments/pay" element={<PayFees />} />
        <Route path="/student/mail" element={<MailPage />} />
        <Route path="/student/assessment" element={<AssessmentPage />} />
        <Route path="/student/settings" element={<SettingsPage />} />
        <Route path="/get-started/teacher/signin" element={<SignInPage />} />
        <Route path="/get-started/teacher/signup" element={<SignUpPage />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route
          path="/teacher/dashboard/class-records"
          element={<ClassRecords />}
        />
        <Route path="/teacher/dashboard/classes" element={<Classes />} />
        <Route path="/teacher/dashboard/attendance" element={<Attendance />} />
        <Route path="/teacher/dashboard/exams" element={<Exams />} />
        <Route path="/teacher/dashboard/settings" element={<Settings />} />
        <Route
          path="/teacher/dashboard/exams/history"
          element={<QuizHistory />}
        />
        <Route path="/calender" element={<Timetable />} />
        <Route
          path="/get-started/applicant/registration"
          element={<ApplicantReg />}
        />
        <Route
          path="/get-started/applicant/contact"
          element={<ApplicantContact />}
        />
        <Route
          path="/get-started/applicant/academiainfo"
          element={<ApplicantAcademiaInfo />}
        />
        <Route
          path="/get-started/applicant/emailverification"
          element={<EmailVerification />}
        />
        <Route
          path="/get-started/applicant/createpassword"
          element={<CreatePassword />}
        />
        <Route
          path="/get-started/applicant/resetpassword"
          element={<ResetPassword />}
        />
        <Route
          path="/get-started/applicant/resetpasswordverification"
          element={<ResetPasswordVerification />}
        />
        <Route
          path="/get-started/applicant/passwordresetsuccessful"
          element={<PasswordResetSuccessful />}
        />
        <Route
          path="/get-started/applicant/confirmemail"
          element={<ConfirmEmail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
