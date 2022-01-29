import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .contacts__header-title {
    color: ${({ theme }) => theme.colorI};
    transition: all 0.5s linear;
  }
  .contacts__navbar-menu_icons {
    color: ${({ theme }) => theme.colorI};
    transition: all 0.5s linear;
  }
  .contacts__navbar-menu_placeholder {
    color: ${({ theme }) => theme.colorI};
    transition: all 0.5s linear;
  }
  .contacts__navbar-menu_button {
    color: ${({ theme }) => theme.colorI};
    transition: all 0.5s linear;
  }
  .contacts__background {
    background-color: ${({ theme }) => theme.bgcolor};
    transition: all 0.5s linear;
  }
  .contacts__table {
    background: ${({ theme }) => theme.tableBg};
    transition: all 0.5s linear;
  }
  .table {
    --bs-table-hover-color: ${({ theme }) => theme.tableHoverC};
    --bs-table-hover-bg: ${({ theme }) => theme.tableHoverBgc};
    transition: all 0.5s linear;
  }
  .table>:not(caption)>*>* {
    border-bottom-width: 0 !important;
  }
  .contacts__table-data {
    color: ${({ theme }) => theme.tableData};
    transition: all 0.5s linear;
  }
  .contacts__table-deletebtn {
    background-color: ${({ theme }) => theme.deleteBtnBgc};
  }
  .contacts__table-updatebtn {
    background-color: ${({ theme }) => theme.modifyBtnBgc};
  }
  .contacts__table-wabtn {
    background-color: ${({ theme }) => theme.waBtnBgc};
  }
  .contacts__table-deletebtn,
  .contacts__table-updatebtn,
  .contacts__table-wabtn {
    color: ${({ theme }) => theme.tableBtnC};
  }
  .contacts__table-circle1,
  .contacts__table-circle2,
  .contacts__table-circle3 {
    background: ${({ theme }) => theme.circlesBg};
    background-color: ${({ theme }) => theme.circlesBgc};
    transition: all 0.5s linear;
  }
  .contacts__footer-icons_border {
    color: ${({ theme }) => theme.colorI};
    border-color: ${({ theme }) => theme.colorI};
  }
  .contacts__footer-credits {
    color: ${({ theme }) => theme.colorI};
    transition: all 0.5s linear;
  }
  .contacts__footer-icons_border:hover {
    color: #000 !important;
    background-color: ${({ theme }) => theme.colorI};
  }`;

export const lightTheme = {
  colorI: "white !important",
  bgcolor: "#e9d8a6",
  tableBg: "#ffffff4d",
  tableHoverC: "#212529 !important",
  tableHoverBgc: "rgba(0, 0, 0, 0.075) !important",
  tableData: "black",
  deleteBtnBgc: "#d62828",
  modifyBtnBgc: "#ffae00",
  waBtnBgc: "#aacc00",
  tableBtnC: "#212529",
  circlesBg: "linear-gradient(to right bottom, #ffffffb3, #e9c46a4d)",
  circlesBgc: "#ee9b00",
};

export const darkTheme = {
  colorI: "wheat !important",
  bgcolor: "#011627",
  tableBg: "#0000004d",
  tableHoverC: "wheat !important",
  tableHoverBgc: "rgba(245, 222, 179, 0.075) !important",
  tableData: "wheat",
  deleteBtnBgc: "#570404",
  modifyBtnBgc: "#7c5500",
  waBtnBgc: "#526300",
  tableBtnC: "#000000",
  circlesBg: "linear-gradient(to right bottom, #0a9396b3, #0030494d)",
  circlesBgc: "#003049",
};
