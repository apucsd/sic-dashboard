import React from "react";
import { Tabs } from "antd";
import Details from "../../Components/Dashboard/UploadDonation/Details";
import Rules from "../../Components/Dashboard/UploadDonation/Rules";
import DonationTerms from "../../Components/Dashboard/UploadDonation/DonationTerms";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: <p className="px-4">Details </p>,
    children: <Details />,
  },
  {
    key: "2",
    label: <p className="px-4">rules & regulations </p>,
    children: <Rules />,
  },
  {
    key: "3",
    label: <p className="px-4">Terms & conditions </p>,
    children: <DonationTerms />,
  },
];
const UploadDonation = () => {
  return (
    <div className=" bg-white rounded-lg p-10">
      <div>
        <h3
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          All user details
        </h3>
      </div>
      <div className=" mt-[30px]">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          type="line"
        />
      </div>
    </div>
  );
};

export default UploadDonation;
