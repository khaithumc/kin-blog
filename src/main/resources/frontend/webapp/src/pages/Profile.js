import React from "react";

function Profile() {
    return(
        <>
            <h1>Đây là profile - {JSON.parse(localStorage.getItem("user")).token}</h1>
        </>
    );
}
export default Profile;