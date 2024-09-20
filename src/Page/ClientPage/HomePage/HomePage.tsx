import { useEffect } from "react";
import BannerLarge from "../../../Components/Banner/BannerLarge";
import ContentSession from "../../../Components/Content/ContentSession";
import LoginForm from "../../../Components/Form/LoginForm/LoginForm";
import ContentHome from "./Components/ContentHome";
import ListIconContentHome from "./Components/ListIconContentHome";
import { userServices } from "../../../Services/UserService";
const HomePage = () => {
  const getUser = async ()=>{
    const listUser = await userServices.getAllUser();
    console.log(listUser);
  }
  useEffect(()=>{
    getUser();
  },[])
  return (
    <div className="flex flex-col gap-3">
      <BannerLarge />
      <div className="min-h-[72px] "></div>
      <ContentSession
        title="About"
        content="G-Easy is a promising and growing rapidly growing educational 
        technology startup in Vietnam. G-Easy is an English learning software 
        from basic to advanced to help learners easily approach English. I
        t currently has more than 13 million users in 101 countries around the world, 
        and has offices in Portugal, Vietnam, India, Indonesia and Japan."
      />
      <div className="min-h-[72px] "></div>
      <ContentHome />
      <ListIconContentHome />
      <div className="min-h-[72px] "></div>
      <ContentSession
        title="Làm bài kiểm tra thử"
        content="G-Easy helps you check your English level from there to have a good orientation for yourself"
        contentButton="Làm bài ngay"
      />
      <LoginForm />
    </div>
  );
};

export default HomePage;
