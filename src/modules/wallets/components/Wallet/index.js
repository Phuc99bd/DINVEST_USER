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
    <div className="wallet-menu">
      <div className="wallet-data">
        <Link
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
          <div class="wallet-label">
            <span>{wallet.label}</span>
            <span>History</span>
          </div>
        </Link>
        <div>{wallet.amount}</div>
      </div>
      <hr></hr>
      <div className="wallet-action">
        <Link href="#deposit" onClick={() => onClick("deposit")}>
          {" "}
          <DownCircleTwoTone /> Deposit{" "}
        </Link>
        {wallet.rules.is_swap ? (
          <Link href="#" onClick={() => onClick("swap")}>
            {" "}
            <DownCircleTwoTone /> Swap{" "}
          </Link>
        ) : (
          ""
        )}
        {wallet.unit == "DINVEST" ? (
          <Link href="#" onClick={() => onClick("exchange")}>
            {" "}
            <DownCircleTwoTone /> Get more {wallet.title}{" "}
          </Link>
        ) : (
          ""
        )}
        <Link href="#" onClick={() => onClick("withdraw")}>
          {" "}
          <UpCircleTwoTone /> Withdraw{" "}
        </Link>
      </div>
    </div>
  );
};

export default Wallet;
