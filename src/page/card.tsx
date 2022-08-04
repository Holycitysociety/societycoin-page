import * as React from "react";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./card.scss";

const Card = (
  props: Record<
    "cointitle" | "coinmoney" | "gifttitle" | "giftmoney" | "imgurl",
    string
  >
) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#00032b",
    border: "1px solid #00032b",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const { cointitle, coinmoney, gifttitle, giftmoney, imgurl } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="coin-total">
        <div className="coin-img">
          <img src={imgurl} alt="imgs" className="coin-img-coin" />
        </div>
        <div className="coin-content">
          <div className="coin-number">
            <span>{cointitle}</span>
            <p style={{ display: "flex", alignItems: "center" }}>
              <span>{coinmoney}</span>{" "}
              <img className="coin-number-symbol" src="./img/symbol.png" />{" "}
            </p>
          </div>
          <div className="coin-gift">
            <span>{gifttitle}</span>
            <p style={{ display: "flex", alignItems: "center" }}>
              <span>{giftmoney}</span>{" "}
              <img className="coin-number-symbol" src="./img/symbol.png" />{" "}
            </p>
          </div>
          <div className="coin-button-group">
            <img className="coin-button-group-img" src="./img/left.png" />
            <button className="coin-button-receive">
              RECEIVE{" "}
              <img
                className="coin-button-group-symbol"
                src="./img/symbol.png"
              />GIFTs
            </button>
            <p className="coin-button-or">OR</p>
            <button onClick={handleOpen} className="coin-button-gift">
              Give
              <img
                className="coin-button-group-symbol"
                src="./img/symbol.png"
              />GIFTs
            </button>
            <img className="coin-button-group-img" src="./img/right.png" />
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
                        Claim
                    </Typography> */}
            <p
              style={{
                fontSize: "20px",
                color: "#d0d1d5",
                letterSpacing: "0.2em",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center"
              }}
            >
              GIVE
              <img
                style={{ width: "11px", height: "20px", margin: "0px 6px" }}
                src="./img/symbol.png"
              />
              GIFTS
            </p>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="claim address"
                id="claim"
                sx={{ mb: 5, mt: 2 }}
                style={{ backgroundColor: "#eee", borderRadius: "5px" }}
              />
            </Box>
            {/* <Typography id="transition-modal-description" sx={{ mt: 3 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
            <Box>
              <Button sx={{ mr: 3 }} variant="contained">
                Confirm
              </Button>
              <Button variant="contained" color="error" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default Card;
