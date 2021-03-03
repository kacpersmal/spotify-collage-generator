import React from "react";
import "../css/Collage.css";
class Collage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.images;
    const rows = this.props.rows;
    const columns = this.props.columns;
    console.log(data);
    return (
      <div
        className="collage-box"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows},1fr)`,
        }}
      >
        {data.map((src) => {
          return <img className="collage-image" src={src}></img>;
        })}
      </div>
    );
  }
}
export default Collage;
