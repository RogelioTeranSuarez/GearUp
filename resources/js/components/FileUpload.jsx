import React, { useEffect, useState } from "react";
import axios from "axios";

function FileUpload() {

    const [file, setFile] = useState();
    const [productId, setProductId] = useState();
    const [data, setData] = useState([]);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }

    const handleProductId = (e) => {
        setProductId(e.target.value);
    }

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(res => {
                setData(res.data[0])
                console.log(res)
            })
            .catch(err => console.log(err));
    }, [])

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        formdata.append('productId', productId); // Añade el ID del producto
        axios.post(`http://localhost:3000/upload`, formdata)
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
            <input type="text" onChange={handleProductId} />
            <input type="file" onChange={handleFile} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            <img src={'http://localhost:3000/images/' + data.image} alt='' />
        </div>
    )
}

export default FileUpload;