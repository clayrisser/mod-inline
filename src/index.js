export default new class Hello {
  append(content, regexes, appendValue) {
    if (!Array.isArray(regexes)) regexes = [regexes];
    if (regexes.length > 1) {
      const regex = regexes[0];
      const isolatedContent = this.isolate(content, regex);
      content = content.replace(
        isolatedContent,
        this.append(isolatedContent, [...regexes].pop(), appendValue)
      );
    } else {
      const regex = regexes[0];
      const matches = content.match(regex);
      if (matches && matches.length) {
        const match = matches[0];
        content = content.replace(match, `${match}${appendValue}`);
      }
    }
    return content;
  }

  isolate(content, regex) {
    const matches = content.match(regex);
    if (matches && matches.length) {
      const match = matches[0];
      return match;
    }
    return null;
  }
}();
