import React, {Component} from 'react';
import Styles from './top_sales.css';
import axios from 'axios';
import transformData from '../utils/transformData.js';

// export default TopSalesList;
//write top sales list component here
export default class TopSalesList extends Component  {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = {
        items: [],
        fetching: true,
      }
      axios({
        url: 'http://localhost:3000/PurchaseOrders',
        method: 'get',
        responseType: 'json',
      }).then((data) => {
        this.state.items = data.data;
        this.setState(this.state);
      })
    }

    render() {
        return (
          <div>
            {
              this.state.items.map((order, i) => {
                return(
                  <div key={i}>{order.purchase_order_id}</div>
                )
              })
            }
          </div>
        )
    }
};