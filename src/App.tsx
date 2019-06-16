import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { PostList, Store } from './store';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import './App.css';

interface App {
  props: {
    postList: PostList;
  };
}

interface DataProps {
  store: Store;
}

@inject((data: DataProps) => {
  return {
    postList: data.store.postList
  };
})
@observer
class App extends Component {
  componentDidMount() {
    this.props.postList.getPosts();
  }

  render() {
    const { list: postList, isLoading } = this.props.postList;
    return (
      <div className="pagePostList">
        {isLoading ? (
          <Loading />
        ) : (
          postList.map(item => {
            return (
              <div className="postItem" key={item.id}>
                <Link to={`/detail/${item.id}`}>{item.title}</Link>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default App;
