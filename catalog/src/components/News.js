import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
    state = {
        gameNews: []
    };

    componentDidMount() {
        const apiKey = 'a11cd700958d44a695582ea2555fe68e';
        axios.get(`https://newsapi.org/v2/everything?q=games&apiKey=${apiKey}`)
            .then(response => {
                this.setState({ gameNews: response.data.articles });
            })
            .catch(error => {
                console.error('Error fetching game news:', error);
            });
    }

    render() {
        return (
            <div>
                <div className={'presentation'}></div>
                {/*<h1>Game News</h1>*/}
                <ul className="news">
                    {this.state.gameNews.map(item => (
                        <li key={item.url}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default News;
