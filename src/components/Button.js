export default function Button({color, setColor}) {
  return (
    <button className={color} onClick={() => setColor(color)}>
        {color}
    </button>
  )
}
