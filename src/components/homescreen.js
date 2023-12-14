import React from "react"
import useForm from "../components/useForm"

const Homescreen = () => {
    const { values, handleChange, handleSubmit } = useForm(login);

    function login() {
      console.log(values);
    }
  return (
    <Container>
      <Card>
        <Wrap onSubmit={handleSubmit}>
          <H1>Sign In</H1>
          <Form>
            <Holder>
              <P>Email</P>
              <Input>
                <input
                  placeholder="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  required
                />
              </Input>
            </Holder>
            <Holder>
              <P>Password</P>
              <Input>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  required
                />
              </Input>
            </Holder>
          </Form>
          <Button type="submit">Sign In</Button>
          <Div>
            Do not have an account? <Span to="/signup">Sign Up</Span>
          </Div>
        </Wrap>
      </Card>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123456;
`;

const Card = styled.div`
  width: 400px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  @media (max-width: 400px) {
    width: 90%;
  }
`;
const Wrap = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.div`
  color: #123456;
  font-size: 27px;
  font-weight: bold;
`;
const Div = styled.div`
  width: 205px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`;
const Span = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: red;
`;
const Button = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123456;

  color: white;
  font-size: 17px;
  border-radius: 10px;
`;
const Form = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Holder = styled.div`
  width: 100%;
  height: 77px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const P = styled.div`
  font-size: 14px;
`;
const Input = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    color: #123456;
    border-radius: 10px;
    padding-left: 4px;
    border: 1px solid #123456;
    ::placeholder {
      font-size: 14px;
    }
  }
`;