import { Typography, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import "../App.css";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { Filter } from "@material-ui/icons";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const handleFilter = (id) => {};
const DropCard = (props) => {
  const [link, setLinks] = React.useState(false);

  const handleLink = (e) => {
    setLinks(!link);
  };

  return (
    <div className="box">
      <div className="container">
        <div className="logo">
          <span
            className={`badge ${
              props.status === "news" ? "bg-dark" : "bg-light"
            }`}
          >
            {props.status}
          </span>
        </div>
        <div className="flex">
          <div className="header">
            <div className="innerHeader">
              <div className="title">
                <h2>{props.title}</h2>
              </div>
            </div>
            <div className="userCont">
              <div className="user">
                <strong>ავტორი:</strong> {props.user}{" "}
              </div>
            </div>
          </div>

          <div className="content">
            <div className="left">
              <div className="text">{props.partText} </div>
              <div className="innLeft">
                <div className="link">
                  {" "}
                  {props.link &&
                    props.link.map((el, idx) => {
                      return (
                        <div key={idx}>
                          <a href={el.link}>
                            <AttachFileIcon style={{ color: "black" }} />
                          </a>
                        </div>
                      );
                    })}
                </div>

                <div className="date">{props.date} </div>
              </div>
            </div>

            <div className="middle">
              <ExpandMore
                expand={link}
                onClick={handleLink}
                aria-expanded={link}
                aria-label="show more"
              >
                <ExpandMoreIcon
                  onClick={() => {
                    return props.setCode(props.id);
                  }}
                  style={{ color: "#212529" }}
                />
              </ExpandMore>
            </div>
          </div>
        </div>
        {props.setOpen(link)}
        {link && (
          <div className={`collapse`}>
            <div className="one"> {props.text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropCard;
