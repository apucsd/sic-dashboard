import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { toast } from "sonner";

const DonationTerms = ({
  setActiveTab,
  handleSubmitAllData,
  setTermsData,
  donationData,
}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    placeholder: "Typing terms...",
    style: {
      height: 400,
      background: "#FBF5EB",
    },
  };
  const handleNext = () => {
    if (!content) {
      toast.error("Please fill in all the required fields before proceeding.");

      return;
    }
    setTermsData(content);
    if (donationData?.data[0]) {
      handleSubmitAllData("update");
    } else {
      handleSubmitAllData("add");
    }
  };

  return (
    <div>
      <p className="text-[#A1A1A1]  font-semibold text-lg py-4">
        Terms & conditions
      </p>
      <div>
        <div>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onChange={() => {}}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: 2,
          }}
        >
          <button
            onClick={() => setActiveTab("2")}
            style={{
              height: 44,
              width: 150,
              backgroundColor: "#D29E3B",
              color: "white",
              borderRadius: "8px",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            style={{
              height: 44,
              width: 150,
              backgroundColor: "#D29E3B",
              color: "white",
              borderRadius: "8px",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationTerms;
