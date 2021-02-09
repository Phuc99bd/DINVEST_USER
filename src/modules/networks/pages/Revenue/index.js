import { Card, Col, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { getRevenue } from "modules/networks/redux/actions";

const Revenue = () => {
  const [dataSource, setData] = useState({ data: [] });
  let [page, setPageIndex] = useState(1);
  let [days, setDays] = useState(7);
  let pageSize = 10;

  const customPagination = {
    current: page,
    pageSize,
    size: dataSource?.lastPage || 1,
    total: dataSource?.total,
    onChange: (page) => {
      dispatch(
        getRevenue({ page, pageSize, days }, (data) => {
          setData(data);
        })
      );
      setPageIndex(page);
    },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getRevenue({ days: days, page, pageSize }, (data) => {
        setData(data);
      })
    );
  }, [days]);
  const columns = [
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => {
        return <p className="modify-title"> + ${text.toFixed(2)} USJ </p>;
      },
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
  return (
    <Col md={24} xs={24}>
      <div className="revenue-main">
        <div className="revenue-header">
          <button
            class={`revenue-option ${days === 7 && "active"}`}
            onClick={() => setDays(7)}
          >
            7 days
          </button>
          <button
            class={`revenue-option ${days === 30 && "active"}`}
            onClick={() => setDays(30)}
          >
            30 days
          </button>
        </div>
        <div className="revenue-body">
          <Card title="Revenue" className="networks-commission">
            <Table
              dataSource={dataSource.data}
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
