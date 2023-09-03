import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

interface ResourcesFieldProps {
  onValChanges: (e: any) => void;
}

function ResourceField({ onValChanges }: ResourcesFieldProps) {
  const { t } = useTranslation();
  return (
    <Box
      id="modal-modal-description"
      className="flex flex-col gap-10 mt-10"
      component="form"
    >
      <Box className="flex flex-col gap-10">
        <TextField
          id="title"
          label={t("title")}
          name="title"
          variant="outlined"
          sx={{
            backgroundColor: "text.secondary",
            borderRadius: "4px",
          }}
          InputLabelProps={{
            sx: { color: "text.primary" },
          }}
          onChange={onValChanges}
          autoFocus
        ></TextField>
        <TextField
          id="link"
          label={t("link")}
          name="link"
          variant="outlined"
          sx={{
            backgroundColor: "text.secondary",
            borderRadius: "4px",
          }}
          InputLabelProps={{
            sx: { color: "text.primary" },
          }}
          onChange={onValChanges}
        ></TextField>
        <TextField
          id="description"
          label={t("description")}
          name="description"
          variant="outlined"
          sx={{
            backgroundColor: "text.secondary",
            borderRadius: "4px",
          }}
          InputLabelProps={{
            sx: { color: "text.primary" },
          }}
          onChange={onValChanges}
        ></TextField>
        <TextField
          id="tag"
          label={t("tag")}
          name="tag"
          variant="outlined"
          sx={{
            backgroundColor: "text.secondary",
            borderRadius: "4px",
          }}
          InputLabelProps={{
            sx: { color: "text.primary" },
          }}
          onChange={onValChanges}
        ></TextField>
      </Box>
    </Box>
  );
}

export default ResourceField;
