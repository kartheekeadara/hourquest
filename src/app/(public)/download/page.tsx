import Image from "next/image";
import { PublicShell } from "@/components/layout/PublicShell";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Download the HourQuest iOS App",
  description:
    "Download the HourQuest iOS app to discover local volunteer events, check in with GPS, and track verified service hours.",
  path: "/download",
});

const features = [
  {
    title: "Local volunteer discovery",
    description:
      "Browse organizations and events near you, filtered by location and interests.",
  },
  {
    title: "GPS check-in",
    description:
      "Confirm attendance at in-person volunteer events with location verification.",
  },
  {
    title: "Verified organizations",
    description: "Trusted local orgs and hyperlocal volunteer opportunities.",
  },
  {
    title: "Shared verified hours",
    description:
      "Service tracked in the HourQuest app rolls into the same milestone certificates you earn on the web.",
  },
];

export default function DownloadPage() {
  return (
    <PublicShell>
      <PageHero
        eyebrow="Mobile app"
        title="Download HourQuest"
        subtitle="The HourQuest iOS app for local volunteer events, GPS check-in, and verified service hours."
      />
      <section className="section-y bg-page">
        <div className="section-container max-w-4xl space-y-8">
          <Card className="site-surface-primary flex flex-col gap-6 border-0 p-8 md:flex-row md:items-center">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                HourQuest for iOS
              </h2>
              <p className="text-muted-on-primary mt-3 text-sm leading-relaxed">
                The HourQuest app connects students with hyperlocal volunteer
                organizations, event listings, and GPS check-in. Hours logged
                in the app count toward the same verified certificates
                you earn on the web.
              </p>
              <div className="mt-6">
                <Button href="#" variant="outlineWhite">
                  Download on the App Store
                </Button>
              </div>
            </div>
            <Image
              src="/images/hourquest-app-icon.png"
              alt="HourQuest app icon"
              width={176}
              height={176}
              className="mx-auto h-44 w-44 shrink-0 drop-shadow-[0_10px_30px_rgba(15,23,42,0.18)]"
            />
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ title, description }) => (
              <Card key={title}>
                <h3 className="text-base font-medium">{title}</h3>
                <p className="mt-2 text-sm text-text-muted">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
