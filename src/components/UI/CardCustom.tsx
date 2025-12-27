import React from "react";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

type CardCustomProps = React.HTMLAttributes<HTMLDivElement>;

const CardCustom: React.FC<PropsWithChildren<CardCustomProps>> = ({
  children,
  ...rest
}) => {
  return (
    <StyledWrapper {...rest}>
      <div className="card">
        {children ? (
          <div className="content">{children}</div>
        ) : (
          <>
            <span> Person</span>
            <p className="job"> Job Title</p>
          </>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    background: #3405a3;
    border-radius: 15px;
    box-shadow: 1px 5px 60px 0px #100a886b;
  }

  .card .card-border-top {
    width: 60%;
    height: 3%;
    background: #6b64f3;
    margin: auto;
    border-radius: 0px 0px 15px 15px;
  }

  .card span {
    font-weight: 600;
    color: white;
    text-align: center;
    display: block;
    padding-top: 10px;
    font-size: 16px;
  }

  .card .content {
    color: white;
    text-align: center;
    display: block;
    padding-top: 10px;
    font-size: 14px;
    line-height: 1.4;
    word-break: break-word;
  }

  .card .job {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    padding-top: 3px;
    font-size: 12px;
  }

  .card .img {
    width: 70px;
    height: 80px;
    background: #6b64f3;
    border-radius: 15px;
    margin: auto;
    margin-top: 25px;
  }

  .card button {
    padding: 8px 25px;
    display: block;
    margin: auto;
    border-radius: 8px;
    border: none;
    margin-top: 30px;
    background: #6b64f3;
    color: white;
    font-weight: 600;
  }

  .card button:hover {
    background: #534bf3;
  }
`;

export default CardCustom;
