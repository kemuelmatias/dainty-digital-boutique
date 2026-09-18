import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/site/CourseCard";
import { PlaceholderNote, Section, SectionHeading } from "@/components/site/primitives";
import {
  BOOK_LESSON_LINK,
  COURSES_WHATSAPP_LINK,
  courses,
  SUPPORT_EMAIL,
} from "@/content/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Online Brazilian Portuguese Courses | Kemuel Matias de Jesus" },
      {
        name: "description",
        content:
          "Structured online Brazilian Portuguese courses for English and Spanish speakers: foundations, conversation, and Portuguese for everyday life.",
      },
      { property: "og:title", content: "Online Portuguese Courses" },
      {
        property: "og:description",
        content:
          "Structured online Portuguese courses designed to help you build practical Brazilian Portuguese skills.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/courses" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <Section tone="muted">
        <SectionHeading
          as="h1"
          eyebrow="Course catalog"
          title="Online Portuguese Courses"
          description="Structured online Portuguese courses designed to help you build practical Brazilian Portuguese skills at your own pace."
        />
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Every course shows its level, format, price in US dollars, what is included, and how access
          works. To enroll, send a message on WhatsApp and you receive the payment link and your
          course access.
        </p>
      </Section>

      <Section>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <li key={course.slug} id={course.slug} className="scroll-mt-24">
              <CourseCard course={course} detailed />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <SectionHeading
          title="What you should know before purchasing"
          description="Each course page states the product name, description, price, currency, what is included, delivery method, and access information."
        />
        <ul className="mt-8 grid max-w-3xl gap-4 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Delivery:</strong> all courses are delivered online as
            digital learning content.
          </li>
          <li>
            <strong className="text-foreground">Access:</strong> [ADD ACCESS INFORMATION] — how and
            when students receive access after purchase.
          </li>
          <li>
            <strong className="text-foreground">Customer support:</strong> {SUPPORT_EMAIL_PLACEHOLDER}
          </li>
          <li>
            <strong className="text-foreground">Refunds:</strong>{" "}
            <Link to="/refunds" className="underline underline-offset-4">
              see the Refund Policy
            </Link>
            .
          </li>
        </ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="min-h-12">
            <Link to="/private-lessons">Book a Private Lesson</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-12 bg-background">
            <Link to="/contact">Ask About a Course</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
