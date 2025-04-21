

document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    
    // Movement strength for boxes and image
    const boxMovementStrength = 30;
    const imageMovementStrength = 30;  // Use a different strength for the image

    // Calculate offsets for boxes
    const offsetX = ((clientX / window.innerWidth) * 2 - 1) * boxMovementStrength;
    const offsetY = ((clientY / window.innerHeight) * 2 - 1) * boxMovementStrength;
    
    // Calculate offsets for the image
    const imageOffsetX = ((clientX / window.innerWidth) * 2 - 1) * imageMovementStrength;
    const imageOffsetY = ((clientY / window.innerHeight) * 2 - 1) * imageMovementStrength;

    // Animate the .box elements
    const elements = document.querySelectorAll(".box");
    elements.forEach((element, index) => {
        const delayFactor = index + 1;
        const boxOffsetX = offsetX / delayFactor;
        const boxOffsetY = offsetY / delayFactor;
        
        element.style.transform = `translate3d(${boxOffsetX}px, ${boxOffsetY}px, 0)`;
    });

    // Animate the product image independently
    const productImage = document.getElementById("productImage");
    if (productImage) {
        productImage.style.transform = `translate3d(${imageOffsetX}px, ${imageOffsetY}px, 0)`;
    }
});
