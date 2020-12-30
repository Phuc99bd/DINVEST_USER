import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import CostUpgrade from "../components/costupgrade/Index";
import History from "../components/History/Index";
import Packages from "../components/Packages/Index";
import PackagesUpgrade from "../components/PackagesUpgrade/Index";
import "./styles.scss";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ModalConfirm from "commons/components/ModalConfirm";
import ModalInvest from "../components/costupgrade/ModalInvest";

const InvestPage = () => {
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const [isShowList, setShowList] = useState(!!window.location.hash || false);
  const { dataCurrentInvest, listInvestment } = useSelector(
    (state) => state.invest
  );
  const [showModal, setShowModal] = useState(false);

  const onClickShow = (product) => {
    setShowModal(true);
    setProduct(product);
  };
  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(actions.getCurrentInvest({}, () => {}));
    dispatch(actions.getListInvestment({}, () => {}));
  }, []);

  const onBuyInvestment = () => {
    dispatch(
      actions.onBuyInvestment({ productId: product?.id }, () => {
        dispatch(actions.getCurrentInvest({}, () => {}));
        dispatch(actions.getListInvestment({}, () => {}));
      })
    );
    setShowModal(false);
  };

  return (
    <div className="invest">
      {!isShowList ? (
        <>
          <div className="invest-top">
            <Packages
              setShowList={setShowList}
              invest={dataCurrentInvest?.current_investment}
            />
            <PackagesUpgrade
              setShowList={setShowList}
              invest={dataCurrentInvest?.next_investment}
              investCurrent={dataCurrentInvest?.current_investment}
            />
          </div>
          <div className="invest-bottom">
            <History />
          </div>
        </>
      ) : (
        <div>
          <CostUpgrade
            listInvestment={listInvestment}
            investmentCurrent={dataCurrentInvest?.current_investment}
            setShowList={setShowList}
            onClickShow={onClickShow}
          />{" "}
        </div>
      )}
      {}
      <ModalConfirm
        visible={showModal}
        setVisible={setShowModal}
        title="Confirm Transaction"
        MyForm={
          <ModalInvest
            product={product}
            investmentCurrent={dataCurrentInvest?.current_investment}
            onBuyInvestment={onBuyInvestment}
          />
        }
      />
    </div>
  );
};

export default InvestPage;
