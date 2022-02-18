import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import {goToSearchPage} from '../../routes/Coordinator'

const SearchButton = () => {


    const history = useHistory()

    return <Button variant='outlined' startIcon={<SearchIcon/>} onClick={()=>goToSearchPage(history)}>
        Buscar restaurante
    </Button>
}

export default SearchButton;