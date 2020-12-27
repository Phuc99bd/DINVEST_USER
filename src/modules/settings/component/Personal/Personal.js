import React from "react";
import UserInfor from "./userinfor/UserInfor";

import { InputUser } from "./Input/Input";
import { DatePicker, Input } from "antd";
import moment from "moment";
const Personal = ({ userInfo }) => {
  let endpoint = window.location.origin + "/signup?sponsorKey=";

  const dateFormat = "YYYY/MM/DD";
  const onSubmit = (event) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
    }
  };
  return (
    <div className="personal parent">
      <UserInfor
        name={userInfo?.last_name + " " + userInfo?.first_name}
        link={`${endpoint}${userInfo?.sponsorKey}`}
        code={userInfo?.sponsorKey}
      />
      <form onSubmit={onSubmit}>
        <div className="bottom">
          <div className="input-parent">
            <InputUser
              inputTitle="First name*"
              name="first_name"
              value={userInfo?.first_name}
            />
            <InputUser
              inputTitle="Last name*"
              name="last_name"
              value={userInfo?.last_name}
            />
          </div>
          <div className="input-parent">
            <div className="input-type">
              <p className="title">Birthday</p>
              <DatePicker
                name="birthday"
                defaultValue={moment(
                  userInfo?.birthday || "1970/1/1",
                  dateFormat
                )}
                format={dateFormat}
              />
            </div>
            <div className="input-type">
              <p className="title">Birthday</p>
              <select name="gender" defaultValue={userInfo?.gender}>
                <option
                  value="male"
                  selected={userInfo?.gender == "male" && true}
                >
                  Male
                </option>
                <option
                  value="female"
                  selected={userInfo?.gender == "female" && true}
                >
                  Female
                </option>
              </select>
            </div>
          </div>
          <div className="input-parent">
            <InputUser
              inputTitle="Address"
              name="address"
              value={userInfo?.address}
            />
            <InputUser
              inputTitle="Country"
              name="country"
              value={userInfo?.country}
            />
          </div>
          <div className="input-parent">
            <InputUser
              inputTitle="Phone number"
              name="phone_number"
              value={userInfo?.phone_number}
            />
            <div className="input-type button">
              <Input value="Save now!" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Personal;
