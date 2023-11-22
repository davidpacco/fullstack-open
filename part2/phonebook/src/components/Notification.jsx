function Notification({ message, isError }) {
  if (message === null) {
    return null
  }

  const styles = isError ? 'message error' : 'message'
  console.log(styles)

  return (
    <div className={styles}>{message}</div>
  )
}

export default Notification