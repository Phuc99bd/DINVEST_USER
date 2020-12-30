import React, { useEffect, useState } from "react";
import { Card, Col, Table } from "antd";
import { useDispatch } from "react-redux";
import * as actions from "modules/networks/redux/actions";
import moment from "moment";

const Index = () => {
  const [dataSource, setData] = useState({ data: [] });
  let [page, setPageIndex] = useState(1);
  let pageSize = 10;

  const customPagination = {
    current: page,
    pageSize,
    size: dataSource?.lastPage || 1,
    total: dataSource?.total,
    onChange: (page) => {
      dispatch(
        actions.getCommission({ page }, (data) => {
          setData(data);
        })
      );
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
  useEffect(() => {
    dispatch(
      actions.getCommission({ page }, (data) => {
        setData(data);
      })
    );
  }, []);

  return (
    <Col md={24} xs={24}>
      <Card title="Commission" className="networks-commission">
        <Table
          dataSource={dataSource.data}
          columns={columns}
          pagination={customPagination}
        />
      </Card>
    </Col>
  );
};

export default Index;
