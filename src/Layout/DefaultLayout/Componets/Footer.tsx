import logosvg from "../../../Assets/Image/Vector 8.svg";
import email from "../../../Assets/Image/email.svg";
import call from "../../../Assets/Image/call.svg";
import located from "../../../Assets/Image/located.svg";
import line1 from "../../../Assets/Image/Line 1.svg";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col items-center w-full">
        <div className=" w-full h-auto py-8 px-16 md:flex md:justify-between md:items-center">
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

            <p className=" text-customColor text-justify max-w-sm h-14 text-[16px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          <div className="mt-7 mr-16 flex items-start justify-start text-[16px]">
            <img src={line1} className="mt-7 ml-5" />
            <ul className="space-y-6 mt-7 pl-16  ">
              <li className="flex items-center gap-x-2 ">
                <img src={call} className="mr-3" />
                <p className="mr-8 font-bold ">Liên hệ</p>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 128 128"><rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53"/><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#4285f4" d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636"/><path fill="#34a853" d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091"/><path fill="#fbbc04" d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363"/><path fill="#ea4335" d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675"/><path fill="#c5221f" d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493"/></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 180" className="mr-5">
     <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
  <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
</svg>
      </div>
    </footer>
  );
};

export default Footer;
