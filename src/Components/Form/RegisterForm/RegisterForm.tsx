import CardTitleComponent from "../RegisterForm/Components/CardTitleComponent";
import ButtonComponent from "./Components/ButtonComponent";

const RegisterForm = () => {
  return (
    <div>
      <div className=" max-h-full mt-10 ">
        {/* Auth Card Container */}
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          {/* Auth Card */}
          <div
            className="
            w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-slate-50 rounded-3xl shadow-md lg:shadow-lg
          "
          >
            <CardTitleComponent />
            <div>
              <div className="mt-8 font-medium">Họ và tên</div>
              <form className="mt-2" method="POST">
                {/* Email Input */}
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                ></label>
                <input
                  id="account"
                  type="account"
                  name="account"
                  autoComplete="account"
                  className="
                block w-full py-3 px-1 mt-2 
                text-gray-800 appearance-none 
                border rounded-xl border-[#9E988F]
                focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
              "
                  required
                />
              </form>
            </div>

            <div className="flex">
              <div>
                <div className="mt-8 font-medium">Email</div>
                <div className="relative flex items-center">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="current-email"
                    className="
                    block w-[260px] py-3 px-4 pr-10 mt-2
                    text-gray-800 appearance-none 
                    border rounded-xl border-[#9E988F]
                    focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                    "
                    required
                  />
                </div>
              </div>
              <div className="ml-5 font-medium">
                <div className="mt-8 ml-">Số điện thoại </div>
                <div className="relative flex items-center">
                  <input
                    id="tel"
                    type="tel"
                    name="tel"
                    autoComplete="current-number"
                    className="
                    block w-[260px] py-3 px-4 pr-10 mt-2
                    text-gray-800 appearance-none 
                    border rounded-xl border-[#9E988F]
                    focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                    "
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="mt-10 font-medium">
                Hãy cho G-Easy biết bạn cần gì nhé!
              </div>
              <div className="relative flex items-center">
                <input
                  id="mess"
                  type="mess"
                  name="mess"
                  autoComplete="current-mess"
                  className="
                    block w-full py-8 px-4 pr-10 mt-2
                    text-gray-800 appearance-none 
                    border rounded-xl border-[#9E988F]
                    focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                    "
                  //  rows={4}
                  // autoComplete="off"
                  required
                />
              </div>
            </div>
            <ButtonComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
