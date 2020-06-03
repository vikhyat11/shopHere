import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import CollectionPage from '../collection/collection.component'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from '../../redux/shop/shop.selector'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage =({match}) => (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
        
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)