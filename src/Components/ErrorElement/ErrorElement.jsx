import swal from "sweetalert";
const ErrorElement = () => {
  return <div>{swal("error", "", "error")}</div>;
};

export default ErrorElement;
