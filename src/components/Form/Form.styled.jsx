import styled from 'styled-components';

import { Form, Field } from 'formik';

export const LoginForm = styled.div`
  background-color: ${p => p.theme.colors.backgroundColor};
  height: 100vh;
  padding: 160px;
`;

export const UserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: ${p => p.theme.colors.backgroundColors};
  color: ${p => p.theme.colors.colorText};
  width: 500px;
  margin: auto;
`;

export const Input = styled(Field)`
  border: 1px solid #3d4250;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.backgroundColor};
  color: ${p => p.theme.colors.inputTextColor};
  font-size: 15px;
  line-height: calc(24 / 15);
  padding: 19px 15px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: calc(56 / 48);
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: calc(24 / 15);
  color: ${p => p.theme.colors.secondaryTextColor};
`;
export const FormButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  color: ${p => p.theme.colors.primaryTextColor};
  background-color: ${p => p.theme.colors.accentСolor};
  border-radius: 8px;
  border: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: calc(24 / 15);
`;
export const LoginButton = styled.p`
  text-align: center;
  font-size: 15px;
  line-height: calc(24 / 15);

  & a {
    color: #78b4ed;
  }
`;
