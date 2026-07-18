/**
 * Blog index — add an entry here for each .md file in public/blog/
 * The `slug` must match the filename exactly (without .md extension)
 * The full post content is fetched from /blog/{slug}.md at runtime
 */
export const blogs = [
  {
    title: 'The Overthinking Trap',
    subtitle: "Why thinking more doesn't always mean doing better.",
    date: 'June 18, 2025',
    slug: 'the-overthinking-trap',
  },
  {
    title: 'Ship Fast, Iterate Faster',
    subtitle: 'How the habit of shipping early changed my entire workflow.',
    date: 'June 6, 2025',
    slug: 'ship-fast-iterate-faster',
  },
  {
    title: 'The Stack I Actually Use',
    subtitle: 'Covering the tools, languages, and frameworks in my day-to-day.',
    date: 'May 28, 2025',
    slug: 'the-stack-i-actually-use',
  },
];

export default blogs;
