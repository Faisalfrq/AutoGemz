import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import LocalAtmTwoToneIcon from "@mui/icons-material/LocalAtmTwoTone";
import DirectionsCarFilledTwoToneIcon from "@mui/icons-material/DirectionsCarFilledTwoTone";
const data = [
  {
    icon: ShoppingCartTwoToneIcon,
    title: "NEW CARS",
    description: `Visit Auto Gemz Market and find out the new cars out there
                  available for purchase. View there details and images all in
                  one click. Get in touch with the dealer.`,
    button: "BUY NEW CAR",
    path: "/buyCar/newCar",
  },
  {
    icon: LocalAtmTwoToneIcon,
    title: "USED CARS",
    description: `Visit Auto Gemz Market and find out the used cars out there
                  available for purchase. View there details and images all in
                  one click. Get in touch with the dealer.`,
    button: "BUY USED CARS",
    path: "/buyCar/usedCar",
  },
  {
    icon: DirectionsCarFilledTwoToneIcon,
    title: "SELL CARS",
    description: `Visit Auto Gemz Market and advertise your car or let us sell it for you for a reasonable price.Get notified and Get in touch with the buyer.`,
    button: "SELL YOUR CAR",
    path: "/buyCar/sellCar",
  },
];

export default data;
