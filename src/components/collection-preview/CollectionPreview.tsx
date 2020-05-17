import React from "react";

import CollectionItem from '../collection-item/CollectionItem';

import "./CollectionPreview.scss";

interface IItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

type CollectionPreviewProps = {
  title: string;
  items: IItem[];
};

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
