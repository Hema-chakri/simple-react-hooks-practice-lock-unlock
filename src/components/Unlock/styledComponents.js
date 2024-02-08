// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#161617, #3c2940);
  background-size: cover;
  min-height: 100vh;
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`
export const LockImage = styled.img`
  height: 60px;
  width: 50px;
  align-self: center;
`
export const LockButton = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  border-width: 0;
  height: 35px;
  width: 80px;
  text-align: center;
  border-radius: 8px;
  font-size: 15px;
`
export const Paragraph = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
`
