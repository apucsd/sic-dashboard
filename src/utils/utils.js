export const setAccessToken = (token) => {
  return localStorage.setItem("accessToken", token);
};
export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const getSelectItems = (data) => {
  const items = data?.map((singleItem) => {
    return {
      key: singleItem._id,
      label: singleItem.name,
      value: singleItem._id,
    };
  });

  return items;
};

// const getDestructuredData = (data)=>{
//   const destructuredData = data?.map((item) => {
//     return {
//       name: item.month.slice(0, 3),
//       totalUsers: item.totalUsers,
//     };
//   });

//   return destructuredData
// }
