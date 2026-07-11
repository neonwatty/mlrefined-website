import { TrackedLink } from "@/components/analytics/tracked-link";
import {
  getLearningGuideByChapter,
  learningGuideHref,
  type BookChapter,
} from "@/content/book";

export function NotebookLearningGuideLink({
  chapter,
  className,
  location,
  resource,
}: {
  chapter?: BookChapter;
  className?: string;
  location: string;
  resource: string;
}) {
  if (!chapter) return null;

  const guide = getLearningGuideByChapter(chapter.number);
  if (!guide) return null;

  return (
    <TrackedLink
      className={
        className ??
        "rounded-md border border-[#c79222]/60 bg-[#fff7e7] p-3 transition-colors hover:border-[#c79222] hover:bg-[#ffefc9]"
      }
      eventName="learning_guide_opened"
      eventProperties={{
        chapter: chapter.number,
        guide: guide.slug,
        location,
        resource,
      }}
      href={learningGuideHref(guide)}
    >
      <strong className="block text-sm font-black text-[#164b8f]">
        From-scratch guide
      </strong>
      {!className ? (
        <span className="mt-1 block text-xs leading-5 text-[#526070]">
          {guide.shortTitle}
        </span>
      ) : null}
    </TrackedLink>
  );
}
