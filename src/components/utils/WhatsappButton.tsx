import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=593995687336&text=Hola%20me%20interesa%20contratar%20tus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
