import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { FormContainer, InputsContainer } from "../LoginPage/styled";
import useForm from "../../hooks/useForm"
import { signup } from "../../services/user";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignupForm = () => {
    useUnprotectedPage()

    const history = useHistory()

    const [form, onChange, clear] = useForm({ 
        name: "", 
        email: "", 
        cpf: "", 
        password: "" 
    });

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, clear, history)

    }

    return <FormContainer>

        <form onSubmit={onSubmitForm}>
            <InputsContainer>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    variant={"outlined"}
                    label={"Nome"}
                    // margin={"normal"}
                    fullWidth
                    required
                    type={"text"}
                />
            </InputsContainer>

            <InputsContainer>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    variant={"outlined"}
                    label={"E-mail"}
                    // margin={"normal"}
                    fullWidth
                    required
                    type={"email"}
                    placeholder={"name@example.com"}
                />
            </InputsContainer>

            <InputsContainer>
                <TextField
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    variant={"outlined"}
                    label={"CPF"}
                    // margin={"normal"}
                    fullWidth
                    required
                    type={"number"}
                />
            </InputsContainer>

            <InputsContainer>
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    variant={"outlined"}
                    label={"Senha"}
                    // margin={"normal"}
                    fullWidth
                    required
                    type={"password"}
                />
            </InputsContainer>

            <InputsContainer>
                <TextField
                    // name={"confirmPassword"}
                    // value={form.confirmPassword}
                    onChange={onChange}
                    variant={"outlined"}
                    label={"Confirmar senha"}
                    // margin={"normal"}
                    fullWidth
                    required
                    type={"password"}
                />
            </InputsContainer>

            <Button
                // onClick={() => goToHomePage(history)}
                type={"submit"}
                fullWidth
                variant="contained"
                color={"primary"}>
                Criar conta
            </Button>


        </form>

    </FormContainer>

}

export default SignupForm;