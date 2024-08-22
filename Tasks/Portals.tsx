// // TASK 1
// import { useState } from 'react';
// import { createPortal } from 'react-dom';

// interface Props {
//   onClose: () => void
// }

// function ModalContent({ onClose }: Props) {
//   return (
//     <div className="modal">
//       <div>I'm a modal dialog</div>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// }

// export default function Portal() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShowModal(true)}>
//         Show modal using a portal
//       </button>
//       {showModal && createPortal(
//         <ModalContent onClose={() => setShowModal(false)} />,
//         document.body
//       )}
//     </>
//   );
// }

// // TASK 2
// import { useState } from 'react';
// import { createPortal } from 'react-dom';

// interface Props {
//   onClose: () => void
// }
// interface ChildrenProps {
//   onCloseChild: () => void
// }

// function ModalContentChildren({ onCloseChild }: ChildrenProps) {
//   return (
//     <div className="modal">
//       <div>I'm a child modal dialog</div>
//       <button onClick={onCloseChild}>Close</button>
//     </div>
//   );
// }

// function ModalContent({ onClose }: Props) {
//   const [showChildModal, setShowChildModal] = useState(false);

//   return (
//     <div className="modal">
//       <div>I'm a modal dialog</div>
//       <button onClick={onClose}>Close</button>
//       <button onClick={() => setShowChildModal(true)}>Open another modal</button>
//       {showChildModal && createPortal(
//         <ModalContentChildren onCloseChild={() => setShowChildModal(false)} />,
//         document.body
//       )}
//     </div>
//   );
// }

// export default function Portal() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShowModal(true)}>
//         Show modal using a portal
//       </button>
//       {showModal && createPortal(
//         <ModalContent onClose={() => setShowModal(false)} />,
//         document.body
//       )}
//     </>
//   );
// }

// // TASK 3
// interface Props {
//   notification: boolean;
// }
// function Notification({ notification }: Props) {
//   return (
//     <>
//       {notification &&
//         createPortal(
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               right: 0,
//               border: "1px solid white",
//               backgroundColor: "red",
//             }}
//           >
//             Stop it! Get some help
//           </div>,
//           document.body
//         )}
//     </>
//   );
// }

// function App() {
//   const [notification, setNotification] = useState(false);
//   const handleNotification = () => {
//     setNotification(true);
//     setTimeout(() => setNotification(false), 2000);
//   };

//   return (
//     <>
//       <button onClick={handleNotification}>Click me!</button>
//       <Notification notification={notification} />
//     </>
//   );
// }
