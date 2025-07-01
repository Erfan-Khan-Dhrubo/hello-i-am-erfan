import { FiCopy } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const email = "erfan@example.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Reset after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      alert("Failed to copy email.");
    }
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        className={`px-5 py-3 rounded-md border border-backgroundLine text-white ${
          copied ? "" : "video-border-btn"
        }`}
      >
        <div className="flex gap-2 text-white">
          {copied ? (
            <FaCheckCircle className="text-xl text-backgroundLine" />
          ) : (
            <FiCopy className="text-xl" />
          )}
          {copied ? "Email Copied!" : "Copy Email"}
        </div>
        {!copied && (
          <>
            <span className="border top"></span>
            <span className="border right"></span>
            <span className="border bottom"></span>
            <span className="border left"></span>
          </>
        )}
      </button>
    </div>
  );
};

export default CopyButton;
