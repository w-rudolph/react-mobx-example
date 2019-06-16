import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { spy } from 'mobx';
import { postDetail, postList, Store } from './store';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

spy(data => {
  if (data.type === 'action') {
    console.log(`[Action: ${data.name}]`);
  }
});
const store: Store = { postDetail, postList };

function Main() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}
ReactDOM.render(<Main />, document.getElementById('root'));
