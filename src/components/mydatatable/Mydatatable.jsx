import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, firstName: "Coffee"},
  { id: 2, firstName: "Milk"},
  { id: 3, firstName: "Sugar"},
  { id: 4, firstName: "Cake"},
  { id: 5, firstName: "Pastry"},
  { id: 6, firstName: "Cookie"},
  { id: 7, firstName: "Soda"},
  { id: 8, firstName: "Tea"},
  { id: 9, firstName: "Lemontea"},
  { id: 10, firstName: "Pop ice"},
];

const actionColumn = [
  {
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            </Link>
        </div>
      );
    },
  },
];

const Mydatatable = () => {
  return (
    
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;