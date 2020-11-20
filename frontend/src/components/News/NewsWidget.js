import React, {Component} from 'react';
import './NewsWidget.css';

export default class NewsWidget extends Component {
    state = {
        number:[],
        news: null,
        newsToDisplay: ''
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
                this.setState({newsToDisplay: data['articles'][0]})
            });
    }

    /**
     * Selects a news to display from the set of news
     */
    getOneNews() {
        const {news} = this.state;
        const random = Math.floor(Math.random() * news['totalResults']);
        this.setState({newsToDisplay: news['articles'][random]});
    }

    render() {
        const {newsToDisplay} = this.state;
        return (
            <div className="widget">
                <a className="link" href={newsToDisplay['url']}>{newsToDisplay['title']}</a>
                <img className="image" src={newsToDisplay['urlToImage']} alt="news img"/>
            </div>
        );
    }
}
