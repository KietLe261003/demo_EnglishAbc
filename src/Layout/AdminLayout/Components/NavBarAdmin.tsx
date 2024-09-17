import Logo from "../../../Assets/Image/Vector 8.svg";
import { siteMenuAdmin } from "../../../Common/Config/SiteMenuAdmin";
import { IconSetting } from "../../../Common/Icon/Icon";
import { IconLight } from "../../../Common/Icon/IconSlideBarAdmin";
import ItemNavBar from "./ItemNavBar";
function NavBarAdmin() {
  
  return (
    <div
      id='menu'
      className='bg-backgroundsidebaradmin min-w-64 min-h-[1500px] col-span-2 rounded-lg p-4 flex flex-col'
    >
      <div className='px-[40px] flex justify-center items-center'>
        <img src={Logo} alt='G-EASY English Logo' className='h-100% mr-4' />
        <ul>
          <li className='text-[25px] font-bold text-black'>G-EASY</li>
          <li className='text-[16px] font-bold text-gray-600 mr-6'>ENGLISH</li>
        </ul>
      </div>
      <div id='menu' className='flex flex-col space-y-2 my-5'>
        {siteMenuAdmin.map((item, index) => {
          return (
            <ItemNavBar
              key={index}
              content={item.content}
              icon={item.icon}
              href={item.href}
            ></ItemNavBar>
          );
        })}
      </div>
      <div className='mt-auto flex flex-col'>
        <div className='flex justify-start'>
          <span className='text-textsidebar font-semibold text-[20px]'>Support</span>
        </div>
        <ItemNavBar content={'Get Started'} href='/' icon={<IconLight/>} />
        <ItemNavBar content={'Setting'} href='/' icon={<IconSetting/>} />
        <hr className='my-2 border-textsidebar' />
        <a
          href='/'
          className='flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2'
        >
          <div>
            <img
              className='rounded-full w-10 h-10 relative object-cover'
              src='https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125'
              alt=''
            />
          </div>
          <div>
            <p className='font-medium text-textsidebar group-hover:text-indigo-400 leading-4'>
              Admin
            </p>
            <span className='text-xs text-textsidebar'>Pantazi LLC</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default NavBarAdmin;
