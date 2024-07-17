import { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button, Form, Input, Modal, Select, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const data = [
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
  {
    key: "1",

    email: "asad@gmail.com",
    admin_name: "Asad",
    admin_type: "Super admin",
  },
];

const SalonCategoryList = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [category, setCategory] = useState("location");
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

  const dropdownRef = useRef();
  const items = [
    {
      label: "Car",
      key: "Car",
    },
    {
      label: "Bike",
      key: "Bike",
    },
    {
      label: "Cycle",
      key: "Cycle",
    },
  ];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDate(false);
        setOpen("");
        setFilter(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
      width: 150,
    },
    {
      title: "Admin Name",
      dataIndex: "admin_name",
      key: "admin_name",
    },

    {
      title: "Admin Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Admin Type",
      dataIndex: "admin_type",
      key: "admin_type",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 150,
      textAlign: "center",
      render: (_, record) => (
        <button
          style={{
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "white",
            color: "red",
          }}
        >
          <FaRegTrashAlt size={20} />
        </button>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const onClick = ({ key }) => {
    setCategory(key);
    const params = new URLSearchParams(window.location.search);
    params.set("category", key);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const onSelect = (newValue) => {
    const date = newValue.format("MMM-DD-YYYY");
    setValue(date);
    const params = new URLSearchParams(window.location.search);
    params.set("date", date);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <div>
            <h3
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              Make Admin
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button
              onClick={() => setOpenAddModel(true)}
              style={{
                borderRadius: 8,
                background: "#DBB162",
                height: 40,
                color: "white",
                fontSize: 14,
                fontWeight: "400",
              }}
              icon={<PlusOutlined />}
            >
              Create admin profile
            </Button>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            style={{}}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: 85,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${range[1]} out of ${total}`,
              defaultPageSize: 20,
              //   defaultCurrent: 1,
              style: {
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20,
                width: "100%",
                display: "flex",
                // gap: 10,
                // justifyContent: "space-between",
              },
            }}
          />
        </div>
      </div>
      <Modal
        centered
        open={openAddModel}
        onCancel={() => {
          // null;
          setImgFile(null);
          setOpenAddModel(false);
        }}
        width={500}
        footer={false}
      >
        <div className="p-6 ">
          <h1
            className="font-semibold text-black text-xl"
            style={{ marginBottom: "12px" }}
          >
            {`Add new Admin`}
          </h1>
          <Form>
            <div>
              <p className="text-[#6D6D6D] py-1">Name</p>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form.Item>
            </div>
            <div>
              <p className="text-[#6D6D6D] py-1">Email </p>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form.Item>
            </div>
            <div style={{ width: "100%" }}>
              <p className="text-[#6D6D6D] py-1">type </p>
              <Select
                placeholder="Select admin type"
                style={{
                  width: "100%",
                  height: 40,
                }}
              >
                <Option value="super-admin">Super Admin</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </div>

            <div className="mt-5">
              <p className="text-[#6D6D6D] py-1">Password </p>
              <Form
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input.Password
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form>
            </div>

            <div className="text-center mt-6">
              <button className="bg-[#DBB162] px-6 py-3 w-full text-[#FEFEFE] rounded-md">
                create Profile
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default SalonCategoryList;
