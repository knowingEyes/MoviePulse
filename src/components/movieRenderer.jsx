export default function RenderMovies({ maxLength = 10 }) {
  return (
    <ul>
      {Array.from({ length: maxLength }, () => (
        <li></li>
      ))}
    </ul>
  );
}
