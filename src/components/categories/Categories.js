import { Component } from 'react';
import './categories.scss';

export class Categories extends Component {
  state = {
    userName: 'Oksana Blonskaya',
    categories: 10,
    published: 3,
    products: 50,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      userName,
      categories,
      published,
      products
    } = this.state;
    return (
      <div className="categories">
        <h2>Hello, {userName}</h2>
        <div className="tasks-info">
          <div>You have <strong>{categories}</strong> categories (<strong>{published}</strong> published)</div>
          <div>You have <strong>{products}</strong> products</div>
        </div>
        <div>
          <a href="/category-list">Go to categories</a>
        </div>
      </div>
    );
  }
}
