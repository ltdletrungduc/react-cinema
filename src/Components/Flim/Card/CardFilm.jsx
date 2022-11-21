import React from "react";
import { Button, Film, Link } from "../../../Styled/styled";

export default function CardFilm(props) {
  return (
    <Film>
      <Link href="#" className="flim-info">
        <img className="info-image" src={props.info.img} alt={props.info.name} />
        <p className="info-title">{props.info.name}</p>
        <p className="info-description">{props.info.description}</p>
      </Link>
      <Button>Đặt vé</Button>
    </Film>
  );
}
