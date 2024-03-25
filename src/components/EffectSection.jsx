import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSecton() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          quis repudiandae dignissimos quo deleniti praesentium fugiat nemo
          expedita enim doloribus id aperiam, voluptatem molestiae, sapiente
          sequi perferendis aliquid vitae. Mollitia!
        </p>

        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>
    </section>
  );
}
