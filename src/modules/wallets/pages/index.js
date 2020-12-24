import { Col, Drawer, Row } from "antd";
import React, { useState } from "react";
import Wallet from "../components/Wallet/index";
import "./styles.scss";
import ModalConfirm from "commons/components/ModalConfirm/index";
import DepositModal from "../components/Wallet/DepositModal";
import WithdrawModal from "../components/Wallet/WithdrawModal";
import ExchangeModal from "../components/Wallet/ExchangeModal";
import SwapModal from "../components/Wallet/SwapModal";
import VerifyModal from "../components/Wallet/VerifyModal";
import DrawerHistory from "../components/DrawerHistory/index";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import { getProfile } from "modules/auth/redux/actions";

const WalletPage = () => {
  const [isDepositVisible, setShowDeposit] = useState(false);
  const [isSwapVisible, setShowSwap] = useState(false);
  const [isWithdrawVisible, setShowWithdraw] = useState(false);
  const [isExchangeVisible, setShowExchange] = useState(false);
  const [isHistory, setShowHistory] = useState(false);
  const [isVerify, setVerify] = useState(false);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [wallet, setWallet] = useState(null);
  const [transaction_id, setTransaction_id] = useState(null);

  const onWithdraw = (currency, toAddress, amount) => {
    dispatch(
      actions.withdraw(
        { currency, toAddress, amount, network: "TRON" },
        (id) => {
          dispatch(getProfile({}, () => {}));
          setShowWithdraw(false);
          setTransaction_id(id);
          setVerify(true);
        }
      )
    );
  };

  const onExchange = (amount) => {
    dispatch(
      actions.getMore({ amount }, () => {
        dispatch(getProfile({}, () => {}));
        setShowExchange(false);
      })
    );
  };

  const onSwap = (fromCurrency, amount, toCurrency) => {
    dispatch(
      actions.swap({ amount, fromCurrency, toCurrency }, () => {
        dispatch(getProfile({}, () => {}));
        setShowSwap(false);
      })
    );
  };

  const onVerify = (token) => {
    dispatch(
      actions.onVerify({ token, id: transaction_id }, () => {
        dispatch(getProfile({}, () => {}));
        setVerify(false);
      })
    );
  };

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
          MyForm={
            <WithdrawModal
              onWithdraw={onWithdraw}
              wallet={wallet}
            ></WithdrawModal>
          }
        />
        <ModalConfirm
          visible={isExchangeVisible}
          setVisible={setShowExchange}
          title={`Get more ${wallet ? wallet.label : ""}`}
          MyForm={
            <ExchangeModal
              onExchange={onExchange}
              wallet={wallet}
            ></ExchangeModal>
          }
        />
        <ModalConfirm
          visible={isSwapVisible}
          setVisible={setShowSwap}
          title={`Swap ${wallet ? wallet.label : ""}`}
          MyForm={<SwapModal onSwap={onSwap} wallet={wallet}></SwapModal>}
        />
        <ModalConfirm
          visible={isVerify}
          setVisible={setVerify}
          title={`Verify transaction ${wallet ? wallet.label : ""}`}
          MyForm={<VerifyModal onVerify={onVerify}></VerifyModal>}
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
