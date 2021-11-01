import { connect } from "react-redux";
import Profile from "./profile"

const mSTP = (state, ownProps) => {
    return {
        user: state.users[ownProps.match.params.userId]
    }
};


export default connect(mSTP)(Profile);