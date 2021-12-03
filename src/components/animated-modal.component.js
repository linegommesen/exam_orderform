import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AnimatedModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const beer = props.beer;
  //   if (!beer) {
  //     return null;
  //   }

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Read more
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>{props.beer.name}</h2>
            <h3>Appearance:</h3>
            <p>{props.beer.description.appearance}</p>
            <h3>Aroma:</h3>
            <p>{props.beer.description.aroma}</p>
            <h3>Flavor:</h3>
            <p>{props.beer.description.flavor}</p>
            <h3>Mouthfeel:</h3>
            <p>{props.beer.description.mouthfeel}</p>
            <h3>Overall impression:</h3>
            <p>{props.beer.description.overallImpression}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
