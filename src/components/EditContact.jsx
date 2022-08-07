import React, { useState } from "react";
import axios from "axios";

const EditContact = () => {

    const oldUsersData = localStorage.getItem("usersData");
    const parseData = JSON.parse(oldUsersData);

    const [fname, setFname] = useState(parseData[0].fname);
    const [lname, setLname] = useState(parseData[0].lname);
    const [number, setNumber] = useState(parseData[0].number);

    const Edit = (e) => {
        axios.patch(`http://localhost:8000/contacts/${parseData[0].id}`, {
            fname, lname, number, created_at: new Date()
        })
    };

    return (
        <>
            <div className="ui main">
                <h2> Edit Contact </h2>
                <form className="ui form" onSubmit={Edit}>
                    <div className="filed pt-3 pb-3">
                        <input
                            className="form-control"
                            type="text"
                            id="fname"
                            name="fname"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            placeholder="Enter your first name"
                            required="required"
                            autoComplete="off"
                        />
                    </div>
                    <div className="filed pb-3">
                        <input
                            className="form-control"
                            type="text"
                            id="lname"
                            name="lname"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            placeholder="Enter your last name"
                            autoComplete="off"
                        />
                    </div>
                    <div className="filed">
                        <input
                            className="form-control"
                            type="number"
                            id="number"
                            name="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Enter your mobile number"
                            required="required"
                            autoComplete="off"
                        />
                    </div>
                    <div className="pt-5">
                        <button className="ui button blue">Edit Contact</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditContact;