const styles = {
  color: "#f00",
};

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return <p style={styles}>{props.title}</p>;
};

export default Button;
