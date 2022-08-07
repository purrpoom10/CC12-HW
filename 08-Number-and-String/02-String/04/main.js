function detectContent(str) {
  return (
    str.toLowerCase().includes('sex') ||
    str.toLowerCase().includes('porn') ||
    str.toLowerCase().includes('xxx')
  );
}

console.log(detectContent('p0rnxxx'));
