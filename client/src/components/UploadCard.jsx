import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const UploadCard = () => {
    const [file , setFile] = useState(null);

   async function handleUpload() {
        const formData = new FormData();
        formData.append("resume" , file)
        try {
            const response = await axios.post("http://localhost:3001/api/resume/upload" ,
            formData
            )
            console.log(response.data)
        } catch (error) {
            console.log("Error uploading resume" , error)
        }
    }
  return (
    <div>
        <input type="file"
                accept='.pdf'
                onChange={(e) => setFile(e.target.files[0])} />
                <button onClick={handleUpload}>Upload Resume</button>
    </div>
  )
}

export default UploadCard