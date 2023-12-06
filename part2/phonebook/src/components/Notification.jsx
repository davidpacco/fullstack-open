function Notification({ message, isError }) {
  if (message === null) {
    return null
  }

  const styles = isError ? 'message error' : 'message'

  return (
    <div className={styles}>{message}</div>
  )
}

export default Notification