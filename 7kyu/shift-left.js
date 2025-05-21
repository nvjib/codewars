function shiftLeft(s, t){
    let i = s.length - 1
    let j = t.length - 1
    let commonSuffixLength = 0

    while (i >= 0 && j >= 0 && s[i] === t[j]) {
        commonSuffixLength++
        j--
        i--
    }

    return (s.length - commonSuffixLength) + (t.length - commonSuffixLength)
  }

console.log(shiftLeft("test", "west")) 

