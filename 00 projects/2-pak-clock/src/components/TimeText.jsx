function Timetext() {
  const currDate = new Date().toLocaleDateString();
  const currDateTime = new Date().toLocaleString();
  return <div>This is the current time {currDateTime}</div>;
}
export default Timetext;
