import { useEffect, useRef, useState } from 'react'

const useFetch = ( url ) => {

    useEffect( () => {
        return () => isMounted.current = false
    }, [])

    const isMounted = useRef( true )
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        
        setState({ data: null, loading: true, error: null });

        fetch( url )
            .then( ( resp ) => resp.json() )
            .then( data => {
                if( isMounted ) {
                    setState({
                        data,
                        loading: false,
                        error:null
                    });         
                }          
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No fue posible cargar la información',
                });
            });
    }, [ url ]);

    return state;
}

export default useFetch
