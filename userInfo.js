function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => ({
      id: index + 1,
      originalName: name,
      modifiedName: modifiedNames[index]
    }));
  }
  
  // Example usage:
  const originalNames = ["hello", "world", "javascript", "is", "fun"];
  const modifiedNames = ["hello", "WORLD", "javascript", "IS", "fun"];
  const userProfiles = createUserProfiles(originalNames, modifiedNames);
  
  console.log(userProfiles);