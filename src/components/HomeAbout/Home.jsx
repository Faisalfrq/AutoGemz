import React from "react";
import { useNavigate } from "react-router-dom";
import BuyCar from "../CarStore/BuyCar/BuyCar";

const Home = () => {
  /**
   * at this point your have complete info of user object
   * from the server including his tokens. You can use it here
   * if this is supposed to be a protected route.
   * Or you can make use of useSelector() RTK hook to get this information
   * anywhere in the components
   */
  // const userInfo = useSelector((state) => state.authSlice);
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // if (token !== userInfo.token) {
  //   /** this is currently working you can see it because of css
  //    * go to {@linkhttp://localhost:3000/} route and inspect the page
  //    * you should be able to see this div being rendered in HTML
  //    * then click login it should show the login form. On successful
  //    * login you will see the home page
  //    */

  //   return (
  //     <div
  //       style={{
  //         // height: "100vh",
  //         // width: "100%",
  //         // color: "white",
  //         // display: "flex",
  //         // justifyContent: "center",
  //         // alignItems: "center",
  //         marginTop: "11vh",
  //       }}
  //     >
  //       <h3>You are not authorized to see this page</h3>
  //     </div>
  //   );
  // }

  return (
    <div style={{ marginTop: "11vh" }}>
      <BuyCar />
    </div>
  );
};

export default Home;
