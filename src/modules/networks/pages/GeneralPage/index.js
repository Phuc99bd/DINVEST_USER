import { Row } from "antd";
import React from "react";
import FormReview from "../../components/General/FormReview/FormReview";
import ReferalLink from "../../components/ReferalLink/index";

const GeneralPage = () => {
  return (
    <div className="general-main">
      <Row>
        <FormReview></FormReview>
      </Row>
      <Row>
        <ReferalLink></ReferalLink>
      </Row>
      <Row></Row>
    </div>
  );
};

export default GeneralPage;
