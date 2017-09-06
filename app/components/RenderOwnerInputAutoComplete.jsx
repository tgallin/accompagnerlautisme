import React, { Component, PropTypes } from 'react';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { fetchUsersByName } from '../fetch-data/fetchUsersData';
import { labelColClassName, inputColClassName } from '../utils/componentUtils';

import classNames from 'classnames/bind';

import styles from '../css/components/autocomplete';

const cx = classNames.bind(styles);

class RenderOwnerInputAutoComplete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.initialOwner ? props.initialOwner.profile.displayName : '',
      users: props.initialOwner ? [props.initialOwner] : [],
      loading: false
    };
    this.renderItems = this.renderItems.bind(this);
  }
  
  renderItems(items) {
    return items.map((item, index) => {
        return item;
    });
  }

  render() {
    
    const { input, label, placeholder, help, size, meta: { touched, error }, selectUser } = this.props;
    
    return (
      <div className={'form-group' + (error && touched ? ' has-error' : '')}>
        <label htmlFor={input.name} className={'control-label ' + labelColClassName(size)}>{label}</label>
        <div className={inputColClassName(size)}>
            <Autocomplete
              {...input}
              value={this.state.value}
              inputProps={{ id: input.name, size: '38' }}
              wrapperStyle={{ position: 'relative', display: 'inline-block', width: '328px' }}
              items={this.state.users}
              getItemValue={(item) => item.profile.displayName}
              onSelect={(value, user) => {this.setState({ value, users: [user] }); selectUser(user.id);} }
              onChange={(event, value) => {
                this.setState({ value, loading: true, users: [] });
                fetchUsersByName(value, (items) => {
                  this.setState({ users: items, loading: false });
                });
              }}
              renderItem={(item, isHighlighted) => (
                <div
                  className={cx('item') + (isHighlighted ? ' ' + cx('item-highlighted') : '')}
                  key={item.id}
                >{item.profile.displayName}</div>
              )}
              renderMenu={(items, value) => (
                <div className={cx('menu')}>
                  {value === '' ? (
                    <div className={cx('item')}>{placeholder}</div>
                  ) : this.state.loading ? (
                    <div className={cx('item')}>Chargement...</div>
                  ) : items.length === 0 ? (
                    <div className={cx('item')}>Aucun résultat pour {value}</div>
                  ) : this.renderItems(items)}
                </div>
              )}
            />
          {help && <span id="helpBlock" className="help-block">{help}</span>}
          {touched && error && <div className="text-danger">{error}</div>}
        </div>
      </div>
    );
  }
}

RenderOwnerInputAutoComplete.propTypes = {
  input: PropTypes.object.isRequired
};

export default connect(null, {
  selectUser: userId => change("adminToy", "ownerId", userId)
})(RenderOwnerInputAutoComplete);