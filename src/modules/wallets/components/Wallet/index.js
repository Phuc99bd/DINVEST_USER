import { DownCircleTwoTone, UpCircleTwoTone } from "@ant-design/icons";
import React from "react";
import "./styles.scss";

const Wallet = ({ wallet , setWallet , setShowDeposit , setShowWithdraw , setShowExchange, setShowSwap , setDrawer })=>{

    const onClick = (type)=>
    {
        setWallet(wallet);
        switch(type){
            case "deposit":
                  setShowDeposit(true)
            break;
            case "withdraw":
                setShowWithdraw(true)
            break;
            case "exchange":
                setShowExchange(true)
            break;
            case "swap":
                setShowSwap(true);
                break;
            case "history":
            setDrawer(true);
            break;
        }
    }


    return <div className="wallet-menu">
        <div className="wallet-data">
            <a href="#" className="wallet-history" onClick={()=>onClick("history")}>
                <div>
                  <img src={require("assets/images/loading/loader.svg")} width={40} height={40} />
                </div>
                <div class="wallet-label">
                    <span>{wallet.title}</span>
                    <span>History</span>
                </div>
            </a>
            <div>
               {wallet.amount}
            </div>
        </div>
        <hr></hr>
        <div className="wallet-action">
            <a href="#deposit" onClick={()=>onClick("deposit")}> <DownCircleTwoTone /> Deposit  </a>
            { wallet.is_swap  ? <a href="#" onClick={()=>onClick("swap")}> <DownCircleTwoTone /> Swap </a> : "" } 
            { wallet.is_exchange  ? <a href="#" onClick={()=>onClick("exchange")}> <DownCircleTwoTone /> Get more {wallet.title} </a> : "" } 
            <a href="#" onClick={()=>onClick("withdraw")}>  <UpCircleTwoTone /> Withdraw </a>
        </div>
    </div>
}

export default Wallet;