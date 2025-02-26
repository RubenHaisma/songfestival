import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        
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
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this Eurovision fan website (the &quot;Site&quot;), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this Site.
              </p>
              
              <h2>2. Unofficial Status</h2>
              <p>
                This Site is an unofficial fan website created by Eurovision enthusiasts. It is not affiliated with, endorsed by, or connected to the European Broadcasting Union (EBU), the official Eurovision Song Contest, or any participating broadcasters. All official information regarding the Eurovision Song Contest should be verified through official channels.
              </p>
              
              <h2>3. Intellectual Property</h2>
              <p>
                All content on this Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is either the property of this Site&apos;s creator, licensed to this Site, or used under fair use principles for fan commentary and information.
              </p>
              <p>
                The Eurovision Song Contest name, logo, and related trademarks are owned by the European Broadcasting Union (EBU). References to these trademarks on this Site are for descriptive and informational purposes only.
              </p>
              <p>
                Artist information, song details, and related content are provided for informational purposes. All rights to songs, performances, and artist materials belong to their respective copyright holders.
              </p>
              
              <h2>4. User Conduct</h2>
              <p>
                When using this Site, you agree not to:
              </p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Distribute unsolicited promotional content</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Attempt to gain unauthorized access to the Site or its systems</li>
                <li>Engage in any activity that interferes with the proper functioning of the Site</li>
              </ul>
              
              <h2>5. User-Generated Content</h2>
              <p>
                If this Site allows for user submissions or contributions (such as comments, votes, or forum posts), you retain ownership of your content but grant this Site a non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with the Site&apos;s services.
              </p>
              <p>
                You are solely responsible for the content you submit. Content that is defamatory, obscene, unlawful, threatening, abusive, or otherwise objectionable may be removed without notice.
              </p>
              
              <h2>6. Voting Features</h2>
              <p>
                Any voting or rating features on this Site are for entertainment purposes only and are not connected to the official Eurovision voting system. Results from this Site&apos;s voting features do not impact the official Eurovision Song Contest results in any way.
              </p>
              
              <h2>7. External Links</h2>
              <p>
                This Site may contain links to external websites that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any website you visit.
              </p>
              
              <h2>8. Disclaimer of Warranties</h2>
              <p>
                This Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, expressed or implied, regarding the operation or availability of the Site. We do not guarantee that the Site will be error-free or uninterrupted.
              </p>
              <p>
                Information on this Site is provided for entertainment and informational purposes only. While we strive for accuracy, we make no warranties regarding the completeness, reliability, or accuracy of this information.
              </p>
              
              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall this Site, its operators, or contributors be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this Site.
              </p>
              
              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless this Site, its operators, and contributors from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the Site.
              </p>
              
              <h2>11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes indicates your acceptance of the modified terms.
              </p>
              
              <h2>12. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Site operator resides, without regard to its conflict of law provisions.
              </p>
              
              <h2>13. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us through our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
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