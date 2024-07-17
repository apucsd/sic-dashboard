import { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegImage, FaRegTrashAlt } from "react-icons/fa";
import { Button, Form, Input, Modal, Select, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import Logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";

const data = [
  {
    key: 1,
    category: "Worldview",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 2,
    category: "Champs-Élysées 246",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 3,
    category: "Way of Life",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 4,
    category: "Champs-Élysées 246",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 5,
    category: "Worldview",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 6,
    category: "Champs-Élysées 246",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 7,
    category: "Worldview",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 8,
    category: "Champs-Élysées 246",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 9,
    category: "Worldview",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 10,
    category: "Worldview",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 11,
    category: "Way of Life",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 12,
    category: "Worldview",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 13,
    category: "Worldview",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: 14,
    category: "Champs-Élysées 246",
    services_photo: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
];

const BookList = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [category, setCategory] = useState("location");
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const [selectionType, setSelectionType] = useState("checkbox");

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectionType(newSelectedRowKeys);
  };
  const rowSelection = {
    selectionType,
    onChange: onSelectChange,
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
  };

  const [itemForEdit, setItemForEdit] = useState(null);
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
    },
    {
      title: "Services Photo",
      dataIndex: "services_photo",
      key: "services_photo",
      align: "center",

      render: (img, record) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p> {img} </p>
            <p> {record?.service_title}</p>
          </div>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <button
            onClick={() => {
              setOpenAddModel(true), setItemForEdit(record);
            }}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              color: "#DBB162",
              background: "white",
            }}
          >
            <CiEdit size={25} />
          </button>
          <button
            onClick={() => handleDelete()}
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
        </p>
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
                fontSize: 24,
                fontWeight: "500",
              }}
            >
              All Book List
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* search  */}
            <div
              style={{
                width: "330px",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              <Input
                placeholder="Search..."
                prefix={<FiSearch size={14} color="#868FA0" />}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px",
                }}
                size="middle"
              />
            </div>

            <Select
              defaultValue="Category"
              style={{
                width: 150,
                height: 40,
                color: "black",
              }}
              //   onChange={handleChange}
              options={items}
            />

            <Button
              style={{
                borderRadius: 8,
                background: "#DBB162",
                height: 40,
                color: "white",
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              Share Community
            </Button>

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
              Add Service
            </Button>
          </div>
        </div>
        <div>
          <Table
            rowSelection={rowSelection}
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
            className="font-semibold text-[#555555] text-xl"
            style={{ marginBottom: "10px", marginTop: "8px" }}
          >
            {itemForEdit ? "Update Books category" : "Add Books category"}
          </h1>
          <Form>
            <div>
              <p className="text-[#6D6D6D] py-1">Category Name</p>
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
                  className="w-[100%] border outline-none px-3 py-[8px]"
                  type="text"
                />
              </Form.Item>
            </div>

            <div style={{ width: "100%", marginBottom: "10px" }}>
              <p className="text-black py-1">Category </p>
              <Select
                placeholder="Select Category"
                style={{
                  width: "100%",
                  height: 40,
                }}
              >
                <Option value="super-admin">Worldview</Option>
                <Option value="admin">Way of Life</Option>
              </Select>
            </div>

            <div className="mt-5">
              <p className="text-[#6D6D6D] py-1">Slider Image</p>

              <label
                htmlFor="image"
                style={{ display: "block", margin: "4px 0" }}
                className="p-3 border"
              >
                <Form.Item name="image">
                  <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10">
                    {imgFile ? (
                      <img src={URL.createObjectURL(imgFile)} alt="" />
                    ) : (
                      <FaRegImage className="text-2xl" />
                    )}
                  </div>

                  <div className="hidden">
                    <Input
                      id="image"
                      type="file"
                      onInput={handleChange}
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                </Form.Item>
              </label>
            </div>

            <div className=" mt-5">
              <p className="text-[#6D6D6D] py-1">Include link</p>
              <Form.Item
                name="link"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] h-[50px]  border outline-none px-3 py-[8px]"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="text-center mt-8">
              <button className="bg-[#DBB162] px-6 py-3 w-full text-[#FEFEFE] rounded-md">
                Upload Book
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default BookList;
