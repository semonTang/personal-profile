import React from "react";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import ConnectSvg from "@/assets/svg/connect.svg";
import { validateEmail } from "../utils/validate";

const Container = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  padding: 60px 100px 200px 100px;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const StyledConnectSvg = styled(ConnectSvg)`
  width: 40%;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 30px;
  width: 100%;
`;

const Input = styled.input`
  width: 49%;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  padding: 14px 48px;
  font-size: 18px;
  margin-top: 25px;
  border-radius: 0;
  position: relative;
  transition: 0.3s ease-in-out;
  z-index: 1;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #000;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    ::before {
      width: 100%;
    }
    color: #fff;
  }
`;

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Connect = () => {
  const { control, handleSubmit } = useForm<FormProps>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (formParams) => {
    console.log(formParams);
  });

  return (
    <Container>
      <StyledConnectSvg viewBox="0 0 785 589" preserveAspectRatio="none meet" />
      <Form>
        <Title>Get in Touch</Title>
        <Controller
          control={control}
          name="firstName"
          rules={{ required: true }}
          render={({ field }) => (
            <Input className="text" placeholder="First Name" {...field} />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          rules={{ required: true }}
          render={({ field }) => (
            <Input className="text" placeholder="Last Name" {...field} />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{ required: true, validate: { validateEmail: (value) => validateEmail(value) }}}
          render={({ field }) => (
            <Input className="text" placeholder="Email Address" {...field} />
          )}
        />
        <Controller
          control={control}
          name="message"
          rules={{ required: true }}
          render={({ field }) => (
            <textarea
              className="text"
              placeholder="Message"
              rows={5}
              {...field}
            />
          )}
        />
        <SubmitButton type="button" onClick={onSubmit}>Send</SubmitButton>
      </Form>
    </Container>
  );
}

export default Connect;