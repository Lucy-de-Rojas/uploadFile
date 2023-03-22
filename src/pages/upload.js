import {useState} from 'react';
import Link from 'next/link';




export default function Upload() {

    const [image, setImage] = useState(null);
    const [createObjectUrl, setCreateObjectURL] = useState(null);





    function uploadToClient(event) {
        if(event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    }








    return (<div>
        <h1>Upload Page</h1>

        <Link href='/'>Home</Link>

<br />

<img
        src={createObjectUrl}
        width='50%'
        height='auto'
        />


<h4>Select image</h4>
<input
        type='file'
        name='myImage'
        onChange={uploadToClient}
/>







    </div>);};
