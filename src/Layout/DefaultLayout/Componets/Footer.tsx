import logosvg from '../../../Assets/Image/Vector 8.svg'; 
import email from '../../../Assets/Image/email.svg';
import call from '../../../Assets/Image/call.svg';
import located from '../../../Assets/Image/located.svg';
import line1 from '../../../Assets/Image/Line 1.svg';
import fb from '../../../Assets/Image/facebook.svg';
import linkedin from '../../../Assets/Image/linkedin.svg';
import mail from '../../../Assets/Image/mail.svg' ;
import youtube from '../../../Assets/Image/youtube.svg';

const Footer = () => {
  return (
    <footer >
      <div  className="flex flex-col items-center">
      <div className="w-[958px] h-[210px] mx-auto  md:flex md:justify-between md:items-center py-8">
        <div>
          <div className="flex items-center mb-4">
            <img src={logosvg} alt="G-EASY English Logo" className="h-100% mr-4" />
            <ul>
              <li className='text-[34px] font-bold'>G-EASY</li>
              <li className="text-[16px] font-bold text-gray-600 mr-6">ENGLISH</li>
            </ul>
          </div>

        <p className=" text-customColor text-justify max-w-sm h-14 text-[16px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  
          </p>
        </div>
        
        <div className='mt-7 mr-16 flex items-start justify-start text-[16px]'>
            <img src={line1} className='mt-7 ' />
           <ul className='space-y-6 mt-7 pl-16  '>
              <li className='flex items-center gap-x-2 ' >
                <img src={call} className='mr-3'/>
                <p className='mr-8 font-bold '>Liên hệ</p> 
                <span>+84 1234567890</span>
              </li>
              <li className='flex items-center gap-x-2 text-[16px]'>
               <img src={located} className='mr-3'/>
                <p className='mr-8 font-bold'>Địa chỉ</p> 
                <span>Số 1 Tây Sơn, Đống Đa, Hà Nội</span>
              </li>
              <li className='flex items-center gap-x-2 text-[16px]'>
                <img src={email} className='mr-3'/>
                <p className='mr-11 font-bold'>Email </p> 
                <span>+84 1234567890</span>
              </li>
          </ul>
        </div>
     </ div>
     <div className= 'bg-[#EAEAEA] py-3 flex justify-end gap-6 items-center w-[1120px] h-[62px]' >
        <img src={fb} className='w-6'/>
        <img src={linkedin} className='w-6'/>
        <img src={mail} className='w-6'/>
        <img src={youtube} className='mr-10 w-6'/>
     </div>
      </div>
     
    </footer>
  );
}
export default Footer;