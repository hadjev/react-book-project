import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

function AuthButton() {
    const { loginWithRedirect, user, logout } = useAuth0();

    console.log(user);

    return (
        <Wrapper className="auth-btn-wrapper">
            {user ? (
                <>
                    <button
                        className="auth-btn"
                        onClick={() =>
                            logout({ returnTo: window.location.origin })
                        }
                    >
                        Logout
                    </button>
                    <img src={user.picture} alt="" />
                </>
            ) : (
                <button className="auth-btn" onClick={loginWithRedirect}>
                    Login
                </button>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-items: end;
  width: 225px;

  img {
      width: 50px;
      border-radius: 50%;
      margin-left: 10px;
  }
  
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }

`;

export default AuthButton;
