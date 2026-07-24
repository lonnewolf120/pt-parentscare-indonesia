import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TermsOfService() {
  const lastUpdated = "July 25, 2026"

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
            <h1 className="text-3xl font-bold text-center text-pink mb-2">Terms of Service for ParentsCare Indonesia</h1>
            <p className="text-center text-muted-foreground mb-6">
              <strong>Last Updated: {lastUpdated}</strong>
            </p>

            <p className="lead">
              Welcome to ParentsCare (the "App" and the "Services"), operated by{" "}
              <strong>PT Parents Care Indonesia</strong> ("we," "us," or "our"), a limited liability company
              (Perseroan Terbatas) incorporated under the laws of the Republic of Indonesia. These Terms of Service
              ("Terms") govern your access to and use of the App and our services. By accessing or using the App, you
              agree to be bound by these Terms. If you disagree with any part of the Terms, then you do not have
              permission to access or use the App.
            </p>

            <div className="my-6 rounded-lg border border-pink/30 bg-pink/5 p-5 text-sm">
              <p className="mb-2 font-semibold text-foreground">Company Information</p>
              <ul className="list-none space-y-1 pl-0 text-muted-foreground">
                <li><strong>Legal Entity:</strong> PT Parents Care Indonesia (Penanaman Modal Asing / PT PMA)</li>
                <li><strong>Business Registration Number (NIB):</strong> 2601260113368</li>
                <li><strong>Tax ID (NPWP):</strong> 1000000007961396</li>
                <li><strong>Ministry of Law Approval (SK AHU):</strong> AHU-0006378.AH.01.01.TAHUN 2026</li>
                <li><strong>Primary Business Classification (KBLI):</strong> 78300 &mdash; Human Resources Provision and HR Function Management</li>
                <li>
                  <strong>Registered Office:</strong> Jl. Pringgondani No. 21, RT/RW 003/003, Kelurahan Pondok Labu,
                  Kecamatan Cilandak, Kota Administrasi Jakarta Selatan, DKI Jakarta 12450, Indonesia
                </li>
                <li><strong>Email:</strong> ptparentscareindonesia@gmail.com</li>
                <li><strong>Phone:</strong> +62 821-1000-9811</li>
              </ul>
            </div>

            <p>
              We reserve the right to modify or revise these Terms at any time at our sole discretion. All changes are
              effective immediately when we post them and apply to all access to and use of the App thereafter. Your
              continued use of the App following the posting of revised Terms means that you accept and agree to the
              changes. You are expected to check this page from time to time so you are aware of any changes, as they
              are binding on you.
            </p>

            <h2 className="text-2xl font-bold text-pink mt-8">1. Eligibility</h2>
            <p>By using the App, you represent and warrant that:</p>
            <ul className="list-disc pl-6">
              <li>
                You are at least 18 years of age (or the age of majority in your jurisdiction) and have the legal
                capacity to enter into these Terms.
              </li>
              <li>
                If you are a parent or legal guardian using the App on behalf of a child, you represent and warrant that
                you are the legal guardian of that child and have the authority to consent to the collection and use of
                their information as described in our Privacy Policy.
              </li>
              <li>You are not prohibited from using the App under any applicable laws or regulations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">2. Account Registration</h2>
            <ul className="list-disc pl-6">
              <li>
                To access certain features of the App, you may be required to create an account. You agree to provide
                accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </li>
              <li>
                You are responsible for safeguarding your password and for any activities or actions under your account.
                You agree to notify us immediately of any unauthorized use of your account.
              </li>
              <li>
                We reserve the right to suspend or terminate your account at any time for any reason, including, but not
                limited to, a violation of these Terms.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">3. Use of the App</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>License:</strong> Subject to your compliance with these Terms, we grant you a limited,
                non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial use.
              </li>
              <li>
                <strong>Prohibited Activities:</strong> You agree not to:
                <ul className="list-disc pl-6 mt-2">
                  <li>Use the App for any illegal or unauthorized purpose.</li>
                  <li>Violate any applicable laws or regulations.</li>
                  <li>
                    Interfere with or disrupt the operation of the App or the servers or networks used to make the App
                    available.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any portion of the App or any other accounts, computer
                    systems, or networks connected to the App.
                  </li>
                  <li>
                    Use any robot, spider, scraper, or other automated means to access the App for any purpose without
                    our express written permission.
                  </li>
                  <li>
                    Upload, post, transmit, or otherwise make available any content that is unlawful, harmful,
                    threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of
                    another's privacy, hateful, or racially, ethnically, or otherwise objectionable.
                  </li>
                  <li>
                    Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a
                    person or entity.
                  </li>
                  <li>Collect or store personal data about other users without their express permission.</li>
                  <li>Use the App to transmit any viruses, worms, Trojan horses, or other malicious code.</li>
                  <li>
                    Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the App.
                  </li>
                  <li>
                    Use the App in a way that could damage, disable, overburden, or impair the App or interfere with any
                    other party's use of the App.
                  </li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">4. User Content</h2>
            <ul className="list-disc pl-6">
              <li>
                The App may allow you to submit, upload, publish, or otherwise make available content, including but not
                limited to text, images, videos, and other materials ("User Content").
              </li>
              <li>
                You retain ownership of your User Content. However, by submitting User Content, you grant us a
                worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce,
                distribute, prepare derivative works of, display, and perform your User Content in connection with the
                App and our business, including without limitation for promoting and redistributing part or all of the
                App (and derivative works thereof) in any media formats and through any media channels.
              </li>
              <li>
                You are solely responsible for your User Content and the consequences of posting or publishing it. You
                represent and warrant that:
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    You own or have the necessary licenses, rights, consents, and permissions to use and authorize us to
                    use your User Content.
                  </li>
                  <li>
                    Your User Content does not infringe any intellectual property rights, privacy rights, or other
                    rights of any third party.
                  </li>
                  <li>Your User Content complies with all applicable laws and regulations.</li>
                </ul>
              </li>
              <li>
                We reserve the right to remove or modify User Content for any reason, including, but not limited to, a
                violation of these Terms or any applicable law.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">5. Intellectual Property</h2>
            <ul className="list-disc pl-6">
              <li>
                The App and its entire contents, features, and functionality (including but not limited to all
                information, software, text, displays, images, video, and audio, and the design, selection, and
                arrangement thereof) are owned by us, our licensors, or other providers of such material and are
                protected by Indonesian and international copyright, trademark, patent, trade secret, and other
                intellectual property or proprietary rights laws.
              </li>
              <li>
                You are not permitted to use any trademarks, service marks, or logos displayed on the App without our
                prior written consent.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">6. Privacy</h2>
            <ul className="list-disc pl-6">
              <li>
                Your use of the App is subject to our Privacy Policy, which is incorporated into these Terms by
                reference. Please review our Privacy Policy to understand our practices regarding the collection, use,
                and disclosure of your personal information.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">7. Payments and Fees</h2>
            <ul className="list-disc pl-6">
              <li>
                Fees for our services are quoted and confirmed with you directly (including via WhatsApp) before any
                service is provided. All fees are stated in Indonesian Rupiah (IDR) unless expressly stated otherwise.
              </li>
              <li>
                Where payments are processed through a third-party payment provider, your payment is subject to that
                provider's terms and privacy policy. We do not store your full payment card details; those are handled
                by the payment provider. Any dispute or error relating to payment processing may need to be resolved
                with the relevant payment provider in addition to us.
              </li>
              <li>
                Unless otherwise agreed in writing, applicable taxes are charged in accordance with Indonesian tax
                regulations.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">8. Disclaimer of Warranties</h2>
            <ul className="list-disc pl-6">
              <li>
                THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NON-INFRINGEMENT.
              </li>
              <li>
                WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR
                THAT THE APP OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </li>
              <li>
                WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE APP IN
                TERMS OF ITS CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">9. Limitation of Liability</h2>
            <ul className="list-disc pl-6">
              <li>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE, OUR AFFILIATES, OR OUR
                RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, REVENUE,
                DATA, OR USE, INCURRED BY YOU OR ANY THIRD PARTY, WHETHER IN AN ACTION IN CONTRACT, TORT, OR OTHERWISE,
                ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE APP, EVEN IF WE HAVE BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES.
              </li>
              <li>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN
                CONTRACT, TORT, OR OTHERWISE) EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING THE APP.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless us, our affiliates, and our respective officers,
              directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs,
              and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use
              of the App, your violation of these Terms, or your violation of any rights of another.
            </p>

            <h2 className="text-2xl font-bold text-pink mt-8">11. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc pl-6">
              <li>
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia,
                without regard to its conflict of law principles.
              </li>
              <li>
                In the event of any dispute, controversy, or claim arising out of or relating to these Terms or the App,
                the parties shall first seek to resolve it amicably through good-faith deliberation to reach consensus
                (musyawarah untuk mufakat) within 30 (thirty) days of written notice of the dispute.
              </li>
              <li>
                If the dispute cannot be resolved amicably within that period, the parties agree to submit the dispute
                to the exclusive jurisdiction of the South Jakarta District Court (Pengadilan Negeri Jakarta Selatan).
              </li>
              <li>
                Nothing in this section limits any mandatory rights you may have as a consumer under Indonesian law,
                including Law No. 8 of 1999 on Consumer Protection, such as the right to pursue a complaint through the
                Consumer Dispute Settlement Body (Badan Penyelesaian Sengketa Konsumen / BPSK).
              </li>
              <li>
                Notwithstanding the foregoing, we reserve the right to seek injunctive or other equitable relief in any
                court of competent jurisdiction to protect our intellectual property rights.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">12. Termination</h2>
            <ul className="list-disc pl-6">
              <li>
                We may terminate your access to and use of the App, at our sole discretion, at any time and for any
                reason, including, but not limited to, a violation of these Terms.
              </li>
              <li>Upon termination, your right to use the App will immediately cease.</li>
              <li>Sections 4, 5, 8, 9, 10, 11, and 13 shall survive termination.</li>
            </ul>

            <h2 className="text-2xl font-bold text-pink mt-8">13. Miscellaneous</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us
                regarding your use of the App and supersede all prior or contemporaneous communications and proposals,
                whether oral or written, between you and us.
              </li>
              <li>
                <strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not
                constitute a waiver of such right or provision.
              </li>
              <li>
                <strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable,
                such provision shall be struck and the remaining provisions shall remain in full force and effect.
              </li>
              <li>
                <strong>Assignment:</strong> You may not assign these Terms or any of your rights or obligations
                hereunder without our prior written consent. We may assign these Terms without your consent.
              </li>
              <li>
                <strong>Contact Information:</strong> If you have any questions about these Terms, please contact us at
                ptparentscareindonesia@gmail.com
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
