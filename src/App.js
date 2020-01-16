/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'index.scss';

const App = () => <div>
    <h1 className="title">Bulma</h1>
    <p className="subtitle">
      Modern CSS framework based on{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
        Flexbox
      </a>
    </p>

    <div className="field">
      <div className="control">
        <input className="input" type="text" placeholder="Input" />
      </div>
    </div>

    <div className="field">
      <p className="control">
        <span className="select">
          <select>
            <option>Select dropdown</option>
          </select>
        </span>
      </p>
    </div>

    <div className="buttons">
      <a className="button is-primary">Primary</a>
      <a className="button is-link">Link</a>
    </div>
</div>;

export default App;
