export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="Avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 170,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://pyxis.nymag.com/v1/imgs/7ad/fa0/4eb41a9408fb016d6eed17b1ffd1c4d515-07-jon-snow.rsquare.w330.jpg",
    status: "active",
    email: "snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://hellogiggles.com/wp-content/uploads/sites/7/2017/06/18/jaime.jpg?quality=82&strip=1&resize=640%2C360",
    status: "passive",
    email: "jammielannister@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Arya Stark",
    img: "https://pyxis.nymag.com/v1/imgs/7ad/fa0/4eb41a9408fb016d6eed17b1ffd1c4d515-07-jon-snow.rsquare.w330.jpg",
    status: "pending",
    email: "aryastark@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "Sansa Stark",
    img: "https://i.pinimg.com/474x/8e/81/9f/8e819f5e6e61fa5343c3c831b1aa6c7a.jpg",
    status: "active",
    email: "sansastark@gmail.com",
    age: 27,
  },
  {
    id: 5,
    username: "Daenyres Targaryan",
    img: "https://e1.pxfuel.com/desktop-wallpaper/591/430/desktop-wallpaper-daenerys-targaryen-game-of-thrones-women.jpg",
    status: "active",
    email: "targaryan@gmail.com",
    age: 28,
  },
];
