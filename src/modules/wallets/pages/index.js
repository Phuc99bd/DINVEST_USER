import { Col, Drawer, Row } from "antd";
import React, { useEffect, useState } from "react";
import Wallet from "../components/Wallet/index";
import "./styles.scss";
import ModalConfirm from "commons/components/ModalConfirm/index";
import DepositModal from "../components/Wallet/DepositModal";
import WithdrawModal from "../components/Wallet/WithdrawModal";
import ExchangeModal from "../components/Wallet/ExchangeModal";
import SwapModal from "../components/Wallet/SwapModal";
import VerifyModal from "../components/Wallet/VerifyModal";
import CancelModal from "../components/Wallet/CancelModal";
import DrawerHistory from "../components/DrawerHistory/index";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import { getProfile } from "modules/auth/redux/actions";

const WalletPage = () => {
  const [isDepositVisible, setShowDeposit] = useState(false),
    [isSwapVisible, setShowSwap] = useState(false),
    [isWithdrawVisible, setShowWithdraw] = useState(false),
    [isExchangeVisible, setShowExchange] = useState(false),
    [isHistory, setShowHistory] = useState(false),
    [isVerify, setVerify] = useState(false),
    [isCancel, setCancel] = useState(false),
    [is_refresh, setRefesh] = useState(false);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [wallet, setWallet] = useState(null);
  const [transaction, setTransaction] = useState(null);

  const onWithdraw = (currency, toAddress, amount) => {
    dispatch(
      actions.withdraw(
        { currency, toAddress, amount, network: "TRON" },
        (transaction) => {
          dispatch(getProfile({}, () => {}));
          setShowWithdraw(false);
          setTransaction(transaction);
          setVerify(true);
          setRefesh(!is_refresh);
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
      actions.onVerify({ token, id: transaction?.id }, () => {
        dispatch(getProfile({}, () => {}));
        setVerify(false);
        setRefesh(!is_refresh);
      })
    );
  };

  const onCancel = () => {
    dispatch(
      actions.onCancel(
        { transactionCode: transaction?.code, type: transaction?.type },
        () => {
          dispatch(getProfile({}, () => {}));
          setCancel(false);
          setRefesh(!is_refresh);
        }
      )
    );
  };

  useEffect(() => {
    dispatch(getProfile({}, () => {}));
  }, []);

  return (
    <>
      <Row>
        {userInfo?.wallet?.map((e) => {
          return (
            <Col md={12} xs={24} className="wallet-network" key={e.id}>
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
        <ModalConfirm
          visible={isCancel}
          setVisible={setCancel}
          title={`Are you sure you want to delete?`}
          MyForm={
            <CancelModal
              setCancel={setCancel}
              onCancel={onCancel}
              id={transaction?.id}
            ></CancelModal>
          }
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
        <DrawerHistory
          wallet={wallet}
          setTransaction={setTransaction}
          setVerify={setVerify}
          setCancel={setCancel}
          is_refresh={is_refresh}
        ></DrawerHistory>
      </Drawer>
    </>
  );
};

export default WalletPage;
