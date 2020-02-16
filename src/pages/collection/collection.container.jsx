import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from './collection.component';
import WithSpinner from '../../componets/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state=> !selectIsCollectionsLoaded
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;