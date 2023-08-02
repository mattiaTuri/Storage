import { createGlobalStyle } from "styled-components"

export const light = {
    main: "#efa135",
    text: "#474862",
    bgInput: "white",
    labelInput:"#00000099"
}

export const dark = {
    main: "#522aa7",
    text: "white",
    bgInput: "#434343",
    labelInput:"#c4c4c4"
}

export const GlobalStyles = createGlobalStyle`

    .MuiButton-outlined{
        border: 1px solid ${props => props.theme.main};
    }

    .MuiButton-outlined:hover{
        border: 1px solid ${props => props.theme.main};
    }

    .Mui-selected{
        color: ${props => props.theme.main} !important;
    }

    .MuiTabs-indicator{
        background-color: ${props => props.theme.main};
    }

    .MuiDataGrid-columnHeaderTitleContainerContent, .MuiTablePagination-displayedRows, .MuiTablePagination-actions .MuiButtonBase-root, .MuiButtonBase-root .MuiSvgIcon-root , .MuiTab-root {
        color: ${props => props.theme.text};
    }

    .close-button{
        border: 1px solid ${props => props.theme.main};
    }

    .MuiInputBase-root{
        background-color:${props => props.theme.bgInput};
    }

    .MuiInputBase-input{
        color:${props => props.theme.text};
    }

    #outlined-basic-label{
        color:${props => props.theme.labelInput};
    }

`;