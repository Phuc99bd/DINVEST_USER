import { Row } from "antd";
import React from "react";
import FormReview from "../../components/General/FormReview/FormReview";
import ReferalLink from "../../components/General/ReferalLink/index";
import Commission from "../../components/General/Comission/index";

const GeneralPage = () => {
  return (
    <div className="general-main">
      <Row>
        <FormReview></FormReview>
      </Row>
      <Row>
        <ReferalLink></ReferalLink>
      </Row>
      <Row>
        <Commission></Commission>
      </Row>
    </div>
  );
};

export default GeneralPage;
