import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { InputsContainer, FormContainer } from "./styled";
import { TextField } from "@material-ui/core";
import { login } from "../../services/user";

import  Button from "@material-ui/core/Button";


const LoginForm = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }


    return (
        <FormContainer>

            <form onSubmit={onSubmitForm}>
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

                    />
                </InputsContainer>

                <InputsContainer>
                <TextField 
                      name={"password"}
                      value={form.password}
                      onChange={onChange}
                      label={"Senha"}
                      variant={"outlined"}
                    //   margin={"normal"}
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
                    Entrar
                </Button>


            </form>

        </FormContainer>
    )

}

export default LoginForm;
