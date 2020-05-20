import React, { useContext } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from './../../components/collection-preview/CollectionPreview';

import "./CollectionsOverview.scss";

interface CollectionsOverviewProps {
  collections: any
}

const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({ collections }) => {

  return (
        <div className="collections-overview">
      {collections.map((item: any) => {
            return (
              <CollectionPreview
                key={item.id}
                id={item.id}
                title={item.title}
                routeName={item.routeName}
                items={item.items}
              />
            );
          })}
        </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
