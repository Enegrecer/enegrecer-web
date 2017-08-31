import React, { Component } from 'react';
import CategoriesCard from '../card/CategoriesCard';
import firebaseApp from '../../../utils/firebaseUtils';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

export default class CategoriesList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentWillMount() {
    this.getFirebaseCategories();
  }

  getFirebaseCategories() {
    const categories = [];
    this.firebaseRef = firebaseApp.database().ref('categories');

    this.firebaseRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        categories.push({
          key: child.key,
          description: child.val().description,
          name: child.val().name,
          image: child.val().image,
          slug: child.val().slug,
        });
      });

      this.setState({ categories });
    });
  }

  render() {
    return (
      <div style={styles.root}>
        {this.state.categories.map(category => (
          <CategoriesCard key={category.key} category={category} />
        ))}
      </div>
    );
  }
}
