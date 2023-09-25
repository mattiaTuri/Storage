import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import TextInput from "../TextInput";

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
      <TextInput id="title" label={t("title")} name="title" onChange={(e) => onValChanges(e)} autofocus={true}/>
        <TextInput id="author" label={t("author")} name="author" onChange={(e) => onValChanges(e)} autofocus={false}/>
        <TextInput id="description" label={t("eddescriptionitor")} name="description" onChange={(e) => onValChanges(e)} autofocus={false}/>
        <TextInput id="description" label={t("eddescriptionitor")} name="description" onChange={(e) => onValChanges(e)} autofocus={false}/>
      </Box>
    </Box>
  );
}

export default ResourceField;
