class Formatter {
  static capitalize(string) {
    return string.replace(/\b\w/g, l => l.toUpperCase())
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  
  static titleize(string) {
    string = string.toLowerCase().split(' ')
    for (var i =0; i < string.length; i++){
      if (i!== 0 && string[i] ==='a' || string[i] ==='an' || string[i] ==='but' || string[i] ==='of' || string[i] ==='and' || string[i] ==='for' || string[i] ==='at' || string[i] ==='by' || string[i] ==='from' || string[i] ==='the') {
        } else {
          string[i] = string[i].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        }
    }
    return string.join(' ')
  }
}