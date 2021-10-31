import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";


const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: "Login"
    }
};

const mDTP = (dispatch) => {
    return {
        processForm: user => dispatch(login(user))
    }
};

export default connect(mSTP, mDTP)(SessionForm);

