import Box from "@mui/material/Box"
import CustomButton from "../../../shared/CustomButton"
import { useDispatch, useSelector } from "react-redux"
import { closeModal, openModal } from "../../../../store/modal/modalSlice"
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CustomModal from "../CustomModal";
import Table from "../Table";
import { useState } from "react";
import { resourcesSelector } from "../../../../store/resources/selector";
import { ResourcesProps } from "../../../../models/Resource";
import { addResource } from "../../../../controller/resourcesApi";
import { resourceCol } from "./ResourcesCols";
import ResourceFields from "./ResourceFields";
import { useTranslation } from "react-i18next";

function ResourceTab(){
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const resources = useSelector(resourcesSelector)
    const [resourceValues, setResourceValues] = useState<ResourcesProps>({
        id: "",
        title: "",
        link: "",
        short_description: "",
        tag: ""
      });

    const addNewResource = () => {
        dispatch(addResource(resourceValues));
        dispatch(closeModal());
      };

      const onValChanges = (event: any) => {
        setResourceValues({ ...resourceValues, [event.target.name]: event.target.value });
      };

    return (
        <Box sx={{ width: "100%" }} className="flex flex-col h-full">
            <Box className="flex justify-end my-4">
                <CustomButton
                id="btnAddResource"
                title={t("add")}
                functionClick={() => dispatch(openModal())}
                >
                <AddCircleOutlinedIcon
                    color="secondary"
                    className="group-hover:text-white ease-in-out z-10"
                />
                </CustomButton>
            </Box>
            <CustomModal title={t("add_new_resource")} addFunction={addNewResource}>
                <ResourceFields onValChanges={onValChanges}/>
            </CustomModal>
        <Table rows={resources.resourcesList} col={resourceCol} />
    </Box>
    )
}

export default ResourceTab