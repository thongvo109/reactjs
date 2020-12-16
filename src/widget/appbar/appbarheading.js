import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  button: {
    width: "100%",

    paddingLeft: theme.spacing(0),

    textAlign: "center",
  },
  gird:{
    spacing: theme.spacing(2),
  }
}));

const AppBarHeading = () => {
  const theme = useStyles();
  return (
    <div className={theme.root}>
      <AppBar position="static" className={theme.appBar}>
        <Toolbar>
          <Grid
            justify="space-between" // Add it here :)
            container
            spacing={24}
          >
            <Grid item>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  color="primary"
                  className={theme.title}
                >
                  Thong's
                </Typography>
              </Link>
            </Grid>
            <Grid item className={theme.gird}>
              {/* <div style={{ textAlign: "center" }}>
                <Button className={theme.button}>Forward</Button>
              </div> */}
              <Link to="#" style={{border:'none',color:'grey'}}>
                Link
              </Link>
              <Link to="#" style={{border:'none',color:'grey'}}>
                Link
              </Link>
              <Link to="#" style={{border:'none',color:'grey'}}>
                Link
              </Link>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarHeading;
