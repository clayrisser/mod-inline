declare module 'mod-inline' {
  function append(
    content: string,
    regexes: RegExp | RegExp[],
    appendValue: string
  ): string;

  function isolate(content: string, regex: RegExp): string;
}
