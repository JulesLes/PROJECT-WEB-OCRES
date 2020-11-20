import React, { Component } from 'react';
import StockRow from './StockRow.js'
import { stock } from './stock.js';

class StockList extends Component {
    
    constructor(props) {
        
        super(props)
        this.state = {
            
            lastTradingDate: null
        }
    }
    
    componentDiMount() {
        
        stock.getLastTradingDate().then((data) => {
            
            this.setState({
                
                lastTradingDate: data[0].date
            })
        })
    }
    
    render() {
        const lastTradingDate = this.state.lastTradingDate;
        
        return (
            
            <ul className="list-group list-group-flush">

                <StockRow ticker="aapl" lastTradingDay={lastTradingDate}/>
            
                <StockRow ticker="goog" lastTradingDay={lastTradingDate}/>
            
                <StockRow ticker="msft" lastTradingDay={lastTradingDate}/>
                
                <StockRow ticker="tsla" lastTradingDay={lastTradingDate}/>

            </ul>
        )    
    }
}

export default StockList;