import React from "react";

import CollectionItem from '../collection-item/CollectionItem';

import "./CollectionPreview.scss";

interface IItem {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}

interface CollectionPreviewProps  {
  id?: number,
  items: IItem[],
  routeName: string;
  title: string;
};

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, routeName, items  }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
