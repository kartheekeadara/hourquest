import Image from "next/image";
import { PublicShell } from "@/components/layout/PublicShell";
import { Card } from "@/components/ui/Card";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HourQuest iOS App",
  description:
    "Learn about the HourQuest iOS app for local volunteer events and GPS check-in.",
  path: "/terraserve-app",
});

const highlights = [
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
    title: "Shared verified hours",
    description:
      "Service tracked in the HourQuest app rolls into the same milestone certificates you earn on the web.",
  },
  {
    title: "Works with HourQuest",
    description:
      "Complete web challenges here; use the HourQuest app when you want on-the-go local opportunities.",
  },
];

export default function TerraServeAppPage() {
  return (
    <PublicShell>
      <section className="section-y bg-page">
        <div className="section-container max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/hourquest-app-icon.png"
              alt="HourQuest app icon"
              width={120}
              height={120}
              className="h-[120px] w-[120px] drop-shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
              priority
            />
            <h1 className="font-display mt-8 text-3xl font-semibold tracking-tight text-primary-dark sm:text-4xl">
              HourQuest for iOS
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The HourQuest iOS app connects students with hyperlocal volunteer
              organizations, event listings, and GPS check-in — alongside the
              environmental and medical challenges with photo proof on the web.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <Card key={item.title}>
                <h2 className="text-base font-semibold text-primary-dark">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <h2 className="text-lg font-semibold text-primary-dark">
              One account, one impact record
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Whether you complete a beach cleanup on the web or check in at a food
              bank in the HourQuest app, your verified hours build toward the same
              profile and certificate milestones. The app is built for discovery and
              attendance on iOS; the site is built for structured challenges and proof
              review in the browser.
            </p>
          </Card>
        </div>
      </section>
    </PublicShell>
  );
}
