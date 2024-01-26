import React from 'react';
import axios from 'axios';
import Card from '../components/Card';

export default class Blogs extends React.Component {
  state = {
    search: '',
    articles: [],
  };
  getArticleList = () => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${this.state.search}&page=1&sort=newest`
      )
      .then((res) => {
        const articles = res.data.response.docs;
        this.setState({ articles });
      });
  };
  componentDidMount() {
    this.getArticleList();
  }
  render() {
    return (
      <>
        <div className="w-full sm:w-[400px] md:w-1/2 grid gap-y-3 mx-auto">
          <div className="w-full flex items-center space-x-2 mb-4 ">
            <input
              className="outline-none border border-gray-300 rounded-sm w-3/4 px-4 py-2 text-sm font-medium bg-gray-100"
              onChange={(e) => this.setState({ search: e.target.value })}
            />
            <button
              className="px-4 py-2 rounded-sm w-1/4 bg-blue-300 text-sm font-medium text-gray-600"
              onClick={this.getArticleList}
            >
              Search
            </button>
          </div>
          {this.state.articles.map((article) => (
            <Card item={article} key={article._id} />
          ))}
        </div>
      </>
    );
  }
}
