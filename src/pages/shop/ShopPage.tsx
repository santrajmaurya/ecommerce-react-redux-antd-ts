import React, { useState } from 'react';

import ShopData from './ShopData';
import CollectionPreview from './../../components/collection-preview/CollectionPreview';

type ShopPageProps = {

}

const ShopPage: React.FC = () => {

    const [collections, setCollection] = useState(ShopData);

    return (
        <div className='shop-page'>
            {collections.map(({ id, ...otherSectionProps }) => {
                return <CollectionPreview key={id} {...otherSectionProps} />
            })}
        </div>
    )
}
export default ShopPage;