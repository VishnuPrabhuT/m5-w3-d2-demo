import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";

function Lists(props) {
    let listrows = [];
    props.alldata.forEach((element) => {
        listrows.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.author}</td>
                <td>
                    <UpdateList
                        id={element.id}
                        singledata={element}
                        handleChange={props.handleChange}
                        updateList={props.updateList}
                    />
                </td>
                <td>
                    <DeleteList
                        id={element.id}
                        singledata={props.singledata}
                        handleChange={props.handleChange}
                        deleteList={props.deleteList}
                    />
                </td>
            </tr>
        );
    });

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>{listrows}</tbody>
        </table>
    );
}

export default Lists;
