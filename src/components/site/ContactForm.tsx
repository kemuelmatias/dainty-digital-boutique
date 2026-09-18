import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SUPPORT_EMAIL_PLACEHOLDER } from "@/content/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
        toast.success("Message ready to send", {
          description: `Email delivery is not connected yet. Please also write to ${SUPPORT_EMAIL_PLACEHOLDER}.`,
        });
      }}
    >
      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input id="contact-name" name="name" autoComplete="name" required className="min-h-11" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-h-11"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea id="contact-message" name="message" rows={6} required />
      </div>
      <Button type="submit" className="min-h-11 w-full sm:w-auto">
        Send Message
      </Button>
      <p aria-live="polite" className="text-sm text-muted-foreground">
        {sent
          ? "Thank you. Message delivery is not connected yet — please also contact the support email below."
          : "Form submissions are not connected to an email service yet."}
      </p>
    </form>
  );
}
