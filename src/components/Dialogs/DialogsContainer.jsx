import { connect } from "react-redux";
import { compose } from "redux";
import { withAutRedirect } from "../../hoc/ithAauthRedirect";

import { sendMessageCreator } from "../../redux/dialogs-reducer";

import { Dialogs } from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAutRedirect
)(Dialogs);
