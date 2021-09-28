import { useHistory } from "react-router";
import Button from "../utilities/Button";

const CreateActor = () => {

    const history = useHistory();

    return (
        <>
            <h3>Create Actor</h3>
            <Button onClick={ () => history.push('/actors') }> Save </Button>
        </>
    )
}

export default CreateActor;