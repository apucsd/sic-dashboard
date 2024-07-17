import { Modal } from "antd";

import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import { RxCross2 } from "react-icons/rx";
import AddModal from "../../../Components/Dashboard/SICmodal/AddModal";

const data = [
  {
    key: "1",
    title: "What is an affiliate e-commerce website?",
    description:
      "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at ",
    link: "https://www.youtube.com/",
  },
  {
    key: "2",
    title: "What is an affiliate e-commerce website?2",
    description:
      "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at ",
    link: "https://www.youtube.com/",
  },
  {
    key: "3",
    title: "What is an affiliate e-commerce website?",
    description:
      "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at ",
    link: "https://www.youtube.com/",
  },
  {
    key: "4",
    title: "What is an affiliate e-commerce website?",
    description:
      "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at ",
    link: "https://www.youtube.com/",
  },
  {
    key: "5",
    title: "What is an affiliate e-commerce website?",
    description:
      "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at ",
    link: "https://www.youtube.com/",
  },
  {
    key: "6",
    title: "What is an affiliate e-commerce website?",
    description:
      "convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at ",
    link: "https://www.youtube.com/",
  },
];
const SICguidelines = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="bg-white  px-3 py-2 rounded-lg">
      <div style={{ margin: "24px 0" }}>
        <div
          className="px-10"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h3 style={{ fontSize: "24px", fontWeight: 600, color: "black" }}>
            SIC guidelines
          </h3>
          <button
            onClick={() => setOpenAddModel(true)}
            style={{
              borderRadius: "4px",
              color: "#F2F2F2",
              backgroundColor: "#DBB162",
              border: "none",
              outline: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              padding: "10px 20px",
              fontWeight: "500",
            }}
          >
            <FaPlus
              style={{
                marginTop: "-2px",
              }}
            />
            Add Service
          </button>
        </div>
      </div>
      <div className="bg-white py-6 px-4 rounded-md">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-start gap-4 ">
            <div></div>
            <div className="w-full ">
              <div className="  border-b  py-3 px-4  rounded-xl my-4 bg-slate-50">
                <p className=" font-medium text-[#919191]"> {item?.title}</p>
                <p className="text-[#919191] leading-[24px] mb-6 ">
                  {item?.description}
                </p>
              </div>
              <p className="text-[#4289FF] font-medium border-b rounded-xl py-2 px-4 flex items-center gap-8 bg-slate-50">
                <span className=" flex-1 "> {item?.link}</span>
              </p>
            </div>
            <div className="w-[4%] flex justify-start items-center pt-4 gap-2">
              <CiEdit
                onClick={() => {
                  setOpenAddModel(true);
                }}
                className="text-2xl cursor-pointer text-[#DBB162]"
              />
              <RxCross2
                onClick={() => {
                  setDeleteId(item?._id);
                  setShowDelete(true);
                }}
                className="text-2xl cursor-pointer text-red-600"
              />
            </div>
          </div>
        ))}
      </div>

      <AddModal openAddModel={openAddModel} setOpenAddModel={setOpenAddModel} />

      <Modal
        centered
        open={showDelete}
        onCancel={() => setShowDelete(false)}
        width={400}
        footer={false}
      >
        <div className="p-6 text-center">
          <p className="text-[#DBB162] text-center font-semibold">
            Are you sure !
          </p>
          <p className="pt-4 pb-12 text-center">
            Do you want to delete this content ?
          </p>
          <button
            // onClick={handeldelete}
            className="bg-[#DBB162] py-2 px-5 text-white rounded-md"
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SICguidelines;
