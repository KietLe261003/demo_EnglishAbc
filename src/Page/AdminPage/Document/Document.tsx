import AddStatusAdmin from "../../../Components/Button/AddStatusAdmin";

function ManagementDocument() {
    const status=[
        "Status",
        "Miễn Phí",
        "Trả phí"
      ]
    return ( 
        <div>
            <AddStatusAdmin contentAdd="Add Document" contentStatus={status}></AddStatusAdmin>
        </div>
     );
}

export default ManagementDocument;