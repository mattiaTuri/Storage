import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomButton from '../../shared/CustomButton';
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 90 },
    {
        field: "title",
        headerName: "Title",
        width: 300,
        editable: true,
        renderCell: (params) => {
            return (
                <Typography variant="caption" component="p" className="text-[#474862]">{params.value}</Typography>
            )
        }
    },
    {
        field: "link",
        headerName: "Link",
        width: 320,
        renderCell: (params) => {
            return (
                <Link href={params.value} target="_blank" variant="caption" className="text-[#474862]">{params.value}</Link>
            )
        }
    },
    {
        field: "short_description",
        headerName: "Short description",
        type: "string",
        width: 320,
        editable: true,
        renderCell: (params) => {
            return (
                <Typography variant="caption" component="p" className="text-[#474862]">{params.value}</Typography>
            )
        }
    },
    {
        field: "tag",
        headerName: "Tag",
        type: "string",
        width: 200,
        editable: true,
        renderCell: (params) => {
            return (
                <Typography variant="caption" component="p" className="text-[#474862]">{params.value}</Typography>
            )
        }
    },
    {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        getActions: ({id}) => {
            return [
                <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                //onClick={handleDeleteClick(id)}
                color="inherit"
              />,
            ]
        }       
    },
  ];
  
  const rows = [
    { id: 1, title: 'Lost frequences', link: "https://www.youtube.com/watch?v=O9w2jIys60o", tag: 'Fantasy', short_description: ""},
    { id: 2, title: 'Nevernight: mai dimenticare', link: "Joy Kristoff", tag: 'Fantasy', short_description: "" },
    { id: 3, title: 'Il sussurro del destino', link: "Turina Mattia", tag: 'Fantasy', short_description: ""},
    { id: 4, title: 'Il club delle cinque del mattino', link: "", tag: 'Psicology', short_description: ""},
    { id: 5, title: 'Harry Potter: il calice di fuoco', link: "", tag: 'Fantasy', short_description: ""},
  ];

function Resources(){
    return (
        <Box>
            <Box className="flex justify-end my-4">
                <CustomButton title="Add new resource">
                    <AddBoxRoundedIcon fontSize="medium" className="text-[#efa135] group-hover:text-white duration-500 z-10"/>
                </CustomButton>
            </Box>
            <Box sx={{ height: 630, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 10,
                        },
                    },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </Box> 
    )
}

export default Resources