introduction = (name) => `Hi, my name is ${name}.`

introductionWithLanguage = (name, language) => {
   return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional = (name, language = "JavaScript") => {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
 }