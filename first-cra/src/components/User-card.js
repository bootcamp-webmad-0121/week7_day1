import './User-card.css'

import Title from './Title'

const UserCard = props => {

    console.log('NO MUERDO PUEDES PONERME CONSOLE LOGS Y TAL', props)

    const fullName = `${props.name} ${props.lastName}`

    const displayImage = image => {
        if (image) {
            return <img src={props.imageURL} alt={fullName} />
        }
        else {
            return <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png' alt={fullName} />
        }
    }

    return (
        <article className="user-card">
            {displayImage(props.imageURL)}
            <div>
                <Title text={fullName} />
                <hr />
                <p>Job: {props.job}</p>
                <p>Age: {props.age} years</p>
            </div>
        </article>
    )
}

export default UserCard