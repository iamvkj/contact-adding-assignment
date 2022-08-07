import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Contacts = () => {

    const [contact, setContact] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const [ids, setIds] = useState([]);

    const transferData = (id) => {
        setIds(contact.filter((item) => {
            return item.id === id
        },
            window.location.href = "/contactDetails"
        ))
    }
    localStorage.setItem("usersData", JSON.stringify(ids));

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/contacts?_sort=fname")
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data for that responce!")
                    }
                    return res.json();
                })
                .then(data => {
                    setContact(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    setIsPending(false)
                    setError(err.message);
                })
        }, 1000);
    }, []);

    return (
        <>
            <div className="container emp-profile">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h2 className="custom-head-small pb-5">CONTACT MANAGER</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-left">
                        <div className="profile-head">
                            <p className="profile-rating mt-3 mb-5"> Contact: <span> 5/10 </span></p>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <NavLink to="/addContact">
                            <button type="submit" className="profile-edit-btn">
                                + Create new contact
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 pl-5 about-info text-center">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-wrap">
                                            <table className="table">
                                                <thead className="text-center">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Contact Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                    {error && <div>{error}</div>}
                                                    {isPending && <div>Loading...</div>}
                                                    {
                                                        contact && contact.map((data) => {
                                                            return (
                                                                <tr>
                                                                    <td><i className="fa fa-user" aria-hidden="true"></i></td>
                                                                    <td>{data.fname + " " + data.lname}</td>
                                                                    <td style={{ cursor: "pointer" }} onClick={() =>
                                                                        transferData(data.id)}><i className="fa fa-eye" aria-hidden="true"></i>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;