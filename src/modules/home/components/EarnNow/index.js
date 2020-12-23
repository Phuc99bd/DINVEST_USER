import React, { useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import ModalConfirm from "commons/components/ModalConfirm/index";
import FormEarn from "./FormEarn";
import { get } from "lodash";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";
import { getProfile } from "modules/auth/redux/actions";

const EarnNow = ({ userInfo }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const onClick = () => {
    setShowModal(true);
  };

  const onConfirm = (amount) => {
    dispatch(
      actions.withdrawEarn({ amount }, () => {
        dispatch(getProfile({}, () => {}));
        setShowModal(false);
      })
    );
  };
  return (
    <>
      {" "}
      <div className="earn-network">
        <a class="item-icon" onClick={onClick} href="#">
          <img
            src={require("assets/images/loading/loader.svg")}
            width={50}
            height={50}
          />
          <span className="ml-10"> Earn Now </span>
        </a>
        <div className="value-com">
          {(get(userInfo, "commissions_earned", 0) || 0).toFixed(2)} Commissions
        </div>
      </div>
      <ModalConfirm
        visible={showModal}
        setVisible={setShowModal}
        title={
          <FormattedMessage id={"dashboard.earncommit"}></FormattedMessage>
        }
        MyForm={
          <FormEarn
            onConfirm={onConfirm}
            amount={get(userInfo, "commissions_earned", 0) || 0}
          ></FormEarn>
        }
      />
    </>
  );
};

export default injectIntl(EarnNow);
