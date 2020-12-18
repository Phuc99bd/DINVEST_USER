import { LoadingOutlined } from "@ant-design/icons";
import { Col } from "antd";
import React from "react";
import RefItem from "./RefItem";

const Index = () => {
  return (
    <>
      <Col md={12} xs={24}>
        <RefItem></RefItem>
      </Col>
      <Col md={12} xs={24}>
        <div className="ref-bin-sponsor">
          <div class="">Referals Binsponsor</div>
          <div className="ref-content">
            <LoadingOutlined /> Coming soon <LoadingOutlined />
          </div>
        </div>
      </Col>
    </>
  );
};

export default Index;
