// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {each} = props
  const {title, description, publishedDate} = each

  return (
    <li className="list-item">
      <div className="heading-date-container">
        <h1 className="profile-heading">{title}</h1>
        <p className="profile-para">{publishedDate}</p>
      </div>
      <p className="profile-para">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem
