import React, { Component } from 'react';
// import CategoriesCard from '../card/CategoriesCard';
import firebaseApp from '../../../utils/firebaseUtils';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconButton from 'material-ui/IconButton';

export default class CategoriesList extends Component {
  constructor() {
    super();

    this.state = {
      categories: []
    };

    var categories = [];
    this.firebaseRef = firebaseApp.database().ref('categories');
    this.firebaseRef.on('value', function(snapshot) {
      snapshot.forEach((child) => {
        categories.push({
          key: child.key,
          description: child.val().descricao
        });
      });

      console.log(categories);
    }.bind(this));

  }

  render() {
    return (
      // <div style={styles.root}>
      // <GridList
      //   cellHeight={180}
      //   style={styles.gridList}
      // >
      //   <Subheader>December</Subheader>
      //     {this.state.categories.map((tile) => (
      //     <GridTile
      //       key={tile.title}
      //       title={tile.title}
      //       subtitle={<span>by <b>{tile.author}</b></span>}
      //       actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
      //     >
      //     </GridTile>
      //   ))}
      // </GridList>
      // </div>
      <h2>{this.state.categories}</h2>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};
