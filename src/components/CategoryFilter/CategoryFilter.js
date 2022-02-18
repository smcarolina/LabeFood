import { Typography } from "@material-ui/core";
import React from "react";
import { FilterContainer } from "./style";

const CategoryFilter = ({allCategorys}) => {
    return <FilterContainer>
        {allCategorys && allCategorys.map((cat)=>{
            return <>
                <Typography  variant="h6">
                    {cat}
                </Typography>
                </>
            })
        }
    </FilterContainer>
}

export default CategoryFilter