import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import swal from "sweetalert";
import Message from "../images/message.png";

const ContactDetails = () => {

    const oldUsersData = localStorage.getItem("usersData");
    const parseData = JSON.parse(oldUsersData);

    const DeleteContact = () => {
        axios.delete(`http://localhost:8000/contacts/${parseData[0].id}`)
    }

    return (
        <>
            <div className="container emp-profile">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h2 className="custom-head-small pb-5">CONTACT DETAILS</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 pb-3 text-left pl-5">
                        <i className="fa fa-user" aria-hidden="true"></i> - Icon
                    </div>
                    <div className="col-md-3 pb-3 text-center" style={{ cursor: "pointer" }}>
                        <NavLink to="/messages">
                            <img style={{ height: "20px", width: "20px", border: "none" }} src={Message} alt="message" />
                        </NavLink> - Text
                    </div>
                    <div className="col-md-3 pb-3 text-center" style={{ cursor: "pointer" }}>
                        <NavLink to="/editContact">
                            <i style={{ color: "blue" }} className="fa fa-edit"></i>
                        </NavLink> - Edit
                    </div>
                    <div className="col-md-3 pb-3 text-right pr-5"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            swal("Are you sure you want to delete this admin?", {
                                icon: "warning",
                                buttons: ["No", "Yes"]
                            }).then((willDelete) => {
                                if (willDelete) {
                                    DeleteContact();
                                } else {
                                    //  swal("cancel!");
                                }
                            })
                        }
                    >
                        <i style={{ color: "red" }} className="fa fa-trash"></i> - Delete
                    </div>
                    <div className="col-md-12 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-wrap">
                                            <table className="table">
                                                <thead className="text-center">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Mobile Number</th>
                                                        <th>Saved Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                    {
                                                        parseData.map((data) => {
                                                            return (
                                                                <tr>
                                                                    <td><i className="fa fa-user" aria-hidden="true"></i></td>
                                                                    <td>{data.fname}</td>
                                                                    <td>{data.lname}</td>
                                                                    <td>{data.number}</td>
                                                                    <td>{moment(data.created_at)
                                                                        .format("dd, DD-MM-YYYY,  hh:mm a")
                                                                        .toLocaleString("en-US", { timeZone: "Asia/Calcutta", hour12: true, hour: "numeric", minute: "numeric" })}</td>
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

export default ContactDetails;