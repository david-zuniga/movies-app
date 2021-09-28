import React, { useState } from 'react';

const MovieForm = ( props: movieFormProps  ) => {

    const initialForm = {
        title: "",
        gender: "",
        actor: ""
    }

    const [ form, setForm ] = useState(initialForm);

    const handleChange = ( e:any ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = ( e: any ) => {
        e.preventDefault();

        props.handleSearch(form);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div className="row mb-3">

                <div className="col-3">
                    <input 
                        type="text"
                        name="title"
                        placeholder="title"
                        className="form-control"
                        value={ form.title }
                        onChange={ handleChange }
                    />
                </div>

                <div className="col-3">
                    <input 
                        type="text"
                        name="gender"
                        placeholder="gender"
                        className="form-control"
                        onChange={ handleChange }
                    />
                </div>

                <div className="col-3">
                    <input 
                        type="text"
                        name="actor"
                        placeholder="actor"
                        className="form-control"
                        onChange={ handleChange }
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-4 mt-3 mb-3">
                    <button
                        type="submit"
                        className="btn btn-outline-primary"
                    > Search...

                    </button>
                </div>

            </div>

    </form>
    )
}

interface movieFormProps {
    handleSearch(form: any): void
}

export default MovieForm;