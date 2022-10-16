import React, { useState, useEffect } from "react";
import "./ContractInfo.css";
import ReactMarkdown from "react-markdown";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import db from "../firebase.config";

export const AuditedContractInfo = () => {
  const [content, setContent] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "audited-contracts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        import(`../Resources/${id}.md`).then(res => {
          fetch(res.default)
            .then(res => res.text())
            .then(res => setContent(res));
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchData();
  }, [content, id]);
  return (
    <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
