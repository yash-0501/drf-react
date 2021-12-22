import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// const PrivateRoute = ({  auth, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//         if(auth.isLoading){
//             return <h2>Loading....</h2>
//         } else if(!auth.isAuthenticated){
//             return <Navigate to="/login" />
//         }
      
//     }}
//   />
// );

const PrivateRoute = ({auth}) => {
    // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    if(auth.isLoading){
        return <h2>Loading....</h2>
    }
    return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
