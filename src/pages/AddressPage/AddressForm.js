import { Button, TextField } from "@material-ui/core";
import { formControlClasses } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { addAddress } from "../../services/user";
import { FormContainer, InputsContainer } from "../LoginPage/styled";

const AddressForm = () => {
    useProtectedPage()

    const history = useHistory()

    const [form, onChange, clear] = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    });

    const onSubmitForm = (event) => {
        event.preventDefault()
        // console.log(form)
        addAddress(form, clear, history)
    }

    return <FormContainer>
        <form onSubmit={onSubmitForm}>

        <InputsContainer>
            <TextField
                name={"street"}
                value={form.street}
                onChange={onChange}
                variant={"outlined"}
                label={"Logradouro"}
                fullWidth
                required
                type={"text"}
                placeholder={"Rua/Av"}
            />
        </InputsContainer>

        <InputsContainer>
            <TextField
                name={"number"}
                value={form.number}
                onChange={onChange}
                variant={"outlined"}
                label={"Número"}
                fullWidth
                required
                type={"number"}
                placeholder={"Número"}
            />
        </InputsContainer>

        <InputsContainer>
            <TextField
                name={"complement"}
                value={form.complement}
                onChange={onChange}
                variant={"outlined"}
                label={"Complemento"}
                fullWidth
                type={"text"}
                placeholder={"Apto/Bloco"}
            />
        </InputsContainer>

        <InputsContainer>
            <TextField
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={onChange}
                variant={"outlined"}
                label={"Bairro"}
                fullWidth
                required
                type={"text"}
                placeholder={"Bairro"}
            />
        </InputsContainer>

        <InputsContainer>
            <TextField
                name={"city"}
                value={form.city}
                onChange={onChange}
                variant={"outlined"}
                label={"Cidade"}
                fullWidth
                required
                type={"text"}
                placeholder={"Cidade"}
            />
        </InputsContainer>

        <InputsContainer>
            <TextField
                name={"state"}
                value={form.state}
                onChange={onChange}
                variant={"outlined"}
                label={"Estado"}
                fullWidth
                required
                type={"text"}
                placeholder={"Estado"}
            />
        </InputsContainer>

        <Button
            type={"submit"}
            fullWidth
            variant="contained"
            color={"primary"}
        >
            Salvar
        </Button>
        </form>
    </FormContainer>
}

export default AddressForm
