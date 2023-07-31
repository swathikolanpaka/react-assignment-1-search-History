import './index.css'

const BrowserItem = props => {
  const {mediaList, deleteMedia} = props
  const {timeAccessed, logoUrl, title, id, domainUrl} = mediaList

  const deleteOption = () => {
    deleteMedia(id)
  }

  return (
    <li className="media-container">
      <div className="site">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />

        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>

      <button type="button" onClick={deleteOption}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserItem
