import { Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./components/HomeAbout/Home";
import SellCar from "./components/CarStore/SellCar/SellCar";
import UsedCar from "./components/CarStore/BuyCar/UsedCar/UsedCar";
import NewCar from "./components/CarStore/BuyCar/NewCar/NewCar";
import BuyCar from "./components/CarStore/BuyCar/BuyCar";
import PostAddForm from "./components/CarStore/SellCar/PostAddForm";
import UsedCarDetails from "./components/CarStore/BuyCar/UsedCar/UsedCarDetails";
import NavBar2 from "./components/UserHeaderFooter/UserHeaderFooter/NavBar2/NavBar2";
import About from "./components/HomeAbout/About";
import UserProfile from "./components/UserHeaderFooter/UserHeaderFooter/UserProfile/UserProfile";
import Settings from "./components/UserHeaderFooter/UserHeaderFooter/Settings/Settings";
import Auth from "./components/Auth/Auth";
import Signup from "./components/Auth/Signup";
import RentOutCar from "./components/CarStore/RentCar/RentOutCar";
import RentYourCar from "./components/CarStore/RentCar/RentYourCar";
import RentCarDetails from "./components/CarStore/RentCar/RentCarDetails";
import CarNew from "./components/Dashboard/DashComponents/Malik/CarNew";
import Selling from "./components/Dashboard/DashComponents/Malik/Selling";
import Renting from "./components/Dashboard/DashComponents/Malik/Renting";
import Users from "./components/Dashboard/DashComponents/Malik/Users";
import Feedbacks from "./components/Dashboard/DashComponents/Malik/Feedbacks";
import SideBar from "./components/Dashboard/DashComponents/SideBar";
import TopNav from "./components/Dashboard/DashComponents/TopNav";
import SingleCArd from "./components/Dashboard/DashComponents/SingleCArd";
import NewCarDetails from "./components/CarStore/BuyCar/NewCar/NewCarDetails";
import UpdateCarNew from "./components/Dashboard/DashComponents/Malik/UpdateCarNew";
import Unauthorized from "./components/Auth/Unauthorized";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Other Outer Routes */}
        <Route path="/dashboard/carsSale/:id" element={<UsedCarDetails />} />
        <Route path="/dashboard/carsNew/:id" element={<NewCarDetails />} />
        <Route
          path="/dashboard/carsNew/updateCarNew/:id"
          element={<UpdateCarNew />}
        />
        <Route path="/dashboard/carsRent/:id" element={<RentCarDetails />} />
        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <>
              <SideBar />
              <TopNav />
            </>
          }
        >
          <Route path="/dashboard" element={<SingleCArd />} />
          <Route path="/dashboard/carsSale" element={<Selling />} />
          <Route path="/dashboard/carsRent" element={<Renting />} />
          <Route path="/dashboard/carsNew" element={<CarNew />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/feedbacks" element={<Feedbacks />} />
        </Route>
        {/* Auth Routes */}
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/" element={<NavBar2 />}>
          <Route path="/" element={<Home />} />
          <Route path="/buyCar" element={<BuyCar />} />
          <Route path="/sellCar" element={<SellCar />} />
          <Route path="/about" element={<About />} />
          <Route path="/buyCar/newCar" element={<NewCar />} />
          <Route
            path="/buyCar/newCar/newCarDetail/:id"
            element={<NewCarDetails />}
          />
          <Route path="/buyCar/usedCar" element={<UsedCar />} />
          <Route path="/buyCar/usedCar/car/:id" element={<UsedCarDetails />} />
          <Route path="/buyCar/sellCar" element={<SellCar />} />
          <Route path="/sellCar/postAdd" element={<PostAddForm />} />
          <Route path="/rentCar/rentACar" element={<RentYourCar />} />
          <Route
            path="/rentCar/rentACar/rentCarDetails/:id"
            element={<RentCarDetails />}
          />
          <Route path="/rentCar/rentOut" element={<RentOutCar />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/settings/:id" element={<Settings />} />
        </Route>
        {/* <Route path="/" element={<Test />}>
          <Route path="/rentCar" element={<RentCar />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
