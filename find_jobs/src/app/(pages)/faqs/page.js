import AnswerSection from "@/app/component/AnswerSection";
import FAQSection from "@/app/component/FaqSection";
import Top from "@/app/component/top";
import { faqs } from "@/app/data/data";
import React from "react";

function FAQS() {
  return (
    <>
      <Top title='Question & Answers' />
      <FAQSection faqs={faqs} />

      <AnswerSection />
    </>
  );
}

export default FAQS;
