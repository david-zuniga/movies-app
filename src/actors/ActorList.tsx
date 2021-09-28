import { Link } from "react-router-dom";

const ActorList = () => {
    return (
        <>
            <h3>Actor List</h3>
            <Link to="actors/create">Create Actor</Link>
        </>
    )
}

export default ActorList;