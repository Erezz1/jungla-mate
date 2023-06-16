import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@chakra-ui/react';
import { MdAccountCircle } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import * as yup from 'yup';

import { Container, Form, Logo, Title } from './Login.styled.component';
import { formValidation } from './utils';
import {
  WrapperComponent,
  InputComponent,
  ButtonComponent,
  AddSpaceComponent,
} from '@/components';
import { useAuth } from '@/features/auth';

type FormData = yup.InferType<typeof formValidation>;

const LoginComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(formValidation) });
  const auth = useAuth();

  const onSubmit = (data: FormData) => {
    auth.mutate(data);
  }

  return (
    <WrapperComponent>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo />
          <Title>Directivos</Title>
          <Grid gap="1.5rem">
            <InputComponent
              placeholder="Username"
              name="userName"
              register={register}
              error={errors.userName?.message}
              isRequired
              isDisabled={auth.isLoading}
              icon={<MdAccountCircle />}
            />
            <InputComponent
              placeholder="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
              isRequired
              isDisabled={auth.isLoading}
              icon={<RiLockPasswordFill />}
            />
            <ButtonComponent type="submit" isLoading={auth.isLoading}>
              Iniciar Sesion
            </ButtonComponent>
          </Grid>
        </Form>
      </Container>
      <AddSpaceComponent>
        Espacio publicitario
      </AddSpaceComponent>
    </WrapperComponent>
  )
}

export default LoginComponent;
