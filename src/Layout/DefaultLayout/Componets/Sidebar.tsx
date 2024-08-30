import logosvg from "../../../Assets/Image/Vector 8.svg";
import img from "../../../Assets/Image/BoyWithLaptop.svg";
import { Link, useLocation } from "react-router-dom";
import { additionalItems, siteMenu } from "../../../Common/Config/SiteMenu";

const Sidebar: React.FC = () => {
  const url=useLocation();
  return (
    <div className=" bg-orange-300 p-[40px] h-screen flex flex-col justify-between mx-auto">
      <div>
        <div className="flex items-center mb-4">
          <img
            src={logosvg}
            alt="G-EASY English Logo"
            className="h-100% mr-4"
          />
          <ul>
            <li className="text-[34px] font-bold">G-EASY</li>
            <li className="text-[16px] font-bold text-gray-600 mr-6">
              ENGLISH
            </li>
          </ul>
        </div>
        <ul>
          {siteMenu.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                to={item.href}
                className={`${item.href===url.pathname && 'bg-orange-700 text-white rounded-full'} py-2 px-4 gap-3 text-gray-700 flex items-center hover:bg-orange-700 hover:rounded-full hover:text-white`}
              >
                <span className="mr-2 text-gray-700">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img src={img} alt="Handsome boy but not Minh Tri" />
        <ul>
          {additionalItems.map((item, index) => (
            <li key={index} className="mb-2">
              <a
                href={item.href}
                className="py-2 px-4 w-full gap-5 text-gray-700 flex items-center hover:bg-orange-700 hover:rounded-full hover:text-white"
              >
                <span className="text-gray-700">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
