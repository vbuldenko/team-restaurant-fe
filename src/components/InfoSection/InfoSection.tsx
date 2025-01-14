import React from "react";
import { Link } from "react-router";
import "./InfoSection.scss";
import classNames from "classnames";

const InfoSection = React.memo(
  ({
    title,
    subtitle,
    description,
    button,
    images,
    reverse = false,
    imgAbsolute = false,
    dark = false,
  }) => {
    return (
      <div className={classNames("info", { dark })}>
        <div className="container info__content">
          <div className={classNames("info__text", { right: reverse })}>
            <h3 className="info__title">{title}</h3>
            {subtitle && (
              <h4 className="info__subtitle font-bold">{subtitle}</h4>
            )}
            <p className="info__description">{description}</p>
            <Link to={button.link} className="info__button">
              {button.text}
            </Link>
          </div>
          <div
            className={classNames("info__images", {
              left: reverse,
              left_absolute: imgAbsolute,
            })}
          >
            {images?.map((image) => (
              <img
                key={image}
                src={`/images/${image}`}
                alt={image}
                className="info__image"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default InfoSection;
