import React from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on 'Forgot Password.' Follow the instructions sent to your email to reset your password.",
    },
    {
      question: "How can I change my email address?",
      answer:
        "Navigate to the Setting page, find the 'Update Email' section, and enter your new email address. Confirm the change through the email verification process.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "If you want to delete your account, please contact support at support@example.com. Deleting your account is permanent and cannot be undone.",
    },
    {
      question: "What should I do if I encounter a bug?",
      answer:
        "Please report any bugs you encounter via the 'Report a Problem' option in the Setting page. Include as many details as possible to help us resolve the issue quickly.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We prioritize your data security. All information is encrypted and stored securely. Refer to our Privacy Policy for more details.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach customer support by emailing support@example.com or by clicking on 'Contact Support' in the Setting page.",
    },
  ];

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faqList">
        {faqs.map((faq, index) => (
          <div key={index} className="faqItem">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
