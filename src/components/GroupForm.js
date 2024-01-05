import Form from "./Form"

const GroupForm = (props) => {
  return(
    <Form
      title='Add Group'
      setShowModal={props.setShowModal}
      modal={props.modal}
      buttonName='Add'
      api_url='/api/user_images/Wallpapers/create'
      redirect='/'
      fields={[
        { name: 'image', type: 'file', placeholder: 'Add image' },
      ]}
    />
)
}

export default GroupForm