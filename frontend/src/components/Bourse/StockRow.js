import React, { Component } from 'react';
import { stock } from './stock.js';

class StockRow extends Component {
    
    constructor(props) {
        
        super(props)
        this.state = {
            price: null,
            date: null,
            time: null,
            dollar_change: null,
            percent_change: null  
        }
    }
    
    changedStyle {
        
        return {
    
        color: (this.state.dollar_change >0) ? '#4caf50' : '#e53935',
        fontSize: '0.8rem',
        marginLeft: 5      
        }
    }
    
    applyData(data) {
        
        const formattedPrice = (data.price == undefined) ? null : data.price.toFixed(2)
        
        this.setState({ 
        
            price: data.formattedPrice,
            date: data.date,
            time: data.time,
        });
    }
    
    componentDiMount() {
        
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }

    componentDiUpdate(prevProps) {
        
        this.setCanRetrieveClose(prevprops)
        
        if(this.state.canRetrieveClose && this.state.price != null) {
            
            stock.getYerstedaysClose(this.props.ticker, this.props.lastTradingDate, (yersterday) => {

                const dollar_change = (this.state.price - yersterday.price).toFixed(2);
                const percent_change = (100 * dollar_change / yersterday.price).toFixed(2);

                this.setState({

                    dollar_change: `${dollar_change}`,
                    percent_change: ` (${percent_change}%)`,
                    canRetrieveClose: false
                })
            })  
        } 
    }

    setCanRetrieveClose(prevprops) {
        
        if(prevProps.lastTradingDate == null && this.props.lastTradingDate != null) {
            
            this.setState ({
                
                canRetrieveClose: true
            })
        }
    }
    
    render() {
        
        return (
            
            <li className="list-group-item">
                <b>{this.props.ticker}</b> ${this.state.data.price}
                    <span className="change" style={this.changedStyle()}>
                    {this.state.dollar_change}
                    {this.state.percent_change}
                </span>
            </li>
        )    
    }
}

export default StockRow;