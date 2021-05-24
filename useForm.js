import { useState } from 'react';

const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    
    const reset = () => setValues( initialState );


    const handleInpuntChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInpuntChange, reset ]
}

export default useForm
