import { ReactComponent as Phone } from "../../assets/images/icons/phone.svg";
import { ReactComponent as Connection } from "../../assets/images/icons/connection.svg";
import { ReactComponent as Stack } from "../../assets/images/icons/stack.svg";
import { ReactComponent as Monitor } from "../../assets/images/icons/monitor.svg";
import { ReactComponent as Config } from "../../assets/images/icons/config.svg";
import { ReactComponent as D } from "../../assets/images/icons/d.svg";
import { ReactComponent as S } from "../../assets/images/icons/s.svg";
import { ReactComponent as G } from "../../assets/images/icons/g.svg";
import { ReactComponent as I } from "../../assets/images/icons/i.svg";
import { ReactComponent as Ru } from "../../assets/images/icons/flag-ru.svg";
import { ReactComponent as En } from "../../assets/images/icons/flag-en.svg";

export const headerCategories = [
  { name: "Direction", id: 1 },
  { name: "Command", id: 2 },
  {
    name: "Services",
    id: 3,
    children: [
      {
        name: "Development of mobile Applications",
        icon: <Phone />,
        id: "Services",
      },
      {
        name: "Development and implementation ERP systems",
        icon: <Connection />,
        id: "ERP",
      },
      {
        name: "User interface, User experience design",
        icon: <Stack />,
        id: "UXUI",
      },
      { name: "IT consulting", icon: <Monitor />, id: "Consulting" },
      {
        name: "Optimization IT consulting infrastructure",
        icon: <Config />,
        id: "Optimization",
      },
    ],
  },
  {
    name: "Tools",
    id: 4,
  },
  {
    name: "Clients",
    id: 5,
  },
  {
    name: "Portfolio",
    id: 6,
    children: [
      { name: "Delever", icon: <D />, id: "Delever" },
      { name: "Sms.uz", icon: <S />, id: "SmsUz" },
      { name: "GoodZone", icon: <G />, id: "GoodZone" },
      { name: "Iman", icon: <I />, id: "Iman" },
    ],
  },
  {
    name: "Language",
    id: 7,
    children: [
      {
        name: "Рус",
        icon: <Ru style={{ width: 28, height: 28 }} />,
        id: "none",
      },
      {
        name: "Eng",
        icon: <En style={{ width: 28, height: 28 }} />,
        id: "none",
      },
    ],
  },
];
