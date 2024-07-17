import { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegImage, FaRegTrashAlt } from "react-icons/fa";
import { Button, Form, Input, Modal, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import Logo from "../../assets/logo.png";

const data = [
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
  {
    key: "#1239",

    category: <img src={Logo} height={48} width={48} />,
    service_title: "Braids",
  },
];

const BooksCategoryList = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [category, setCategory] = useState("location");
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const handleChange = (e) => {
    setImgFile(e.target.files[0]);
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
      title: "Category Name",
      dataIndex: "category",
      key: "category",
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
              Books Category
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
              Add Service
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
            className="font-semibold text-[#555555] text-xl"
            style={{ marginBottom: "12px", marginTop: "8px" }}
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
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="text-center mt-8">
              <button className="bg-[#DBB162] px-6 py-3 w-full text-[#FEFEFE] rounded-md">
                Confirm Hair style
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default BooksCategoryList;
