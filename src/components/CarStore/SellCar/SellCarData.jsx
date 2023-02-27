import PostAddIcon from "@mui/icons-material/PostAdd";
import SellIcon from "@mui/icons-material/Sell";
const data = [
  {
    icon: PostAddIcon,
    title: "SELL YOUR CAR",
    description: {
      one: `Post your Ad for Free in Easy Steps`,
      two: `Get Genuine offers from Buyers`,
      three: `Sell your car Fast at the Best Price`,
    },
    info: `* Service available only in Islamabad and Rawalpindi`,
    button: "POST AN ADD",
    link: "/sellCar/postAdd",
  },
  {
    icon: SellIcon,
    title: "RENT OUT YOUR CAR",
    description: {
      one: `Interested Customers will reach out to you`,
      two: `We Bargain for you and share the Best Offer`,
      three: `We ensure Safe & Secure Transaction`,
    },
    info: `* You can post only two free Ads per month.`,
    button: "RENT OUT",
    link: "/rentCar/rentOut",
  },
];

export default data;
