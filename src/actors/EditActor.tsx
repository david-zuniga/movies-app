import { useParams } from "react-router";

const EditActor = () => {

    const { id }: any = useParams();

    return (
        <>
            <h3>Edit Actor</h3>
            <h4>Actor { id }</h4>
        </>
    )
}

export default EditActor;