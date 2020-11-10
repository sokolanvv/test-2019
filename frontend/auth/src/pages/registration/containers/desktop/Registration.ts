import { connect } from 'react-redux'
import { change, register } from '../../actions'
import Registration from '../../components/desktop/Registration'

import { login } from '../../../login/actions'

export default connect(
  state => ({
    email: state.auth.registration.email,
    errors: state.auth.registration.errors,
    password: state.auth.registration.password,
    confirmPassword: state.auth.registration.confirmPassword,
  }),
  dispatch => ({
    onRegister: () => {
      dispatch(register())
      dispatch(login())
    },
    onChangeEmail: value => dispatch(change('email', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onChangeConfirmPassword: value =>
      dispatch(change('confirmPassword', value)),
  })
)(Registration)
