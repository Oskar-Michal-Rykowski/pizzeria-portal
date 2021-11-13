import { connect } from 'react-redux';
import Waiter from './Waiter';
import {
  getAll,
  fetchFromAPI,
  getLoadingState,
  changeTableStatusInAPI,
} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeTableStatus: (status, id) =>
    dispatch(changeTableStatusInAPI(status, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
