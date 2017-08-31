import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class CategoriesCard extends React.PureComponent {
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.category.name}
          actAsExpander
          showExpandableButton
        />
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
        <CardText expandable>
          {this.props.category.description}
        </CardText>
      </Card>
    );
  }
}

CategoriesCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
    key: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
