// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  LockContainer,
  LockImage,
  LockButton,
  Paragraph,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const onChangeLock = () => {
    setLock(prevLock => !prevLock)
  }

  return (
    <AppContainer>
      <LockContainer>
        <LockImage
          src={
            lock
              ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
          }
          alt={lock ? 'lock' : 'unlock'}
        />
        <Paragraph>
          {lock ? 'Your Device is Locked' : 'Your Device is Unlocked'}
        </Paragraph>
      </LockContainer>
      <LockButton onClick={onChangeLock}>{lock ? 'Unlock' : 'Lock'}</LockButton>
    </AppContainer>
  )
}

export default Unlock
