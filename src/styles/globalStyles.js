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
  .contacts__navbar-menu_input-warning {
    color: ${({ theme }) => theme.animationInputFinalc};
    animation-name: fadeinInput;
    animation-duration: 1.5s;
  }
  @keyframes fadeinInput {
    from {
      color: ${({ theme }) => theme.animationInputInitialc};
    }
    to {
      color: ${({ theme }) => theme.animationInputFinalc};
    }
  }
  .contacts__navbar-menu_button {
    color: ${({ theme }) => theme.colorI};
    transition: all 0.5s linear;
  }
  .contacts__navbar-menu_button {
    border: 1px solid ${({ theme }) => theme.modifyBtnBgc};
  }
  .contacts__navbar-menu_button-incomplete {
    border: 1px solid ${({ theme }) => theme.deleteBtnBgc};
    color: ${({ theme }) => theme.btnIncompletec};
    background: ${({ theme }) => theme.btnIncompleteBgc};
    transition: all 0.5s linear;
  }
  .contacts__navbar-menu_button-animation {
    background-color: ${({ theme }) => theme.modifyBtnBgc};
    transition: all 0.5s linear;
  }
  .contacts__navbar-menu_button-animation_incomplete {
    background-color: ${({ theme }) => theme.deleteBtnBgc};
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
  .contacts__table-data, .contacts__table-data_editable {
    color: ${({ theme }) => theme.tableData};
    transition: all 0.5s linear;
  }
  .contacts__table-data_editable {
    background-color: ${({ theme }) => theme.tableDataEditBgc};
    transition: all 0.5s linear;
  }
  .contacts__table-data_editable-warning {
  animation-name: fadein;
  animation-duration: 1.5s;
  }
  @keyframes fadein {
    from {
      color: ${({ theme }) => theme.animationInitialc};
    }
    to {
      color: ${({ theme }) => theme.tableData};
    }
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
  .contacts__table-checkbtn {
    background-color: ${({ theme }) => theme.checkBtnBgc};
  }
  .contacts__table-deletebtn,
  .contacts__table-updatebtn,
  .contacts__table-wabtn, 
  .contacts__table-checkbtn {
    color: ${({ theme }) => theme.tableBtnC};
  }
  .contacts__table-circle1,
  .contacts__table-circle2,
  .contacts__table-circle3,
  .contacts__table-circle4,
  .contacts__table-circle5,
  .contacts__table-circle6,
  .contacts__table-circle7,
  .contacts__table-circle8,
  .contacts__table-circle9,
  .contacts__table-circle10,
  .contacts__table-circle11,
  .contacts__table-circle12,
  .contacts__table-circle13 {
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
  animationInputInitialc: "rgba(255, 255, 255, 0)",
  animationInputFinalc: "white",
  btnIncompletec: "#d62828",
  btnIncompleteBgc: "rgb(0, 0, 0)",
  bgcolor: "#e9d8a6",
  tableBg: "#ffffff4d",
  tableHoverC: "#212529 !important",
  tableHoverBgc: "rgba(0, 0, 0, 0.075) !important",
  tableData: "black",
  tableDataEditBgc: "rgba(175, 175, 55, 0.25)",
  animationInitialc: "rgba(0, 0, 0, 0)",
  deleteBtnBgc: "#d62828",
  modifyBtnBgc: "#ffae00",
  waBtnBgc: "#aacc00",
  checkBtnBgc: "#00cddb",
  tableBtnC: "#212529",
  circlesBg: "linear-gradient(to right bottom, #ffffffb3, #e9c46a4d)",
  circlesBgc: "#ee9b00",
};

export const darkTheme = {
  colorI: "wheat !important",
  animationInputInitialc: "rgba(245, 222, 179, 0)",
  animationInputFinalc: "wheat",
  btnIncompletec: "#9b0000",
  btnIncompleteBgc: "rgb(0, 0, 0)",
  bgcolor: "#011627",
  tableBg: "#0000004d",
  tableHoverC: "wheat !important",
  tableHoverBgc: "rgba(245, 222, 179, 0.075) !important",
  tableData: "wheat",
  tableDataEditBgc: "rgba(255, 255, 255, 0.25)",
  animationInitialc: "rgba(245, 222, 179, 0)",
  deleteBtnBgc: "#570404",
  modifyBtnBgc: "#7c5500",
  waBtnBgc: "#526300",
  checkBtnBgc: "#086c74",
  tableBtnC: "#000000",
  circlesBg: "linear-gradient(to right bottom, #0a9396b3, #0030494d)",
  circlesBgc: "#003049",
};
