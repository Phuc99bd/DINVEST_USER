import { Button } from "antd";
import React from "react";
import { Authy } from "./Authy/Authy";
import { useState } from "react";
import { onChangeSecurity } from "modules/settings/redux/actions";
import ModalConfirm from "commons/components/ModalConfirm";
import VerifyModal from "modules/wallets/components/Wallet/VerifyModal";
import { useDispatch } from "react-redux";

const Security = ({ userInfo }) => {
  const dispatch = useDispatch();
  const [isShow, setShow] = useState(false);
  const [status, setStatus] = useState(userInfo.is_authy);

  const onVerify = (code) => {
    dispatch(
      onChangeSecurity({
        code,
        status,
      })
    );
    setShow(false);
  };

  const onChangeStatus = (status) => {
    setShow(true);
    setStatus(status);
  };

  return (
    <div className="security parent">
      <div className="title">Choose security type</div>
      <div className="content">
        <Button
          className={`email ${!userInfo?.is_authy && "authy"}`}
          onClick={() => onChangeStatus(0)}
        >
          Email
        </Button>
        <Button
          className={userInfo?.is_authy && "authy"}
          onClick={() => onChangeStatus(1)}
        >
          Authy
        </Button>
      </div>
      <Authy userProfile={userInfo} />
      <ModalConfirm
        visible={isShow}
        setVisible={setShow}
        title={`Verify Authenticator`}
        MyForm={<VerifyModal onVerify={onVerify}></VerifyModal>}
      />
    </div>
  );
};
export default Security;
