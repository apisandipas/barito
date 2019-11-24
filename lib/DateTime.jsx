const render = ({ output }) => {
  if (!output) return null
  const { date, time } = output

  return (
    <div>
       &nbsp;{date}  {time}
    </div>
  )
}

export default render
