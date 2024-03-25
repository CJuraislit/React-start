import "./Modal.css";

export default function Modal({ children, open }) {
  return <dialog open={open}>{children}</dialog>;
}
