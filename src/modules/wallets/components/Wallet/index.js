import { DownCircleTwoTone, UpCircleTwoTone } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Wallet = ({
  wallet,
  setWallet,
  setShowDeposit,
  setShowWithdraw,
  setShowExchange,
  setShowSwap,
  setDrawer,
}) => {
  const onClick = (type) => {
    setWallet(wallet || null);
    switch (type) {
      case "deposit":
        setShowDeposit(true);
        break;
      case "withdraw":
        setShowWithdraw(true);
        break;
      case "exchange":
        setShowExchange(true);
        break;
      case "swap":
        setShowSwap(true);
        break;
      case "history":
        setDrawer(true);
        break;
      default:
    }
  };

  return (
    <div className="wallet-menu" key={wallet?.id}>
      <div className="wallet-data">
        <Link
          to="#"
          href="#"
          className="wallet-history"
          onClick={() => onClick("history")}
        >
          <div>
            <img
              src={require("assets/images/loading/loader.svg")}
              width={40}
              height={40}
            />
          </div>
          <div className="wallet-label">
            <span>{wallet.label}</span>
            <span>History</span>
          </div>
        </Link>
        <div>{wallet?.amount?.toFixed(2)}</div>
      </div>
      <hr></hr>
      <div className="wallet-action">
        <Link href="#deposit" onClick={() => onClick("deposit")} to="#">
          {" "}
          <DownCircleTwoTone /> Deposit{" "}
        </Link>
        {wallet.rules.is_swap ? (
          <Link href="#" onClick={() => onClick("swap")} to="#">
            {" "}
            <DownCircleTwoTone /> Swap{" "}
          </Link>
        ) : (
          ""
        )}
        {wallet.unit === "DINVEST" ? (
          <Link href="#" onClick={() => onClick("exchange")} to="#">
            {" "}
            <DownCircleTwoTone /> Get more {wallet.title}{" "}
          </Link>
        ) : (
          ""
        )}
        <Link href="#" onClick={() => onClick("withdraw")} to="#">
          {" "}
          <UpCircleTwoTone /> Withdraw{" "}
        </Link>
      </div>
    </div>
  );
};

export default Wallet;
