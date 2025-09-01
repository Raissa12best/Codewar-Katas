function isValidSet(quantities, shapes, colours, patterns) {
    let quantity = [...new Set(quantities)]
    let shape =[...new Set(shapes)]
    let colour = [...new Set(colours)]
    let pattern = [...new Set(patterns)]
    return (quantity.length === 1 || quantity.length === 3) &&
      (shape.length === 1 || shape.length === 3) &&
      (colour.length === 1 || colour.length === 3) &&
      (pattern.length === 1 || pattern.length === 3) ? true : false
}