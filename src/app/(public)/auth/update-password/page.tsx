import { PublicShell } from "@/components/layout/PublicShell";
import { UpdatePasswordForm } from "@/components/auth/UpdatePasswordForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Update Password — HourQuest",
  description: "Set a new password for your HourQuest account.",
  path: "/auth/update-password",
});

export default function UpdatePasswordPage() {
  return (
    <PublicShell>
      <UpdatePasswordForm />
    </PublicShell>
  );
}
