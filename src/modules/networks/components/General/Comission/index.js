import React from "react";
import { Card, Col, Table } from "antd";

const Index = () => {
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
  return (
    <Col md={24} xs={24}>
      <Card title="Commission" className="networks-commission">
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </Col>
  );
};

export default Index;
