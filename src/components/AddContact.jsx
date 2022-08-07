import React, { useState } from "react";
import axios from "axios";

const AddContact = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [number, setNumber] = useState("");

    const Add = (e) => {
        axios.post("http://localhost:8000/contacts", {
            fname, lname, number, created_at: new Date()
        })
    };

    return (
        <>
            <div className="ui main">
                <h2> Add Contact </h2>
                <form className="ui form" onSubmit={Add}>
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
                        <button className="ui button blue">Add Contact</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddContact;