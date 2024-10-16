import Category from "./components/Category";
import FinalChart from "./components/FinalChart";
import ReportWeb from "./components/ReportWeb";

function HomePageAdmin() {
  return (
    <main className='w-full bg-gray-200 transition-all main'>
      <div className='p-6'>
        <Category/>
        <FinalChart/>
        <ReportWeb/>
      </div>
    </main>
  );
}

export default HomePageAdmin;
