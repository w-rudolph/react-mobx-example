import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { PostDetail, Store } from './store';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import './App.css';

interface Detail {
  props: {
    postDetail: PostDetail;
    match: { params: { id: string } };
  };
}

interface DataProps {
  store: Store;
}

@inject((data: DataProps) => {
  return {
    postDetail: data.store.postDetail
  };
})
@observer
class Detail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.postDetail.getPostDetail(id);
  }

  render() {
    const { detail, isLoading } = this.props.postDetail;
    return (
      <div className="postDetail">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Link to={'/'}>返回</Link>
            <h3>{detail.title}</h3>
            <div
              className="postContent"
              dangerouslySetInnerHTML={{ __html: detail.content }}
            />
          </>
        )}
      </div>
    );
  }
}

export default Detail;
