import { ReactComponent as Location } from "../../assets/images/icons/location.svg";
import { ReactComponent as Phone } from "../../assets/images/icons/contact-phone.svg";
import { ReactComponent as Sms } from "../../assets/images/icons/notification.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { theme } from "../../theme";

export const contactsArr = [
  {
    name: "Ташкент,  Мирзо-Улугбекский район, 5-й пр. Курган, 32  адрес",
    icon: <Location />,
  },
  { name: "+998 33 66 00 999", icon: <Phone /> },
  { name: "azizbek.b@udevs.io", icon: <Sms /> },
  { name: "t.me/azizbekbakhodirov", icon: <TelegramIcon color="primary" /> },
];
export const socialMediaArr = [
  {
    icon: (
      <YouTubeIcon
        sx={{ ":hover": { color: "error.main" }, transition: "0.3s" }}
        color="primary"
      />
    ),
  },
  {
    icon: (
      <InstagramIcon
        sx={{ ":hover": { color: "error.main" }, transition: "0.3s" }}
        color="primary"
      />
    ),
  },
  {
    icon: (
      <FacebookIcon
        sx={{ ":hover": { color: "#3b5998" }, transition: "0.3s" }}
        color="primary"
      />
    ),
  },
  {
    icon: (
      <TwitterIcon
        sx={{ ":hover": { color: "#1da1f2" }, transition: "0.3s" }}
        color="primary"
      />
    ),
  },
];
