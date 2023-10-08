import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { GridValueGetterParams, GridColDef } from "@mui/x-data-grid";
import { userRows } from "./../../data";
import {useState} from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Users = () => {

  const [open, setOpen] = useState(false)

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 110,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];

  // const {isLoading , data} = useQuery({
  //   queryKey : ["allusers"],
  //   queryFn : async () => {
  //      const res = await axios.get("http://localhost:8800/api/users");
  //      return res.data 
  //   }
  // })

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)} className="addBtn">Add new User</button>
      </div>

      <DataTable columns={columns} rows={userRows} urlQuery={"/users"} />

      {open && <Add urlQuery={"user"} columns={columns} setOpen={setOpen}/>}
    </div>
  );
};

export default Users;
