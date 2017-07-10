import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class CategoriesCard extends Component {
  render() {
		let card = null;

		if (this.props.category) {
			card = <Card>
								<CardHeader
									title={this.props.category.name}
									subtitle={this.props.category.description}
									actAsExpander={true}
									showExpandableButton={true}
								/>
								<CardActions>
									<FlatButton label="Action1" />
									<FlatButton label="Action2" />
								</CardActions>
								<CardText expandable={true}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
									Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
									Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
								</CardText>
						</Card>
		}

    return (
      card
    );

  }
}

CategoriesCard.propTypes = {
	category: PropTypes.shape ({
		name: PropTypes.string,
		description: PropTypes.string,
		slug: PropTypes.string,
		key: PropTypes.string,
		image: PropTypes.string
	})
};
