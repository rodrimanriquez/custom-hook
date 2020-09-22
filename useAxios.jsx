import { useEffect, useState, useRef } from "react";
import axios from "axios";

export const useAxios = (url) => {

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [state, setState] = useState({ data: null, loading: true, error: null });
  
  useEffect(() => {
      
    setState({ data: null, loading: true, error: null });

    axios(url).then(({ data }) => {

        if(isMounted.current){
            
            setState({
              loading: false,
              error: null,
              data,
            });

        }
        
    });
  }, [url]);

  return state;
};
