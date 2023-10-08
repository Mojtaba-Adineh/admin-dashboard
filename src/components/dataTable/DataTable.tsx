import "./dataTable.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

type Props = {
  columns: GridColDef[];
  rows: object[];
  urlQuery: string;
};

const DataTable = ({ columns, rows, urlQuery }: Props) => {
  const queryClient = useQueryClient();
  const [userInfo, setUserinfo] = useState({
    id: 123,
    img: "",
    lastName: "adineh",
    firstName: "Mojtaba",
    email: "codewithmoji@gmail.com",
    phone: "0994-496-6928",
    createdAt: Date.now(),
    verified: true,
  });

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      return await axios.delete(`http://localhost:8800/api/${urlQuery}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${urlQuery}`]);
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  const actionsColumn: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 120,
    renderCell: (params) => {
      return (
        <div className="actions">
          <div className="view">
            <Link to={`${urlQuery}/${params.row.id}`}>
              <img src="view.svg" alt="" />
            </Link>
          </div>
          <div onClick={() => handleDelete(params.row.id)} className="delete">
            <img src="delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={[...columns, actionsColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
    </div>
  );
};

export default DataTable;
