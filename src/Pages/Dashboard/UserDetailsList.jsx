import { useEffect, useRef, useState } from "react";
import { Button, Dropdown, Input, Modal, Select, Space, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { RiLoader3Fill } from "react-icons/ri";
import Logo from "../../assets/logo.png";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdPersonOff } from "react-icons/md";
import UserDetailsModal from "../../Components/Dashboard/UserDetailsModal";

const data = [
  {
    key: "#1239",

    user: {
      name: "Mr. Mahmud",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "mr101@mail.ru",
    contact: "(+33)7 00 55 59 27",
    location: "Corona, Michigan",
  },
  {
    key: "#1238",

    user: {
      name: "Lily",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "xterris@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Great Falls, Maryland ",
  },
  {
    key: "#1237",

    user: {
      name: "Kathry",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "irnabela@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Syracuse, Connecticut ",
  },
  {
    key: "#1236",

    user: {
      name: "Priscilla",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "codence@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Lafayette, California",
  },
  {
    key: "#1235",

    user: {
      name: "Claire",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "quasiah@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Pasadena, Oklahoma",
  },
  {
    key: "#1234",

    user: {
      name: "Irmar",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "xeno@yandex.ru",
    contact: "(+33)7 00 55 59 27",
    location: "Lansing, Illinois",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
    location: "Coppell, Virginia",
  },

  {
    key: "#4",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: "500",
    balance: "600",
  },
  {
    key: "#5",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "asad@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: "500",
    balance: "600",
  },
  {
    key: "#6",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "fahim@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: "500",
    balance: "600",
  },
  {
    key: "#7",
    name: "Nadir",
    user: {
      name: "Ashutosh",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "nadir@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: "500",
    balance: "600",
  },
  {
    key: "#8",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "tushar@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: "500",
    balance: "600",
  },
  {
    key: "#9",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "rahman@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: "500",
    balance: "600",
  },
  {
    key: "#10",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "rafsan@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Active",
    selling: "500",
    balance: "600",
  },
  {
    key: "#11",

    user: {
      name: "Gloria",
      img: <img src={Logo} height={48} width={48} />,
    },
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Inactive",
    selling: "500",
    balance: "600",
  },
];

const UserDetailsList = () => {
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const [open, setOpen] = useState(false);

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

  const userTypeItems = [
    {
      label: "Block",
      key: "Block",
    },
    {
      label: "UnBlock",
      key: "UnBlock",
    },
  ];

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
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p> {user?.img} </p>

            <p
              style={{
                letterSpacing: 0.4,
                fontSize: "#666666",
                fontWeight: "400",
              }}
            >
              {user?.name}
            </p>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",

            paddingRight: 10,
          }}
        >
          <button
            onClick={() => setOpen(true)}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            <FiArrowUpRight size={26} className=" text-[#DBB162]" />
          </button>

          <div>
            <button>
              <BsFillPersonCheckFill size={25} className=" text-[#00B047]" />
            </button>
          </div>
        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="">
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
              All user details
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "370px",
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

            <div>
              <Select
                defaultValue="User type"
                style={{
                  width: 120,
                  height: 40,
                }}
                options={userTypeItems}
              />
            </div>

            <div>
              <Select
                defaultValue="Activity"
                style={{
                  width: 120,
                  height: 40,
                }}
                options={items}
              />
            </div>

            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                border: "1px solid #E9E9E9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px 8px",
                color: "#F2F2F2",
                cursor: "pointer",
                background: "#DBB162",
              }}
            >
              <RiLoader3Fill size={20} />
            </div>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: 85,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${range[1]} out of ${total}`,
              defaultPageSize: 20,
              // defaultCurrent: 1,
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
      <UserDetailsModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default UserDetailsList;
