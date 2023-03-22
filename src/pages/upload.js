import {useState} from 'react';
import Link from 'next/link';




export default function Upload() {

    const [image, setImage] = useState(null);
    const [createObjectUrl, setCreateObjectURL] = useState(null);




// displaying on page:
    function uploadToClient(event) {
        if(event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    }





    // sending to server:
    async function uploadToServer(event) {

        const body = new FormData();

        body.append('file', image);
        console.log('body:>>>> ',body);


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



<br />
<button
    onClick={uploadToServer}
    type='submit'
>Upload</button>







    </div>);};
