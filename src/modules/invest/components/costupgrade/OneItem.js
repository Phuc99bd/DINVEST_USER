import React, { useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import ModalConfirm from "commons/components/ModalConfirm";
import ModalInvest from "./ModalInvest";
const OneItem = ({ value, position, cost, classname, setShowList }) => {
  const [showModal, setShowModal] = useState(false);

  const onClickShow = () => {
    setShowModal(true);
    console.log(showModal);
  };
  return (
    <div className={classname}>
      <div className="top">
        <div className="top-left">
          <img
            src={require("assets/images/loading/loader.svg")}
            width={50}
            height={50}
          />
        </div>
        <div className="top-right">
          <p>{position}</p>
          <p>$ {value}</p>
          <p>max revenue $ {value}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left" onClick={() => setShowList(false)}>
          <span>Back</span>
        </div>
        <div className="bottom-mid" onClick={() => onClickShow()}>
          <ArrowUpOutlined />
          <span>Upgrade</span>
        </div>
        <div className="bottom-right">
          <span>{cost}</span>
        </div>
      </div>
      <ModalConfirm
        visible={showModal}
        setVisible={setShowModal}
        title="Confirm Transaction"
        MyForm={<ModalInvest value={"1.000.000"} position={"Leader"} />}
      />
    </div>
  );
};

export default OneItem;
