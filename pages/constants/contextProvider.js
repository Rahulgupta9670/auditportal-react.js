import React from 'react';

export const mapStateToProps = (state) => ({
    showAlert: state.projectR.showAlert,
    alertMsg:state.projectR.alertMsg,
});
  
 
export const mapDispatchToProps = (dispatch) => {
    return {
        show_alert:(data)=>dispatch({type:'SHOW_ALERT',data:data}),
    }
} 
 