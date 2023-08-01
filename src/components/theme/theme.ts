import { createGlobalStyle } from "styled-components"

export const light = {
    main: "#efa135",
    columnText: "#474862"
}

export const dark = {
    main: "#522AA7",
    columnText: "white"
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

    .MuiDataGrid-columnHeaderTitleContainerContent, .MuiTablePagination-displayedRows, .MuiTablePagination-actions .MuiButtonBase-root, .MuiTab-root {
        color: ${props => props.theme.columnText};
    }

    .close-button{
        border: 1px solid ${props => props.theme.main};
    }

    .close-button > MuiSvgIcon-root{
        color: #262626;
    }

    .MuiInputBase-input{
        border: 1px solid white;
    }

`;