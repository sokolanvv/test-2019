import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { load, changeFilter } from '../../actions/list'
import List from '../../components/desktop/List'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },
})

export default connect(
  state => ({
    rows: state.users.list.rows,
    typeFilter: state.users.list.typeFilter,
  }),
  dispatch => ({
    onLoad: () => dispatch(load()),
    onFilterChange: value => dispatch(changeFilter(value))
  })
)(enhance(List))
