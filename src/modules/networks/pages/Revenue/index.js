import { Card, Col, Table } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

const Revenue = () => {
  const [dataSource, setData] = useState({ data: [] });
  let [page, setPageIndex] = useState(1);
  let pageSize = 10;

  const customPagination = {
    current: page,
    pageSize,
    size: dataSource?.lastPage || 1,
    total: dataSource?.total,
    onChange: (page) => {
      // dispatch(
      //   actions.getCommission({ page }, (data) => {
      //     setData(data);
      //   })
      // );
      setPageIndex(page);
    },
  };
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Amount",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => moment(text).format("YYYY-MM-DD HH:mm:ss"),
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
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={customPagination}
            />
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default Revenue;
