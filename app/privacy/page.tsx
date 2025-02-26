import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <Card className="mb-8 border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center text-red-500">Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="font-semibold">
              This is an unofficial fan website dedicated to the Eurovision Song Contest. This website has no affiliation with, and is not endorsed by, the European Broadcasting Union (EBU), the official Eurovision Song Contest, or any participating broadcasters. I have nothing to do with the original event.
            </p>
            <p>
              All Eurovision-related logos, trademarks, and copyrighted materials belong to their respective owners. This website is created for informational and entertainment purposes only.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <div className="prose dark:prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to our Eurovision fan website. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              <p>
                This privacy policy applies to all users of our website. Please read it carefully to understand our practices regarding your personal data.
              </p>
              
              <h2>2. Data Controller</h2>
              <p>
                For the purpose of applicable data protection laws, the data controller of this website is the website operator, an independent Eurovision fan and enthusiast. This website is not affiliated with the European Broadcasting Union (EBU) or the official Eurovision Song Contest.
              </p>
              
              <h2>3. Information We Collect</h2>
              <p>
                We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul>
                <li><strong>Identity Data</strong>: includes name, username, or similar identifier.</li>
                <li><strong>Contact Data</strong>: includes email address.</li>
                <li><strong>Technical Data</strong>: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong>: includes information about how you use our website.</li>
                <li><strong>Preference Data</strong>: includes your preferences in receiving communications from us and your voting or rating preferences for Eurovision entries.</li>
              </ul>
              
              <h2>4. How We Collect Your Data</h2>
              <p>
                We use different methods to collect data from and about you including through:
              </p>
              <ul>
                <li><strong>Direct interactions</strong>: You may give us your Identity and Contact Data by filling in forms or by corresponding with us by email or otherwise.</li>
                <li><strong>Automated technologies or interactions</strong>: As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
                <li><strong>Third parties</strong>: We may receive personal data about you from various third-party service providers, such as analytics providers and advertising networks.</li>
              </ul>
              
              <h2>5. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>To operate and maintain our website.</li>
                <li>To improve and personalize your user experience.</li>
                <li>To respond to your inquiries and provide customer support.</li>
                <li>To send you administrative emails, such as updates about the website or Eurovision events.</li>
                <li>To process your participation in any voting, polls, or other interactive features.</li>
                <li>To analyze website usage and gather statistical information.</li>
                <li>To protect against, identify, and prevent fraud and other illegal activity.</li>
              </ul>
              
              <h2>6. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
              </p>
              <p>
                A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer. Cookies contain information that is transferred to your computer&apos;s hard drive.
              </p>
              <p>
                We use the following cookies:
              </p>
              <ul>
                <li><strong>Strictly necessary cookies</strong>: These are cookies that are required for the operation of our website.</li>
                <li><strong>Analytical/performance cookies</strong>: These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
                <li><strong>Functionality cookies</strong>: These are used to recognize you when you return to our website.</li>
                <li><strong>Targeting cookies</strong>: These cookies record your visit to our website, the pages you have visited, and the links you have followed.</li>
              </ul>
              <p>
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
              
              <h2>7. Data Sharing</h2>
              <p>
                We may share your personal data with the following third parties:
              </p>
              <ul>
                <li>Service providers who provide IT and system administration services.</li>
                <li>Analytics providers who help us understand website usage.</li>
                <li>Professional advisers including lawyers, bankers, auditors, and insurers.</li>
                <li>Regulators and other authorities who require reporting of processing activities in certain circumstances.</li>
              </ul>
              <p>
                We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
              </p>
              
              <h2>8. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              <p>
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
              
              <h2>9. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              <p>
                To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data, and whether we can achieve those purposes through other means, and the applicable legal requirements.
              </p>
              
              <h2>10. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              <p>
                If you wish to exercise any of these rights, please contact us through our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
              </p>
              <p>
                You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive. Alternatively, we may refuse to comply with your request in these circumstances.
              </p>
              
              <h2>11. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>
              
              <h2>12. Children&apos;s Privacy</h2>
              <p>
                Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are under 16, please do not provide any personal information on this website. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information.
              </p>
              
              <h2>13. Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <p>
                You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
              </p>
              
              <h2>14. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us through our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
              </p>
              
              <Separator className="my-8" />
              
              <p className="text-sm text-muted-foreground">
                Last updated: April 20, 2025
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}