import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

const EarnNow = ({ value }) =>{
    return <div className="earn-network">
        <div class="item-icon">
          <img src={require("assets/images/loading/loader.svg")} width={50} height={50} />
          <span className="ml-10"> Earn Now </span>
        </div>
        <div className="value-com">
            {value} Commissions
        </div>
    </div>
}

export default injectIntl(EarnNow);
