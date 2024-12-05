// import Update from "../../components/update/Update";
// import { useState } from "react";
// import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";
// import { useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";

// const Setting = () => {
//     const [openUpdate, setOpenUpdate] = useState(false);
//     const { currentUser } = useContext(AuthContext);
//     const userId = parseInt(useLocation().pathname.split("/")[2]);

//     const { isLoading, error, data } = useQuery({
//         queryKey: ['user'],
//         queryFn: () =>
//           makeRequest.get("/users/find/" + userId).then(res => res.data),
//       });
//     return (
//         <div>
//             Setting
//             <div>
//                 <button onClick={() => setOpenUpdate(true)}>update</button>
//             </div>
//             {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
//         </div>
//     )
// }

// export default Setting;
import React, { useState } from "react";
import "./setting.css";

const Setting = ({ setUser }) => {
    const [modalContent, setModalContent] = useState(null);

    const handleLogout = () => {
        localStorage.clear();
        setUser(null);
        window.location.href = "/login";
    };

    const openModal = (content) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const renderModalContent = () => {
        switch (modalContent) {
            case "FAQs":
                return (
                    <>
                        <h3>FAQs</h3>
                        <p>
                            Find answers to common questions about account settings, privacy,
                            and more. Visit our <a href="/FAQ">FAQ page</a> for detailed
                            information.
                        </p>
                    </>
                );
            case "Report a Problem":
                return (
                    <>
                        <h3>Report a Problem</h3>
                        <p>
                            Experiencing issues? Let us know! Contact our support team at{" "}
                            <a href="mailto:support@example.com">support@example.com</a>, or
                            describe your issue using the contact form on our support page.
                        </p>
                    </>
                );
            case "Contact Support":
                return (
                    <>
                        <h3>Contact Support</h3>
                        <p>
                            Need help? Our support team is available 24/7. Reach us at{" "}
                            <a href="mailto:support@example.com">support@example.com</a> or
                            call us at +1-800-123-4567.
                        </p>
                    </>
                );
            case "Terms of Service":
                return (
                    <>
                        <h3>Terms of Service</h3>
                        <div className="termsContent">
                            <p>
                                Welcome to our application. By using our services, you agree to the
                                following terms and conditions. Please read them carefully.
                            </p>

                            <h4>1. Acceptance of Terms</h4>
                            <p>
                                By accessing or using this application, you confirm that you have
                                read, understood, and agree to be bound by these terms.
                            </p>

                            <h4>2. User Responsibilities</h4>
                            <ul>
                                <li>
                                    You are responsible for maintaining the confidentiality of your
                                    login credentials and are liable for all activities conducted under
                                    your account.
                                </li>
                                <li>
                                    You agree not to use the app for any illegal purposes or to violate
                                    any applicable laws and regulations.
                                </li>
                                <li>
                                    Misuse of the app, including the dissemination of harmful or
                                    offensive content, may result in suspension or termination of your
                                    account.
                                </li>
                            </ul>

                            <h4>3. Privacy</h4>
                            <p>
                                Your use of this app is governed by our{" "}
                                <a href="/privacy" target="_blank" rel="noopener noreferrer">
                                    Privacy Policy
                                </a>
                                . Please review it to understand how we collect, use, and protect
                                your information.
                            </p>

                            <h4>4. Intellectual Property</h4>
                            <p>
                                All content, designs, trademarks, and features of this app are owned
                                by us or our licensors. Unauthorized use or reproduction is strictly
                                prohibited.
                            </p>

                            <h4>5. Limitation of Liability</h4>
                            <p>
                                We are not liable for any damages arising from your use of the app,
                                including but not limited to data loss, unauthorized access, or
                                service interruptions.
                            </p>

                            <h4>6. Modifications to Terms</h4>
                            <p>
                                We reserve the right to update these terms at any time. Changes will
                                be effective immediately upon posting. Continued use of the app
                                signifies your acceptance of the updated terms.
                            </p>

                            <h4>7. Termination</h4>
                            <p>
                                We may terminate your access to the app if you violate these terms or
                                engage in prohibited behavior. In such cases, your account and data
                                may be deleted without prior notice.
                            </p>

                            <p>
                                For further inquiries about these terms, please contact us at{" "}
                                <a href="mailto:support@example.com">support@example.com</a>.
                            </p>
                        </div>
                    </>
                );

            case "Privacy Policy":
                return (
                    <>
                        <h3>Privacy Policy</h3>
                        <div className="policyContent">
                            <p>
                                We value your privacy and are committed to protecting your personal
                                information. This Privacy Policy outlines how we collect, use, and
                                safeguard your data.
                            </p>

                            <h4>1. Information We Collect</h4>
                            <ul>
                                <li>
                                    **Personal Information**: When you register, we collect data such
                                    as your name, email, and other account details.
                                </li>
                                <li>
                                    **Usage Data**: We collect information about how you interact with
                                    the app, including login times, feature usage, and preferences.
                                </li>
                                <li>
                                    **Device Data**: Details such as your device type, IP address, and
                                    operating system may be collected for troubleshooting purposes.
                                </li>
                            </ul>

                            <h4>2. How We Use Your Data</h4>
                            <ul>
                                <li>
                                    To provide and improve app functionality and user experience.
                                </li>
                                <li>To send important updates or notifications.</li>
                                <li>To ensure the security of our platform.</li>
                            </ul>

                            <h4>3. Sharing Your Information</h4>
                            <p>
                                We do not sell your data. We may share limited information with third
                                parties only when:
                            </p>
                            <ul>
                                <li>Required to comply with legal obligations.</li>
                                <li>Collaborating with trusted partners for essential app services.</li>
                            </ul>

                            <h4>4. Data Security</h4>
                            <p>
                                We implement strong security measures to protect your data from
                                unauthorized access, alteration, or destruction. However, no system
                                is entirely foolproof.
                            </p>

                            <h4>5. Your Rights</h4>
                            <p>
                                You have the right to access, modify, or delete your personal data.
                                Contact us at{" "}
                                <a href="mailto:privacy@example.com">privacy@example.com</a> for
                                assistance.
                            </p>

                            <p>
                                Read the full <a href="/privacy">Privacy Policy</a> for more
                                information.
                            </p>
                        </div>
                    </>
                );

            case "Community Guidelines":
                return (
                    <>
                        <h3>Community Guidelines</h3>
                        <div className="guidelinesContent">
                            <p>
                                Our community thrives on respect, inclusivity, and positive
                                engagement. Follow these guidelines to ensure a welcoming environment
                                for everyone.
                            </p>

                            <h4>1. Be Respectful</h4>
                            <ul>
                                <li>Refrain from hateful or offensive language.</li>
                                <li>
                                    Treat all users with kindness, regardless of their background or
                                    opinions.
                                </li>
                            </ul>

                            <h4>2. Share Thoughtfully</h4>
                            <ul>
                                <li>Only post content that is accurate and appropriate.</li>
                                <li>
                                    Avoid sharing misleading information, spam, or irrelevant material.
                                </li>
                            </ul>

                            <h4>3. Follow the Law</h4>
                            <p>
                                Do not use this platform for illegal activities or to promote
                                prohibited content.
                            </p>

                            <h4>4. Reporting Violations</h4>
                            <p>
                                If you encounter harmful or inappropriate behavior, report it to our
                                support team via{" "}
                                <a href="mailto:support@example.com">support@example.com</a>.
                            </p>

                            <h4>5. Consequences</h4>
                            <p>
                                Violations of these guidelines may result in content removal, account
                                suspension, or termination. Let's work together to maintain a safe
                                and enjoyable community.
                            </p>

                            <p>
                                Review the full <a href="/guidelines">Community Guidelines</a> for
                                additional details.
                            </p>
                        </div>
                    </>
                );

            default:
                return <p>No content available.</p>;
        }
    };

    return (
        <div className="setting">
            <h1>Setting</h1>

            <div className="section">
                <h2>Help & Support</h2>
                <ul>
                    <li onClick={() => openModal("FAQs")}>FAQs</li>
                    <li onClick={() => openModal("Report a Problem")}>Report a Problem</li>
                    <li onClick={() => openModal("Contact Support")}>Contact Support</li>
                </ul>
            </div>

            <div className="section">
                <h2>Legal & Policies</h2>
                <ul>
                    <li onClick={() => openModal("Terms of Service")}>Terms of Service</li>
                    <li onClick={() => openModal("Privacy Policy")}>Privacy Policy</li>
                    <li onClick={() => openModal("Community Guidelines")}>
                        Community Guidelines
                    </li>
                </ul>
            </div>

            <div className="section">
                <h2>Logout</h2>
                <button onClick={handleLogout} className="logoutBtn">
                    Logout
                </button>
            </div>

            {modalContent && (
                <div className="modal">
                    <div className="modalContent">
                        {renderModalContent()}
                        <button onClick={closeModal} className="closeModalBtn">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Setting;
