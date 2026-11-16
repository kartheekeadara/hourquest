import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/marketing/SectionHeader";

export function TerraServeAppSection() {
  return (
    <section className="section-y bg-surface border-y border-border" aria-labelledby="terraserve-app-heading">
      <div className="section-container">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Image
            src="/images/hourquest-app-icon.png"
            alt="HourQuest app icon"
            width={88}
            height={88}
            className="mb-6 h-[88px] w-[88px] drop-shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
          />
          <SectionHeader
            align="center"
            title="HourQuest for iOS"
            subtitle="The HourQuest app helps you discover local volunteer events, check in with GPS, and track service in your community — alongside the challenges you complete on the web."
          />
          <p id="terraserve-app-heading" className="sr-only">
            HourQuest for iOS
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
            Hours logged in the HourQuest app count toward the same verified certificates
            you earn here. Use the site for photo-based environmental and medical
            challenges; use the HourQuest app for local events and check-ins on your phone.
          </p>
          <div className="mt-8">
            <Button href="/download" variant="primary" size="lg">
              Download HourQuest
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
