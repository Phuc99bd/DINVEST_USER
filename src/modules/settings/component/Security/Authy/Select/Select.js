import React from "react";
import { Select } from "antd";
const { Option } = Select;
const countryTelephoneData = require("country-telephone-data");

const dataNumber = () => {
  let data = countryTelephoneData.allCountries.map((value, index) => {
    return <Option value={index}>{value.iso2.codePointAt}</Option>;
  });
  return data;
};

const SelectFormPhone = () => {
  return (
    <Select
      className="select-region"
      showSearch
      style={{ width: 200 }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
    >
      {dataNumber()}
    </Select>
  );
};
export { SelectFormPhone };
