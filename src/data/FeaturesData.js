import React from "react";

import { PiMapPinLineBold } from "react-icons/pi";
import { IoIosOptions } from "react-icons/io";
import { PiShoppingCartBold } from "react-icons/pi";
import { BiSupport, BiDollar } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Fly Safe",
    description:
      "We  are commited to help  pilots unleash their aerial creativity safely and responsibly",
    icon: iconStyle(PiMapPinLineBold),
    imgClass: "one",
  },
  {
    name: "Ease of Use",
    description: "Our system is easy to use and integrate",
    icon: iconStyle(IoIosOptions),
    imgClass: "two",
  },
  {
    name: "Maintenance",
    description:
      "Our products are of  highest standards, which makes it highly sustainable",
    icon: iconStyle(GrHostMaintenance),
    imgClass: "three",
  },
  {
    name: "24/7 Support",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(BiSupport),
    imgClass: "four",
  },
  {
    name: "Price",
    description: "We offer the highest value/cost ratio",
    icon: iconStyle(BiDollar),
    imgClass: "five",
  },
  {
    name: "Buy From",
    description: "Be the first to experience, visit Price section",
    icon: iconStyle(PiShoppingCartBold),
    imgClass: "six",
  },
];
