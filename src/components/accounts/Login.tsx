import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { ILoginDto } from "../../models/user";


const Login = () => {
    const {
        register,//to attrack changes of form inputs
        handleSubmit, //onSubmit event handler
        formState:{errors},

    }=useForm<ILoginDto>();

    const onSubmit=(user:ILoginDto)=>{
            alert(user.username);
    }
    return (
        <>
            <div className="Login">
                <h2> Login Form</h2>
                <Box sx={{width: '100%'}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            {...register("username")}
                            id="uaername"
                            label="username"
                            type="username"
                            variant="filled"
                        />
                        <TextField 
                            {...register("password")}
                            id="password" 
                            label="Password" 
                            type="password" 
                            variant="filled" 
                        />
                    <Button variant="contained" type="submit">Login</Button>
                    </form>

                </Box>
            </div>
        </>
    )
        ;
}

export default Login;