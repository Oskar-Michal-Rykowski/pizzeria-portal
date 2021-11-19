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

const mapDispatchToProps = {
  fetchTables: fetchFromAPI,
  changeTableStatus: changeTableStatusInAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
