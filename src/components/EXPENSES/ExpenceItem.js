import "./ExpenseItem.css";
import ExpenceDate from "../EXPENSES/ExpenseDate";
import Card from "../UI/card";
import React, { useState } from "react";

function ExpenseItem(props) {
  return (
    <Card className="expence-item-container">
      <ExpenceDate date={props.date}></ExpenceDate>
      <div className="expence-item-description">
        <span>{props.title}</span>
      </div>
      <div className="expence-item-price">
        <span>
          &#x20B9;
          {props.price}
        </span>
      </div>
    </Card>
  );
}

export default ExpenseItem;
