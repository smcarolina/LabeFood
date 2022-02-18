export const goBack = (history) => {
    history.goBack()
}

export const goToHomePage = (history) => {
    history.push("/home")
}

export const goToRestaurantPage = (history, id) => {
    history.push(`/restaurante/${id}`)
}

export const goToCartPage = (history) => {
    history.push("/carrinho")
}

export const goToProfilePage = (history) => {
    history.push("/perfil")
}

export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
}

export const goToUpEndereco = (history) => {
    history.push("/endereco")
}

export const goToSearchPage = (history) => {
    history.push("/busca")
}