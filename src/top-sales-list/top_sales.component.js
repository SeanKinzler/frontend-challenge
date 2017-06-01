import React, {Component} from 'react';
import Styles from './top_sales.css';
import axios from 'axios';
import transformData from '../utils/transformData.js';
import TopSalesItem from './top_sales_item.js';
import map from 'lodash';

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
        let formatedData = transformData(data.data);
        this.state.items = formatedData;
        this.setState(this.state);
      })
    }

    render() {
        return (
          <div className="list">
            <div className="listTitle">
              Top Sales Items
            </div>
            {
              this.state.items.slice(0,10).map((item, i) => {
                return(
                  <TopSalesItem key={i} item={item}/>
                )
              })
            }
          </div>
        )
    }
};