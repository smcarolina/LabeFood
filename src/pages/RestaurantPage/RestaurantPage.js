
import React from "react";
import { useParams } from "react-router-dom";
import { CardContainer } from "../../components/Card1/styled";

import Card2 from "../../components/CardProductsList/CardProductsList";
import Card4 from "../../components/CardRestaurantDetails/CardRestaurantDetails";
import Header from "../../components/Header/Header"
import Loading from "../../components/loading/Loading";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { ScreenContainer } from "../HomePage/styled";
import { Typography } from "@material-ui/core";

const RestaurantPage = () => {

    const params = useParams()
    const rest = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)
    const restaurant = rest.restaurant
    console.log(restaurant)
    // const carrinho = []

    const allCategory = []

    restaurant && restaurant.products.map((prod) => {
        allCategory.push(prod.category)
    })

    const categorys = [...new Set(allCategory)]


    // const addProduct = (prodToAdd) => {
    //     // console.log(id)

    //     const prodnocarrinho = carrinho.filter((prod)=>{
    //         if(prod.id !== prodToAdd.id){
    //             return prod 
    //         }else{
    //             return false
    //         }
    //     })

    //     if(!prodnocarrinho){
    //         carrinho.push(prodToAdd)
    //     }

    //     console.log(carrinho)
    //     // console.log(carrinho)
    // }


    return <div>
        <Header title='Restaurante' />
        <ScreenContainer>
            {restaurant ?
                <>
                    <CardContainer>


                        {/* //card de infos do restaurante */}
                        <Card4
                            name={restaurant.name}
                            image={restaurant.logoUrl}
                            address={restaurant.address}
                            deliveryTime={restaurant.deliveryTime}
                            shipping={restaurant.shipping}
                            category={restaurant.category}
                        />
                        

                        {/* lista de categorias */}

                        {categorys && categorys.map((cat) => {
                            return <>
                                <Typography
                                    marginTop={'3vh'}
                                    marginLeft={'10%'}
                                >
                                    <strong>
                                        {cat}
                                    </strong>
                                </Typography>
                                <hr />

                                {/* //card da lista de produtos */}
                                {restaurant && restaurant.products.filter((prod)=>{
                                    return prod.category === cat
                                })
                                .map((prod) => {
                                    return <Card2
                                        name={prod.name}
                                        image={prod.photoUrl}
                                        description={prod.description}
                                        price={prod.price}
                                        // id={prod.id}
                                        // prod={prod}
                                        // onClick={addProduct}
                                    />
                                })}
                            </>
                        })}

                    </CardContainer>
                </>
                : <Loading />

            }


        </ScreenContainer>
    </div>
}

export default RestaurantPage;