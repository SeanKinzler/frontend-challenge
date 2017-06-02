import React, {Component} from 'react';
import Styles from './top_sales.scss';
import axios from 'axios';
import transformData from '../utils/transformData.js';
import TopSalesItem from './top_sales_item.js';
import map from 'lodash';
console.log(Styles.list);

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
          <div className={Styles.list}>
            <div className={Styles.listTitle}>
              Top Sales Items
            </div>
            {
              this.state.items.slice(0,10).map((item, i) => {
                return(
                  <div className={Styles.itemCont} key={i}>
                    <div className={Styles.circle}>
                      {i + 1}
                    </div>
                    <div className={Styles.item}>
                      <hr className={Styles.hr}/>
                      <div>
                        <div className={Styles.itemName}>{item.name}</div>
                        <div className={Styles.revAmt}>{item.revenue}</div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
    }
};