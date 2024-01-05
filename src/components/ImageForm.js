import Form from "./Form"

const ImageForm = (props) => {
  return(
      <Form
        title='Add image'
        setShowModal={props.setShowModal}
        modal={props.modal}
        buttonName='Add'
        api_url='/api/user_images/Wallpapers/create'
        redirect='/'
        fields={[
          { name: 'image', type: 'file', placeholder: 'Add image' },
        ]}
        file="true"
      />
  )
}

export default ImageForm