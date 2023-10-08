import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import "./products.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { products } from "../../data";

const Users = () => {
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
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 130,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 130,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 130,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 130,
      type: "boolean",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)} className="addBtn">
          Add new Product
        </button>
      </div>

      <DataTable columns={columns} rows={products} urlQuery={"/products"} />

      {open && <Add urlQuery={"Product"} columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
