import React from "react";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import { ScreenContainer } from "./styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import Card1 from "../../components/Card1/Card1";
import SearchButton from "../../components/SearchButton/SearchButton";
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from '../../constants/url';
import Loading from '../../components/loading/Loading'
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

const HomePage = () => {
    useProtectedPage()

    const rest = useRequestData([], `${BASE_URL}/restaurants`)
    const restaurants = rest.restaurants

    const allCategorys = []

    restaurants && restaurants.map((rest)=>{
        return allCategorys.push(rest.category)
    })

    return <div>
        <Header title={"Future Eats"}/>

            <ScreenContainer>

                
                <SearchButton/>
                {/* <CategoryFilter allCategorys={allCategorys}/> */}


                {restaurants ? 
                    restaurants.map((rest)=>{
                        return <Card1 
                        image={rest.logoUrl}
                        name={rest.name}
                        deliveryTime={rest.deliveryTime}
                        shipping={rest.shipping}
                        id={rest.id}
                        />
                    })
                 : <Loading/>}


            </ScreenContainer>
        
        <Footer/>
    </div>
}

export default HomePage;