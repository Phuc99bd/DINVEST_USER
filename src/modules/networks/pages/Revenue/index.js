import { Card, Col, Table } from "antd";
import React from "react";

const Revenue = () => {
  const dataSource = [];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  const onChangeOption = (value) => {};
  return (
    <Col md={24} xs={24}>
      <div className="revenue-main">
        <div className="revenue-header">
          <button class="revenue-option" onClick={() => onChangeOption(7)}>
            7 days
          </button>
          <button class="revenue-option" onClick={() => onChangeOption(30)}>
            30 days
          </button>
        </div>
        <div className="revenue-body">
          <Card title="Revenue" className="networks-commission">
            <Table dataSource={dataSource} columns={columns} />
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default Revenue;
