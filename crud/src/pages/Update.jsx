import { useState, useEffect } from "react";
import axios from "axios";
import A from "../images/delete.png";
import B from "../images/edit.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

    const loadData = () => {
        let api = "http://localhost:3000/employees";
        axios.get(api).then((res) => {
            console.log(res.data);
            setMydata(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const myRecDel = (id) => {
        let api = `http://localhost:3000/employees/${id}`;
        axios.delete(api).then((res) => {
            message.warning("Your Record Successfully Deleted!!");
            loadData();
        });
    };

    const myEdit = (id) => {
        navigate(`/editrec/${id}`);
    };

    const ans = mydata.map((key) => {
        return (
            <tr key={key.id}> {/* Adding a unique key for each row */}
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.contact}</td>
                <td>
                    <a href="#" onClick={() => { myEdit(key.id); }}>
                        <img src={B} width="20" height="20" alt="Edit" /> {/* Corrected src */}
                    </a>
                    <a href="#" onClick={() => { myRecDel(key.id); }}>
                        <img src={A} width="20" height="20" alt="Delete" /> {/* Corrected src */}
                    </a>
                </td>
            </tr>
        );
    });

    return (
        <>
            <h1>Welcome to Updates Page!!!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Emp No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </table>
        </>
    );
};

export default Update;
