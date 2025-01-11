import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. It is YouTube Playlist Retriever&apos;s
        policy to respect your privacy regarding any information we may collect
        from you across our website,{" "}
        <a href="https://youtube-playlist-retriever.vercel.app">
          https://youtube-playlist-retriever.vercel.app
        </a>
        , and other sites we own and operate.
      </p>
      <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used.
      </p>
      <h2 className="text-xl font-bold mb-2">How We Use Information</h2>
      <div className="mb-4">
        We use the information we collect in various ways, including to:
        <ul className="list-disc list-inside">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
      </div>
      <h2 className="text-xl font-bold mb-2">Data Retention</h2>
      <p className="mb-4">
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorized access, disclosure, copying, use, or modification.
      </p>
      <h2 className="text-xl font-bold mb-2">Your Rights</h2>
      <p className="mb-4">
        You are free to refuse our request for your personal information, with
        the understanding that we may be unable to provide you with some of your
        desired services.
      </p>
      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about how we handle user data and personal
        information, feel free to contact us at [mdarsallan@gmail.com].
      </p>
      <p className="mb-4">This policy is effective as of [11-01-25].</p>
    </div>
  );
};

export default PrivacyPolicy;
