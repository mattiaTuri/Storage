import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function CustomNoData() {
  const { t } = useTranslation();
  return (
    <div className="h-full flex items-center justify-center">
      <Typography component="p">{t("no_data")}</Typography>
    </div>
  );
}

export default CustomNoData;
