import React from "react";
import "./Widget.scss";

/* Material UI Icons */
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import {
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  /* Temporary */
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutline
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2" }}
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2",
            }}
          />
        ),
      };
      break;

    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View Earnings",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2" }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "View Balance",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <ArrowUpwardOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
