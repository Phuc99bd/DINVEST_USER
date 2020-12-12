import React from "react";
import { Modal } from "antd";
import { injectIntl } from "react-intl";

const ModalConfirm = ({visible , title , MyForm , setVisible })=>{
    return  <Modal
        className="modal-confirm"
        title={title}
        visible={visible}
        wrapClassName="vertical-center-modal"
        footer={null}
        onCancel={()=>{setVisible(false)}
        }
        >
        {MyForm}
    </Modal>
}

export default injectIntl(ModalConfirm);