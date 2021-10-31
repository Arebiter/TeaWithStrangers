import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, removeErrors } from "../../actions/session_actions";



const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: "Login"
    }
};

const mDTP = (dispatch) => {
    return {
        processForm: user => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(SessionForm);

