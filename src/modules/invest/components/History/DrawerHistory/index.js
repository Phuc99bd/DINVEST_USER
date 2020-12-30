import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import moment from "moment";
import { formatNumber } from "helpers/formatNumber";

const DrawerHistory = () => {
  const [dataSource, setDataSource] = useState({ data: [] }),
    [page, setPage] = useState(1);
  const columns = [
    {
      title: "Order code",
      dataIndex: "order_code",
      key: "order_code",
    },
    {
      title: "Amount",
      dataIndex: "total_pay",
      key: "total_pay",
      render: (text) => formatNumber(text),
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => {
        return moment(text).format("YYYY-MM-DD HH:mm:ss");
      },
    },
  ];

  const customPagination = {
    current: page,
    pageSize: 10,
    size: dataSource?.lastPage || 1,
    total: dataSource?.total,
    onChange: (page) => {
      dispatch(
        actions.getHistoryInvestment({ page }, (data) => {
          setDataSource(data);
        })
      );
      setPage(page);
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.getHistoryInvestment({ page }, (data) => {
        setDataSource(data);
      })
    );
  }, []);

  return (
    <Table
      dataSource={dataSource.data}
      columns={columns}
      pagination={customPagination}
    />
  );
};

export default DrawerHistory;
