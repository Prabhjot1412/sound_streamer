import Form from "./Form"

const MusicForm = (props) => {
  const {groupName} = props

  return(
      <Form
        title='Add Song'
        setShowModal={props.setShowModal}
        modal={props.modal}
        buttonName='Add'
        api_url="/api/music"
        redirect="/music"
        fields={[
          { name: 'name', type: 'text', placeholder: 'Name' },
          { name: 'song', type: 'file', placeholder: 'Add Song', accept: ".wav,.mp3" },
          { name: 'thumbnail', type: 'file', placeholder: 'Add thumbnail', accept: ".jpeg,.JPEG,.png,.PNG,.avif,.AVIF" },
        ]}
        file="true"
      />
  )
}

export default MusicForm
