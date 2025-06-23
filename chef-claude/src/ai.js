export async function getRecipeFromMistral(ingredientsArr) {
    const response = await fetch('/api/getRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredientsArr }),
    })
  
    const data = await response.json()
    return data.recipe
  }