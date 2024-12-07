export default function Dropdown(props) {
  const { list } = props;
  return (
    <form>
      <select name="hamur">
        {list.map((value) => {
          <option>{value}</option>;
        })}
      </select>
    </form>
  );
}
