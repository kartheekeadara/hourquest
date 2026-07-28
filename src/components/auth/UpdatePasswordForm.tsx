"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconLock } from "@tabler/icons-react";
import { createClient } from "@/lib/supabase/client";
import { getPartnerHomePath } from "@/lib/partner-routing";
import { Button } from "@/components/ui/Button";
import { FieldError, Input, Label } from "@/components/ui/Input";

export function UpdatePasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setLoading(false);
      setError(updateError.message);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    let destination = "/dashboard";
    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("user_type, partner_org_id")
        .eq("id", user.id)
        .single();

      if (profile?.user_type === "partner" && profile.partner_org_id) {
        const { data: org } = await supabase
          .from("partner_organizations")
          .select("status")
          .eq("id", profile.partner_org_id)
          .single();

        if (org) {
          destination = getPartnerHomePath(org);
        } else {
          destination = "/partner";
        }
      }
    }

    setLoading(false);
    router.push(destination);
    router.refresh();
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md overflow-hidden rounded border border-border bg-surface shadow-card">
        <div className="h-1 bg-primary-mid" aria-hidden />
        <div className="p-8">
          <div className="mb-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
              <IconLock size={24} />
            </div>
          </div>
          <h1 className="text-center font-display text-xl font-semibold text-primary-dark">
            Set a new password
          </h1>
          <p className="mt-2 text-center text-sm text-text-muted">
            Choose a new password for your account.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Label>New password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>
            <FieldError message={error ?? undefined} />
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "Saving..." : "Update password"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
