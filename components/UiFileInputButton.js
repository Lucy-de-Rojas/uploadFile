


export default function UiFileInputButton({label, uploadFileName, onChange}) {

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const formRef = React.useRef<HTMLFormElement | null(null);




  async function onClickHandler() {
    fileInputRef.current?.click();

  }


  function onChangeHandler (event) {
    if(!event.target.files?.length) {
      return;
    }


    const formData = new FormData();

    Array.form(event.target.files).forEach((file)=>{
      formData.append(event.target.name, file);
    });

    onChange(formData);
    formRef.current?.reset();

  }





  return (<div>
<form ref={formRef}>
  <button type="button" onClick={onClickHandler}>{label}</button>


  <input


    name={uploadFileName}
    onChange={onChange}
    type="file"
    accept=""
    multiple={false}
    onChange={onChangeHandler}

  />




</form>

  </div>);
};





