import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  generateQR,
  activeAuthenticator,
} from "modules/settings/redux/actions";
import ModalConfirm from "commons/components/ModalConfirm";
import VerifyModal from "modules/wallets/components/Wallet/VerifyModal";

const Authy = ({ userProfile }) => {
  const dispatch = useDispatch();
  const [isShow, setShow] = useState(false);
  const onGenerate = () => {
    dispatch(generateQR());
  };

  const onVerify = (code) => {
    dispatch(
      activeAuthenticator(code, () => {
        setShow(false);
      })
    );
  };

  return (
    <div className="authy">
      <img src={userProfile?.imageAuthy} />
      <div className="button-save input-authy">
        <Button onClick={onGenerate}>Generate new QR!</Button>
      </div>
      {!userProfile?.is_authy &&
      userProfile.authy &&
      userProfile.authy.status === 0 ? (
        <div className="button-save input-authy">
          <Button onClick={() => setShow(true)}>🗝 Active </Button>
        </div>
      ) : (
        ""
      )}
      <ModalConfirm
        visible={isShow}
        setVisible={setShow}
        title={`Verify Authenticator`}
        MyForm={<VerifyModal onVerify={onVerify}></VerifyModal>}
      />
    </div>
  );
};

export { Authy };
