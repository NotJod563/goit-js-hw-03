function slugify(title) {
    return title.toLowerCase().split(' ').join('-');
  }
  
  // Перевірка роботи функції
  console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
  console.log(slugify("I want pizza now")); // "i-want-pizza-now"
  console.log(slugify("Unicorns are real")); // "unicorns-are-real"
  console.log(slugify("Aliens stole my homework")); // "aliens-stole-my-homework"
  