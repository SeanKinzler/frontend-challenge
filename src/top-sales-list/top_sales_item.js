import React, {Component} from 'react';

const TopSalesItem = (props) => {
  console.log(props.key);
  return (
    <div key={props.key}>
      <hr />
      <div className="left">
        {props.key + 1}
      </div>
      <div className="right">
        <div className="itemName">{props.item.name}</div>
        <div className="revenueNumber">{props.item.revenue}</div>
      </div>
    </div>
  )
}

export default TopSalesItem;