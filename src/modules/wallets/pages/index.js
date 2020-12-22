import { Col, Drawer, Row } from "antd";
import React, { useState } from "react";
import Wallet from "../components/Wallet/index";
import "./styles.scss";
import ModalConfirm from "commons/components/ModalConfirm/index";
import DepositModal from "../components/Wallet/DepositModal";
import WithdrawModal from "../components/Wallet/WithdrawModal";
import { FormattedMessage } from "react-intl";
import ExchangeModal from "../components/Wallet/ExchangeModal";
import SwapModal from "../components/Wallet/SwapModal";
import DrawerHistory from "../components/DrawerHistory/index";
import { useSelector } from "react-redux";

const WalletPage = () => {
  const [isDepositVisible, setShowDeposit] = useState(false);
  const [isSwapVisible, setShowSwap] = useState(false);
  const [isWithdrawVisible, setShowWithdraw] = useState(false);
  const [isExchangeVisible, setShowExchange] = useState(false);
  const [isHistory, setShowHistory] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const [wallet, setWallet] = useState(null);

  return (
    <>
      <Row>
        {userInfo.wallet.map((e) => {
          return (
            <Col md={12} xs={24} className="wallet-network">
              <Wallet
                wallet={e}
                setWallet={setWallet}
                setShowDeposit={setShowDeposit}
                setShowExchange={setShowExchange}
                setShowWithdraw={setShowWithdraw}
                setShowSwap={setShowSwap}
                setDrawer={setShowHistory}
              ></Wallet>
            </Col>
          );
        })}
        <ModalConfirm
          visible={isDepositVisible}
          setVisible={setShowDeposit}
          title={`Deposit ${wallet ? wallet.label : ""}`}
          MyForm={<DepositModal wallet={wallet}></DepositModal>}
        />
        <ModalConfirm
          visible={isWithdrawVisible}
          setVisible={setShowWithdraw}
          title={`Withdraw ${wallet ? wallet.label : ""}`}
          MyForm={<WithdrawModal wallet={wallet}></WithdrawModal>}
        />
        <ModalConfirm
          visible={isExchangeVisible}
          setVisible={setShowExchange}
          title={`Get more ${wallet ? wallet.label : ""}`}
          MyForm={<ExchangeModal wallet={wallet}></ExchangeModal>}
        />
        <ModalConfirm
          visible={isSwapVisible}
          setVisible={setShowSwap}
          title={`Swap ${wallet ? wallet.label : ""}`}
          MyForm={<SwapModal wallet={wallet}></SwapModal>}
        />
      </Row>
      <Drawer
        title={`History wallet ${wallet ? wallet.label : ""}`}
        placement="right"
        closable={false}
        onClose={() => setShowHistory(false)}
        visible={isHistory}
        width={"75%"}
      >
        <DrawerHistory wallet={wallet}></DrawerHistory>
      </Drawer>
    </>
  );
};

export default WalletPage;
