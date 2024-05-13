import React, { useState } from "react";
import axios from "axios";

function FileUpload() {

    const [file, setFile] = useState();
    const [productId, setProductId] = useState([]);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }

    const handleProductId = (e) => {
        setProductId(e.target.value);
    }

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        axios.post(`http://localhost/products/${productId}/upload`, formdata)
            .then(res => {
                if (res.data.Status === " Success") {
                    console.log("Succeded")
                } else {
                    console.log("Failed")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <input type="text" placeholder="Product ID" onChange={handleProductId} />
            <input type="file" onChange={handleFile} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default FileUpload;