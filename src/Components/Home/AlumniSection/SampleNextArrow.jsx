function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FFB703", borderRadius: "100%"}}
        onClick={onClick}
      />
    );
  }

export default SampleNextArrow