import React, {Component} from 'react';
import './NewsWidget.css';
import {useEffect, useState} from 'react';

export default class NewsWidget extends Component {

    // const[threeData, setThreeData] = useState([])
    //
    // const func = () => {
    //   const url = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=448fce7c3a0e49c686457f7dbc4ca63f`;
    //
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //     setThreeData(data.list)
    //   })
    // }
    //
    // const newsCard = () => {
    //   return threeData.slice(0,3).map((reading, index) => <DayCard reading={reading} key={index} />)
    // }
    //
    // return (
    //          <div className="widget">
    //              <a className="titre" href={newsToDisplay['url']}>{newsToDisplay['title']}</a>
    //             <img className="image" src={newsToDisplay['urlToImage']} alt="news img"/>
    //         </div>
    //     );
    //
    // }
    state = {
        news: null,
        newsToDisplay1: '',
        newsToDisplay2: '',
        newsToDisplay3: ''
    };

    componentDidMount() {
        var url = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=448fce7c3a0e49c686457f7dbc4ca63f`;
        this.loadNews(url);
    }

    loadNews(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({news: data});
                // Allows to get a news as soon as the app is loaded
                this.setState({newsToDisplay1: data['articles'][0]})
                this.setState({newsToDisplay2: data['articles'][1]})
                this.setState({newsToDisplay3: data['articles'][2]})
            });
    }


    render() {
        const {newsToDisplay1} = this.state;
        const {newsToDisplay2} = this.state;
        const {newsToDisplay3} = this.state;
        return (
            <div className="widget">
              <h1>Gros titres</h1>
              <div className="article">
                <div>
                  <div className="source">{newsToDisplay1.source ? newsToDisplay1.source.name : '?'}</div>
                  <a className="titre" href={newsToDisplay1['url']}>{newsToDisplay1['title']}</a>
                </div>
                  <img className="image" src={newsToDisplay1['urlToImage']} alt="news img"/>
              </div>
              <div className="article">
                <div>
                  <div className="source">{newsToDisplay2.source ? newsToDisplay2.source.name : '?'}</div>
                  <a className="titre" href={newsToDisplay2['url']}>{newsToDisplay2['title']}</a>
                </div>
                <img className="image" src={newsToDisplay2['urlToImage']} alt="news img"/>
              </div>
              <div className="article">
                <div>
                  <div className="source">{newsToDisplay3.source ? newsToDisplay3.source.name : '?'}</div>
                  <a className="titre" href={newsToDisplay3['url']}>{newsToDisplay3['title']}</a>
                </div>
                <img className="image" src={newsToDisplay3['urlToImage']} alt="news img"/>
              </div>
            </div>
        );
    }
}
