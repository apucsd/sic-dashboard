import { Form, Input } from "antd";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";

const Details = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, seLoading] = useState(false);

  const config = {
    readonly: false,
    placeholder:
      "viverra placerat. urna. viverra Nunc eget eu risus nec placerat eu luctus lacus ac leo. scelerisque eu nec vel Ut tincidunt ex Morbi volutpat Donec venenatis tortor. urna. placerat risus massa Sed ex. vel Nam nisi scelerisque amet, nulla,nulla, Nunc viverra tempor urna eget efficitur. commodo lorem. elit quis dolor amet, non viverra eget tincidunt venenatis Ut elementum lorem. orci faucibus lacus elit convallis. non quis dolor ipsum urna malesuada turpis Vestibulum Lorem ",
    style: {
      height: 400,
      background: "#FBF5EB",
    },
  };
  return (
    <div>
      <div className="w-full">
        <Form className=" flex gap-5">
          <div className="w-full">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <label className="text-[#A1A1A1] text-lg py-2"> Name</label>
              <Input className="  py-3 bg-[#FBF5EB]" />
            </Form.Item>
          </div>

          <div className="w-full">
            <Form.Item
              name="image"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <label className="text-[#A1A1A1] text-lg py-2"> Image</label>
              <Input type="file" className=" py-2 bg-[#FBF5EB] " />
            </Form.Item>
          </div>
        </Form>
      </div>

      <p className="text-[#A1A1A1]  font-semibold text-lg pb-4">
        {" "}
        Donation Details{" "}
      </p>
      <div>
        <div>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {}}
          />
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              height: 44,
              width: 150,
              backgroundColor: "#D29E3B",
              color: "white",
              borderRadius: "8px",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
