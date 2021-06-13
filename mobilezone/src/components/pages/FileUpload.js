import React,{useState} from 'react'
import Dropzone from 'react-dropzone';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Axios from 'axios';
import './FileUpload.css';


function FileUpload(props) {
    const [Images, setImages] = useState([])
    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])
        //save the Image we chose inside the Node Server 
        Axios.post('/api/product/uploadImage', formData, config)
            .then(response => {
                if (response.data.success) {
    
                    setImages([...Images, response.data.image])
                    props.refreshFunction([...Images, response.data.image])
    
                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }
    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }
    return (
        <div className='dropzone'>
            <Dropzone
            onDrop={onDrop}
            multiple={true}
            maxSize={80000000}
            >
            {({getRootProps,getInputProps})=>(
                <div className='dropzone__style'
                {...getRootProps()}
                >
                
                <input {...getInputProps()} />
                <AddIcon style={{fontSize:'3rem'}} />
                
                </div>
            )}
            </Dropzone>
            <div className='image__style'>
            {Images.map((image, index) => (
                    <div onClick={() => onDelete(image)}>
                    <CloseIcon style={{cursor:'pointer'}}/>
                        <img  className='images__tag' src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FileUpload;
