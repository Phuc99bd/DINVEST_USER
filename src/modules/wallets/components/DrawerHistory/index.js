import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import moment from "moment";
import { FIND_TRANSACTION } from "commons/constants/index";

const DrawerHistory = ({ wallet, setTransaction, setVerify }) => {
  const dispatch = useDispatch();
  let [transactions, setTransactions] = useState({ data: [] });
  let [pageIndex, setPageIndex] = useState(1);
  let pageSize = 10;

  let getTran = (pageIndex) => {
    dispatch(
      actions.onGetTransaction(
        { pageIndex, pageSize, currency: wallet?.unit, type: "ALL" },
        (data) => {
          setTransactions(data);
        }
      )
    );
  };
  useEffect(() => {
    getTran(pageIndex);
  }, [wallet]);

  const customPagination = {
    current: pageIndex,
    pageSize,
    size: transactions?.lastPage || 1,
    total: transactions?.total,
    onChange: (page) => {
      getTran(page);
      setPageIndex(page);
    },
  };

  const onOpenVerify = (row) => {
    setTransaction(row.id);
    setVerify(true);
  };

  const renderStatus = (text, row) => {
    return text == "PENDING" ? (
      <>
        <span className={`status-${text}`}>{text}</span>

        <button className="btn-transaction" onClick={() => onOpenVerify(row)}>
          Verify
        </button>
        <button className="btn-transaction">Cancel</button>
      </>
    ) : (
      <span className={`status-${text}`}>{text}</span>
    );
  };

  console.log(transactions);
  const columns = [
    {
      title: "Hash",
      dataIndex: "code",
      key: "code",
      render: (text, row) => {
        let textShow =
          text.slice(0, 3) + "..." + text.slice(text.length - 3, text.length);
        return ["DEPOSIT", "WITHDRAW"].includes(row.type) ? (
          <a
            className="modify-find-transaction"
            target="_blank"
            href={`${FIND_TRANSACTION}${text}`}
          >
            {textShow}
          </a>
        ) : (
          textShow
        );
      },
      width: 100,
    },
    {
      title: (
        <>
          <span>Amount</span>
          <p className="modify-title">
            Revenue:{" "}
            {transactions?.data
              ?.reduce((a, b) => {
                return b.action == "IN" ? a + b.amount : a - b.amount;
              }, 0)
              .toFixed(2)}
          </p>{" "}
        </>
      ),
      dataIndex: "amount",
      key: "amount",
      render: (text, row) => {
        return `${row.action == "IN" ? "+" : "-"} ${text.toFixed(2)}`;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, row) => {
        return renderStatus(text, row);
      },
    },
    {
      title: "Action",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Created",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => moment(text).format("YYYY-MM-DD HH:mm:ss"),
    },
  ];

  return (
    <div className="drawer-history">
      <Table
        dataSource={transactions.data}
        columns={columns}
        pagination={customPagination}
      />
    </div>
  );
};

export default DrawerHistory;
