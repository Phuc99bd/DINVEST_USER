import React from "react";
import { Select } from "antd";
const { Option } = Select;
const countryTelephoneData = require("country-telephone-data");

const dataNumber = () => {
  let data = countryTelephoneData.allCountries.map((value, index) => {
    return <Option value={value.dialCode}>{value.name}</Option>;
  });
  console.log(data);
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
      {/* <Option value="1">Not Identified</Option>
    <Option value="2">Closed</Option>
    <Option value="3">Communicated</Option>
    <Option value="4">Identified</Option>
    <Option value="5">Resolved</Option>
    <Option value="6">Cancelled</Option> */}
      {dataNumber}
    </Select>
  );
};
export { SelectFormPhone };
