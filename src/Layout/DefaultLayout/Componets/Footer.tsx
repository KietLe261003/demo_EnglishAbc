import logosvg from "../../../Assets/Image/Vector 8.svg";
import email from "../../../Assets/Image/email.svg";
import call from "../../../Assets/Image/call.svg";
import located from "../../../Assets/Image/located.svg";
import line1 from "../../../Assets/Image/Line 1.svg";
import fb from "../../../Assets/Image/facebook.svg";
import linkedin from "../../../Assets/Image/linkedin.svg";
import mail from "../../../Assets/Image/mail.svg";
import youtube from "../../../Assets/Image/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] text-black p-4 left-64 fixed top-[400px] left-0 right-0 z-10 shadow-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap md:flex-nowrap items-start">
          <div className="w-full ml-10 md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src={logosvg}
                alt="G-EASY English Logo"
                className="h-16 mr-4"
              />
              <ul>
                <li className="text-2xl font-bold">G-EASY</li>
                <li className="text-lg font-bold text-gray-600">ENGLISH</li>
              </ul>
            </div>

            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>

          <div className="w-full flex justify-between mt-14 md:w-1/2 lg:w-1/3">
            <img src={line1} className="mb-4" />
            <ul className="space-y-4 text-gray-600 text-base">
              <li className="flex items-center gap-3">
                <img src={call} className="w-6 h-6" />
                <p className="font-bold">Liên hệ</p>
                <span>+84 1234567890</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={located} className="w-6 h-6" />
                <p className="font-bold">Địa chỉ</p>
                <span>Số 1 Tây Sơn, Đống Đa, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={email} className="w-6 h-6" />
                <p className="font-bold">Email</p>
                <span>+84 1234567890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-3 flex justify-end gap-6 items-center ">
        <img src={fb} className="w-6 h-6" />
        <img src={linkedin} className="w-6 h-6" />
        <img src={mail} className="w-6 h-6" />
        <img src={youtube} className="w-6 h-6 mr-5" />
      </div>
    </footer>
  );
};

export default Footer;
