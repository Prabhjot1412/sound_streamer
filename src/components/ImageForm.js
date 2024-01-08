import Form from "./Form"

const ImageForm = (props) => {
  const {groupName} = props

  return(
      <Form
        title='Add image'
        setShowModal={props.setShowModal}
        modal={props.modal}
        buttonName='Add'
        api_url={`/api/user_images/${groupName}/create`}
        redirect='/'
        fields={[
          { name: 'image', type: 'file', placeholder: 'Add image' },
        ]}
        file="true"
      />
  )
}

export default ImageForm