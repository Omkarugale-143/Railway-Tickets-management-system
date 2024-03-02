import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import userdata from "../../data/traindata.userData.json"
import { GridToolbar } from "@mui/x-data-grid";
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "From",
      headerName: "From",
      flex: 1,
    },
    {
      field: "To",
      headerName: "To",
      flex: 1,
    },
    {
      field: "Class",
      headerName: "Class",
      flex: 1,
    },
    {
      field: "Seat no",
      headerName: "Seat NO",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: () => {
        return (
          <Box
            width="10
            0%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
               colors.greenAccent[700]
            }
            borderRadius="4px"
          >
             <AdminPanelSettingsOutlinedIcon />
            
            <Typography color={colors.grey[100]} sx={{ ml: "4px" }}>
              Mark Absent
            </Typography>
          </Box>
        );
      },
    },
  ];
  const filterdata = userdata.filter((data)=>data.Status === "Confirm")
  return (
    <Box m="0 20px" mt="0">
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Confirm Seats" subtitle="12347" />
      <Header title="Koyna" subtitle="10:30am" />
      </Box>
      <Box
        m="0 0 0 0"
        height="68vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid components={{ Toolbar: GridToolbar }} rows={filterdata} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
