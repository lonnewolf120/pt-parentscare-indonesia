import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi ParentsCare Indonesia: bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
  url: "/privacy-policy",
})

export default function PrivacyPolicy() {
  const lastUpdated = "June 9, 2025"

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6 md:p-8">
          <div className="mb-8 flex justify-center">
            <Image
              src="/ptlogo.png"
              alt="ParentsCare Logo"
              width={200}
              height={76}
              priority
            />
          </div>

          <div className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold text-center text-pink mb-2">Privacy Policy for ParentsCare</h1>
            <p className="text-center text-muted-foreground mb-6">
              <strong>Last Updated: {lastUpdated}</strong>
            </p>

            <p className="lead">
              Welcome to ParentsCare (the "App"), operated by Parents Care Limited ("we," "us," or "our"). We are
              committed to protecting your privacy and the privacy of your children. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use our mobile application. Please read
              this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not
              access the application.
            </p>

            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert
              you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to
              periodically review this Privacy Policy to stay informed of updates.
            </p>

            <h2 className="text-2xl font-bold text-pink mt-8">1. Information We Collect</h2>
            <p>
              We may collect information about you and your child(ren) in a variety of ways. The information we may
              collect via the App depends on the content and materials you use, and includes:
            </p>

            <h3 className="text-xl font-semibold mt-4">a. Personal Identification Information (Parent/Guardian):</h3>
            <ul className="list-disc pl-6">
              <li>
                Name, email address, phone number, password, and other registration details you provide when creating an
                account.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">b. Child Information (with Parental Consent):</h3>
            <ul className="list-disc pl-6">
              <li>
                Information you provide about your child(ren), such as their name, age, gender, photographs,
                health-related information (e.g., allergies, medical conditions, medication schedules for features like
                "Medicine Reminders"), schedules, and other information relevant to managing and monitoring their
                well-being.
              </li>
              <li>We collect this information only with your explicit consent as the parent or legal guardian.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">c. Usage Data:</h3>
            <ul className="list-disc pl-6">
              <li>
                Information about how you use the App, features you access, actions you take, and the time, frequency,
                and duration of your activities.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">d. Device Information:</h3>
            <ul className="list-disc pl-6">
              <li>
                Information about your mobile device, including device model, operating system version, unique device
                identifiers, IP address, mobile network information, and browser type.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">e. Location Data:</h3>
            <ul className="list-disc pl-6">
              <li>
                We may request access or permission to and track location-based information from your mobile device,
                either continuously or while you are using the App, to provide location-based services (e.g., for map
                functionalities using `flutter_map` or `flutter_osm_plugin`). If you wish to change our access or
                permissions, you may do so in your device's settings.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">f. Images, Videos, and Other Media:</h3>
            <ul className="list-disc pl-6">
              <li>
                If you use features that allow uploading images or other media (e.g., via `image_picker` and managed by
                `cloudinary_flutter`), we will collect the media you choose to upload. This may include photos or videos
                of your child(ren).
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">g. Payment Information:</h3>
            <ul className="list-disc pl-6">
              <li>
                If you make purchases or use payment-related services within the App, we or our third-party payment
                processors may collect payment and billing information (e.g., credit card details, billing address). We
                do not store full credit card numbers on our servers.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">h. Data from Social Networks:</h3>
            <ul className="list-disc pl-6">
              <li>
                User information from social networking sites, including your name, your social network username,
                location, gender, birth date, email address, profile picture, and public data for contacts, if you
                connect your account to such social networks.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">i. Data From Third Parties:</h3>
            <ul className="list-disc pl-6">
              <li>
                Information from third parties, such as analytics providers or advertising networks, if applicable.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">j. Local Storage and Secure Storage:</h3>
            <ul className="list-disc pl-6">
              <li>
                We may store certain information locally on your device using mechanisms like `sqflite` (for local
                database storage) and `flutter_secure_storage` (for securely storing sensitive data like authentication
                tokens or preferences).
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">k. Notifications Data:</h3>
            <ul className="list-disc pl-6">
              <li>
                Information related to notifications sent via `awesome_notifications`, which may be based on your
                preferences or app activity.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">2. How We Use Your Information</h2>
            <p>
              Having accurate information permits us to provide you with a smooth, efficient, and customized experience.
              Specifically, we may use information collected about you and your child(ren) via the App to:
            </p>
            <ul className="list-disc pl-6">
              <li>Create and manage your account.</li>
              <li>
                Provide, operate, and maintain the App's functionalities, including monitoring children's well-being and
                medicine reminders.
              </li>
              <li>
                Process transactions and send you related information, including purchase confirmations and invoices.
              </li>
              <li>Personalize and improve your experience with the App.</li>
              <li>Respond to your comments, questions, and provide customer support.</li>
              <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
              <li>
                Communicate with you about products, services, offers, promotions, rewards, and events offered by us and
                others, and provide news and information we think will be of interest to you (with your consent, where
                required).
              </li>
              <li>Monitor and analyze trends, usage, and activities in connection with our App.</li>
              <li>
                Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the
                rights and property of Parents Care Limited and others.
              </li>
              <li>Facilitate communication between users (if applicable).</li>
              <li>Comply with legal and regulatory obligations.</li>
              <li>For any other purpose with your consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">3. How We Share Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>

            <h3 className="text-xl font-semibold mt-4">a. By Law or to Protect Rights:</h3>
            <ul className="list-disc pl-6">
              <li>
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">b. Third-Party Service Providers:</h3>
            <ul className="list-disc pl-6">
              <li>
                We may share your information with third parties that perform services for us or on our behalf,
                including payment processing, data analysis, email delivery, hosting services (like the backend at
                `BASE_URL = https://ap2.shalish.xyz`), customer service, image and media management (e.g., Cloudinary),
                map services (e.g., OpenStreetMap), and marketing assistance.
              </li>
              <li>
                <strong>Firebase:</strong> We use Firebase (Project ID: `parentscare-ee8e2`) for services such as
                backend infrastructure, authentication, database storage, analytics, and notifications. Firebase's use
                of information is governed by Google's Privacy Policy.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">c. Business Transfers:</h3>
            <ul className="list-disc pl-6">
              <li>
                We may share or transfer your information in connection with, or during negotiations of, any merger,
                sale of company assets, financing, or acquisition of all or a portion of our business to another
                company.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">d. With Your Consent:</h3>
            <ul className="list-disc pl-6">
              <li>We may disclose your personal information for any other purpose with your consent.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">e. Aggregated or De-identified Data:</h3>
            <ul className="list-disc pl-6">
              <li>
                We may share aggregated or de-identified information, which cannot reasonably be used to identify you.
              </li>
            </ul>

            <p className="mt-4">We do not sell your personal information or your child(ren)'s personal information.</p>

            <h2 className="text-2xl font-bold text-pink mt-8">4. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse. Any information
              disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot
              guarantee complete security if you provide personal information.
            </p>

            <h2 className="text-2xl font-bold text-pink mt-8">5. Data Retention</h2>
            <p>
              We will retain your personal information and your child(ren)'s information for as long as your account is
              active or as needed to provide you services, comply with our legal obligations, resolve disputes, and
              enforce our agreements. The criteria used to determine our retention periods include:
            </p>
            <ul className="list-disc pl-6">
              <li>The length of time we have an ongoing relationship with you and provide the App to you.</li>
              <li>Whether there is a legal obligation to which we are subject.</li>
              <li>
                Whether retention is advisable in light of our legal position (such as in regard to applicable statutes
                of limitations, litigation, or regulatory investigations).
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">6. Your Rights (GDPR & CCPA/CPRA)</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information.</p>

            <h3 className="text-xl font-semibold mt-4">
              a. For Users in the European Economic Area (EEA), UK, and Switzerland (GDPR):
            </h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Right to Access:</strong> You have the right to request copies of your personal data.
              </li>
              <li>
                <strong>Right to Rectification:</strong> You have the right to request that we correct any information
                you believe is inaccurate or complete information you believe is incomplete.
              </li>
              <li>
                <strong>Right to Erasure (Right to be Forgotten):</strong> You have the right to request that we erase
                your personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the
                processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to Object to Processing:</strong> You have the right to object to our processing of your
                personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that
                we have collected to another organization, or directly to you, under certain conditions.
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> If we are processing your personal data based on your
                consent, you have the right to withdraw your consent at any time.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">b. For Users in California (CCPA/CPRA):</h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Right to Know/Access:</strong> You have the right to request information about the categories
                and specific pieces of personal information we have collected about you, as well as the categories of
                sources from which such information is collected, the purpose for collecting such information, and the
                categories of third parties with whom we share such information.
              </li>
              <li>
                <strong>Right to Deletion:</strong> You have the right to request the deletion of your personal
                information, subject to certain exceptions.
              </li>
              <li>
                <strong>Right to Opt-Out of Sale/Sharing:</strong> We do not "sell" your personal information as
                traditionally defined. However, if our practices change, we will update this policy. You have the right
                to opt-out of the "sharing" of your personal information for cross-context behavioral advertising.
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> You have the right not to be discriminated against for
                exercising any of your CCPA/CPRA rights.
              </li>
              <li>
                <strong>Right to Correct Inaccurate Information:</strong> You have the right to request the correction
                of inaccurate personal information.
              </li>
              <li>
                <strong>Right to Limit Use and Disclosure of Sensitive Personal Information:</strong> You have the right
                to direct us to limit our use of your sensitive personal information to that use which is necessary to
                perform the services or provide the goods reasonably expected.
              </li>
            </ul>

            <p className="mt-4">
              To exercise any of these rights, please contact us at ptparentscareindonesia@gmail.com. We will respond to your
              request within the time frame required by applicable law.
            </p>

            <h2 className="text-2xl font-bold text-pink mt-8">7. Children's Privacy (COPPA & GDPR-K)</h2>
            <p>
              Protecting the privacy of young children is especially important. Our App is intended for use by parents
              and legal guardians to manage and monitor their children's well-being.
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Collection of Children's Information:</strong> We only collect personal information from
                children under the age of 13 (or a higher age threshold if applicable in a specific jurisdiction, e.g.,
                16 in some EU countries under GDPR) with verifiable parental consent.
              </li>
              <li>
                <strong>Parental Rights:</strong> As a parent or guardian, you have the right to:
                <ul className="list-disc pl-6 mt-2">
                  <li>Review the information we have collected from your child.</li>
                  <li>Request that we delete your child's information.</li>
                  <li>Refuse to permit further collection or use of your child's information.</li>
                </ul>
              </li>
              <li>To exercise these rights, please contact us at ptparentscareindonesia@gmail.com.</li>
              <li>
                If we learn that we have collected personal information from a child without parental consent, we will
                take steps to delete that information as quickly as possible.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">8. International Data Transfers</h2>
            <p>
              Your information, including personal data, may be transferred to — and maintained on — computers located
              outside of your state, province, country, or other governmental jurisdiction where the data protection
              laws may differ from those in your jurisdiction. If you are located outside the United States and choose
              to provide information to us, please note that we transfer the data, including personal data, to the
              United States (where Firebase and other service providers may be based) and process it there, as well as
              potentially other countries where our service providers operate.
            </p>
            <p className="mt-4">
              Your consent to this Privacy Policy followed by your submission of such information represents your
              agreement to that transfer. We will take all steps reasonably necessary to ensure that your data is
              treated securely and in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-pink mt-8">9. Third-Party Links and Services</h2>
            <p>
              The App may contain links to third-party websites and applications of interest, including advertisements
              and external services, that are not affiliated with us. Once you have used these links to leave the App,
              any information you provide to these third parties is not covered by this Privacy Policy, and we cannot
              guarantee the safety and privacy of your information. Before visiting and providing any information to any
              third-party websites, you should inform yourself of the privacy policies and practices (if any) of the
              third party responsible for that website, and should take those steps necessary to, in your discretion,
              protect the privacy of your information. We are not responsible for the content or privacy and security
              practices and policies of any third parties, including other sites, services, or applications that may be
              linked to or from the App.
            </p>

            <h2 className="text-2xl font-bold text-pink mt-8">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy within the App and updating the "Last Updated" date. You are advised to review this Privacy
              Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on
              this page. Your continued use of the App after any modification to this Privacy Policy will constitute
              your acceptance of such modification.
            </p>

            <h2 className="text-2xl font-bold text-pink mt-8">11. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, or to exercise your rights, please contact us
              at:
            </p>
            <div className="mt-4">
              <p>PT Parents Care Indonesia</p>
              <p>Jl. Pringgondani No. 21, Cilandak, Jakarta Selatan 12450</p>
              <p>DKI Jakarta, Indonesia</p>
              <p>ptparentscareindonesia@gmail.com</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
