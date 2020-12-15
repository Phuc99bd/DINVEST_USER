import { Col, Drawer, Row } from "antd";
import React, { useState } from "react";
import Wallet from "../components/Wallet/index";
import "./styles.scss"
import ModalConfirm from "commons/components/ModalConfirm/index";
import DepositModal from "../components/Wallet/DepositModal";
import WithdrawModal from "../components/Wallet/WithdrawModal";
import { FormattedMessage } from "react-intl";
import ExchangeModal from "../components/Wallet/ExchangeModal";
import SwapModal from "../components/Wallet/SwapModal";
import DrawerHistory from "../components/DrawerHistory/index";

const WalletPage = ()=>{
    const [isDepositVisible , setShowDeposit] = useState(false);
    const [isSwapVisible , setShowSwap] = useState(false);
    const [isWithdrawVisible , setShowWithdraw] = useState(false);
    const [isExchangeVisible , setShowExchange] = useState(false);
    const [isHistory , setShowHistory] = useState(false);

    const arrayWallet = [{
        title: "USJ",
        address: "TCAhdMp2cBfzMeqEXgbX71yFuTmzgy1kmH",
        amount: 12312.32,
        is_swap: true
    },
    {
        title: "USDT",
        address: "TCAhdMp2cBfzMeqEXgbX71yFuTmzgy1kmH",
        amount: 12312.32,
        is_swap: true

    },
    {
        title: "JSF",
        address: "TCAhdMp2cBfzMeqEXgbX71yFuTmzgy1kmH",
        amount: 12312.32,
        is_swap: false,
        is_exchange: 1

    },
    {
        title: "DINVEST",
        address: "TCAhdMp2cBfzMeqEXgbX71yFuTmzgy1kmH",
        amount: 12312.32,
        is_swap: false

    }
]

const [wallet , setWallet] = useState(arrayWallet[0]);

    return  <><Row>
        {arrayWallet.map(e=>{
            return (
             <Col md={12} xs={24} className="wallet-network">
              <Wallet wallet={e} setWallet={setWallet} setShowDeposit={setShowDeposit} setShowExchange={setShowExchange} setShowWithdraw={setShowWithdraw}
              setShowSwap={setShowSwap} setDrawer={setShowHistory}
              ></Wallet>
            </Col>
         )
        })}
        <ModalConfirm visible={isDepositVisible}  setVisible={setShowDeposit} title={`Deposit ${wallet ? wallet.title : ""}`}
        MyForm={<DepositModal wallet={wallet}></DepositModal>}
        />
        <ModalConfirm visible={isWithdrawVisible}  setVisible={setShowWithdraw} title={`Withdraw ${wallet ? wallet.title : ""}`}
        MyForm={<WithdrawModal wallet={wallet}></WithdrawModal>}
        />
        <ModalConfirm visible={isExchangeVisible}  setVisible={setShowExchange} title={`Get more ${wallet ? wallet.title : ""}`}
        MyForm={<ExchangeModal wallet={wallet}></ExchangeModal>}
        />
        <ModalConfirm visible={isSwapVisible}  setVisible={setShowSwap} title={`Swap ${wallet ? wallet.title : ""}`}
        MyForm={<SwapModal wallet={wallet}></SwapModal>}
        />
    </Row>
    <Drawer
        title={`History wallet ${wallet ? wallet.title : ""}`}
        placement="right"
        closable={false}
        onClose={()=>setShowHistory(false)}
        visible={isHistory}
        width={"75%"}
        >
            <DrawerHistory wallet={wallet}>
            </DrawerHistory>
        </Drawer>
     </>
      
}

export default WalletPage;