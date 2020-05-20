import React from "react";
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from "../../components/collection-item/CollectionItem";

import "./CollectionPage.scss";

interface CollectionPageProps {
  match: any,
  ownProps: any,
  collection: any
}

const CollectionPage: React.FC<CollectionPageProps> = ({ match, collection }) => {
  const { title, items  } = collection;


  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

