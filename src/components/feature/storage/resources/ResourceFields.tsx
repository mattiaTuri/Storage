import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

interface ResourcesFieldProps{
    onValChanges: (e:any) => void
}

function ResourceField({onValChanges}:ResourcesFieldProps){
    return (
        <Box
          id="modal-modal-description"
          className="flex flex-col gap-10 mt-10"
          component="form"
        >
            <Box className="flex flex-col gap-10">
                <TextField id="title" label="Title" name="title" variant="outlined" sx={{
                    backgroundColor: "text.secondary",
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    sx: { color: "text.primary" },
                  }} onChange={onValChanges} autoFocus></TextField>
                <TextField id="link" label="Link" name="link" variant="outlined" sx={{
                    backgroundColor: "text.secondary",
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    sx: { color: "text.primary" },
                  }} onChange={onValChanges}></TextField>
                <TextField id="short_description" label="Short description" name="short_description" variant="outlined" sx={{
                    backgroundColor: "text.secondary",
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    sx: { color: "text.primary" },
                  }} onChange={onValChanges}></TextField>
                <TextField id="tag" label="Tag" name="tag" variant="outlined" sx={{
                    backgroundColor: "text.secondary",
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    sx: { color: "text.primary" },
                  }} onChange={onValChanges}></TextField>
            </Box>          
        </Box>
    )
}

export default ResourceField