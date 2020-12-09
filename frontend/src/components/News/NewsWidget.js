import React, {Component} from 'react';
import './NewsWidget.css';
import {useEffect, useState} from 'react';

export default class NewsWidget extends Component {

    state = {
        news: null,
        newsToDisplay1: '',
        newsToDisplay2: '',
        newsToDisplay3: ''
    };

    componentDidMount() {
        var url = `https://newsapi.org/v2/top-headlines?country=${this.props.paysNews}&apiKey=448fce7c3a0e49c686457f7dbc4ca63f`;
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
            <div className="widgetNews">
                <div>
                  <h5>News</h5>
                  <div className="article alignement">
                    <div>
                      <div className="source">{newsToDisplay1.source ? newsToDisplay1.source.name : '?'}</div>
                      <a className="titre" href={newsToDisplay1['url']}>{newsToDisplay1['title']}</a>
                    </div>
                      <img className="image" src={newsToDisplay1['urlToImage']} alt="news img"/>
                  </div>
                  <div className="article alignement">
                    <div>
                      <div className="source">{newsToDisplay2.source ? newsToDisplay2.source.name : '?'}</div>
                      <a className="titre" href={newsToDisplay2['url']}>{newsToDisplay2['title']}</a>
                    </div>
                    <img className="image" src={newsToDisplay2['urlToImage']} alt="news img"/>
                  </div>
                  <div className="article alignement">
                    <div>
                      <div className="source">{newsToDisplay3.source ? newsToDisplay3.source.name : '?'}</div>
                      <a className="titre" href={newsToDisplay3['url']}>{newsToDisplay3['title']}</a>
                    </div>
                    <img className="image" src={newsToDisplay3['urlToImage']} alt="news img"/>
                  </div>
                </div>
            </div>
        );
    }
}
