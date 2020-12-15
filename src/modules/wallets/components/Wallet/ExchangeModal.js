import React, { useEffect, useState } from "react"
import { Button, Form ,InputNumber, Input } from "antd";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { get } from "lodash";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import { CheckOutlined } from "@ant-design/icons";

const ExchangeModal = ({ wallet }) =>{
    const [formWithdraw] = Form.useForm();

    const onSelectAmount = (percent) =>{
        formWithdraw.setFieldsValue({ amount: wallet.amount * percent/ 100});
    }
    const onFinish = (values)=>{
        
    }
    useEffect(() => {
        formWithdraw.setFieldsValue({ amount: "0" });
        formWithdraw.setFieldsValue({ wallet_address: "" });
      }, []);


    return <Form class="formWithdraw" 
    form={formWithdraw}
    layout="vertical"
    onFinish={onFinish} > 
        <p>Amount</p>
        <Form.Item name="amount"
         rules={[
             {
                 required: true,
                 message: (
                     <FormattedMessage id="dashboard.transferModal.message" />
                 )
             }
         ]}>
         <InputNumber class="w-100pc" placeholder={"Please enter !"} />
        </Form.Item>
        <hr></hr>
        <div className="t-center form-submit">
                <Button htmlType="submit" className="btn-confirm-tran">
                    <FormattedMessage id="dashboard.button.confirm" /> <CheckOutlined className="icon-confirm"/>
                </Button>
        </div>
    </Form>
}

export default ExchangeModal;