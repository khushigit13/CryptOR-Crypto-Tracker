import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  selectbutton: {
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    width: "22%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
      font: "bold",
    },
  },
}));

const SelectButton = ({ children, selected, onClick }) => {
  const classes = useStyles();

  return (
    <span
      onClick={onClick}
      className={classes.selectbutton}
      style={{
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
      }}>
      {children}
    </span>
  );
};

export default SelectButton;
