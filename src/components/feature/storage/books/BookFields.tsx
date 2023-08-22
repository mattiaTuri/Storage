import Box from "@mui/material/Box"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import TextField from "@mui/material/TextField"
import { BooksProps } from "../../../../models/Book"
import { useTranslation } from "react-i18next"

interface BooksFieldProps{
    bookValues: BooksProps
    setBookValues: (e:any) => void
}

function BooksField({bookValues, setBookValues}:BooksFieldProps){
  const { t } = useTranslation();
  const onValChanges = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  };

  const onValChecked = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.checked });
  }

    return (
        <Box
          id="modal-modal-description"
          className="flex flex-col gap-10 mt-10"
          component="form"
        >
            <Box className="flex flex-col gap-10">
                <TextField id="title" label={t("title")} name="title" variant="outlined" sx={{
                    backgroundColor: "text.secondary",
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    sx: { color: "text.primary" },
                  }} onChange={onValChanges} autoFocus></TextField>
                <TextField id="author" label={t("author")}  name="author" variant="outlined" sx={{
                    backgroundColor: "text.secondary",
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    sx: { color: "text.primary" },
                  }} onChange={onValChanges}></TextField>
                <TextField id="editor" label={t("editor")}  name="editor" variant="outlined" sx={{
                    backgroundColor: "text.secondary",
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    sx: { color: "text.primary" },
                  }} onChange={onValChanges}></TextField>
                <TextField id="genre" label={t("genre")}  name="genre" variant="outlined" sx={{
                    backgroundColor: "text.secondary",
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    sx: { color: "text.primary" },
                  }} onChange={onValChanges}></TextField>
            </Box>
            <Box className="flex gap-10">
                <TextField id="pages" label={t("pages")}  name="pages" variant="outlined" className="w-1/2" sx={{
                    backgroundColor: "text.secondary",
                    borderRadius: "4px",
                  }}
                  InputLabelProps={{
                    sx: { color: "text.primary" },
                  }} onChange={onValChanges}></TextField>
                <FormControlLabel control={<Checkbox id="isRead" name="isRead" onChange={onValChecked}/>} label={t("is_read")} />
            </Box>
        </Box>
    )
}

export default BooksField